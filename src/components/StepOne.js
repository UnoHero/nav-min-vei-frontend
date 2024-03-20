import { useState, useEffect, useRef } from "react";
import { TextField } from "@navikt/ds-react";
import { useSpring, animated } from '@react-spring/web'

// Fancy nav Icons from nav aksel
import { PersonFillIcon, CheckmarkCircleFillIcon } from '@navikt/aksel-icons';

// Styles thrue js
import { TextBox, StepTitle, StepHeader, StepText, NextStepButton, Txt, CheckMark } from "../components/styledComponents"

const StepOne = ({stepZeroRef, stepOneRef, stepTwoRef, nextStepButton, activeStep, data }) => {

  const [countries, setCountries] = useState([]);
  const [grossIncome, setGrossIncome] = useState();
  const [city, setCity] = useState('Loading...');
  const [numberOfChildren, setNumberOfChildren] = useState(0);

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

  const PostalCode = async (event) => {
    try {
      const zipCode = event.target.value;
  
      // Check if the input contains only numbers and has a maximum length of 4
      if (/^\d{0,4}$/.test(zipCode)) {
        // Proceed with API call and processing if the input is valid
        if (zipCode.length === 4) {
          const response = await fetch (`https://app.zipcodebase.com/api/v1/search?apikey=d23a3cf0-e120-11ee-8675-8b2b022ff06b&codes=${zipCode}`)
          if (!response.ok) {
            throw Error("Not working")
          }
          const data = await response.json();
          console.log("running");
  
          // Filter results to include only cities from Norway
          const norwegianCities = data.results[zipCode].filter(city => city.country_code === "NO");
  
          // Extract city names from the filtered results
          const cityNames = norwegianCities.map(city => city.city);
        
          console.log(norwegianCities);
          setCity(cityNames[0] || ''); // Assuming you only want to display the first city
          return cityNames;
        }
      } else {
        // If input is invalid, clear the input field
        event.target.value = zipCode.replace(/[^\d]/g, ''); // Replace any non-digit characters with an empty string
      }
    } catch (error) {
      console.error(error);
    } 
  }
  
  const [boxed, setBoxed] = useState(false)
  const boxRef = useRef(null)
  const [boxHeight, setBoxHeight] = useState()


  useEffect(() => {
      setBoxHeight(boxRef.current?.offsetHeight)
  }, [boxRef])

  useEffect(() => {
      if(activeStep !== 1){
          setBoxed(true)
      }
      if(activeStep === 1){
          setBoxed(false)
      }
  },[activeStep])


  useEffect(() => {
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
      openBox()
  },[boxed])

  const handleNumberChange = (event) => {
    let value = parseInt(event.target.value);
    // Prevent going below 0
    if (value < 0) {
      value = 0;
    }
    setNumberOfChildren(value);
  };

  return(
    <>
      <TextBox cursor={activeStep === 1 ?  "default" : "pointer"} ref={stepOneRef} onClick={(e) => nextStepButton(e, 1, stepZeroRef)}>
        <StepHeader>Steg 1 av 3</StepHeader>
        <StepTitle>Om meg</StepTitle>
        <PersonFillIcon className="stepIcon" title="a11y-title" color={activeStep >= 1 ? "blue" : "gray"} fontSize="1.5rem" />
        {activeStep > 1 && <CheckMark><CheckmarkCircleFillIcon color='green' fontSize="2rem"></CheckmarkCircleFillIcon></CheckMark>}
        <animated.div style={{...springs}}>
          <div ref={boxRef} onClick={(e) => e.stopPropagation()}>
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
            <div className="stepOneField">
              <TextField label="Fornavn" defaultValue={whichFirstName(data)} />
              <TextField label="Mellomnavn" defaultValue={whichMiddleName(data)} />
              <TextField label="EtterNavn" defaultValue={whichLastName(data)}/>
              <div className="dateField">
                <TextField label="Hvor gammel er du?" type="date" defaultValue={dateOfBirth(data)}/>
             </div>
            </div>
            <h4>Din Adresse</h4>
            <div>
              <div className="zipCodeField">
                <TextField 
                  label="Postnummer" 
                  onChange={PostalCode}  
                  inputProps={{ 
                    maxLength: 4, 
                    inputMode: 'numeric', // Allow only numeric input
                  }}
                />
                {city && <p className="cityNameForm">{city}</p>}
              </div>
              <div className="countryForm">
                <label htmlFor="countrySelect">Land</label>
                <select id="countrySelect">
                  <option value="">Select a country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                  ))}
                </select>
              </div>
            </div>
            <h4>Familie og sivilstatus</h4>
            <div className="stepOneField">
              <TextField label="Ektefelle" /> 
              <TextField 
                type="number" 
                label="Antall barn" 
                value={numberOfChildren} 
                onChange={handleNumberChange} 
              />
            </div>
            <h4>Din økonomiske situasjon</h4>
            <div className="stepOneField">
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
              nextStepButton(e, 2, stepOneRef)
            }}>Neste Steg</NextStepButton>
          </div>
        </animated.div>
      </TextBox>    
      
    </>
  )
}

export default StepOne;