import { useState } from "react";
import { Link } from "react-router-dom";


export function Schedule() {

    const [currentWakeTime, setCurrentWakeTime] = useState("")
    const [simulatedWakeTime, setSimulatedWakeTime] = useState("")
    const [currentTime, setCurrentTime] = useState("")
    const [timeDifference, setTimeDifference] = useState(parseInt(""))
    const [realFeelTime, setRealFeelTime] = useState(parseInt(""))

    function convertTime(){
        
        setTimeDifference(parseInt(simulatedWakeTime) - parseInt(currentWakeTime))
    }
    function getRealFeel(){
    setRealFeelTime(parseInt(currentTime)+timeDifference)
    }

    function adjustRealFeel(){
        if (realFeelTime >= 24 ){
            setRealFeelTime(realFeelTime-24)
        } else if (realFeelTime < 0){
            setRealFeelTime(realFeelTime + 24)
        }
    }


    return (
        <div>
            <h1>Your Current Schedule</h1>
            <h3>Instructions</h3>
            <p>Current: Enter the time you woke up today, or plan to wake up tomorrow</p>
            <p>Simulated: Enter the time you would like to simulate as start of day.
                (ex: do you want to seem like you started your day at 6am or 8am?)
                This will help when matching you to similar time zones
                and allow you to match with people at the same stage of day.
            </p>
           
            <div className="current-schedule-inputs">
                <label htmlFor="wake-up">Current Wake Up Time</label>
                <input id="wake-up" type="time" onChange={(e)=> {setCurrentWakeTime(e.target.value)}}/>
                {/*<label htmlFor="bed-time">Current Bed Time</label>
                <input id="bed-time" type="time" />
                */}
                <label htmlFor="simulate-wake-up" >Simulated Wake Up Time</label>
                <input id="simulate-wake-up" type="time" onChange={(e)=> {setSimulatedWakeTime(e.target.value)}} />

                <label htmlFor="current-time">Current Time</label>
                <input id="current-time" type="time" onChange={(e)=> {setCurrentTime(e.target.value)}}/>
            </div>

            <button onClick={(e)=>{convertTime()}}>Translate</button>
            
            

            <h3>Translation</h3>
           <p> wakeup: {currentWakeTime}</p>
           <p> simulated wakeup: {simulatedWakeTime}</p>
           <p> time difference: {timeDifference}</p>
           <p> current time: {currentTime}</p>
           <button onClick={(e)=>{getRealFeel()}}>"Real-Feel" Time</button>
           <p>"real-feel" time: {realFeelTime}</p>
           <button onClick={(e)=>{adjustRealFeel()}}>Fix "Real-Feel" above 24 hours</button>
           
            <br />

            <Link to="/"><h2>Return Home</h2></Link>

            <h3>add ons to be figured out</h3>
            <p>display hours asleep/hours awake breakdown</p>
            <p>potential alert for less than 6 hours w/ suggested nap times/strategies</p>
            <p>display time zones most similar to one you're in w/ drop downs to show countries</p>
            <p>select the time zone you want to register as and assign it for navigating app</p>
            <p>ability to update regularly for inconsistent schedules</p>
            <p>think about daylight savings impacts?</p>
            <p>think about necessesity of simulated wake time, this may be better to 
                capture within the return of time zone options instead of presetting on a form.
            </p>

        </div>
    )
}