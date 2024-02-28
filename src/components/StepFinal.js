import styled from 'styled-components';
import { DownloadIcon, PrinterSmallIcon } from '@navikt/aksel-icons';

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

const StepText = styled.div`
 font-size: 1rem;
 margin: 2rem 0rem;
`;

const StepFinal = ({ stepFourRef,  nextStepButton, activeStep }) => {



    return(
        <>
        
        <TextBox ref={stepFourRef}  onClick={(e) => nextStepButton(e, 4, stepFourRef)}>
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