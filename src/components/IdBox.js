import React, {useState, useEffect, useRef, useLayoutEffect } from "react";
import { Radio, RadioGroup } from "@navikt/ds-react";
import {InputLabel, InputBox } from "../components/styledComponents"
import { useSpring, animated } from '@react-spring/web'

const IdBox = ({ setNumber, setSmallBox }) => {

    const [selectedValue, setSelectedValue] = useState('');
    // "id" becomes the social security number that is writen in the text filed

    const handleRadioChange = (e) => {
        setSelectedValue(e.target.value);
    }

    const [boxed, setBoxed] = useState(true)
    const boxRef = useRef(null)

    const [springs, api] = useSpring(() => ({
        from: { height: 0, opacity: 0 },
        
    }))

    useEffect(() => {
        api.start({
            to: {height: boxed ? boxRef.current?.offsetHeight : 0, opacity: boxed ? 1 : 0,},
            config: {
                mass: 1,
                tension: 170, 
                friction: 26
            },
            onRest: () => {
                if(selectedValue === "Yes"){
                    setSmallBox(true)
                }
                if(selectedValue === "No"){
                    setSmallBox(false)
                }
            }
        })
    },[api, boxed,])

    useEffect(() => {
        if(selectedValue === "Yes"){
            setBoxed(true)
        }
        if(selectedValue !== "Yes"){
            setBoxed(false)
        }
    }, [selectedValue])


    return(
        <div>
            <RadioGroup onClick={(e) => {
                handleRadioChange(e)
            }} legend="Ønsker du å hente data det offentlige har om deg for å autofylle svar i veilederen?">
                <Radio value="Yes">Ja, jeg ønsker å hente data fra offentlige tjenester</Radio>
                <Radio value="No">Nei, jeg ønsker å fylle ut selv</Radio>
            </RadioGroup>

            <animated.div style={{...springs}}>
                <div ref={boxRef}>
                {/* Show something when 'Yes' is selected */}
                <InputLabel>Fødselsnummer:</InputLabel>
                <InputBox onChange={(e) => {
                    setNumber(e.target.value)
                    }}></InputBox>
                </div>
            </animated.div>
        </div>
    )
};
   
export  default IdBox;