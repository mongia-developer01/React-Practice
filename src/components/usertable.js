import { useEffect, useState } from "react";


function Usertable(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{ 
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setUsers(data));
    })

    return(
        <div>
            <h1>User Table</h1><br/>
            <table border="2px" cellPadding={10} cellSpacing={10}>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>Suite</th>
                    <th>Zip-code</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Company-Name</th>
                    <th>Company-Catchphrase</th>
                    <th>Company-bs</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
                {users.map(user => (                 
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.address.street}</td>
                        <td>{user.address.suite}</td>
                        <td>{user.address.city}</td>
                        <td>{user.address.zipcode}</td>
                        <td>{user.address.geo.lat}</td>
                        <td>{user.address.geo.lng}</td>
                        <td>{user.company.name}</td>
                        <td>{user.company.catchPhrase}</td>
                        <td>{user.company.bs}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default Usertable;