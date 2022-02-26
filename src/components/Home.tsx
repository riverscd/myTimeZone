import { Link } from "react-router-dom"
import { Schedule } from "./Schedule"

export function Home() {

    return (
        <div>
            <h1>My Time Zone</h1>
            <p>Being on a nonstandard sleep schedule can be disorienting.
            </p>
            <p>
                Something as seemingly simple as knowing when to eat lunch
                when your day starts at 6pm or knowing when to wind down for the night
                when the rest of the world is waking up can be challenging to figure out.
            </p>
            <p>
                It can also be difficult to connect with others who have conflicting schedules
                which can lead to isolation.
            </p>
            <h2>Tools to help translate your current schedule</h2>
            <Link to="/schedule">
                <h3>enter your current schedule to find Your Time Zone</h3>
            </Link>
            <Link to="/connect">
                <h3>connect with others on compatible Time Zones</h3>
            </Link>

            <h2>Resources</h2>
            <Link to ="/resources">
            <h3>learn more about sleep</h3>
            </Link>

            <h3>* not a doctor legalese/disclaimers throughout site or whatever *</h3>
        </div>
    )
}