import { Link } from "react-router-dom";

export function DataVis(){
    
    return(
        <div>
            <div className="home-page-title">
            <span className="material-icons-outlined">wb_sunny </span>
            <h1>Visualize Sleep</h1>
            <span className="material-icons-outlined">dark_mode</span>
            </div>

            <h2>Upload Sleep Data</h2>
            <p>options for manual or sync w/ tracker device/app data</p>
            <h2>Find Patterns and Cycles</h2>
            <p>use data visualization tools to allow users to see potential
                cycles or patterns to increase predictability and understanding.
            </p>
            <p>(work w/Luisa on learning to use Tableau to find useful visualizations)</p>


            <Link to="/">
                <button>Return Home</button></Link>

        </div>
    )
}