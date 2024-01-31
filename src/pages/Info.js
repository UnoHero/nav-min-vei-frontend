import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import "@navikt/ds-css";
import { Heading, Stepper } from "@navikt/ds-react";

const MainContent = styled.div`
  background-color: #b3e5fc; // Lyseblå bakgrunn
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const Layout = styled.div`
  display: flex;
  align-items: flex-start;
`;

const StepperContainer = styled.div`
  margin-right: 20px; // Avstand mellom stepper og bokser
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; // Avstand mellom boksene
`;

const AnimatedBox = styled(animated.div)`
  width: 200px; // Basis bredde for bokser
  background-color: #ffffff; // Hvit bakgrunn for bokser
  border: 1px solid #ccc;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Komponent for hver boks ved siden av Stepper trinnene
const StepBox = ({ isActive }) => {
  const animationProps = useSpring({
    height: isActive ? 100 : 0, // Utvid høyden hvis aktiv
    opacity: isActive ? 1 : 0,
  });

  return <AnimatedBox style={animationProps}>{isActive && `Aktivt innhold`}</AnimatedBox>;
};

const Info = () => {
  const [activeStep, setActiveStep] = useState(null);
  const steps = 5;

  return (
    <>
      <Navbar />
      <MainContent>
        <Layout>
          <StepperContainer>
            <Stepper
              orientation="vertical"
              activeStep={activeStep}
              onStepChange={setActiveStep}
            >
              {[...Array(steps).keys()].map(step => (
                <Stepper.Step key={step}>Trinn {step + 1}</Stepper.Step>
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
