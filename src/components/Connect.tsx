import { Link } from "react-router-dom";

export function Connect(){

    return(
        <div>
            <h1>Compare to other users</h1>
            <h2>social component. </h2> 
            <p>needs more thought. ex: build profiles, chat, etc</p>

            <h3> compare/connect to people online in compatable global timezones </h3>
            <p>tips for connecting like twitch, discord server, etc</p>
            <p>somehow pull in timezones...api? align with closest (maybe +- 4hrs?)</p>
            <p>potential twitch component to see people who are live now</p>

            <h3> find overlap with people in your personal life on conflicting schedules</h3>
            <p>Like maybe you're both awake early in the morning, but for one it's 
                start of day and for the other it's end of day </p>
            <p>(maybe pull in old "timeblocks" concept that breaks day into 4hr chunks to
                conceptualize stage of day (ex: 8-12 morning/start, 12-4 afternoon/mid 1, 
                4-8 evening/mid 2, 8-12 night/end, 12-4 sleep , 4-8 sleep 2) for comparing
                energy differences with others on diff. time zones)</p>
            
            
            <Link to = "/"><button>Return Home</button></Link>
        </div>
    )
}