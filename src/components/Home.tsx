import { Link } from "react-router-dom"
import { Schedule } from "./Schedule"

export function Home() {

    return (
        <div>
            <div className="home-page-title">
            <span className="material-icons-outlined">wb_sunny </span>
            <h1>My Time Zone</h1>
            <span className="material-icons-outlined">dark_mode</span>
            </div>

            <h2>Atypical schedule?</h2>
            <h3>Make it make sense.</h3>
            <br />
            <Link to="/about">
                <p>About</p>
            </Link>
            <Link to="/schedule">
                <p>Get "real-feel" time zone translation</p>
            </Link>

            <Link to="/connect">
                <p>Connect with others in your time zone</p>
            </Link>



            <Link to="/resources">
                <p>Resources</p>
            </Link>

            <br />
            <p>* not a doctor legalese/disclaimers throughout site or whatever *</p>
        </div>
    )
}