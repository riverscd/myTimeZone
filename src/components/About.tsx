import { Link } from "react-router-dom";

export function About() {

    return (
        <div>
           <div className="home-page-title">
            <span className="material-icons-outlined">wb_sunny </span>
            <h1>About</h1>
            <span className="material-icons-outlined">dark_mode</span>
            </div>
            <h2>Being on a non-standard sleep schedule can be disorienting...
            </h2>
            <p>
                Something as seemingly simple as knowing when to eat lunch
                when your day starts at 6pm or knowing when to wind down for the night
                when the rest of the world is waking up can be challenging to figure out.
            </p>
            <h2>
                ...and lonely.
            </h2>
            <p>It's difficult to connect with people when your schedule is unpredictable
                or out of sync which can be really isolating. </p>
            <h2>With this tool you can -</h2>
            <p>make better sense of your day and find community
                amongst others who feel out of sync with the world around them.
            </p>
            <h3>Hope it helps!</h3>
            <p>If something isn't working for you, or you have an idea for
                a feature that would help your unique situation - please reach out!
            </p>
            <p>(future contact link or whatever)</p>

            <h3>Who might benefit from this tool?</h3>
            
            <p> Shift-workers, People with Sleep Disorders, Parents, Caregivers, Pilots, 
                Flight Attendents, Frequent Travellers, College Students, Night Students,
                People with Fluctuating Schedules, Doctors, Nurses, Service Industry Workers,
                Streamers, Musicians, Gamers, Radio Hosts, Night Owls, Early Birds, and more.
            </p>
            

            <Link to="/">
                <button> Return Home</button>

            </Link>
        </div>
    )
}