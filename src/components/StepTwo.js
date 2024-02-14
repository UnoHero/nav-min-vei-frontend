import styled from 'styled-components';
import { HospitalFillIcon } from '@navikt/aksel-icons';
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

const StepTwo = ({stepThreeRef, stepTwoRef, nextStepButton, activeStep, setActiveStep}) => {





    return(
        <>
        
        
        <TextBox ref={stepTwoRef} onClick={() => {
            {/* Moves the user to next part */}
              setActiveStep(2)
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
        
        
        </>
    )
}

export default StepTwo;