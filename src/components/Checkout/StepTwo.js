import { Button, Grid, Box, Card, CardContent, TextField } from "@mui/material";
import React, { useContext } from "react";
import { multiStepContext } from "./StepContext";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./StepTwo.css";

function StepTwo() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const data = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  const [cardDetails, setCardDetails] = React.useState(data);

  const handleInputFocus = (e) => {
    setCardDetails({ ...cardDetails, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };
  return (
    <>
      <Box sx={{ width: "50%" }} margin="auto">
        <Card>
          <CardContent>
            <Box marginTop={2}>
              <Cards
                cvc={cardDetails.cvc}
                expiry={cardDetails.expiry}
                focused={cardDetails.focus}
                name={cardDetails.name}
                number={cardDetails.number}
              />
            </Box>

            <form>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 2, sm: 2, md: 2, lg: 2 }}
              >
                <Grid item xs={12} marginTop={4}>
                  <TextField
                    label="Card Number"
                    placeholder="XXXX XXXX XXXX XXXX"
                    inputProps={{ maxLength: 16 }}
                    variant="outlined"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    value={cardDetails.number}
                    type="tel"
                    name="number"
                    fullWidth
                    size="small"
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Card Holder Name"
                    placeholder="John Doe"
                    inputProps={{ maxLength: 18 }}
                    variant="outlined"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    value={cardDetails.name}
                    type="text"
                    name="name"
                    fullWidth
                    size="small"
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Valid Upto"
                    placeholder="MM/YY"
                    inputProps={{ maxLength: 4 }}
                    variant="outlined"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    value={cardDetails.expiry}
                    type="text"
                    name="expiry"
                    fullWidth
                    size="small"
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="CVC Number"
                    placeholder="XXX"
                    inputProps={{ maxLength: 3 }}
                    variant="outlined"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    value={cardDetails.cvc}
                    type="tel"
                    name="cvc"
                    fullWidth
                    size="small"
                  ></TextField>
                </Grid>
              </Grid>

              <Grid
                container
                marginTop={2}
                display="flex"
                justifyContent={"space-between"}
              >
                <Grid item>
                  <Button variant="contained" onClick={() => setStep(1)}>
                    Back
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={() => setStep(3)}>
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default StepTwo;
