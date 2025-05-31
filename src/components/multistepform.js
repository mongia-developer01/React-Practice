import { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  return (
    <div>
      {step === 1 && <input placeholder="Step 1" />}
      {step === 2 && <input placeholder="Step 2" />}
      {step === 3 && <input placeholder="Step 3" />}
      <button onClick={() => setStep(s => s - 1)} disabled={step === 1}>Back</button>
      <button onClick={() => setStep(s => s + 1)} disabled={step === 3}>Next</button>
    </div>
  );
};

export default MultiStepForm;
