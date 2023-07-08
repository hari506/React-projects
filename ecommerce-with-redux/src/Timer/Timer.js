import React, {useState, useEffect} from "react";

const Timer = () => {

    let [timer, setCounter] = useState(0);
    useEffect(() => {
        let timeInterval = setInterval(() => {
            setCounter(previousValue => previousValue + 1);
        }, 1000);

        return () => {
            console.log("the component unmounted");
            clearInterval(timeInterval);
        }
    }, [])




    return(
        <div>{timer} Seconds</div>
    );
}

export default Timer;