import styled from 'styled-components';
import { HospitalFillIcon, InformationIcon } from '@navikt/aksel-icons';
import { RadioGroup } from "@navikt/ds-react";

// Styles thrue js
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

const StepTitle = styled.div`
  font-size: 1.75rem;
`;

const StepHeader = styled.div`
  font-size: 1rem;
`;

const StepText = styled.div`
 font-size: 1rem;
 margin: 2rem 0rem;
`;

const NextStepButton = styled.button`
  border-radius: 4px;
  border: 0px;
  padding: 12px 20px;
  background-color: #0067C5;
  color: white;
  cursor: pointer;
`;

const RadioBox = styled.div`
  padding: 3rem 2rem;
  margin: 2rem 0rem;
  background-color: #CCE1FF;
  border-radius: 0.5rem;
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
  transition: all 0.3s ease; // Legg til overgang for jevn animasjon
  cursor: pointer;
  &:hover {
    transform: scale(1.1); // Forstørr effekten ved hover for å indikere klikkbarhet
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

const StepTwo = ({stepThreeRef, stepTwoRef, nextStepButton, activeStep, setActiveStep}) => {





    return(
        <>
        
        
        <TextBox ref={stepTwoRef} onClick={(e) => nextStepButton(e, 2, stepTwoRef)}>

            <StepHeader>Steg 2 av 3 </StepHeader>
            <StepTitle>Velg livssituasjon</StepTitle>
            {/* The icon beside the part header. Icon of a hospital */}
            <HospitalFillIcon className="stepIcon" title="a11y-title" color={activeStep >= 2 ? "Pink" : "gray"} fontSize="1.5rem" />
            {activeStep === 2 && 
              <>
                <Bold>Velg livshendelser som reflekterer din livssituasjon</Bold>
                <StepText>
                Her velger du de livshendelsene som relaterer til deg eller som
                <br />
                du eventuelt ønsker å utforske
                </StepText>
                
                <BlueBox>
                  <Icon><Round><InformationIcon /></Round> </Icon>
                  <StepText></StepText>
                </BlueBox>

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
        
        
        </>
    )
}

export default StepTwo;