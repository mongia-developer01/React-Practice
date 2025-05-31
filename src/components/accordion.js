import { useState } from "react";

const Accordion = ({ data }) => {
  const [open, setOpen] = useState(null);

  return (
    <div>
      {data.map((item, i) => (
        <div key={i}>
          <h3 onClick={() => setOpen(open === i ? null : i)}>{item.title}</h3>
          {open === i && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
