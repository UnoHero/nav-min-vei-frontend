import styled from 'styled-components';
import {useState} from "react";

// Fancy nav Icons from nav aksel
import { PersonFillIcon, CheckmarkCircleFillIcon } from '@navikt/aksel-icons';

// Styles thrue js
import { TextBox, StepTitle, StepHeader, StepText, NextStepButton, Txt, CheckMark } from "../components/styledComponents"

const StepOne = ({stepOneRef, stepTwoRef, nextStepButton, activeStep, data }) => {


  const [etat, setEtat] = useState();

  const whichFirstName = (data) => {
    if (data?.firstName?.skatReg) {
      return data?.firstName?.skatReg
    } else if (data?.firstName?.aaReg) {
      return data?.firstName?.aaReg
    } else if (data?.firstName?.folkReg) {
      return data?.firstName?.folkReg
    }
  }

  const whichMiddleName = (data) => {
    if (data?.middleName?.skatReg) {
      return data?.middleName?.skatReg
    } else if (data?.middleName?.aaReg) {
      return data?.middleName?.aaReg
    } else if (data?.middleName?.folkReg) {
      return data?.middleName?.folkReg
    }
  }

  const whichLastName = (data) => {
    if (data?.lastName?.skatReg) {
      return data?.lastName?.skatReg
    } else if (data?.lastName?.aaReg) {
      return data?.lastName?.aaReg
    } else if (data?.lastName?.folkReg) {
      return data?.lastName?.folkReg
    }
  }

  const displayFullName = (data) => {
    const fullName = `${whichFirstName(data)} ${whichMiddleName(data)} ${whichLastName(data)}`
    return fullName
  }

    return(
        <>
        <TextBox cursor={activeStep === 1 ?  "default" : "pointer"} ref={stepOneRef} onClick={(e) => nextStepButton(e, 1, stepOneRef)}>
            <StepHeader>Steg 1 av 3</StepHeader>
            <StepTitle>Om meg</StepTitle>
            <PersonFillIcon className="stepIcon" title="a11y-title" color={activeStep >= 1 ? "blue" : "gray"} fontSize="1.5rem" />
            {activeStep > 1 && <CheckMark><CheckmarkCircleFillIcon color='green' fontSize="2rem"></CheckmarkCircleFillIcon></CheckMark>}
            {activeStep === 1 && 
              <>
                <Txt>
                  {data ? <b>Hei {displayFullName(data)}</b> : <b>Loading...</b>}
                </Txt>
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