import { useState } from "react";


const LiveCharCount = () => {
  const [text, setText] = useState('');
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>Length: {text.length}</p>
    </div>
  );
};

export default LiveCharCount;
