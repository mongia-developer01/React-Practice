import { useState } from "react";


function MFR(){
    const numbers = [1, 2, 3, 4, 5, 6]
    const [result, setResult] = useState([]);

    function Mapped(){
        const Map_value = numbers.map(numbers => numbers * 2);
        setResult(Map_value);
    }

    function Filtered(){
        const Filter_value = numbers.filter(numbers => numbers % 2 === 0);
        setResult(Filter_value);
    }

    function Reduced(){
        const Reduced_value = numbers.reduce((numbers , sum)=> numbers + sum , 0);
        setResult([Reduced_value]);
    }

    return(
        <div>
            <h1>Map, Filter and Reduce</h1><br/>
                <input type="submit" value="Map" onClick={Mapped} />&nbsp;&nbsp;
                <input type="submit" value="Filter" onClick={Filtered} />&nbsp;&nbsp;
                <input type="submit" value="Reduce" onClick={Reduced} />&nbsp;&nbsp;<br/>
                {result.join(' , ')}
        </div>
    );
}

export default MFR;