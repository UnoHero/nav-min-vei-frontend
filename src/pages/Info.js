// Info The site were we get information, the user can answer questions and more


// Imports

import React, { useRef, useState } from 'react';

// Css
import '../font-style.css';
import "@navikt/ds-css";

// Styled wil let you make styles(css) in a react component.
import styled from 'styled-components';

// "Navbar" the navigation part on top of the site, with a logo, some buttons, hamburger menu, sertch and loginn
import Navbar from '../components/navbar';

// "Section" is the top part of the site with the big logo MinVeileder
import Section from '../components/section';

// "Footer" is the dark box at the bottom with some information
import Footer from '../components/footer';

// Fancy nav Icons from nav aksel
import { InformationIcon, CheckmarkIcon, Chat2FillIcon, PersonFillIcon, HospitalFillIcon, PrinterSmallIcon } from '@navikt/aksel-icons';
import { Accordion, Button, Radio, RadioGroup } from "@navikt/ds-react";
import { Heading, VStack } from "@navikt/ds-react";
import { HddDownIcon } from '@navikt/aksel-icons';
 

// Styles thrue js

const Body = styled.div`
  background-color: rgb(211, 230, 237);
`;

const MainContent = styled.div`
  background-color: rgb(211, 230, 237); // Light blue background
  padding: 20px;
  display: flex;
  justify-content: center;
`;

// The circles on the left side that tracks were you are on the questions. The "border", background-color and color changes the color of the pinters dependig on were you are on the site.
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

// "TextBox" is the container of the different questins/parts. The "cursor" properti is code that changes the cursor if you can click the question/part
const TextBox = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 1rem 6rem 0.4rem 6rem;
  cursor: ${props => props.cursor};
  transition: all 0.3s ease; // Legg til overgang for jevn animasjon
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // Legg til skyggeeffekt ved hover for å indikere klikkbarhet
  }
`;

// The line on the left side of the screen between the numbers
const Line = styled.div`
  width: 0.4rem;
  height: 100%;
  background-color: #CCE1FF;
  position: relative;
  left: 15px;
  z-index: 0;
`;
  
const List = styled.ul`
  list-style: none;
`;
  
// "TextBox": Legg til skyggeeffekt ved hover for å indikere klikkbarhet
const Item = styled.li`
  display: grid;
  grid-template-columns: 5rem 50rem;
  margin: 20px 0px 20px 0px;
  &:hover {
    ${TextBox} {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
    }
  }
`;


// The Big text on the top of parts/questions
const StepTitle = styled.div`
  font-size: 1.75rem;
`;

// The smaler text over the big text of the different parts/questions
const StepHeader = styled.div`
  font-size: 1rem;
`;

// The smaler header that apers wen you oppen a part
const Txt = styled.div`
fontSize: 20%;
`;

// Information text avout the part/questions
const StepText = styled.div`
 font-size: 1rem;
 margin: 2rem 0rem;
`;

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
  cursor: pointer;
`;

// The green buttons on the "Spørsmål til min livssituasjon" part. The buttons change color wen hover.
const GreenButton = styled.button`
  padding: 10px 20px;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  color: white;
  border: none;
  background-color: #4CAF50;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  margin: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none; // If you want the buttons as links, this removes underline
 
  &:hover {
    background-color: #45a049;
  }
 
  svg {
    fill: white;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px; /* This adds space between the buttons if they wrap onto a new line */
  margin-top: 20px; /* Optional: adds some space above the button container */
`;

const DataBilder = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
  width: 400px;
`;

// Pictures of the different agencies
const Image = styled.img`
  max-width: auto;
  max-height: 40px;
  margin: 10px; /* Adjust the spacing between images */
`;
 
// The header above the imput filed
const InputLabel = styled.label`
  font-size: 1rem;
`;

// The Imput filed were you write your socialSecurity number
const InputBox = styled.input`
  display: block;
  width: 290px;
  height: 48px;
  margin: 10px 0px;
  border-radius: 4px;
  border: 1px solid black;
`;


// The Page
const Info = () => {


  // useStates ->
  
  // "activeStep" remembers witch question you are on and were you are going
  const [activeStep, setActiveStep] = useState(0);

  // "id" becomes the social security number that is writen in the text filed
  const [id, setId] = useState(null);


  // useRef ->
  // Were to move the user to the next part/question
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
          <div><Circle><InformationIcon title="a11y-title" fontSize="1.5rem" /></Circle><Line></Line></div>
          
          {/* Changing the cursor to show that you can click */}
          <TextBox cursor={activeStep === 0 ?  "default" : "pointer"} onClick={() => setActiveStep(0)}>
            <StepHeader>Samling av din informasjon via</StepHeader>

            <StepTitle><b>MineData</b></StepTitle>
            <br></br><br></br>

            {activeStep === 0 && 
            <>
              <Txt><b>Datahenting fra offentlige tjenester</b></Txt>
              <StepText>
                Dersom du ønsker har du mulighet til å hente data fra 
                ulike offentlige etater slik at utfyllingen av veilederen 
                blir enklere for deg.
              </StepText>
              <StepText>
                Gjennom mine data kan du hente informasjon fra:
              </StepText>
              <DataBilder>
    {/* The logos of the different agencies */}            
    <Image src="https://media.snl.no/media/192713/standard_lanekassen.png" alt="Image 1" />
    <Image src="https://www.steinkjerleksikonet.no/img/vis_gen.php?tbl=bilde&fil=innhold&id=4430" alt="Image 2" />
    <Image src="https://yt3.googleusercontent.com/-Mlm9tVyseq0e2ZxW-liNWEKg_BTggFhKfrsqU8cXk4wbjE4OzHvy7L5cHUIMznp-3x2Hw_mVw=s900-c-k-c0x00ffffff-no-rj" alt="Image 3" />
    <Image src="https://v.imgi.no/373/0/6-1f672a9a-0d1a-4a84-9632-90ee3200cfe1-TOPLOGO.jpg" alt="Image 4" />
    <Image src="https://kommunikasjon.ntb.no/data/images/00306/95f3a80b-ceb5-4afb-9e0a-d1611744ba4d-w_960_h_960.jpg" alt="Image 5" />
    <Image src="https://media.snl.no/media/55949/standard_innovasjon-norge.png" alt="Image 6" />
  </DataBilder>
              
              <RadioBox>
                <RadioGroup legend="Ønsker du å hente data det offentlige har om deg for å autofylle svar i veilederen?">
                  <Radio value="Yes">Ja, jeg ønsker å hente data fra offentlige tjenester</Radio>
                  <Radio value="No">Nei, jeg ønsker å fylle ut selv</Radio>
                </RadioGroup>
              </RadioBox>
              {/* Moves the user to the next part */}
              <NextStepButton onClick={(e) => nextStepButton(e, 1, stepOneRef)}>Gå Videre</NextStepButton>
              </>
            }

          </TextBox>
        </Item>

        {/* The secon part of the site the part/question. "Om meg" */}
        <Item>
          {/* Changes the color of the circle 1 on the side wen it is beeing worked on or done with */}
          <div><Circle color={activeStep >= 1 ? true : false}>1</Circle><Line></Line></div>
            {/* Moves the user to next part */}
            <TextBox ref={stepOneRef} onClick={() => {
              setActiveStep(1)
              setTimeout(() => {
                window.scrollTo({
                  top:stepOneRef.current.offsetTop - 20,
                  behavior: "smooth"
                })
              }, 0);
            }}>
            <StepHeader>Steg 1 av 3</StepHeader>
            <StepTitle>Om meg</StepTitle>
            {/* The icon beside the part header. The person Icon */}
            <PersonFillIcon className="stepIcon" title="a11y-title" color={activeStep >= 1 ? "blue" : "gray"} fontSize="1.5rem" />
            {activeStep === 1 && 
              <>
                <Txt><b>Hei Starte Nybedrift</b></Txt>
                <StepText>
                  Her finner du informasjon om 
                  deg som veilederen har hentet 
                  fra offentlige tjenester. Er svarene feil? 
                  Da er det bare å endre i svarboksene.  
                </StepText>
                <InputLabel>Fødselsnummer:</InputLabel>
                <InputBox onChange={(e) => setId(e.target.value)}></InputBox>
                
                <NextStepButton onClick={(e) => {
                  nextStepButton(e, 2, stepTwoRef)
                  getPersonData(id)
                }}>Neste Steg</NextStepButton>
              </>
            }
          </TextBox>
        </Item>

        {/* The thrid part of the part/questions. "MineData" */}
        <Item>
          {/* Changes the color of the circle 2 on the side wen it is beeing worked on or done with */}
          <div><Circle color={activeStep >= 2 ? true : false}>2</Circle><Line></Line></div>
          {/* Moves the user to next part */}
          <TextBox ref={stepTwoRef} onClick={() => {
              setActiveStep(2)
              setTimeout(() => {
                window.scrollTo({
                  top:stepTwoRef.current.offsetTop - 20,
                  behavior: "smooth"
                })
              }, 0);
            }}>

            <StepHeader>Steg 2 av 3 </StepHeader>
            <StepTitle>Velg livssituasjon</StepTitle>
            {/* The icon beside the part header. Icon of a hospital */}
            <HospitalFillIcon className="stepIcon" title="a11y-title" color={activeStep >= 2 ? "Pink" : "gray"} fontSize="1.5rem" />
            {activeStep === 2 && 
              <>
                <StepHeader>Velg livshendelser som reflekterer din livssituasjon</StepHeader>
                <StepText>Her velger du de livshendelsene som relaterer til deg eller som du eventuelt ønsker å utforske</StepText>
                <StepText>Markerte kategorier i gult er kun foreslåtte livshendelser, du kan selv velge de livshendelsene som passer deg.</StepText>

                <RadioBox>
                  <RadioGroup legend="Få barn">
                  <StepText>Venter eller har nylig fått barn</StepText>
                  <StepText>Bor ikke sammen med barnet mitt</StepText>
                  <StepText>Er helt eller delvis alene med barn</StepText>
                  </RadioGroup>
                </RadioBox>
                {/* Moves the user to the next part */}
                <NextStepButton onClick={(e) => nextStepButton(e, 3, stepThreeRef)}>Neste Steg</NextStepButton>
              </>
            }
          </TextBox>
        </Item>
        
        {/* The fourth part of the part/questions. "MineData" */}
        <Item>
          {/* Changes the color of the circle 3 on the side wen it is beeing worked on or done with */}
          <div><Circle color={activeStep >= 3 ? true : false}>3</Circle><Line></Line></div>
          {/* Moves the user to next part */}
          <TextBox ref={stepThreeRef} onClick={() => {
              setActiveStep(3)
              setTimeout(() => {
                window.scrollTo({
                  top:stepThreeRef.current.offsetTop - 20,
                  behavior: "smooth"
                })
              }, 0);
            }}>
            <StepHeader>Steg 3 av 3</StepHeader>
            <StepTitle>Spørsmål til min livssituasjon</StepTitle>
            {/* The icon beside the part header. Icon of 2 chat bubles */}
            <Chat2FillIcon className="stepIcon" title="a11y-title" color={activeStep >= 3 ? "green" : "gray"} fontSize="1.5rem" />
            {activeStep === 3 && 
              <>
                <StepHeader>Test steg 3</StepHeader>
                  <StepText>
                    Under ser du livshendelsene du har valgt, og tilhørende spørsmål du må svare på for at vi skal kunne beregne hva du kan ha krav på.
                  </StepText>
                <GreenButton onClick={() => setActiveStep(1)}>
                  <CheckmarkIcon title="a11y-title" fontSize="1.5rem" />
                  Få barn
                </GreenButton>
                <GreenButton onClick={() => setActiveStep(2)}>
                  <CheckmarkIcon title="a11y-title" fontSize="1.5rem" />
                  Dødsfall og arv
                </GreenButton>
                <div>
                  <br/><br/>

                <Heading level="4" size="medium"> Pleie og omsorg
                </Heading>
                <br/><br/>
                <RadioGroup legend="Ønsker du å hente data det offentlige har om deg for å autofylle svar i veilederen?">
                  <Radio value="Yes">Ja</Radio>
                  <Radio value="No">Nei</Radio>
                </RadioGroup>
                <br/><br/>
                <ButtonContainer>
                  {/* Moves the user to the previus part */}
                  <Button variant="secondary" onClick={(e) => nextStepButton(e, 2, stepTwoRef)}>Forige steg</Button>
                  {/* Moves the user to the next part */}
                  <Button variant="primary" onClick={(e) => nextStepButton(e, 4, stepFourRef)}>Neste steg</Button>
                </ButtonContainer>

                </div>
              </>
            }
          </TextBox>
        </Item>
        
        {/* The fifth part of the part/questions. "MineData" */}
        <Item>
          {/* Changes the color of the circle 4 on the side wen it is beeing worked on or done with */}
          <Circle><CheckmarkIcon title="a11y-title" fontSize="1.5rem" /></Circle>
          {/* Moves the user to next part */}
          <TextBox ref={stepFourRef}  onClick={(e) => nextStepButton(e, 4, stepFourRef)}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <StepTitle>Mine resultater</StepTitle>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                  <HddDownIcon title="a11y-title" fontSize="2.5rem" />
                  <div>Lagre</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <PrinterSmallIcon title="a11y-title" fontSize="2.5rem" />
                  <div>Skriv ut</div>
                </div>
              </div>
            </div>
            {activeStep === 4 && 
              <>
                <StepHeader>Test steg done</StepHeader>
              </>
            }
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
