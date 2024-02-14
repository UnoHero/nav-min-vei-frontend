import styled from 'styled-components';
// Fancy nav Icons from nav aksel
import { PersonFillIcon } from '@navikt/aksel-icons';

// Styles thrue js

// The Imput filed were you write your socialSecurity number
const InputBox = styled.input`
    display: block;
    width: 290px;
    height: 48px;
    margin: 10px 0px;
    border-radius: 4px;
    border: 1px solid black;
`

// The header above the imput filed
const InputLabel = styled.label`
    font-size: 1rem;
`

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

const Txt = styled.div`
fontSize: 20%;
`;

const NextStepButton = styled.button`
  border-radius: 4px;
  border: 0px;
  padding: 12px 20px;
  background-color: #0067C5;
  color: white;
  cursor: pointer;
`;

const StepOne = ({stepOneRef, stepTwoRef, nextStepButton, activeStep, setActiveStep, id, setId,}) => {

    const getPersonData = async () => {
        const response = await fetch(`http://localhost:3000/user/${id}`)
        const data = await response.json()
        console.log(data)
      }


    return(
        <>
        <TextBox ref={stepOneRef} onClick={() => {
            {/* Moves the user to next part */}
              setActiveStep(1)
              setTimeout(() => {
                window.scrollTo({
                  top:stepOneRef.offsetTop - 20,
                  behavior: "smooth"
                })
              }, 0);
            }}>
            <StepHeader>Steg 1 av 3</StepHeader>
            <StepTitle>Om meg</StepTitle>
            <PersonFillIcon className="stepIcon" title="a11y-title" color={activeStep >= 1 ? "blue" : "gray"} fontSize="1.5rem" />
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