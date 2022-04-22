import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter'
import reportWebVitals from './reportWebVitals';
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppRouter />
);

reportWebVitals();
