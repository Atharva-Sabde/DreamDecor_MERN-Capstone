import React, {useEffect } from "react";
import StepperMain from "../components/StepperMain";
import StepContext from '../components/Checkout/StepContext'
import { useNavigate } from 'react-router-dom';
function App({user}) {
  const {role,name,email,status,createAt}=user
  const navigate = useNavigate()
  useEffect(() => {
    if (user === "") {
      navigate("/loginsignup");
    }
  }, [status]);
  return (
    <>
      <StepContext>
        <StepperMain />
      </StepContext>
    </>
  );
}

export default App;