import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'
import styled from 'styled-components';
import { HospitalFillIcon, InformationIcon } from '@navikt/aksel-icons';
import { RadioGroup } from "@navikt/ds-react";
import getChildren from "../Pictures/StepTwo/getChildren.svg"
import sickKid from "../Pictures/StepTwo/sickKid.svg";
import findWork from "../Pictures/StepTwo/findWork.svg";
import newToNorway from "../Pictures/StepTwo/newToNorway.svg";
import startCompany from "../Pictures/StepTwo/startCompany.svg";
import free from "../Pictures/StepTwo/free.svg";
import death from "../Pictures/StepTwo/death.svg";

import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { TextBox, StepTitle, StepHeader, StepText, NextStepButton, Txt, CheckMark } from "../components/styledComponents"


import { useLifeEvent } from '../contexts/LifeEventContext';


const ButtonContainer = styled.div`
  margin: 40px;
  height: 100px;
  display: flex;
  justify-content: space-between; // Plasserer elementer med lik avstand mellom hverandre
`;

const LastStepButton = styled.button`
  border-radius: 4px;
  border: 3px solid #0067C5; /* Blue border */
  background-color: white;
  color: #0067C5;
  cursor: pointer;
  height: 50px;  
  padding: 12px 20px;
  margin: 20px 20px 0 0;
  box-sizing: borde-box;

  &:hover {
    background-color: #0067C5;
    color: white;
  }
`;

const Round = styled.div`
  position: relative;
  border: 2px solid #0067C5;
  background-color: white;
  border-radius: 50%;
  color: #0067C5;
  z-index: 1;
  margin: 0px 3px 0px 3px;
  text-align: center;
  display: block;
  height: 30px;
  width: 30px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const Bold = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

const BlueBox = styled.div`
  display: flex;
  align-items: center;
  border: solid 2px #0067c5;
  padding: 20px;
`;

const Icon = styled.div`
  margin-right: 10%;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  margin: 10px;
  display: flex;
  border-radius: 15px;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;

  /* Dynamic styling based on box ID */
  &[id="box1"] {
    background-color: ${props => props.checked ? '#ccffcc' : '#ffeccc'};
  }

  &[id="box2"] {
    background-color: ${props => props.checked ? '#ccffcc' : 'white'};
  }

  &[id="box3"] {
    background-color: ${props => props.checked ? '#ccffcc' : 'white'};
  }

  &[id="box4"] {
    background-color: ${props => props.checked ? '#ccffcc' : 'white'};
  }

  &[id="box5"] {
    background-color: ${props => props.checked ? '#ccffcc' : 'white'};
  }

  &[id="box6"] {
    background-color: ${props => props.checked ? '#ccffcc' : 'white'};
  }

  &[id="box7"] {
    background-color: ${props => props.checked ? '#ccffcc' : '#ffeccc'};
  }

  input[type="checkbox"] {
    position: absolute;
    top: 30px; /* Adjust as needed */
    left: 30px; /* Adjust as needed */
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

const Contentbox = styled.div`
  margin-left: 200px;
  display: flex; /* Use flexbox layout */
  flex-direction: column; /* Arrange children vertically */
  align-items: flex-start; /* Align children to the left */
  margin-top: 5%
`;

const Stortext = styled.div`
  align-self: flex-start; /* Align Stortext to the left */
  font-weight: bold;
  font-size: 20px;
`;

const Litentext = styled.div`
  margin-top: 35px;
  align-self: flex-start; /* Align Litentext to the left */
  text-align: left; /* Align the text and list items to the left */
  margin-bottom: 20px;

  ul {
    list-style-type: disc; /* Use filled disc bullets */
    padding-left: 20px; /* Add padding to align the bullets properly */
  }
`;

const Ikonbox = styled.div `
position: absolute;
top: 7%;
left: 15.5%;
display: flex; /* Use flexbox layout */
flex-direction: column; /* Arrange children vertically */
align-items: flex-start; /* Align children to the left */
`


const Chosentext = styled.div `
  float: right;
  margin: 20px;
`

const StepTwo = ({ stepThreeRef, stepOneRef, stepTwoRef, nextStepButton, activeStep }) => {
  const { updateLifeEvent } = useLifeEvent();

  const [boxStates, setBoxStates] = useState({
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box5: false,
    box6: false,
    box7: false,
  });

  const handleCheckboxChange = (e, id) => {
    // Update the local state
    setBoxStates(prevState => ({
      ...prevState,
      [id]: e.target.checked,
    }));

    // Update the global state in the context
    updateLifeEvent(id, e.target.checked, "boxStates");
  };


  const handleTextFetch = (id) => {
    // Replace this with your logic to fetch text based on the ID
    console.log(`Fetching text for ${id}`);
  };

  const [boxed, setBoxed] = useState(false)
  const boxRef = useRef(null)
  const [boxHeight, setBoxHeight] = useState()


  useEffect(() => {
      setBoxHeight(boxRef?.current?.offsetHeight)
  }, [boxRef])

  useEffect(() => {
      if(activeStep !== 2){
          setBoxed(true)
      }
      if(activeStep === 2){
          setBoxed(false)
      }
  },[activeStep])


  useEffect(() => {
      openBox()
  }, [boxHeight])

  const [springs, api] = useSpring(() => ({
      from: { height: 0, opacity: 0 },
  }))

  const openBox = () => {
      api.start({
          to: {height: boxed ? 0 : boxHeight, opacity: boxed ? 0 : 1,},
          config: {
              mass: 1,
              tension: 170, 
              friction: 26
          },
      })
  }

  useEffect(() => {
      openBox()
  },[boxed])

  return (
    <>
      <TextBox cursor={activeStep === 2 ?  "default" : "pointer"} ref={stepTwoRef} onClick={(e) => nextStepButton(e, 2, stepOneRef)}>
        <StepHeader>Steg 2 av 3</StepHeader>
        <StepTitle><b>Velg livssituasjon</b></StepTitle>
        <HospitalFillIcon className="stepIcon" title="a11y-title" color={activeStep >= 2 ? "Pink" : "gray"} fontSize="1.5rem" />
        {activeStep > 2 && <CheckMark><CheckmarkCircleFillIcon color='green' fontSize="2rem"></CheckmarkCircleFillIcon></CheckMark>}
        <animated.div style={{...springs}} onClick={(e) => e.stopPropagation()}>
          <div ref={boxRef}>
            <Bold>Velg livshendelser som reflekterer din livssituasjon</Bold>
            <StepText>
              Her velger du de livshendelsene som relaterer til deg eller som
              <br />
              du eventuelt ønsker å utforske
            </StepText>

            <BlueBox>
              <Icon><Round><InformationIcon /></Round> </Icon>
              <StepText>Markerte kategorier i gult er kun foreslåtte livshendelser, du kan selv velge de livshendelsene som passer deg.</StepText>
            </BlueBox>

            <BoxContainer>
            <Box id="box1" checked={boxStates.box1}>
      <input
        type="checkbox"
        checked={boxStates.box1}
        onChange={e => handleCheckboxChange(e, 'box1')}
      />
      <div>
        <Ikonbox>
        <img src={getChildren}></img>
        </Ikonbox>
        <Contentbox>
        <Stortext>Få barn</Stortext>
        <Litentext>
          <ul>
            <li>Venter eller har nylig fått barn</li>
            <li>Bor ikke sammen med barnet mitt</li>
            <li>Er helt eller delvis alene med barn</li>
          </ul>
        </Litentext>
        </Contentbox>
      </div>
    </Box>

    <Box id="box2" checked={boxStates.box2}>
      <input
        type="checkbox"
        checked={boxStates.box2}
        onChange={e => handleCheckboxChange(e, 'box2')}
    />
    <Ikonbox>
    <img src={sickKid}></img>
        </Ikonbox>
        <Contentbox>
        <Stortext>Alvorlig sykt barn</Stortext>
        <Litentext>
          <ul>
            <li>Barn som trenger hjelpemidler</li>
            <li>Har barn som er kronisk syk</li>
            <li>Har barn som er innlagt på sykehus</li>
          </ul>
        </Litentext>
        </Contentbox>
    </Box>
              
    <Box id="box3" checked={boxStates.box3}>
      <input
        type="checkbox"
        checked={boxStates.box3}
        onChange={e => handleCheckboxChange(e, 'box3')}
      />
      <Ikonbox>
        <img src={findWork}></img>
      </Ikonbox>
      <Contentbox>
      <Stortext>Miste og finne jobb</Stortext>
      <Litentext>
        <ul>
          <li>Nylig mistet jobben</li>
          <li>Sliter med å finne jobb</li>
          <li>Skal søke jobb</li>
        </ul>
      </Litentext>
      </Contentbox>
    </Box>

    <Box id="box4" checked={boxStates.box4}>
      <input
        type="checkbox"
        checked={boxStates.box4}
        onChange={e => handleCheckboxChange(e, 'box4')}
      />
      <Ikonbox>
        <img src={newToNorway}></img>
      </Ikonbox>
      <Contentbox>
      <Stortext>Ny i Norge</Stortext>
      <Litentext>
        <ul>
          <li>Flytte inn/ut av Norge</li>
          <li>Har/har ikke bosted</li>
          <li>Ny adresse og bosituasjon</li>
        </ul>
      </Litentext>
      </Contentbox>
    </Box>

    <Box id="box5" checked={boxStates.box5}>
      <input
        type="checkbox"
        checked={boxStates.box5}
        onChange={e => handleCheckboxChange(e, 'box5')}
      />
      <Ikonbox>
        <img src={startCompany}></img>
      </Ikonbox>
      <Contentbox>
      <Stortext>Starte og drive en bedrift</Stortext>
      <Litentext>
        <ul>
          <li>Skal starte et nytt enkeltmannsforetak</li>
          <li>Starter opp ny bedrift</li>
          <li>Driver en bedrift</li>
          <li>Utenlandsk arbeidstaker</li>
        </ul>
      </Litentext>
      </Contentbox>
    </Box>

    <Box id="box6" checked={boxStates.box6}>
      <input
        type="checkbox"
        checked={boxStates.box6}
        onChange={e => handleCheckboxChange(e, 'box6')}
      />
      <Ikonbox>
        <img src={free}></img>
      </Ikonbox>
      <Contentbox>
      <Stortext>Skal starte opp frivillig organisasjon</Stortext>
      <Litentext>
        <ul>
          <li>Skal starte opp frivillig organisasjon</li>
          <li>Ansvar for frivillige</li>
          <li>Driver en frivillig organisasjon</li>
          <li>Trenger støtte til frivillig organisasjon</li>
        </ul>
      </Litentext>
      </Contentbox>
    </Box>

    <Box id="box7" checked={boxStates.box7}>
      <input
        type="checkbox"
        checked={boxStates.box7}
        onChange={e => handleCheckboxChange(e, 'box7')}
      />
      <Ikonbox>
        <img src={death}></img>
      </Ikonbox>
      <Contentbox>
      <Stortext>Dødsfall og arv</Stortext>
      <Litentext>
        <ul>
          <li>Planlegge livets siste fase</li>
          <li>Tar vare på noen som er alvorlig syk eller skadet</li>
          <li>Ønsker innsikt rundt dødsfall</li>
        </ul>
      </Litentext>
      </Contentbox>
    </Box>

  </BoxContainer>
  <Chosentext>Du har valgt {Object.values(boxStates).filter(checked => checked).length} av 7 mulige livshendelser.</Chosentext>
  <br></br>
  <ButtonContainer>
    <div>
    <NextStepButton onClick={(e) => nextStepButton(e, 3, stepThreeRef)}>Neste Steg</NextStepButton>
    </div>
    <LastStepButton onClick={(e) => nextStepButton(e, 1, stepOneRef)}>Forrige Steg</LastStepButton>
  </ButtonContainer>
  </div>
  </animated.div>
  </TextBox>
  </>
  );
};



export default StepTwo;