import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring } from 'react-spring';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import "@navikt/ds-css";
import Section from '../components/section';
import Main from '../components/Info_main'; // Ensure this is imported only once
import { InformationIcon, CheckmarkIcon } from '@navikt/aksel-icons';
 
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
  border: 2px solid white;
  background-color: white;
  border-radius: 50%;
  color: #0067C5;
  z-index: 1;
  margin: 0px 3px 0px 3px;
  text-align: center;
  display: block;
  height: 30px;
  width: 30px;
`;

const TextBox = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 1rem 8rem;
`

const Line = styled.div`
  width: 0.3rem;
  height: 95%;
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
  grid-template-columns: 50px 600px;
  margin: 20px 0px 20px 0px;
`;

const StepTitle = styled.div`
  font-size: 1.75rem;
`;

const StepOfSteps = styled.div`
  font-size: 1rem;
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
 
  return (
    <>
    <Body>
      <Navbar />
      <Section />
      <MainContent>

      <List>
        <Item>
          <div><Circle><InformationIcon title="a11y-title" fontSize="1.5rem" /></Circle><Line></Line></div>
          <TextBox>
            <StepOfSteps>Samling av din informasjon via</StepOfSteps>
            <StepTitle>Datahenting</StepTitle>
            
          </TextBox>
        </Item>

        <Item>
        <div><Circle>1</Circle><Line></Line></div>
          <TextBox>
            <StepOfSteps>Steg 1 av 3</StepOfSteps>
            <StepTitle>Om meg</StepTitle>
          </TextBox>
        </Item>

        <Item>
          <div><Circle>2</Circle><Line></Line></div>
          <TextBox>
            <StepOfSteps>Steg 2 av 3</StepOfSteps>
            <StepTitle>Velg livssituasjon</StepTitle>
          </TextBox>
        </Item>

        <Item>
          <div><Circle>3</Circle><Line></Line></div>
          <TextBox>
            <StepOfSteps>Steg 3 av 3</StepOfSteps>
            <StepTitle>Spørsmål til min livssituasjon</StepTitle>
          </TextBox>
        </Item>
        
        <Item>
          <Circle><CheckmarkIcon title="a11y-title" fontSize="1.5rem" /></Circle>
          <TextBox>
            <StepTitle>Mine resultater</StepTitle>
          </TextBox>
        </Item>
      </List>

      </MainContent>
      <Footer />
    </Body>
    </>
  );
};
 
export default Info;
 