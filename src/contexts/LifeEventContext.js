// LifeEventContext.js
import React, { createContext, useState, useContext } from 'react';

const LifeEventContext = createContext();

export const useLifeEvent = () => useContext(LifeEventContext);

export const LifeEventProvider = ({ children }) => {
  const [lifeEvents, setLifeEvents] = useState({
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box5: false,
    box6: false,
    box7: false
  });

  const [user, setUser] = useState(null)

  const updateLifeEvent = (eventID, value) => {
    setLifeEvents(prev => ({ ...prev, [eventID]: value }));
  };

  const updateUser = (user) => {
    setUser(user)
  }

  const setFirstName = firstName => {
    setUser(prev => ({...prev, firstName: {...prev.firstName, customFirstName: firstName}}))
  }

  const setMiddleName = middleName => {
    setUser(prev => ({...prev, middleName: {...prev.middleName, customMiddleName: middleName}}))
  }

  const setLastName = lastName => {
    setUser(prev => ({...prev, lastName: {...prev.lastName, customLastName: lastName}}))
  }

  const setPostalCode = postalCode => {
    setUser(prev => ({...prev, postalCode: {...prev.postalCode, customPostalCode: postalCode}}))
  }

  const setCountry = country => {
    setUser(prev => ({...prev, country: {...prev.country, customCountry: country}}))
  }

  return (
    <LifeEventContext.Provider value={{ lifeEvents, updateLifeEvent, updateUser, user , setFirstName, setMiddleName, setLastName, setPostalCode, setCountry}}>
      {children}
    </LifeEventContext.Provider>
  );
};
