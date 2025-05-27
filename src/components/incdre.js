import { useState } from "react";


const Incdre = () => {
    const [task, setTask] = useState(0);

    return(
        <div>
            <h1>Increment and Decrement</h1><br/>
            <button onClick={() => setTask(task + 1)}>Increment</button>&nbsp;&nbsp;
            <button onClick={() => setTask(task > 0 ? task - 1 : 0)}>Decrement</button><br/>
            {task}
        </div>
    );
}

export default Incdre;