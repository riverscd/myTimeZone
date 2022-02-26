import { useState } from "react";
import { Link } from "react-router-dom";


export function Schedule() {

    const [currentWakeTime, setCurrentWakeTime] = useState("")
    const [simulatedWakeTime, setSimulatedWakeTime] = useState("")
    const [currentTime, setCurrentTime] = useState("")
    const [timeDifference, setTimeDifference] = useState(0)
    const [realFeelTime, setRealFeelTime] = useState(parseInt(""))

    function convertTime() {
        setTimeDifference(parseInt(simulatedWakeTime) - parseInt(currentWakeTime))
    }
    function getRealFeel() {
        setRealFeelTime(parseInt(currentTime) + timeDifference)
    }
    function adjustRealFeel() {
        if (realFeelTime >= 24) {
            setRealFeelTime(realFeelTime - 24)
        } else if (realFeelTime < 0) {
            setRealFeelTime(realFeelTime + 24)
        }
    }

    return (
        <div>
            <div className="home-page-title">
                <span className="material-icons-outlined">wb_sunny </span>
                <h1>Schedule</h1>
                <span className="material-icons-outlined">dark_mode</span>
            </div>
            <h2>Instructions</h2>
            <h3>- Today's Wake Up: Enter the time you woke up today</h3>
            <h3>- Simulated Wake Up: Enter the time you would like to feel like you woke up </h3>
            <p>sample: set to 6am to simulate a 6am wakeup
                <br /> (set default options once figure out moment.js)</p>
            <h2>Enter Times</h2>
            <div className="current-schedule-inputs">
                <label htmlFor="wake-up">Today's Wake Up</label>
                <input id="wake-up" type="time" onChange={(e) => { setCurrentWakeTime(e.target.value) }} />
                {/*<label htmlFor="bed-time">Current Bed Time</label>
                <input id="bed-time" type="time" />*/}
                <label htmlFor="simulate-wake-up" >Simulated Wake Up</label>
                <input id="simulate-wake-up" type="time" onChange={(e) => { setSimulatedWakeTime(e.target.value) }} />
                <label htmlFor="current-time">Current Time</label>
                <input id="current-time" type="time" onChange={(e) => { setCurrentTime(e.target.value) }} />
            </div>
            <button onClick={(e) => { convertTime() }}>Enter</button>
            <h3>Values for tracking while building</h3>
            <p> today's wakeup: {currentWakeTime}</p>
            <p> simulated wakeup: {simulatedWakeTime}</p>
            <p> time difference: {timeDifference}</p>
            <p>(eventually consolidate buttons)</p>
            <button onClick={(e) => { getRealFeel() }}>Translate</button>
            <h2>Translation Results</h2>
            <p> current time: {currentTime}</p>
            <p>"real-feel" time: {realFeelTime}</p>
            <p>(use fix button for now if time is negative or 24+)</p>
            <button onClick={(e) => { adjustRealFeel() }}>Fix</button>
            <br />
            <Link to="/"><button className="home-button">Home</button></Link>
            <br />
            <h2>* add ons to be figured out *</h2>
            <p>display hours asleep/hours awake breakdown</p>
            <p>potential alert for less than 6 hours w/ suggested nap times/strategies</p>
            <p>display time zones most similar to one you're in w/ drop downs to show countries</p>
            <p>select the time zone you want to register as and assign it for navigating app</p>
            <p>ability to update regularly for inconsistent schedules</p>
            <p>think about daylight savings impacts?</p>
            <p>think about function of simulated wake time, this may be better to
                capture within the return of time zone options instead of presetting on a form.
            </p>

        </div>
    )
}