import { useState } from "react";


const TodoList = () => {
    const [task, setTask] = useState('');
    const [list, setList] = useState([]);

    const addTask = () => {
        if(task !== ''){
            setList([...list, task]);
            setTask('');
        }
    }

     const deleteTask = (index) => {
        const update = list.filter((_, i) => i !== index);
        setList(update);
    }

    return(
        <div>
            <h1>To-do list</h1><br/>
            <input type="text" placeholder="Enter the task" value={task} onChange={(e) => setTask(e.target.value)} /><br/>
            <button onClick={addTask}>Add Task</button>
            <ol>
                {list.map((item, index) => (
                    <li key={index}>{item}&nbsp;&nbsp;
                    <button onClick={() => deleteTask(index)}>Delete Task</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default TodoList;