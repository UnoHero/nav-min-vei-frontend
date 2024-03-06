import styled from 'styled-components';
import {useState} from "react";
import { Accordion, TextField  } from "@navikt/ds-react";

// Fancy nav Icons from nav aksel
import { PersonFillIcon, CheckmarkCircleFillIcon } from '@navikt/aksel-icons';

// Styles thrue js
import { TextBox, StepTitle, StepHeader, StepText, NextStepButton, Txt, CheckMark } from "../components/styledComponents"

const StepOne = ({stepOneRef, stepTwoRef, nextStepButton, activeStep, data }) => {


  const [etat, setEtat] = useState();

  const whichFirstName = (data) => {
    if (data?.firstName?.skattReg) {
      return data?.firstName?.skattReg
    } else if (data?.firstName?.aaReg) {
      return data?.firstName?.aaReg
    } else if (data?.firstName?.folkReg) {
      return data?.firstName?.folkReg
    }
  }

  const whichMiddleName = (data) => {
    if (data?.middleName?.skattReg) {
      return data?.middleName?.skattReg
    } else if (data?.middleName?.aaReg) {
      return data?.middleName?.aaReg
    } else if (data?.middleName?.folkReg) {
      return data?.middleName?.folkReg
    }
  }

  const whichLastName = (data) => {
    if (data?.lastName?.skattReg) {
      return data?.lastName?.skattReg
    } else if (data?.lastName?.aaReg) {
      return data?.lastName?.aaReg
    } else if (data?.lastName?.folkReg) {
      return data?.lastName?.folkReg
    }
  }

  const dateOfBirth = (data) => {
    console.log(data?.dateOfBirth?.folkReg);
    console.log(data);
    return data?.dateOfBirth?.folkReg
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
              <div onClick={(e) => e.stopPropagation()}>
                <Txt>
                  {data ? <b>Hei {displayFullName(data)}</b> : <b>Loading...</b>}
                </Txt>
                <StepText>
                  Her finner du informasjon om 
                  deg som veilederen har hentet 
                  fra offentlige tjenester. Er svarene feil? 
                  Da er det bare å endre i svarboksene.  
                </StepText>
                <Accordion>
                  <Accordion.Item>
                    <Accordion.Header>Personalia</Accordion.Header>
                    <Accordion.Content>
                      <b>Hentet fra Folkeregisteret</b>
                      <div>
                        <TextField label="Fornavn" defaultValue={whichFirstName(data)} />
                        <TextField label="Mellomnavn" defaultValue={whichMiddleName(data)} />
                        <TextField label="EtterNavn" defaultValue={whichLastName(data)}/>
                        <TextField label="Hvor gammel er du?" type="date" defaultValue={dateOfBirth(data)}/>
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                  <Accordion.Item>
                    <Accordion.Header>Din Adresse</Accordion.Header>
                    <Accordion.Content>
                      <b>Hentet fra Folkeregisteret</b>
                      <div>
                        <TextField label="Postnummer" /> 
                        <TextField label="Land" />
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                  <Accordion.Item>
                    <Accordion.Header>Familie og sivilstatus</Accordion.Header>
                    <Accordion.Content>
                    <b>Hentet fra Folkeregisteret</b>
                      <div>
                        <TextField label="Ektefelle" /> 
                        <TextField label="Antall barn" />
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                  <Accordion.Item>
                    <Accordion.Header>Din økonomiske situasjon</Accordion.Header>
                    <Accordion.Content>
                    <b>Hentet fra Skatteetaten</b>
                      <div>
                        <TextField label="Din bruttoinntekt de siste tolv månedene" /> 
                        <TextField label="Ditt lån per dag" />
                        <TextField label="Din formue per i dag" />
                        <TextField label="Din skatteprosent" />
                        <TextField label="Dine forsikringer" />

                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion>
                {/* Moves the user to the next part */}
                <NextStepButton onClick={(e) => {
                  nextStepButton(e, 2, stepTwoRef)
                }}>Neste Steg</NextStepButton>
              </div>
            }
          </TextBox>    
        
        </>
    )
}

export default StepOne;