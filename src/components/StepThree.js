import styled from 'styled-components';
// Fancy nav Icons from nav aksel
import { Radio, RadioGroup } from "@navikt/ds-react";
import { CheckmarkIcon, Chat2FillIcon, CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { Heading } from "@navikt/ds-react";

// Styles thrue js
import { TextBox, StepTitle, StepHeader, StepText, NextStepButton, GreenButton, CheckMark } from "../components/styledComponents"
import { useLifeEvent } from '../contexts/LifeEventContext';
import DynamicQuestions from './DynamicQuestions';

const StepThree = ({stepTwoRef, stepThreeRef, stepFourRef, nextStepButton, activeStep, setActiveStep, getLifeAnswers }) => {
  const { lifeEvents } = useLifeEvent();
  console.log(getLifeAnswers())
    return(
        <>
        <TextBox cursor={activeStep === 3 ?  "default" : "pointer"} ref={stepThreeRef} onClick={(e) => {nextStepButton(e, 3, stepTwoRef)}}>
            <StepHeader>Steg 3 av 3</StepHeader>
            <StepTitle>Spørsmål til min livssituasjon</StepTitle>
            {/* The icon beside the part header. Icon of 2 chat bubles */}
            <Chat2FillIcon className="stepIcon" title="a11y-title" color={activeStep >= 3 ? "green" : "gray"} fontSize="1.5rem" />
            {activeStep > 3 && <CheckMark><CheckmarkCircleFillIcon color='green' fontSize="2rem"></CheckmarkCircleFillIcon></CheckMark>}
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
        <div onClick={(e) => e.stopPropagation()}>
        <DynamicQuestions 
        lifeAwnsers={getLifeAnswers} 
        stepTwoBoxStates={lifeEvents} // Pass lifeEvents here
    />
              </div>
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