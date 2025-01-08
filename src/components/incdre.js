import { useState } from "react";


function Incdre(){
    const [value, setValue] = useState(0);

    function Increment(){
        setValue(value + 1);
    }

    function Decrement(){
        if (value > 0){
            setValue(value - 1);
        }
    }

    return(
        <div>
            <h1>Increment And Decrement</h1><br/>
            <input type="submit" value="Increment" onClick={Increment} />&nbsp;&nbsp;
            <input type="submit" value="Decrement" onClick={Decrement} />&nbsp;&nbsp;
            {value}
        </div>
    );
}

export default Incdre;