import styled from 'styled-components';
import { useState } from 'react';
import IdBox from './IdBox';
// Fancy nav Icons from nav aksel
import { Radio, RadioGroup } from "@navikt/ds-react";
import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';

// Styles thrue js
import { TextBox, StepTitle, StepHeader, StepText, NextStepButton, RadioBox, Txt, DataBilder, Image, CheckMark } from "../components/styledComponents"

const StepZero = ({ stepZeroRef, stepOneRef, nextStepButton, activeStep }) => {
 
  const [id, setId] = useState(null);

  const  handleChange = (number) => {
    setId(number)
    console.log(id)
  }

  const getPersonData = async () => {
    const response = await fetch(`http://localhost:3000/user/${id}`)
    const data = await response.json()
    console.log(data)
  }

    return(
        <>
        {/* Moves the user to next part */}
        <TextBox cursor={activeStep === 0 ?  "default" : "pointer"} ref={stepZeroRef} onClick={(e) => nextStepButton(e, 0, stepZeroRef)}>
            <StepHeader>Samling av din informasjon via</StepHeader>

            <StepTitle>MineData</StepTitle>
            {activeStep > 0 && <CheckMark><CheckmarkCircleFillIcon color='green' fontSize="2rem"></CheckmarkCircleFillIcon></CheckMark>}
            <br></br>

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
            <IdBox setNumber={handleChange}/>
            </RadioBox>

            {/* Moves the user to the next part */}
            <NextStepButton onClick={(e) => {
              nextStepButton(e, 1, stepOneRef)
              getPersonData()
            }}>Gå Videre</NextStepButton>

            </>
            }

        </TextBox>
        
        </>
    )
}

export default StepZero