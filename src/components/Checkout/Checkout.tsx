import React from "react";
import AddressForm from "./AddressForm";
import Review from "./ReviewOrder";
import {
  CssBaseline,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@mui/material";
import Cart from "./Cart";

const steps = ["Количка", "Адрес за доставка", "Преглед на поръчаката"];

function getStepContent(step: any) {
  switch (step) {
    case 0:
      return <Cart />;
    case 1:
      return <AddressForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Невалидна стъпка");
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div id='checkout'>
      <CssBaseline />
      <main className='layout'>
        <Paper className='paper'>
          <Typography component='h1' variant='h4' align='center'>
            Количка
          </Typography>
          <Stepper activeStep={activeStep} className='stepper'>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant='h5' gutterBottom>
                  Благодарим за поръчката!
                </Typography>
                <Typography variant='subtitle1'>
                  Номера на поръчката е #2001539.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className='buttons'>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className='button'>
                      Назад
                    </Button>
                  )}
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleNext}
                    className='button'
                  >
                    {activeStep === steps.length - 1
                      ? "Финализирай поръчката"
                      : "Продължи"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </div>
  );
}
