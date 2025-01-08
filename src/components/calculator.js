import { useState } from "react";


function Calculator(){
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [result, setResult] = useState(0);

    function firstTrack(event){
        setFirst(Number(event.target.value));
    }

    function secondTrack(event){
        setSecond(Number(event.target.value));
    }

    function Add(){
        setResult(first + second);
    }

    function Sub(){
        setResult(first - second);
    }

    function Mul(){
        setResult(first * second);
    }

    function Div(){
        setResult(first / second);
    }

    return(
        <div>
            <h1>Calculator</h1><br/>
            <input type="number" value={first} onChange={firstTrack} placeholder="Enter the First number" /><br/>
            <input type="number" value={second} onChange={secondTrack} placeholder="Enter the Second number" /><br/>

            <input type="submit" value="Add" onClick={Add}/>&nbsp;&nbsp;
            <input type="submit" value="Sub" onClick={Sub}/>&nbsp;&nbsp;
            <input type="submit" value="Mul" onClick={Mul}/>&nbsp;&nbsp;
            <input type="submit" value="Div" onClick={Div}/>&nbsp;&nbsp;<br/>
            {result}
        </div>
    );
}

export default Calculator;