import { useState } from "react";

const TogglePassword = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <input type={visible ? "text" : "password"} placeholder="Enter password" />
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default TogglePassword;