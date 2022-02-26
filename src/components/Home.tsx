import { Link } from "react-router-dom"
import { Schedule } from "./Schedule"

export function Home() {

    return (
        <div>
            <h1>My Time Zone</h1>

            <h2>Atypical schedule?</h2>
            <h3>Make it make sense.</h3>
            <Link to="/schedule">
            <p>Get "real-feel" time zone translation</p>
            </Link>
               
            <Link to="/connect">
                <p>Connect with others in your time zone</p>
            </Link>

        
            <Link to ="/resources">
            <p>Resources</p>
            </Link>

           
            <Link to ="/about">
              <p>About</p>
            </Link>

            <h4>* not a doctor legalese/disclaimers throughout site or whatever *</h4>
        </div>
    )
}