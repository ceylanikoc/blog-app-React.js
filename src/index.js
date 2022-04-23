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

const store = createStore((state = initialState,action) => {
    console.log('store created');
    switch (action.type) {
        case  "INCREMENT" :
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + incrementBy
            }
        case "DECREMENT" : 
            return {
                count: state.count -1
            }
        case "RESET" : 
            return {
                count: 0
            }    
        default :
            return state        
    }
})

// getState

console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState() + 'store üzerinde değişiklik olduğundan çalışır sadece');
})

// INCREMENT, DECREMENT , RESET => ACTIONS (object)

store.dispatch({
    type: "INCREMENT",
    incrementBy : 10
})

store.dispatch({
    type: "INCREMENT"
})

console.log(store.getState());



// DISPATCH

// REDUCERS


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppRouter />
);

reportWebVitals();
