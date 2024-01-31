import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring } from 'react-spring';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import "@navikt/ds-css";
import { Stepper } from "@navikt/ds-react";
import Section from '../components/section';
import Main from '../components/Info_main'; // Ensure this is imported only once
 
const Body = styled.div`
  background-color: rgb(211, 230, 237);
`;
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

const Circle = styled.div`
  border: 2px solid white;
  background-color: white;
  border-radius: 50%;
  color: #0067C5;
  
  margin: 0px 3px 0px 3px;
  text-align: center;
  display: block;
  height: 30px;
  width: 30px;
`;

const TextBox = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 5px;
`
  
const List = styled.ul`
  list-style: none;
`;
  
const Item = styled.li`
  display: grid;
  grid-template-columns: 50px 400px;
  margin: 20px 0px 20px 0px;
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
    <Body>
      <Navbar />
      <Section />
      <MainContent>

      <List>
        <Item>
          <Circle>I</Circle>
          <TextBox>Info tekst box werwerwer wefwefew  werwerwer wefwefew werwerwer wefwefew werwerwer wefwefew werwerwer wefwefewrferfrefwerwerwer werwerwer wefwefew werwerwer wefwefew werwerwer wefwefew werwerwer wefwefew </TextBox>
        </Item>
        <Item>
          <Circle>1</Circle>
          <TextBox>Steg 1 tekst box</TextBox>
        </Item>
        <Item>
          <Circle>2</Circle>
          <TextBox>Steg 2 tekst box</TextBox></Item>
        <Item>
          <Circle>3</Circle>
          <TextBox>Steg 3 tekst box</TextBox></Item>
        <Item>
          <Circle>!</Circle>
          <TextBox>Ferdig tekst box</TextBox></Item>
      </List>

      </MainContent>
      <Footer />
    </Body>
    </>
  );
};
 
export default Info;
 