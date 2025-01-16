import './Step.css'
export default function Step(){
    return(
        <section className="sleep_steps section container">
        <div className="steps__bg">
            <h2 className="section__title-center steps__title">
                Steps to start your <br /> plan off right
            </h2>

            <div className="steps__container grid">
                <div className="steps__card">
                    <div className="steps__card-number">01</div>
                    <h3 className="steps__card-title">Bed Early</h3>
                    <p className="steps__card-description">
                    Go to bed at 10 or 11 o'clock.
                    </p>
                </div>

                <div className="steps__card">
                    <div className="steps__card-number">02</div>
                    <h3 className="steps__card-title">Specific Sleep Hours</h3>
                    <p className="steps__card-description">
                    Stick to the number of hours of sleep specified for you daily to enjoy a healthy life
                    </p>
                </div>

                <div className="steps__card">
                    <div className="steps__card-number">03</div>
                    <h3 className="steps__card-title">Record sleep duration</h3>
                    <p className="steps__card-description">
                    Go to the field below to fill it with the number of actual hours of sleep
                    </p>
                </div>
            </div>
        </div>
    </section>
    )
}