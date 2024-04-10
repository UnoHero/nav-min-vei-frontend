import styled from 'styled-components';
import { DownloadIcon, PrinterSmallIcon } from '@navikt/aksel-icons';

// Styles thrue js
import { TextBox, StepTitle, StepText, } from "../components/styledComponents"

import { useLifeEvent } from '../contexts/LifeEventContext';


const ColorBoxStepFinal = styled.div `
background-color: ${(props) => props.backgroundColor || 'white'};
padding: 7%;
position: relative;
width: 131.6%;
left: -96px;
`;

const ColorLittleBoxStepFinal = styled.div `
background-color: ${(props) => props.backgroundColor || 'black'};
text-align: center;
padding: 2%;
position: relative;
width: 20%;
left: 38%;
border-radius: 10px;
margin-top: 5%;
margin-bottom: 10%;
`;

const TextColor = styled.span `
font-size: 1.75rem;
font-weight: bold;
color: ${(props) => props.textColor || 'black'};
white-space: nowrap;
`;





  

const StepFinal = ({ stepFourRef, nextStepButton, activeStep }) => {
  const { lifeEvents } = useLifeEvent();
  // Replace with actual data from DynamicQuestions
  const answers = {}; 

  const getResults = () => {
    let results = {
      certainBenefits: [], 
      uncertainBenefits: [], 
      noBenefits: [],
      relevantInfo: []
    };

    // Logic for box1
    if (lifeEvents.box1) {
      if (answers[1] === "Ja") {
        results.certainBenefits.push("Barnebidrag");
      } else {
        results.uncertainBenefits.push("Barnebidrag");
      }
    }

    // Logic for box2
    if (lifeEvents.box2) {
      results.relevantInfo.push("Informasjon om barns helse");
    }

    // Logic for box3
    if (lifeEvents.box3) {
      results.relevantInfo.push("Jobbsøknadshjelp");
      results.uncertainBenefits.push("Arbeidsledighetstrygd");
    }

    // Logic for box4
    if (lifeEvents.box4) {
      results.certainBenefits.push("Flyttehjelp");
      results.relevantInfo.push("Bosituasjonsråd");
    }

    // Logic for box5
    if (lifeEvents.box5) {
      results.certainBenefits.push("Støtte til nye bedrifter");
      results.uncertainBenefits.push("Investorinformasjon");
    }

    // Logic for box6
    if (lifeEvents.box6) {
      results.relevantInfo.push("Frivillighetsstøtte");
    }

    // Logic for box7
    if (lifeEvents.box7) {
      results.certainBenefits.push("Begravelsesstønad");
      results.noBenefits.push("Arveavgiftsfritak");
    }

    // Add further logic as per the need

    return results;
  };

  const results = getResults();

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
                <StepText>Resultatene nedenfor er basert på informasjonen fra ulike
                  <br/>
                 databaser via MineData, samt svar du har oppgitt i veilederen. </StepText>

                <ColorBoxStepFinal backgroundColor='#CCF1D6'><StepTitle>Søknader vi er <TextColor textColor='#06893A'>ganske sikre</TextColor> på at du har rett på</StepTitle>
                {results.certainBenefits.map((benefit, index) => (
                <p key={index}>{benefit}</p>
                ))}
                </ColorBoxStepFinal>

                <ColorBoxStepFinal backgroundColor='#FFECCC'><StepTitle>Søknader vi er <TextColor textColor='#F9BE26'>mindre sikre</TextColor> på at du har rett på</StepTitle>
                {results.uncertainBenefits.map((benefit, index) => (
                <p key={index}>{benefit}</p>
                ))}
                </ColorBoxStepFinal>

                <ColorBoxStepFinal backgroundColor='#FFD3D3'><StepTitle>Søknader vi er <TextColor textColor='#BA3A26'>ganske sikre</TextColor> på at du <TextColor textColor='#BA3A26'>ikke</TextColor> har rett på</StepTitle>
                {results.noBenefits.map((benefit, index) => (
                <p key={index}>{benefit}</p>
                ))}
                </ColorBoxStepFinal>
                <ColorBoxStepFinal backgroundColor='#94C6F3'><StepTitle><TextColor textColor='#0067C5'>Informasjon</TextColor> som kan være relevant for deg</StepTitle>
                {results.relevantInfo.map((benefit, index) => (
                <p key={index}>{benefit}</p>
                ))}
                </ColorBoxStepFinal>

              </>
            }
          </TextBox>
        </>
    )
}

export default StepFinal;