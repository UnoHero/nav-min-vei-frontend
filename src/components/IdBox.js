import React, {useState} from "react";
import { Radio, RadioGroup } from "@navikt/ds-react";
import {InputLabel, InputBox } from "../components/styledComponents"

const IdBox = ({setNumber}) => {

    const [selectedValue, setSelectedValue] = useState('');
    // "id" becomes the social security number that is writen in the text filed

    const handleRadioChange = (e) => {
        setSelectedValue(e.target.value);
        console.log(e.target.value);
    }


    return(
        <div onClick={(e) =>  e.stopPropagation() }>
            <RadioGroup onClick={(e) => {
                handleRadioChange(e)
            }} legend="Ønsker du å hente data det offentlige har om deg for å autofylle svar i veilederen?">
                <Radio value="Yes">Ja, jeg ønsker å hente data fra offentlige tjenester</Radio>
                <Radio value="No">Nei, jeg ønsker å fylle ut selv</Radio>
            </RadioGroup>

            {selectedValue === 'Yes' && (
            <div>
            {/* Show something when 'Yes' is selected */}
            <InputLabel>Fødselsnummer:</InputLabel>
            <InputBox onChange={(e) => {
                setNumber(e.target.value)
                }}></InputBox>
            </div>
            )}
        </div>
    )
};
   
export  default IdBox;