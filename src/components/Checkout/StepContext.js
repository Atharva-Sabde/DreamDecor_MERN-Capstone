import React, { useState } from "react";
import StepperMain from "../StepperMain";
export const multiStepContext = React.createContext();
function StepContext() {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  function submitData() {}
  return (
    <>
      <multiStepContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
        }}
      >
        <StepperMain />
      </multiStepContext.Provider>
    </>
  );
}

export default StepContext;
