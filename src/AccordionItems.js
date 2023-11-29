import React, { useState } from 'react';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-item">
      <p className="accordion-header" onClick={toggleOpen}>
        {title}
      </p>
      <div className={`panel ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
