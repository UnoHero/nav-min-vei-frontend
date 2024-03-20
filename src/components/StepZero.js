import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import IdBox from './IdBox';
// Fancy nav Icons from nav aksel
import { useSpring, animated } from '@react-spring/web'
import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';

// Styles thrue js
import { TextBox, StepTitle, StepHeader, StepText, NextStepButton, RadioBox, Txt, DataBilder, Image, CheckMark } from "../components/styledComponents"
import { useTheme } from 'styled-components';

const StepZero = ({ stepZeroRef, stepOneRef, nextStepButton, activeStep, getPersonData, handleChange}) => {

    const [smallBoxOpen, setSmallBoxOpen] = useState(null)
    const [boxed, setBoxed] = useState(false)
    const boxRef = useRef(null)
    const [boxHeight, setBoxHeight] = useState()


    useEffect(() => {
        setBoxHeight(boxRef.current?.offsetHeight)
    }, [boxRef])

    useEffect(() => {
        setBoxHeight(boxRef.current?.offsetHeight)
    }, [smallBoxOpen])

    useEffect(() => {
        if(activeStep !== 0){
            setBoxed(true)
        }
        if(activeStep === 0){
            setBoxed(false)
        }
    },[activeStep])


    useEffect(() => {
        //console.log("The box height is: ", boxHeight)
        openBox()
    }, [boxHeight])

    const [springs, api] = useSpring(() => ({
        from: { height: 0, opacity: 0 },
    }))

    const openBox = () => {
        api.start({
            to: {height: boxed ? 0 : boxHeight, opacity: boxed ? 0 : 1,},
            config: {
                mass: 1,
                tension: 170, 
                friction: 26
            },
        })
    }

    useEffect(() => {

        setBoxHeight(boxRef.current?.offsetHeight)

    },[boxed])

    const setSmallBox = (e) => {
        setSmallBoxOpen(e)
    }

    return(
        <>
        {/* Moves the user to next part */}
        <TextBox cursor={activeStep === 0 ?  "default" : "pointer"} ref={stepZeroRef} onClick={(e) => {
                nextStepButton(e, 0, stepZeroRef)
            }}>
            <StepHeader>Samling av din informasjon via</StepHeader>

            <StepTitle>Mine Data</StepTitle>
            {activeStep > 0 && <CheckMark><CheckmarkCircleFillIcon color='green' fontSize="2rem"></CheckmarkCircleFillIcon></CheckMark>}
            <br></br>

            {activeStep === 0 && 
            <>
            <animated.div style={{...springs}}>
            <div ref={boxRef} onClick={(e) => e.stopPropagation()}>
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
                <IdBox setNumber={handleChange} setSmallBox={setSmallBox} activeStep={activeStep}/>
                </RadioBox>

                {/* Moves the user to the next part */}
                <NextStepButton onClick={(e) => {
                    nextStepButton(e, 1, stepZeroRef)
                    getPersonData()
                }}>Gå Videre</NextStepButton>
            </div>
            </animated.div>
            </>
            }

        </TextBox>
        
        </>
    )
}

export default StepZero