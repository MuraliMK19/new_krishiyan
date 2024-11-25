import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import StepDetails from "./StepDetails";
import BasalStep from "../Components/layouts/Calendar(CropAdvisory)/BasalStep";

export default function HorizontalLinearStepper({ cropDetails, date }: any) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeDetails, setActiveDetails] = React.useState<any>(
    cropDetails[activeStep]
  );

  const handleIndex = (index: number) => {
    setActiveStep(index);
    setActiveDetails(cropDetails[index]);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setActiveDetails(cropDetails[activeStep]);
  };

  const handleNext = () => {
    if (activeStep === cropDetails.length - 1) {
      setActiveStep(0);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    setActiveDetails(cropDetails[activeStep]);
  };

  return (
    <Box className=" p-4 w-[100%] mobile:no-scroll-left">
      <div className="hidden md:block">
        {" "}
        {/* Render only on larger screens */}
        <Stepper activeStep={activeStep} orientation="horizontal">
          {cropDetails.map((step: any, index: any) => {
            const label = step.name;
            return (
              <Step key={index} onClick={() => handleIndex(index)}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
      <div className="md:hidden">
        {" "}
        {/* Render only on mobile screens */}
        <Stepper activeStep={activeStep} orientation="vertical">
          {cropDetails.map((step: any, index: any) => {
            const label = step.name;
            return (
              <Step key={index} onClick={() => handleIndex(index)}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
      <Box className="mt-4">
        <Typography>
          <BasalStep cropDetails={activeDetails} />
        </Typography>
        <div className="flex  mt-4">
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            className="w-[5%]"
          >
            Back
          </Button>
          <Button onClick={handleNext} className="width-[95%]">
            {activeStep === cropDetails.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </Box>
    </Box>
  );
}
