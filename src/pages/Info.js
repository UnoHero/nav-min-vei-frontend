// Info The site were we get information, the user can answer questions and more

// Imports
import React, { useRef, useState } from 'react';
// Styled wil let you make styles(css) in a react component.
import styled from 'styled-components';
// CSS
import '../font-style.css';
import "@navikt/ds-css";

// "Navbar" the navigation part on top of the site, with a logo, some buttons, hamburger menu, sertch and loginn
import Navbar from '../components/navbar';
// "Section" is the top part of the site with the big logo MinVeileder
import Section from '../components/section';
// "Footer" is the dark box at the bottom with some information
import Footer from '../components/footer';
import { InformationIcon, CheckmarkIcon } from '@navikt/aksel-icons';
// Steps
import StepZero from "../components/StepZero";
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from "../components/StepThree";
import StepFinal from "../components/StepFinal";
 

// Styles through js
import { Body, MainContent, Circle, TextBox, Line, List, Item } from "../components/styledComponents"

// Component for each box next to Stepper steps

const Info = () => {

  // useStates ->
  
  // "activeStep" remembers witch question you are on and were you are going
  const [activeStep, setActiveStep] = useState(0);

  // "id" becomes the social security number that is writen in the text filed
  const [id, setId] = useState(null);


  // useRef ->
  // Were to move the user to the next part/question
  const stepZeroRef = useRef(null);
  const stepOneRef = useRef(null);
  const stepTwoRef = useRef(null);
  const stepThreeRef = useRef(null);
  const stepFourRef = useRef(null);

  // Moves the user to the next part/question
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

  // Fetching the user data depending on the social security value "id"  
  const getPersonData = async () => {
    const response = await fetch(`http://localhost:3000/user/${id}`)
    const data = await response.json()
    console.log(data)
  }
  
  // The "HTML" part
  return (
    <>
    <Body>
      {/* Navigation bar */}
      <Navbar />

      {/* The Logo part */}
      <Section />

      <MainContent>

      <List>
        {/* The first part of the part/questions. "MineData" */}
        <Item>
          {/* Changes the color of the circle 1 on the side wen it is beeing worked on or done with */}
          <div><Circle><InformationIcon title="a11y-title" fontSize="1.5rem" /></Circle><Line></Line></div>
          <StepZero
            stepZeroRef={stepZeroRef}
            stepOneRef={stepOneRef}
            setActiveStep={setActiveStep} 
            activeStep={activeStep} 
            nextStepButton={nextStepButton}
          ></StepZero>
        </Item>

        {/* The secon part of the site the part/question. "Om meg" */}
        <Item>
          {/* Changes the color of the circle 1 on the side wen it is beeing worked on or done with */}
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

        {/* The thrid part of the part/questions. "MineData" */}
        <Item>
          {/* Changes the color of the circle 2 on the side wen it is beeing worked on or done with */}
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
        {/* The fourth part of the part/questions. "MineData" */}
        <Item>
          {/* Changes the color of the circle 3 on the side wen it is beeing worked on or done with */}
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
        
        {/* The fifth part of the part/questions. "MineData" */}
        <Item>
          {/* Changes the color of the circle 4 on the side wen it is beeing worked on or done with */}
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