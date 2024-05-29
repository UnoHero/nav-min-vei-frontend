import styled from 'styled-components';
import { DownloadIcon, PrinterSmallIcon } from '@navikt/aksel-icons';

// Import Svg
import NavLogo from '../Pictures/FinalStep/NavLogo.svg';
import HusbankenLogo from '../Pictures/FinalStep/HusbankenLogo.svg';
import KsLogo from '../Pictures/FinalStep/KsLogo.svg';
import HelsenorgeLogo from '../Pictures/FinalStep/HelsenorgeLogo.svg';
import SkattLogo from '../Pictures/FinalStep/SkattLogo.svg';
import AltinnLogo from '../Pictures/FinalStep/AltinnLogo.svg';
import PleiePenger from '../Pictures/FinalStep/PleiePenger.svg';
import Lønnsgaranti from "../Pictures/FinalStep/Lønnsgaranti.svg"
import Kvalifiserings_programmet from "../Pictures/FinalStep/Kvalifiserings-programmet.svg"
import Arbeidstrening from "../Pictures/FinalStep/Arbeidstrening.svg"
import Avklaring from "../Pictures/FinalStep/Avklaring.svg"
import Arbeidsavklaring from "../Pictures/FinalStep/Arbeidsavklaring.svg"
import Tree from "../Pictures/FinalStep/Tree.svg"
import Arbeidsledighet from "../Pictures/FinalStep/Arbeidsledighet.svg"

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
  border-radius: 2px;
  background-color: #ffffff; 
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1); 
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 20px;
`;

// Grid container inside The box that contains the Text
const GridContainer = styled.div`
  position: relative;
  left: -20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Two columns with equal width */
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

const HeadText2 = styled.p`
font-size: 12px;
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

const List = styled.ul`
  position: relative;
  list-style-image: url("../Pictures/FinalStep/CheckmarkCircleFill.svg");
`
const ListItem = styled.li`
  position: relative;
  display: flex;
`
const ListIcon = styled.div`
  position: absolute;
  transform: translateY(-50%);
  height: 18px;
  width: 18px;
  top: 50%;
  left: -20%;
  font-size: 20px;
`
const ListText = styled.div`
  font-size: 1rem;
  margin: 4px 0;
`

const InfoTitle = styled.div`
  font-size: 2rem;
`
const InfoText = styled.div`
  font-size: 1.4rem;
`
const ImageDiv = styled.div`
  margin: 50px auto;
  text-align: center;
`

const BlueText = styled.div`
  color: #0067C5;
  text-align: center;
  margin: 50px 20px;
`

const gridItems = [
  { icon: '📱', text: 'Mobile' },
  { icon: '💻', text: 'Desktop' },
  { icon: '🖥️', text: 'Laptop' },
  { icon: '📺', text: 'TV' }
];

  

const StepFinal = ({ stepFourRef,  nextStepButton, activeStep, verySureRef, kindaSureRef, extremlySureRef, infoRef }) => {
  const navText = 'NAV';
  const kommuneText = 'KOMMUNE';
  const husbankenText = 'HUSBANKEN';
  const altinnText = 'ALTINN';
  const skattText = 'SKATTEETATEN';
  const helsenorgeText = 'HELSENORGE';
 
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
              <div onClick={(e) =>{e.stopPropagation()}}>
                
                <StepText>Resultatene nedenfor er basert på informasjonen fra ulike
                  <br/>
                 databaser via MineData, samt svar du har oppgitt i veilederen. </StepText>

                <ColorBoxStepFinal ref={verySureRef} backgroundColor='#CCF1D6'><StepTitle>Stønader vi er <TextColor textColor='#06893A'>ganske sikre</TextColor> på at du har rett på</StepTitle></ColorBoxStepFinal>

                <ColorLittleBoxStepFinal backgroundColor='#94C6F3'><StepTitle>Idag</StepTitle></ColorLittleBoxStepFinal>
                <GridContainer>
                    <FinalBox>
                      <HeadText>PENGESTØTTE FRA {navText} <FinalBoxIcon src={NavLogo} alt='Nav logo'/> </HeadText> 
                      <BigImage src={Lønnsgaranti} alt='Pleie penger logo' />
                      <UnderText>Lønnsgaranti</UnderText>
                      <List>
                        <ListItem>
                          <ListIcon>
                            <CheckmarkCircleFillIcon color='green'/>
                          </ListIcon>
                          <ListText>Medlem av folketrygden</ListText>
                        </ListItem>
                        <ListItem>
                          <ListIcon>
                            <CheckmarkCircleFillIcon color='green'/>
                          </ListIcon>
                          <ListText>Arbeidsledig</ListText>
                        </ListItem>
                        <ListItem>
                          <ListIcon>
                            <CheckmarkCircleFillIcon color='green'/>
                          </ListIcon>
                          <ListText>Arbeidsgiver konkurs</ListText>
                        </ListItem>
                      </List>
                    </FinalBox>    

                  </GridContainer>

                  <BlueText>Viser 1 av 1 ytelser</BlueText>

                  <ColorLittleBoxStepFinal ref={kindaSureRef} backgroundColor='#94C6F3'><StepTitle>Senere</StepTitle></ColorLittleBoxStepFinal>
                  
                  <GridContainer>

                   <FinalBox>
                      <HeadText>PENGESTØTTE FRA {navText} <FinalBoxIcon src={NavLogo} alt='Nav logo'/> </HeadText> 
                      <BigImage src={PleiePenger} alt='Pleie penger logo' />
                      <UnderText>Dagpenger</UnderText>
                      <List>
                        <ListItem>
                          <ListIcon>
                            <CheckmarkCircleFillIcon color='green'/>
                          </ListIcon>
                          <ListText>Oppholder deg i Norge og medlem av folketrygden</ListText>
                        </ListItem>

                        <ListItem>
                          <ListIcon>
                            <CheckmarkCircleFillIcon color='green'/>
                          </ListIcon>
                          <ListText>Du er en reell arbeidssøker</ListText>
                        </ListItem>

                        <ListItem>
                          <ListIcon>
                            <CheckmarkCircleFillIcon color='green'/>
                          </ListIcon>
                          <ListText>Mistet minst 50% av arbeids-tiden din</ListText>
                        </ListItem>
                        <ListItem>
                          <ListIcon>
                            <CheckmarkCircleFillIcon color='green'/>
                          </ListIcon>
                          <ListText>Under 67 år</ListText>
                        </ListItem>
                      </List>
                    </FinalBox>
                </GridContainer>

                <BlueText>Viser 1 av 1 ytelser</BlueText>

                <ColorBoxStepFinal ref={extremlySureRef} backgroundColor='#FFECCC'><StepTitle>Stønader vi er <TextColor textColor='#F9BE26'>mindre sikre</TextColor> på at du har rett på</StepTitle></ColorBoxStepFinal>

                <GridContainer>
                  <FinalBox>
                    <HeadText2>Pengestøtte, oppfølging<br />og veiledning fra {navText} <FinalBoxIcon src={NavLogo} alt='Nav logo'/> </HeadText2> 
                    <BigImage src={Kvalifiserings_programmet} alt='Kvalifiserings-programmet logo' />
                    <UnderText>Kvalifiserings-programmet</UnderText>
                    <List>
                      <ListItem>
                        <ListIcon>
                          <CheckmarkCircleFillIcon color='green'/>
                        </ListIcon>
                        <ListText>Medlem av folketrygden</ListText>
                      </ListItem>

                      <ListItem>
                        <ListIcon>
                          <CheckmarkCircleFillIcon color='green'/>
                        </ListIcon>
                        <ListText>Arbeidsledig</ListText>
                      </ListItem>

                      <ListItem>
                        <ListIcon>
                          <CheckmarkCircleFillIcon color='#FFC166'/>
                        </ListIcon>
                        <ListText>Trenger ekstra oppfølging for å komme ut i jobb </ListText>
                      </ListItem>
                    </List>
                  </FinalBox>

                  <FinalBox>
                    <HeadText>PENGESTØTTE FRA {navText} <FinalBoxIcon src={NavLogo} alt='Nav logo'/> </HeadText> 
                    <BigImage src={Arbeidstrening} alt='Arbeidstrening logo' />
                    <UnderText>Arbeidstrening</UnderText>
                    <List>
                      <ListItem>
                        <ListIcon>
                          <CheckmarkCircleFillIcon color='green'/>
                        </ListIcon>
                        <ListText>Medlem av folketrygden</ListText>
                      </ListItem>

                      <ListItem>
                        <ListIcon>
                          <CheckmarkCircleFillIcon color='green'/>
                        </ListIcon>
                        <ListText>Arbeidssøker</ListText>
                      </ListItem>

                      <ListItem>
                        <ListIcon>
                          <CheckmarkCircleFillIcon color='#FFC166'/>
                        </ListIcon>
                        <ListText>Trenger hjelp med å komme tilbake i jobb</ListText>
                      </ListItem>
                    </List>
                  </FinalBox>
                </GridContainer>

                <BlueText>Viser 2 av 2 ytelser</BlueText>

                <ColorBoxStepFinal ref={infoRef} backgroundColor='#FFD3D3'><StepTitle>Stønader vi er <TextColor textColor='#BA3A26'>ganske sikre</TextColor> på at du <TextColor textColor='#BA3A26'>ikke</TextColor> har rett på</StepTitle></ColorBoxStepFinal>

                <GridContainer>
                  <FinalBox>
                    <HeadText>PENGESTØTTE FRA {navText} <FinalBoxIcon src={NavLogo} alt='Nav logo'/> </HeadText> 
                    <BigImage src={Avklaring} alt='Avklaring logo' />
                    <UnderText>Avklaring</UnderText>
                    <List>
                      <ListItem>
                        <ListIcon>
                          <CheckmarkCircleFillIcon color='green'/>
                        </ListIcon>
                        <ListText>Medlem av folketrygden</ListText>
                      </ListItem>

                      <ListItem>
                        <ListIcon>
                          <CheckmarkCircleFillIcon color='#BA3A26'/>
                        </ListIcon>
                        <ListText>Dårligere helse</ListText>
                      </ListItem>

                      <ListItem>
                        <ListIcon>
                          <CheckmarkCircleFillIcon color='green'/>
                        </ListIcon>
                        <ListText>Lenge ute av arbeidslivet</ListText>
                      </ListItem>
                    </List>
                  </FinalBox>

                  <FinalBox>
                    <HeadText>PENGESTØTTE FRA {navText} <FinalBoxIcon src={NavLogo} alt='Nav logo'/> </HeadText> 
                    <BigImage src={Arbeidsavklaring} alt='Arbeidstrening logo' />
                    <UnderText>Arbeidsavklarings-penger (AAP)</UnderText>
                    <List>
                      <ListItem>
                        <ListIcon>
                          <CheckmarkCircleFillIcon color='#BA3A26'/>
                        </ListIcon>
                        <ListText>Medlem av folketrygden i minst 5 år</ListText>
                      </ListItem>

                      <ListItem>
                        <ListIcon>
                          <CheckmarkCircleFillIcon color='#BA3A26'/>
                        </ListIcon>
                        <ListText>Nedsatt arbeidsevne på grunn av sykdom eller skade</ListText>
                      </ListItem>

                      <ListItem>
                        <ListIcon>
                          <CheckmarkCircleFillIcon color='#BA3A26'/>
                        </ListIcon>
                        <ListText>Behov for behandling</ListText>
                      </ListItem>

                      <ListItem>
                        <ListIcon>
                          <CheckmarkCircleFillIcon color='green'/>
                        </ListIcon>
                        <ListText>Du er mellom 18 og 67 år</ListText>
                      </ListItem>
                    </List>
                  </FinalBox>
                </GridContainer>

                <BlueText>Viser 2 av 2 ytelser</BlueText>

                <ColorBoxStepFinal backgroundColor='#94C6F3'><StepTitle><TextColor textColor='#0067C5'>Informasjon</TextColor> som kan være relevant for deg</StepTitle></ColorBoxStepFinal>

                <ImageDiv>
                  <BigImage src={Tree}></BigImage>
                  <InfoTitle>Enkeltpersonsforetak</InfoTitle>
                  <InfoText>Du er interessert i å starte ditt eget firma. Da er det en rekke ting det er lurt for deg å ha kunnskap om tidlig i prosessen. Under finner du aktuell informasjon</InfoText>
                </ImageDiv>

                <GridContainer>
                  <FinalBox>
                    <HeadText>INFO FRA {altinnText} <FinalBoxIcon src={AltinnLogo} alt='Altinn logo'/> </HeadText> 
                    <BigImage src={Lønnsgaranti} alt='Lønnsgaranti logo' />
                    <UnderText>Starte og registrere enkeltpersonforetak</UnderText>
                    <ListText>Her får du vite hva som kreves for å starte et enkeltpersonforetak, og hvordan du går frem når du skal registrere foretaket.</ListText>
                  </FinalBox>

                  <FinalBox>
                    <HeadText>KURS FRA {skattText} <FinalBoxIcon src={SkattLogo} alt='Nav logo'/> </HeadText> 
                    <BigImage src={Lønnsgaranti} alt='Lønnsgaranti logo' />
                    <UnderText>Kurs for nye næringsdrivende</UnderText>
                    <ListText>Skatteetaten arrangerer kurs tilpasset deg som skal starte virksomhet. Helt gratis. Du kan velge mellom kurs for enkeltpersonforetak (ENK) eller aksjeselskap (AS).</ListText>
                  </FinalBox>
                </GridContainer>

                <ImageDiv>
                  <BigImage src={Arbeidsledighet}></BigImage>
                  <InfoTitle>Arbeidsledighet</InfoTitle>
                  <InfoText>Du er blitt arbeidsledig, og vi forstår at det kan gi mange spørsmål. Under finner du mer informasjon om viktig informasjon som kan hjelpe deg på vei.</InfoText>
                </ImageDiv>

                <GridContainer>
                  <FinalBox>
                    <HeadText>PENGESTØTTE FRA {navText} <FinalBoxIcon src={NavLogo} alt='Nav logo'/> </HeadText> 
                    <BigImage src={Lønnsgaranti} alt='Lønnsgaranti logo' />
                    <UnderText>Informasjon om arbeidsledighet</UnderText>
                    <ListText>Har du blitt arbeidsledig kan du ha rett til dagpenger eller annen økonomisk støtte fra NAV, og hjelp til å komme i arbeid. Ler mer her. </ListText>
                  </FinalBox>

                  <FinalBox>
                    <HeadText>INFO FRA {helsenorgeText} <FinalBoxIcon src={HelsenorgeLogo} alt='Nav logo'/> </HeadText> 
                    <BigImage src={Lønnsgaranti} alt='Lønnsgaranti logo' />
                    <UnderText>Noen å snakke med i en krevende tid</UnderText>
                    <ListText>Å miste jobben er for mange en livskrise. Det kan hjelpe å snakke med noen, en rådgiver eller psykolog.</ListText>
                  </FinalBox>
                </GridContainer>            

                <BlueText>Viser 4 av 4 ytelser</BlueText>  

              </div>
            }
          </TextBox>
        </>
    )
}

export default StepFinal;