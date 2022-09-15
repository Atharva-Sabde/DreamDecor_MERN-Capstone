import React, { useContext } from "react";
import StepOne from './Checkout/StepOne'
import StepTwo from "./Checkout/StepTwo";
import FinalStep from "./Checkout/FinalStep";
import { Stepper, StepLabel, Step, Box, Card } from "@mui/material";
import { multiStepContext } from "./Checkout/StepContext";
function StepperMain() {
  const { currentStep, finalData } = useContext(multiStepContext);
  function showstep(step) {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <FinalStep />;
    }
  }
  return (
    <>
      <Box width={"40%"} margin="auto" marginBottom={4} marginTop={4}>
        <Stepper activeStep={currentStep - 1} orientation="horizontal">
          <Step>
            <StepLabel>Billing Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Card Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Review Details</StepLabel>
          </Step>
        </Stepper>
      </Box>

      {showstep(currentStep)}
    </>
  );
}

export default StepperMain;
