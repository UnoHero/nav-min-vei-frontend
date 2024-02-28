import styled from 'styled-components';
import { HospitalFillIcon, InformationIcon } from '@navikt/aksel-icons';
import { RadioGroup } from "@navikt/ds-react";

// Styles thrue js
import { TextBox, StepTitle, StepHeader, StepText, NextStepButton, RadioBox, Round, Bold, BlueBox, Icon } from "../components/styledComponents"

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