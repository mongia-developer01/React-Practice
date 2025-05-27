import { useState } from "react";

const Dropdown = () => {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <select onChange={(e) => setSelected(e.target.value)} value={selected}>
        <option value="">Select an option</option>
        <option value="React">React</option>
        <option value="Vue">Vue</option>
        <option value="Angular">Angular</option>
      </select>
      <p>Selected: {selected}</p>
    </div>
  );
}


export default Dropdown;