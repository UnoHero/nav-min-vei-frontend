import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring } from 'react-spring';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import "@navikt/ds-css";
import { Stepper } from "@navikt/ds-react";
import Section from '../components/section';
import Main from '../components/Info_main'; // Ensure this is imported only once
 
const MainContent = styled.div`
  background-color: rgb(211, 230, 237); // Light blue background
  padding: 20px;
  display: flex;
  justify-content: center;
`;
 
const Layout = styled.div`
  display: flex;
  align-items: flex-start;
`;
 
const StepperContainer = styled.div`
  margin-right: 20px; // Space between stepper and boxes
`;
 
const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; // Space between boxes
`;
 
// Component for each box next to Stepper steps
const StepBox = ({ isActive }) => {
  const animationProps = useSpring({
    height: isActive ? 'auto' : 0, // Expand height if active
    opacity: isActive ? 1 : 0,
    from: { height: 0, opacity: 0 },
  });
 
  // Conditionally render the Main component if isActive is true
  return isActive ? <Main style={animationProps} /> : null;
};
 
const Info = () => {
  const [activeStep, setActiveStep] = useState(null);
  const steps = 5;
 
  return (
    <>
      <Navbar />
      <Section />
      <MainContent>
        <Layout>
          <StepperContainer>
            <Stepper
              orientation="vertical"
              activeStep={activeStep}
              onStepChange={setActiveStep}
            >
              {[...Array(steps).keys()].map(step => (
                <Stepper.Step key={step}>Step {step + 1}</Stepper.Step>
              ))}
            </Stepper>
          </StepperContainer>
 
          <BoxContainer>
            {[...Array(steps).keys()].map(step => (
              <StepBox key={step} isActive={step === activeStep} />
            ))}
          </BoxContainer>
        </Layout>
      </MainContent>
      <Footer />
    </>
  );
};
 
export default Info;
 