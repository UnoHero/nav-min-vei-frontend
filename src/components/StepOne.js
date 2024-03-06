import styled from 'styled-components';
import { useState, useEffect } from "react";
import { TextField } from "@navikt/ds-react";

// Fancy nav Icons from nav aksel
import { PersonFillIcon, CheckmarkCircleFillIcon } from '@navikt/aksel-icons';

// Styles thrue js
import { TextBox, StepTitle, StepHeader, StepText, NextStepButton, Txt, CheckMark } from "../components/styledComponents"

const StepOne = ({stepOneRef, stepTwoRef, nextStepButton, activeStep, data }) => {

  const [etat, setEtat] = useState();
  const [countries, setCountries] = useState([]);
  const [grossIncome, setGrossIncome] = useState();

  const whichFirstName = (data) => {
    if (data?.firstName?.skattReg) {
      return data?.firstName?.skattReg
    } else if (data?.firstName?.aaReg) {
      return data?.firstName?.aaReg
    } else if (data?.firstName?.folkReg) {
      return data?.firstName?.folkReg
    }
  }

  const whichMiddleName = (data) => {
    if (data?.middleName?.skattReg) {
      return data?.middleName?.skattReg
    } else if (data?.middleName?.aaReg) {
      return data?.middleName?.aaReg
    } else if (data?.middleName?.folkReg) {
      return data?.middleName?.folkReg
    }
  }

  const whichLastName = (data) => {
    if (data?.lastName?.skattReg) {
      return data?.lastName?.skattReg
    } else if (data?.lastName?.aaReg) {
      return data?.lastName?.aaReg
    } else if (data?.lastName?.folkReg) {
      return data?.lastName?.folkReg
    }
  }
  
  const dateOfBirth = (data) => {
    return data?.dateOfBirth?.folkReg
  }

  const displayFullName = (data) => {
    const fullName = `${whichFirstName(data)} ${whichMiddleName(data)} ${whichLastName(data)}`
    return fullName
  }

  useEffect(() => {
    if (data && data.grossIncome !== undefined) {
      setGrossIncome(data.grossIncome.toLocaleString().replace(/,/g, " "));
    }
  }, [data]);

  const handleInputChange = (event) => {
    // Remove spaces and commas from user input
    const input = event.target.value.replace(/\s/g, '').replace(/,/g, '');
    // Format the input value with spaces for readability
    const formattedInput = input.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    // Update the state with the formatted value
    setGrossIncome(formattedInput);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name');
        const data = await response.json();
        setCountries(data.map(country => country.name.common));
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);


  return(
    <>
      <TextBox cursor={activeStep === 1 ?  "default" : "pointer"} ref={stepOneRef} onClick={(e) => nextStepButton(e, 1, stepOneRef)}>
        <StepHeader>Steg 1 av 3</StepHeader>
        <StepTitle>Om meg</StepTitle>
        <PersonFillIcon className="stepIcon" title="a11y-title" color={activeStep >= 1 ? "blue" : "gray"} fontSize="1.5rem" />
        {activeStep > 1 && <CheckMark><CheckmarkCircleFillIcon color='green' fontSize="2rem"></CheckmarkCircleFillIcon></CheckMark>}
        {activeStep === 1 && 
          <div onClick={(e) => e.stopPropagation()}>
            <Txt>
              {data ? <b>Hei {displayFullName(data)}</b> : <b>Loading...</b>}
            </Txt>
            <StepText>
              Her finner du informasjon om 
              deg som veilederen har hentet 
              fra offentlige tjenester. Er svarene feil? 
              Da er det bare å endre i svarboksene.  
            </StepText>
            <h4>Personalia</h4>
            <b>Hentet fra Folkeregisteret</b>
            <div>
              <TextField label="Fornavn" defaultValue={whichFirstName(data)} />
              <TextField label="Mellomnavn" defaultValue={whichMiddleName(data)} />
              <TextField label="EtterNavn" defaultValue={whichLastName(data)}/>
              <TextField label="Hvor gammel er du?" type="date" defaultValue={dateOfBirth(data)}/>
            </div>
            <h4>Din Adresse</h4>
            <b>Hentet fra Folkeregisteret</b>
            <div>
              <TextField label="Postnummer" /> 
              <label htmlFor="countrySelect">Land</label>
              <select id="countrySelect">
                <option value="">Select a country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
            </div>
            <h4>Familie og sivilstatus</h4>
            <b>Hentet fra Folkeregisteret</b>
            <div>
              <TextField label="Ektefelle" /> 
              <TextField label="Antall barn" />
            </div>
            <h4>Din økonomiske situasjon</h4>
            <b>Hentet fra Skatteetaten</b>
            <div>
              <TextField
                label="Din bruttoinntekt de siste tolv månedene"
                value={grossIncome}
                onChange={handleInputChange}
              />

              <TextField label="Ditt lån per dag" />
              <TextField label="Din formue per i dag" />
              <TextField label="Din skatteprosent" />
              <TextField label="Dine forsikringer" defaultValue={data?.insurance} />

            </div>
            {/* Moves the user to the next part */}
            <NextStepButton onClick={(e) => {
              nextStepButton(e, 2, stepTwoRef)
            }}>Neste Steg</NextStepButton>
          </div>
        }
      </TextBox>    
      
    </>
  )
}

export default StepOne;