import { useEffect, useState } from "react";


const AutoCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return(
        <div>
            <h1>Stop Watch</h1><br/>
            {count}
        </div>
    );
}

export default AutoCounter;