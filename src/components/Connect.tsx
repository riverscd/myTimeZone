import { Link } from "react-router-dom";

export function Connect(){

    return(
        <div>
            <h1>Compare to other users</h1>
            <p>social component. needs more thought. ex: build profiles, chat, etc</p>
            <p>be able to compare/connect to people online in compatable timezones
                but also find overlap with people in your personal life on conflicting schedules
            </p>
            <h1>Compare to global time zones</h1>
            <p>somehow pull in timezones...api? align with closest (maybe +- 4hrs?)</p>
            <p>tips for connecting like twitch, discord server, etc</p>
            <p>potential twitch component to see people who are live now</p>
            <Link to = "/"><h2>Return Home</h2></Link>
        </div>
    )
}