import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../font-style.css';
import "@navikt/ds-css";
import Section from '../components/section';
import { InformationIcon, CheckmarkIcon } from '@navikt/aksel-icons';
import { Accordion, Button, Radio, RadioGroup } from "@navikt/ds-react";
 
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
  cursor: ${props => props.cursor};
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
`;

const StepTitle = styled.div`
  font-size: 1.75rem;
`;

const StepHeader = styled.div`
  font-size: 1rem;
`;

const StepText = styled.div`
 font-size: 1rem;
 margin: 2rem 0rem;
 `
 //color: ${props => props.isError ? "red" : "green"};

const RadioBox = styled.div`
  padding: 3rem 2rem;
  margin: 2rem 0rem;
  background-color: #CCE1FF;
  border-radius: 0.5rem;

`;

// Component for each box next to Stepper steps

const NextStepButton = styled.button`
  border-radius: 4px;
  border: 0px;
  padding: 12px 20px;
  background-color: #0067C5;
  color: white;
`

 
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
          <TextBox cursor={activeStep === "info" ?  "default" : "pointer"} onClick={() => setActiveStep("info")}>
            <StepHeader>Samling av din informasjon via</StepHeader>
            <StepTitle>Datahenting</StepTitle>

            {activeStep === "info" && 
            <>
              <StepHeader>Hente data det offentlige har om deg</StepHeader>
              <StepText>
                Dersom du ønsker har du mulighet til å hente data fra 
                ulike offentlige etater slik at utfyllingen av veilederen 
                blir enklere for deg.
              </StepText>
              
              <Accordion>
                <Accordion.Item>
                  <Accordion.Header>Hvorfor hente data</Accordion.Header>
                  <Accordion.Content>
                  Å hente data gjør at veilederen kan autofylle svar for deg, 
                  noe som betyr at du slipper å logge deg inn forskjellige steder 
                  for å finne informasjon du må fylle ut i veilederen. 
                    <br/><br/>
                  Du kan også fint fylle ut informasjon selv, dersom du ikke ønsker å hente informasjon automatisk. 
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item>
                  <Accordion.Header>
                    Hvordan virker datasamlingen?
                  </Accordion.Header>
                  <Accordion.Content>
                    Datahenting fungerer ved at MinVeileder henter data som ulike 
                    offentlige organisasjoner har på deg her i veilederen.
                    <br/><br/>
                    Informajsonen vil ikke bli delt på tvers av disse organisasjonene, og det er kun du som ser de samlet her.
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item>
                  <Accordion.Header>Hvem hentes infoen fra?</Accordion.Header>
                  <Accordion.Content>
                  MinVei henter informasjon fra følgende: 
                  <ul>
                    <li>Folkeregisteret</li>
                    <li>Skatteetaten</li>
                    <li>NAV</li>
                    <li>Lånekassen</li>
                    <li>Brønnøysundregisteret</li>
                    <li>Din tilhørende kommune</li>
                    <li>Vegvesenet</li>
                    <li>Helsenorge</li>
                    <li>Samordna opptak</li>
                    <li>Politiet</li>
                    <li>Altinn</li>
                    <li>Pasientsky</li>
                  </ul>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion>
              
              <RadioBox>
                <RadioGroup legend="Ønsker du å hente data det offentlige har om deg for å autofylle svar i veilederen?">
                  <Radio value="Yes">Ja, jeg ønsker å hente data fra offentlige tjenester</Radio>
                  <Radio value="No">Nei, jeg ønsker å fylle ut selv</Radio>
                </RadioGroup>
              </RadioBox>
              <NextStepButton>Gå Videre</NextStepButton>
              </>
            }
            
          </TextBox>
        </Item>

        <Item>
        <div><Circle>1</Circle><Line></Line></div>
          <TextBox>
            <StepHeader>Steg 1 av 3</StepHeader>
            <StepTitle>Om meg</StepTitle>
          </TextBox>
        </Item>

        <Item>
          <div><Circle>2</Circle><Line></Line></div>
          <TextBox>
            <StepHeader>Steg 2 av 3</StepHeader>
            <StepTitle>Velg livssituasjon</StepTitle>
          </TextBox>
        </Item>

        <Item>
          <div><Circle>3</Circle><Line></Line></div>
          <TextBox>
            <StepHeader>Steg 3 av 3</StepHeader>
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
 