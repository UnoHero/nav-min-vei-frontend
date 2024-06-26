// Info The site were we get information, the user can answer questions and more

// Imports
import React, { useEffect, useRef, useState } from 'react';
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

import { useLifeEvent } from "../contexts/LifeEventContext";

// Component for each box next to Stepper steps
const InfoBox = styled.div`
  width: 230px;
  height: 300px;
  position: absolute;
  top: 200px;
  left: 6%;
  background-color: white;
  border-radius: 4px;
`;

const InfoBoxTitle = styled.h2`
  margin: 40px auto 10px auto;
  width: 150px;
`;

const InfoBoxDivider = styled.div`
  margin: auto;
  width: 150px;
  height: 2px;
  background-color: black;
  border-radius: 4px;
`

const InfoBoxText = styled.h3`
  box-sizing: border-box;
  border: 3px;
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;
  font-size: 1.3rem;
  color: #0067C5;

  &:hover {
    cursor: pointer;
    background-color: #F4F4F4;
    box-sizing: border-box;
    border-left: #0067C5 3px solid ;
  }
`

// The Page
const Info = () => {

  // useStates ->
  
  // "activeStep" remembers witch question you are on and were you are going
  const [activeStep, setActiveStep] = useState(0);

  const [stepTwoBoxStates, setStepTwoBoxStates] = useState(null)

  // useRef ->
  // Were to move the user to the next part/question
  const stepZeroRef = useRef(null);
  const stepOneRef = useRef(null);
  const stepTwoRef = useRef(null);
  const stepThreeRef = useRef(null);
  const stepFourRef = useRef(null);

  const verySureRef = useRef(null);
  const kindaSureRef = useRef(null)
  const extremlySureRef = useRef(null)
  const infoRef = useRef(null)

  const { updateUser, user } = useLifeEvent();
  
  // Moves the user to the next part/question
  const nextStepButton = (e, step, ref) => {
    e.stopPropagation()
    setActiveStep(step)
    setTimeout(() => {
      window.scrollTo({
        top:ref?.current?.offsetTop - 20,
        behavior: "smooth"
      })
    }, 0);
  }
  
  const [id, setId] = useState(null);
  const [data, setData] = useState();

  const  handleChange = (number) => {
    setId(number)
  }
  
  const getPersonData = async () => {
    const response = await fetch(`http://localhost:3000/user/${id}`)
    
    updateUser(await response.json())
  }

  useEffect(() => {
    console.log(user)
  }, [user])

  const getLife = async (boxes) => {
    setStepTwoBoxStates(boxes)
  }

  const getLifeAnswers = async () => {
    return stepTwoBoxStates
  }

  // The "HTML" part
  return (
    <>
    <Body>
      {/* Navigation bar */}
      <Navbar />

      {/* The Logo part */}

      {/* The Logo part */}
      <Section />


      <MainContent>

      <List>
        {/* The first part of the part/questions. "MineData" */}
        <Item>
          {/* Changes the color of the circle 1 on the side wen it is beeing worked on or done with */}
          <div><Circle onClick={(e) => nextStepButton(e, 0, stepZeroRef)}><InformationIcon title="a11y-title" fontSize="1.5rem" /></Circle><Line></Line></div>
          <StepZero
            stepZeroRef={stepZeroRef}
            stepOneRef={stepOneRef}
            setActiveStep={setActiveStep} 
            activeStep={activeStep} 
            nextStepButton={nextStepButton}
            getPersonData={getPersonData}
            handleChange={handleChange}
          ></StepZero>
        </Item>

        {/* The secon part of the site the part/question. "Om meg" */}
        <Item>
          {/* Changes the color of the circle 1 on the side wen it is beeing worked on or done with */}
        <div><Circle onClick={(e) => nextStepButton(e, 1, stepZeroRef)} color={activeStep >= 1 ? true : false}>1</Circle><Line></Line></div>
          <StepOne 
            stepZeroRef={stepZeroRef}
            stepOneRef={stepOneRef}
            stepTwoRef={stepTwoRef}
            setActiveStep={setActiveStep} 
            activeStep={activeStep} 
            nextStepButton={nextStepButton}
            data={data}
          ></StepOne>
        </Item>

        {/* The thrid part of the part/questions. "Velg livssituasjon" */}
        <Item>
          {/* Changes the color of the circle 2 on the side wen it is beeing worked on or done with */}
          <div><Circle onClick={(e) => nextStepButton(e, 2, stepOneRef)} color={activeStep >= 2 ? true : false}>2</Circle><Line></Line></div>
          <StepTwo
            getLife={getLife}
            stepOneRef={stepOneRef}
            stepTwoRef={stepTwoRef}
            stepThreeRef={stepThreeRef}
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            nextStepButton={nextStepButton}
          ></StepTwo>
          
        </Item>
        {/* The fourth part of the part/questions. "Spørsmål til min livssituasjon" */}
        <Item>
          {/* Changes the color of the circle 3 on the side wen it is beeing worked on or done with */}
          <div><Circle onClick={(e) => nextStepButton(e, 3, stepTwoRef)} color={activeStep >= 3 ? true : false}>3</Circle><Line></Line></div>
          <StepThree
            stepTwoRef={stepTwoRef}
            stepThreeRef={stepThreeRef}
            stepFourRef={stepFourRef}
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            nextStepButton={nextStepButton}
            getLifeAnswers={getLifeAnswers}
          ></StepThree>
        </Item>
        
        {/* The fifth part of the part/questions. "Mine resultater" */}
        <Item>
          {/* Changes the color of the circle 4 on the side wen it is beeing worked on or done with */}
          <Circle onClick={(e) => nextStepButton(e, 4, stepThreeRef)}><CheckmarkIcon title="a11y-title" fontSize="1.5rem" /></Circle>
          <StepFinal
            stepFourRef={stepFourRef}
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            nextStepButton={nextStepButton}
            verySureRef={verySureRef}
            kindaSureRef={kindaSureRef}
            extremlySureRef={extremlySureRef}
            infoRef={infoRef}
          ></StepFinal>
        </Item>
      </List>

      {activeStep === 4 &&
      <InfoBox>
        <InfoBoxTitle>Innhold</InfoBoxTitle>

        <InfoBoxDivider></InfoBoxDivider>

        <InfoBoxText onClick={() => {
          setTimeout(() => {
            window.scrollTo({
              top:verySureRef?.current?.offsetTop ,
              behavior: "smooth"
            })
          }, 0);
        }}>Kan ha krav på</InfoBoxText>

        <InfoBoxText onClick={() => {
          setTimeout(() => {
            window.scrollTo({
              top:kindaSureRef?.current?.offsetTop ,
              behavior: "smooth"
            })
          }, 0)
        }}>Kanskje krav på</InfoBoxText>

        <InfoBoxText onClick={() => {
          setTimeout(() => {
            window.scrollTo({
              top:extremlySureRef?.current?.offsetTop ,
              behavior: "smooth"
            })
          }, 0)
        }}>Ikke krav på</InfoBoxText>
        
        <InfoBoxText onClick={() => {
          setTimeout(() => {
            window.scrollTo({
              top:infoRef?.current?.offsetTop ,
              behavior: "smooth"
            })
          }, 0)
        }}>Informasjon</InfoBoxText>
      </InfoBox>
      }

      </MainContent>
      <Footer />
    </Body>
    </>
  );
};
 
export default Info;