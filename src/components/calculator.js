import { useState } from "react";


const Calculator = () => {
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [result, setResult] = useState(0);

    return(
        <div>
            <h1>Calculator</h1><br/>
            <input type="number" value={first} onChange={(e) => setFirst(Number(e.target.value))} /><br/>
            <input type="number" value={second} onChange={(e) => setSecond(Number(e.target.value))} /><br/>
            <button onClick={() => setResult(first + second)}>+</button>&nbsp;&nbsp;
            <button onClick={() => setResult(first - second)}>-</button>&nbsp;&nbsp;
            <button onClick={() => setResult(first * second)}>*</button>&nbsp;&nbsp;
            <button onClick={() => setResult(first / second)}>/</button><br/>
            {result}
        </div>
    );
}

export default Calculator;