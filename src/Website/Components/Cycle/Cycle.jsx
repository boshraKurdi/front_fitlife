import { useEffect, useRef, useState } from "react";
import './Cycle.css'
export default function Cycle({num}) {
    const dash = 42 * Math.PI * 2;
    const targetOffset = dash - (dash * num) / 100;
    const [offset, setOffset] = useState(dash); 
    const cycleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setOffset(targetOffset); 
                }else{
                    setOffset(dash)
                }
            },
            { threshold: 0.5 }
        );

        if (cycleRef.current) {
            observer.observe(cycleRef.current);
        }

        return () => {
            if (cycleRef.current) {
                observer.unobserve(cycleRef.current);
            }
        };
    }, [targetOffset]);

    return (
        <div className="cycle" ref={cycleRef}>
            <svg width="250" height="250">
                <circle
                    cx="125"
                    cy="125"
                    r="42"
                    strokeWidth="17px"
                    className="cycle-bg"
                ></circle>
                <circle
                    cx="125"
                    cy="125"
                    r="42"
                    strokeWidth="11px"
                    style={{
                        
                        strokeDasharray: dash,
                        strokeDashoffset: offset,
                        transition: "stroke-dashoffset 1s ease-out" // إضافة التحريك السلس
                    }}
                    className="cycle-prog"
                ></circle>
                <text x="50%" y="50%" textAnchor="middle" dy=".3em">{num}%</text>
            </svg>
            <div className="inner">
                <h1>{num}%</h1>
            </div>
        </div>
    );
}
