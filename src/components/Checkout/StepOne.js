import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  FormGroup,
  Button,
  Checkbox,
  Box,
} from "@mui/material";
import React, { useContext } from "react";
import { multiStepContext } from "./StepContext";

function StepOne() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  return (
    <>
      <Box sx={{ width: "50%" }} margin="auto">
        <Card>
          <CardContent>
            <Box marginBottom={1}>
              <Button variant="contained" gutterBottom>
                Clear X
              </Button>
            </Box>
            <FormControl autoComplete="off">
              <Typography variant="h6" gutterBottom>
                Shipping Address
              </Typography>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 2, sm: 2, md: 2, lg: 2 }}
              >
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    placeholder="Enter first name"
                    variant="outlined"
                    fullWidth
                    size="small"
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    placeholder="Enter last name"
                    variant="outlined"
                    fullWidth
                    size="small"
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Address line 1"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Address line 2"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Postal/Zip Code"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="City"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Province/State"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Country"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
              </Grid>
            </FormControl>
            <FormControl fullWidth>
              <Typography variant="h6" marginTop={2}>
                Shipping Method
              </Typography>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="free"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="free"
                  control={<Radio />}
                  label="Free (expect to recive in 5-7 days)"
                />
                <FormControlLabel
                  value="express"
                  control={<Radio />}
                  label="Express (expect to receive in 3-5 days)"
                />
                <FormControlLabel
                  value="nextDay"
                  control={<Radio />}
                  label="Next Day"
                />
              </RadioGroup>
            </FormControl>
            <FormControl autoComplete="off" fullWidth>
              <Typography variant="h6" marginTop={2} marginBottom={0}>
                Customer Info
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Guest Checkout"
                />
              </FormGroup>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 2, sm: 2, md: 2, lg: 2 }}
                marginTop={0}
              >
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    size="small"
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    size="small"
                  ></TextField>
                </Grid>
              </Grid>
            </FormControl>
            <Grid
              container
              marginTop={2}
              display="flex"
              justifyContent={"space-between"}
            >
              <Grid item>
                <Button variant="contained" disabled>
                  Back
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={() => setStep(2)}>
                  Continue
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default StepOne;
