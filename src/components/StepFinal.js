import styled from 'styled-components';
import { DownloadIcon, PrinterSmallIcon } from '@navikt/aksel-icons';

// Styles thrue js
import { TextBox, StepTitle, StepText, } from "../components/styledComponents"

const StepFinal = ({ stepFourRef,  nextStepButton, activeStep }) => {

    return(
        <>
        
        <TextBox cursor={activeStep === 4 ?  "default" : "pointer"} ref={stepFourRef}  onClick={(e) => nextStepButton(e, 4, stepFourRef)}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <StepTitle>Mine resultater</StepTitle>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                  <DownloadIcon title="a11y-title" fontSize="2.5rem" />
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
                <br/><br/>
                <StepText>Resultatene nedenfor er basert på informasjonen fra ulike databaser via MineData, samt svar du har oppgitt i veilederen. </StepText>

              </>

            }
          </TextBox>
        </>
    )
}

export default StepFinal;