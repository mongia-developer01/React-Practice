import { useState } from "react";

const ToggleParagraph = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Paragraph
      </button>
      {show && <p>This is a sample paragraph!</p>}
    </div>
  );
}

export default ToggleParagraph;