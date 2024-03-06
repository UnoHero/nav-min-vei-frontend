import styled from 'styled-components';
// Fancy nav Icons from nav aksel
import { PersonFillIcon, CheckmarkCircleFillIcon } from '@navikt/aksel-icons';

// Styles thrue js
import { TextBox, StepTitle, StepHeader, StepText, NextStepButton, Txt, CheckMark } from "../components/styledComponents"

const StepOne = ({stepOneRef, stepTwoRef, nextStepButton, activeStep, data }) => {

// fixed code


    return(
        <>
        <TextBox cursor={activeStep === 1 ?  "default" : "pointer"} ref={stepOneRef} onClick={(e) => nextStepButton(e, 1, stepOneRef)}>
            <StepHeader>Steg 1 av 3</StepHeader>
            <StepTitle>Om meg</StepTitle>
            <PersonFillIcon className="stepIcon" title="a11y-title" color={activeStep >= 1 ? "blue" : "gray"} fontSize="1.5rem" />
            {activeStep > 1 && <CheckMark><CheckmarkCircleFillIcon color='green' fontSize="2rem"></CheckmarkCircleFillIcon></CheckMark>}
            {activeStep === 1 && 
              <>
                <Txt><b>Hei {data?.firstName?.aaReg}</b></Txt>
                <StepText>
                  Her finner du informasjon om 
                  deg som veilederen har hentet 
                  fra offentlige tjenester. Er svarene feil? 
                  Da er det bare å endre i svarboksene.  
                </StepText>
                {/* Moves the user to the next part */}
                <NextStepButton onClick={(e) => {
                  nextStepButton(e, 2, stepTwoRef)
                }}>Neste Steg</NextStepButton>
              </>
            }
          </TextBox>    
        
        </>
    )
}

export default StepOne;