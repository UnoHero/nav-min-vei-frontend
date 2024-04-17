import { useState, useEffect, useRef } from "react";
import { TextField } from "@navikt/ds-react";
import { useSpring, animated } from '@react-spring/web'

// Fancy nav Icons from nav aksel
import { PersonFillIcon, CheckmarkCircleFillIcon } from '@navikt/aksel-icons';

// Styles thrue js
import { TextBox, StepTitle, StepHeader, StepText, NextStepButton, Txt, CheckMark } from "../components/styledComponents"

// context
import { useLifeEvent } from "../contexts/LifeEventContext";

const StepOne = ({stepZeroRef, stepOneRef, nextStepButton, activeStep }) => {

  const { setFirstName, setMiddleName, setLastName, user, setPostalCode, setCountry} = useLifeEvent();

  const [countries, setCountries] = useState([]);
  const [grossIncome, setGrossIncome] = useState();
  const [city, setCity] = useState('Loading...');
  const [numberOfChildren, setNumberOfChildren] = useState(0);

  const whichFirstName = () => {
    if(user?.firstName?.customFirstName === ""){
      return user?.firstName.customFirstName
    }
    return user?.firstName?.customFirstName
    || user?.firstName?.skatt 
    || user?.firstName?.aaReg 
    || user?.firstName?.folkReg
    || ""
  }

  const whichMiddleName = () => {
    if(user?.middleName?.customMiddleName === ""){
      return user?.middleName.customMiddleName
    }
    return user?.middleName?.customMiddleName
    || user?.middleName?.skatt 
    || user?.middleName?.aaReg 
    || user?.middleName?.folkReg
    || ""
  }

  const whichLastName = () => {
    if(user?.lastName?.customLastName === ""){
      return user?.firstName.customLastName
    }
    return user?.lastName?.customLastName 
    || user?.lastName?.skatt
    || user?.lastName?.aaReg
    || user?.lastName?.folkReg
  }

  const whichPostalCode = () => {
    if(user?.firstName?.customPostalCode === ""){
      return user?.firstName.customPostalCode
    }
    return user?.postalCode?.customPostalCode
    || user?.postalCode?.skatt
    || user?.postalCode?.aaReg
    || user?.postalCode?.folkReg
  }

  const whichCountry = () => {
    if(user?.country?.customCountry === ""){
      return user?.country?.customCountry
    }
    return user?.country?.customCountry
    || user?.country?.skatt
    || user?.country?.aaReg
    || user?.country?.folkReg
  }
  
  const dateOfBirth = () => {
    return user?.dateOfBirth?.folkReg
  }

  const displayFullName = () => {
    const fullName = `${whichFirstName(user)} ${whichMiddleName(user)} ${whichLastName(user)}`
    return fullName
  }

  useEffect(() => {
    if (user && user.grossIncome !== undefined) {
      setGrossIncome(user.grossIncome.toLocaleString().replace(/,/g, " "));
    }
  }, [user]);

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
        const user = await response.json();
        setCountries(user.map(country => country.name.common));
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
          const user = await response.json();
          console.log("running");
  
          // Filter results to include only cities from Norway
          const norwegianCities = user.results[zipCode].filter(city => city.country_code === "NO");
  
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
              {user ? <b>Hei {displayFullName()}</b> : <b>Loading...</b>}
            </Txt>
            <StepText>
              Her finner du informasjon om 
              deg som veilederen har hentet 
              fra offentlige tjenester. Er svarene feil? 
              Da er det bare å endre i svarboksene.  
            </StepText>
            <h4>Personalia</h4>
            <div className="stepOneField">
              <TextField label="Fornavn" value={whichFirstName()} onChange={(e) => {setFirstName(e.target.value)}}/>
              <TextField label="Mellomnavn" value={whichMiddleName()} onChange={(e) => {setMiddleName(e.target.value)}} />
              <TextField label="EtterNavn" value={whichLastName()} onChange={(e) => {setLastName(e.target.value)}}/>
              <div className="dateField">
                <TextField label="Hvor gammel er du?" type="date" defaultValue={dateOfBirth()}/>
             </div>
            </div>
            <h4>Din Adresse</h4>
            <div>
              <div className="zipCodeField">
                <TextField 
                  label="Postnummer" 
                  value={whichPostalCode()}
                  onChange={(e) => {setPostalCode(e.target.value); PostalCode(e)}}  
                  inputProps={{ 
                    maxLength: 4, 
                    inputMode: 'numeric', // Allow only numeric input
                  }}
                />
                {city && <p className="cityNameForm">{city}</p>}
              </div>
              <div className="countryForm">
                <label htmlFor="countrySelect">Land</label>
                <select id="countrySelect" value={whichCountry()} onChange={(e) => setCountry(e.target.value)}>
                  <option value="">Select a country</option>
                  {countries.sort().map((country, index) => (
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
              <TextField label="Dine forsikringer" defaultValue={user?.insurance} />

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