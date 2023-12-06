import React, { useState } from 'react';
import pilned from "./pilned.svg"; // Pass på at filbanen er korrekt

function Dropdown({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion-item">
            <p className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
                {title} <img src={pilned} className={`icon ${isOpen ? 'rotated' : ''}`} alt="Pil ned" />
            </p>
            <div className={`panel ${isOpen ? 'open' : ''}`}>
                {children}
            </div>
        </div>
    );
}

export default Dropdown;
