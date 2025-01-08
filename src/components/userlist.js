import { useEffect, useState } from "react";


function Userlist(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data =>setUsers(data));
    },[])

    return(
        <div>
            <h1>User List</h1><br/>
            {users.map(user=>(
                <ul key={user.id}>
                    <li>{user.name}</li>
                </ul>
            ))}
        </div>
    );
}

export default Userlist;