import styled from 'styled-components';
// Fancy nav Icons from nav aksel
import { Radio, RadioGroup } from "@navikt/ds-react";
import { CheckmarkIcon, Chat2FillIcon } from '@navikt/aksel-icons';
import { Heading } from "@navikt/ds-react";

const StepThree = ({stepTwoRef, stepThreeRef, stepFourRef, nextStepButton, activeStep, setActiveStep }) => {

    // Styles thrue js
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


// The Big text on the top of parts/questions
const StepTitle = styled.div`
font-size: 1.75rem;
`;

// The smaler text over the big text of the different parts/questions
const StepHeader = styled.div`
font-size: 1rem;
`;

// Information text avout the part/questions
const StepText = styled.div`
 font-size: 1rem;
 margin: 2rem 0rem;
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


    return(
        <>
        <TextBox ref={stepThreeRef} onClick={() => {
            {/* Moves the user to next part */}
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
        {/* Moves the user to the next part */}
        <NextStepButton onClick={(e) => nextStepButton(e, 2, stepTwoRef)}>Forige steg</NextStepButton>
        <NextStepButton onClick={(e) => nextStepButton(e, 4, stepFourRef)}>Gå Videre</NextStepButton>

      </div>
              </>
            }
          </TextBox>
        
        </>
    )
}

export default StepThree;