import { useState } from "react";

const DisableButton = () => {
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setDisabled(true);
  };

  return (
    <button onClick={handleClick} disabled={disabled}>
      {disabled ? "Clicked" : "Click Me"}
    </button>
  );
}

export default DisableButton;
