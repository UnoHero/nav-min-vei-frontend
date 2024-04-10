import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LifeEventProvider } from './contexts/LifeEventContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LifeEventProvider>
        <App />
    </LifeEventProvider>
);
