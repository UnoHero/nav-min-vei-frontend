import React, {useState} from "react";
import { Radio, RadioGroup } from "@navikt/ds-react";
import {InputLabel, InputBox } from "../components/styledComponents"

const IdBox = (id, setId) => {

    const [selectedValue, setSelectedValue] = useState('');

    const handleRadioChange = (e) => {
        setSelectedValue(e.target.value);
        console.log(e.target.value);
    }


    return(
        <div>
            <RadioGroup onClick={(e) => {
                e.stopPropagation()
                handleRadioChange(e)
            }} legend="Ønsker du å hente data det offentlige har om deg for å autofylle svar i veilederen?">
                <Radio value="Yes">Ja, jeg ønsker å hente data fra offentlige tjenester</Radio>
                <Radio value="No">Nei, jeg ønsker å fylle ut selv</Radio>
            </RadioGroup>

            {selectedValue === 'Yes' && (
            <div>
            {/* Show something when 'Yes' is selected */}
            <InputLabel>Fødselsnummer:</InputLabel>
            <InputBox onChange={(e) => setId(e.target.value)}></InputBox>
            </div>
            )}
        </div>
    )
};
   
export  default IdBox;