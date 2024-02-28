import styled from 'styled-components';
// Fancy nav Icons from nav aksel
import { PersonFillIcon, CheckmarkCircleFillIcon } from '@navikt/aksel-icons';

// Styles thrue js
import { TextBox, StepTitle, StepHeader, StepText, NextStepButton, Txt, InputBox, InputLabel, CheckMark } from "../components/styledComponents"

const StepOne = ({stepOneRef, stepTwoRef, nextStepButton, activeStep, setActiveStep, id, setId,}) => {

    const getPersonData = async () => {
        const response = await fetch(`http://localhost:3000/user/${id}`)
        const data = await response.json()
        console.log(data)
      }


    return(
        <>
        <TextBox ref={stepOneRef} onClick={(e) => nextStepButton(e, 1, stepOneRef)}>
            <StepHeader>Steg 1 av 3</StepHeader>
            <StepTitle>Om meg</StepTitle>
            <PersonFillIcon className="stepIcon" title="a11y-title" color={activeStep >= 1 ? "blue" : "gray"} fontSize="1.5rem" />
            {activeStep > 1 && <CheckMark><CheckmarkCircleFillIcon color='green' fontSize="2rem"></CheckmarkCircleFillIcon></CheckMark>}
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
                {/* Moves the user to the next part */}
                <NextStepButton onClick={(e) => {
                  nextStepButton(e, 2, stepTwoRef)
                  getPersonData(id)
                }}>Neste Steg</NextStepButton>
              </>
            }
          </TextBox>    
        
        </>
    )
}

export default StepOne;