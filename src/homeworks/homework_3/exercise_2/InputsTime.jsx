import { useState } from "react";
import Timer from "../exercise_1/Timer";

function InputsTime() {
    const [secs, setSecs] = useState(0);
    const [mins, setMins] = useState(0);
    const [hrs, setHrs ] = useState(0);
    
    const [start, setStart] = useState(false);
    const [totalSeconds, setTotalSeconds] = useState(0);
    

    const handleStart = () => {
        const total = parseInt(secs) + (parseInt(mins) * 60) + (parseInt(hrs) * 3600);
        setTotalSeconds(total);
        setStart(true);
    } 

    if(start) {
        return <Timer sec={totalSeconds}/>
    }

    return(
    <>
        
        <label>
            Hours:
            <input type="number" value={hrs} onChange={e => setHrs(e.target.value)} />
        </label>
        <label>
            Minutes:
            <input type="number" value={mins} onChange={e => setMins(e.target.value)} />
        </label>   
        <label>
            Seconds:
            <input type="number" value={secs} onChange={e => setSecs(e.target.value)} />
        </label>
        <button onClick={handleStart}>Start</button>
    </>
    )
}

export default InputsTime;
