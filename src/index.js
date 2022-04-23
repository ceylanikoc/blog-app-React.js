import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter'
import reportWebVitals from './reportWebVitals';
import "./App.css"

import { createStore } from 'redux'


const initialState = {
    count : 0
}

// Store

const store = createStore((state = initialState) => {
    return state
})

// getState

console.log(store.getState());


// INCREMENT, DECREMENT , RESET => ACTIONS (object)

// DISPATCH

// REDUCERS


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppRouter />
);

reportWebVitals();
