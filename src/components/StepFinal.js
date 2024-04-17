import styled from 'styled-components';
import { DownloadIcon, PrinterSmallIcon } from '@navikt/aksel-icons';

// Import Svg
import NavLogo from '../Pictures/FinalStep/NavLogo.svg';
import PleiePenger from '../Pictures/FinalStep/PleiePenger.svg';

// Styles thrue js
import { TextBox, StepTitle, StepText, } from "../components/styledComponents"
import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';

// Css components for the colored header boxes

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

// Components for boxes beneath  the colored headers

// Text for which criteria you fulfill
const UnderText = styled.h1`
  color: black;
  font-size: 16px;
  text-align: left;
  margin-left: 3%;
`;

// The whole box
const FinalBox = styled.div`
  width: 200px;
  height: 300px; 
  background-color: #ffffff; 
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); 
  margin-bottom: 5%;
  padding-left: 10px;
  padding-right: 20px;
`;

// Grid container inside The box that contains the Text
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns with equal width */
  grid-gap: 20px; /* Gap between grid items */
`;

// Styled component for each grid item
const GridItem = styled.div`
  display: flex; /* Use flexbox */
  align-items: center; /* Center items vertically */
`;

// The text on the top that says which type of benefit it is
const HeadText = styled.p`
font-size: 12px;
padding: 2%;
white-space: nowrap;
margin-right: 2%;
`;

// The big image in the middle
const BigImage = styled.img`

`;

// The image that shows which company offers this benefit
const FinalBoxIcon = styled.img`
padding-left: 20%;
margin-top: 6%;
margin-left: 5%;
`;

const gridItems = [
  { icon: '📱', text: 'Mobile' },
  { icon: '💻', text: 'Desktop' },
  { icon: '🖥️', text: 'Laptop' },
  { icon: '📺', text: 'TV' }
];

  

const StepFinal = ({ stepFourRef,  nextStepButton, activeStep }) => {
  const navText = 'NAV';
  const kommuneText = 'KOMMUNE';
  const husbankenText = 'HUSBANKEN';

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

                <ColorBoxStepFinal backgroundColor='#CCF1D6'><StepTitle>Stønader vi er <TextColor textColor='#06893A'>ganske sikre</TextColor> på at du har rett på</StepTitle></ColorBoxStepFinal>

                <ColorLittleBoxStepFinal backgroundColor='#94C6F3'><StepTitle>Idag</StepTitle></ColorLittleBoxStepFinal>
                 <FinalBox>
                    <HeadText>PENGESTØTTE FRA {navText} <FinalBoxIcon src={NavLogo} alt='Nav logo'/> </HeadText> 
                    <BigImage src={PleiePenger} alt='Pleie penger logo' />
                    <UnderText>Pleiepenger ved livets sluttfase</UnderText>
                    <GridContainer>
                    <GridItem>
                      <CheckmarkCircleFillIcon color='green' fontSize="2rem" />
                      <StepText>Medlem av folketrygden</StepText>
                    </GridItem>
                    <GridItem>
                      <CheckmarkCircleFillIcon color='green' fontSize="2rem" />
                      <StepText>Another Step</StepText>
                    </GridItem>
                    {/* Add more GridItem components for additional rows */}
                  </GridContainer>
                  </FinalBox>    

                <ColorBoxStepFinal backgroundColor='#FFECCC'><StepTitle>Stønader vi er <TextColor textColor='#F9BE26'>mindre sikre</TextColor> på at du har rett på</StepTitle></ColorBoxStepFinal>
                <ColorBoxStepFinal backgroundColor='#FFD3D3'><StepTitle>Stønader vi er <TextColor textColor='#BA3A26'>ganske sikre</TextColor> på at du <TextColor textColor='#BA3A26'>ikke</TextColor> har rett på</StepTitle></ColorBoxStepFinal>
                <ColorBoxStepFinal backgroundColor='#94C6F3'><StepTitle><TextColor textColor='#0067C5'>Informasjon</TextColor> som kan være relevant for deg</StepTitle></ColorBoxStepFinal>
              </>
            }
          </TextBox>
        </>
    )
}

export default StepFinal;