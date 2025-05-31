import { useState } from "react";

const Tabs = ({ tabs }) => {
  const [active, setActive] = useState(0);

  return (
    <div>
      {tabs.map((t, i) => (
        <button key={i} onClick={() => setActive(i)}>{t.label}</button>
      ))}
      <div>{tabs[active].content}</div>
    </div>
  );
};

export default Tabs;
