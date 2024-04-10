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

  const updateLifeEvent = (eventID, value) => {
    setLifeEvents(prev => ({ ...prev, [eventID]: value }));
  };

  return (
    <LifeEventContext.Provider value={{ lifeEvents, updateLifeEvent }}>
      {children}
    </LifeEventContext.Provider>
  );
};
