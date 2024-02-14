import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../font-style.css';
import "@navikt/ds-css";
import Section from '../components/section';
import { InformationIcon, CheckmarkIcon } from '@navikt/aksel-icons';
import StepZero from "../components/StepZero";
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from "../components/StepThree";
import StepFinal from "../components/StepFinal";
 
const Body = styled.div`
  background-color: rgb(211, 230, 237);
`;
const MainContent = styled.div`
  background-color: rgb(211, 230, 237); // Light blue background
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const Circle = styled.div`
  position: relative;
  border: 2px solid ${props => props.color ? "#0067C5" : "white"};
  background-color: ${props => props.color ? "#0067C5" : "white"};
  border-radius: 50%;
  color: ${props => props.color ? "white" : "black"};
  z-index: 1;
  margin: 0px 3px 0px 3px;
  text-align: center;
  display: block;
  height: 30px;
  width: 30px;
  transition: all 0.3s ease; // Legg til overgang for jevn animasjon
  cursor: pointer;
  &:hover {
    transform: scale(1.1); // Forstørr effekten ved hover for å indikere klikkbarhet
  }
`;

const TextBox = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 1rem 6rem 0.4rem 6rem;
  cursor: ${props => props.cursor};
  transition: all 0.3s ease; // Legg til overgang for jevn animasjon
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // Legg til skyggeeffekt ved hover for å indikere klikkbarhet
  }
`

const Line = styled.div`
  width: 0.4rem;
  height: 100%;
  background-color: #CCE1FF;
  position: relative;
  left: 15px;
  z-index: 0;
`
  
const List = styled.ul`
  list-style: none;
`;
  
const Item = styled.li`
  display: grid;
  grid-template-columns: 5rem 50rem;
  margin: 20px 0px 20px 0px;
  &:hover {
    ${TextBox} {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // Legg til skyggeeffekt ved hover for å indikere klikkbarhet
    }
  }
`;

// Component for each box next to Stepper steps

const Info = () => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStepButton = (e, step, ref) => {
    e.stopPropagation()
    setActiveStep(step)
    setTimeout(() => {
      window.scrollTo({
        top:ref.current.offsetTop - 20,
        behavior: "smooth"
      })
    }, 0);
  } 

  const stepOneRef = useRef(null);
  const stepTwoRef = useRef(null);
  const stepThreeRef = useRef(null);
  const stepFourRef = useRef(null)
  const [id, setId] = useState(null);

  return (
    <>
    <Body>
      <Navbar />
      <Section />
      <MainContent>

      <List>
        <Item>
          <div><Circle><InformationIcon title="a11y-title" fontSize="1.5rem" /></Circle><Line></Line></div>
          <StepZero
            stepOneRef={stepOneRef}
            setActiveStep={setActiveStep} 
            activeStep={activeStep} 
            setId={setId}
            id={id}
            nextStepButton={nextStepButton}
            stepTwoRef={stepTwoRef}
          
          ></StepZero>
          
        </Item>

        <Item>
        <div><Circle color={activeStep >= 1 ? true : false}>1</Circle><Line></Line></div>
          <StepOne 
            stepOneRef={stepOneRef}
            stepTwoRef={stepTwoRef}
            setActiveStep={setActiveStep} 
            activeStep={activeStep} 
            setId={setId}
            id={id}
            nextStepButton={nextStepButton}
          ></StepOne>
        </Item>

        <Item>
          <div><Circle color={activeStep >= 2 ? true : false}>2</Circle><Line></Line></div>
          <StepTwo
            stepTwoRef={stepTwoRef}
            stepThreeRef={stepThreeRef}
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            setId={setId}
            id={id}
            nextStepButton={nextStepButton}
          ></StepTwo>
        </Item>

        <Item>
          <div><Circle color={activeStep >= 3 ? true : false}>3</Circle><Line></Line></div>
          <StepThree
            stepTwoRef={stepTwoRef}
            stepThreeRef={stepThreeRef}
            stepFourRef={stepFourRef}
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            nextStepButton={nextStepButton}
          ></StepThree>
        </Item>
        
        <Item>
          <Circle><CheckmarkIcon title="a11y-title" fontSize="1.5rem" /></Circle>
          <StepFinal
            stepFourRef={stepFourRef}
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            nextStepButton={nextStepButton}
          ></StepFinal>
        </Item>
      </List>

      </MainContent>
      <Footer />
    </Body>
    </>
  );
};
 
export default Info;
