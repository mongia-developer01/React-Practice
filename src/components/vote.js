import { useState } from "react";


function Vote(){
    const [age, setAge] = useState(0);
    const [result, setResult] = useState('');

    function ageTrack(event){
        setAge(event.target.value);
    }

    function Vo(){
        if(age < 19){
            setResult(`Your not eligible to vote because your age is, ${age}`);
        }
        else{
            setResult(`Your eligible to vote because your age is, ${age}`);
        }
    }

    return(
        <div>
            <h1>Vote-poll</h1><br/>
            <input type="number" value={age} onChange={ageTrack} placeholder="Enter the age" /><br/>
            <input type="submit" onClick={Vo} value="vote" /><br/>
            {result}
        </div>
    );
}

export default Vote;