import { useEffect, useState } from "react";


function Timer({sec}){
    const [seconds, setSeconds] = useState(sec);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (seconds > 0 && !isPaused) {
            const interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [seconds, isPaused]);

    const togglePause = () => {
        setIsPaused(!isPaused);
    };

    const formatTime = (totalSeconds) => {
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;
        return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div>
            <div style={{ fontSize: '2em', marginBottom: '20px' }}>
                {formatTime(seconds)}
            </div>
            <button onClick={togglePause}>
                {isPaused ? 'Resume' : 'Pause'}
            </button>
        </div>
    );
};

export default Timer;