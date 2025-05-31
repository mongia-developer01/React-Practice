import { useEffect, useState } from "react";

const PersistForm = () => {
  const [name, setName] = useState(localStorage.getItem('name') || '');
  
   useEffect(() => localStorage.setItem('name', name), 
   [name]);

  return(
    <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />;
    </div>
  ); 
  
};


export default PersistForm;