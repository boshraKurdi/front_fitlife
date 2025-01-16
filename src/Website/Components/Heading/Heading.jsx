import './Heading.css'
export default function Heading({title , subTitle}) {
  return (
    <>
      <p className="section-subtitle">{title}</p>

      <h2 className="h2 section-title text-center">{subTitle}</h2>
    </>
  );
}
