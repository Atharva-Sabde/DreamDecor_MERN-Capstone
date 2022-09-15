import { Button } from "@mui/material";
import React, { useContext } from "react";
import { multiStepContext } from "./StepContext";
import { useNavigate } from 'react-router-dom';
import { AddToOrderList } from "../../actions/CartItems";
import { useDispatch } from "react-redux";

function StepTwo() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const OrderCompleted=()=>{
          // dispatch(AddToOrderList())
        navigate('/orderSucess')
  }
  return (
    <>
      <Button variant="contained" onClick={() => setStep(2)}>
        Back
      </Button>
      <Button variant="contained" onClick={OrderCompleted} >Next</Button>
    </>
  );
}

export default StepTwo;
