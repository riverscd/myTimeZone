import { Link } from "react-router-dom";

export function Resources() {

    return (
        <div>
            <div className="home-page-title">
            <span className="material-icons-outlined">wb_sunny </span>
            <h1>Resources</h1>
            <span className="material-icons-outlined">dark_mode</span>
            </div>
            <h2>Learn More About Sleep</h2>
            <h3>"Fix" your schedule</h3>
            <p>Chronotherapy and Sleep Training</p>
            <p>Specialists to look into</p>
            <h3>Types of Sleepers</h3>
            <p>Chronotypes</p>
            <p>Biosocial evolution</p>
            <p>Split sleep (Biphasic/Polyphasic)</p>
            <h3>Sleep Recommendations</h3>
            <p>Sleep Hygiene</p>
            <p>Hours of sleep needs by age</p>
            <h3>Sleep Issues</h3>
            <p>Circadian Rhythm Disorders</p>
            <p>Shift Work</p>
            <p>Parents/Caregivers</p>

            <Link to="/">
                <button>Return Home</button></Link>

        </div>
    )
}