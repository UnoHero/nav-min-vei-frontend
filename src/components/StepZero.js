import styled from 'styled-components';
// Fancy nav Icons from nav aksel
import { Radio, RadioGroup } from "@navikt/ds-react";

// Styles thrue js
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

const StepHeader = styled.div`
  font-size: 1rem;
`;

const StepText = styled.div`
 font-size: 1rem;
 margin: 2rem 0rem;
`;

const NextStepButton = styled.button`
  border-radius: 4px;
  border: 0px;
  padding: 12px 20px;
  background-color: #0067C5;
  color: white;
  cursor: pointer;
`;

const RadioBox = styled.div`
  padding: 3rem 2rem;
  margin: 2rem 0rem;
  background-color: #CCE1FF;
  border-radius: 0.5rem;

`;
const Txt = styled.div`
fontSize: 20%;
`;

const DataBilder = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
  width: 400px;
`;

// Pictures of the different agencies
const Image = styled.img`
  max-width: auto;
  max-height: 40px;
  margin: 10px; /* Adjust the spacing between images */
`;

const StepZero = ({ stepOneRef, nextStepButton, activeStep, setActiveStep}) => {
    

    return(
        <>
        {/* Moves the user to next part */}
        <TextBox cursor={activeStep === 0 ?  "default" : "pointer"} onClick={() => setActiveStep(0)}>
            <StepHeader>Samling av din informasjon via</StepHeader>

            <StepTitle><b>MineData</b></StepTitle>
            <br></br><br></br>

            {activeStep === 0 && 
            <>
            <Txt><b>Datahenting fra offentlige tjenester</b></Txt>
            <StepText>
            Dersom du ønsker har du mulighet til å hente data fra 
            ulike offentlige etater slik at utfyllingen av veilederen 
            blir enklere for deg.
            </StepText>
            <StepText>
            Gjennom mine data kan du hente informasjon fra:
            </StepText>
            {/* The logos of the different agencies */}    
            <DataBilder>
                <Image src="https://media.snl.no/media/192713/standard_lanekassen.png" alt="Image 1" />
                <Image src="https://www.steinkjerleksikonet.no/img/vis_gen.php?tbl=bilde&fil=innhold&id=4430" alt="Image 2" />
                <Image src="https://yt3.googleusercontent.com/-Mlm9tVyseq0e2ZxW-liNWEKg_BTggFhKfrsqU8cXk4wbjE4OzHvy7L5cHUIMznp-3x2Hw_mVw=s900-c-k-c0x00ffffff-no-rj" alt="Image 3" />
                <Image src="https://v.imgi.no/373/0/6-1f672a9a-0d1a-4a84-9632-90ee3200cfe1-TOPLOGO.jpg" alt="Image 4" />
                <Image src="https://kommunikasjon.ntb.no/data/images/00306/95f3a80b-ceb5-4afb-9e0a-d1611744ba4d-w_960_h_960.jpg" alt="Image 5" />
                <Image src="https://media.snl.no/media/55949/standard_innovasjon-norge.png" alt="Image 6" />
            </DataBilder>
              
            <RadioBox>
            <RadioGroup legend="Ønsker du å hente data det offentlige har om deg for å autofylle svar i veilederen?">
                <Radio value="Yes">Ja, jeg ønsker å hente data fra offentlige tjenester</Radio>
                <Radio value="No">Nei, jeg ønsker å fylle ut selv</Radio>
            </RadioGroup>
            </RadioBox>
            {/* Moves the user to the next part */}
            <NextStepButton onClick={(e) => nextStepButton(e, 1, stepOneRef)}>Gå Videre</NextStepButton>

            </>
            }

        </TextBox>
        
        </>
    )
}

export default StepZero