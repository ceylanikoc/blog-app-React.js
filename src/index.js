import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter'
import reportWebVitals from './reportWebVitals';
import "./App.css"

import { createStore, combineReducers } from 'redux'

const state = {
    blogs: [
        {
            id : 1,
            title: "blog title 1",
            description: "blog 1 description",
            dateAdded : 0
        }
    ],
    auth : {
        userid: 1,
        username: "ceylani",
        email: "info@ceylani.com"
    }
}

const blogsState = []

const blogReducer = (state = blogsState,action) => {
    switch (action.type) {
        default :
            return state;
    }
}

const authState = {};


const authReducer = (state = authState, action) => {
    switch(action.type) {
        default :
            return state
    }
}

const store = createStore(combineReducers({
    blogs : blogReducer,
    auth : authReducer
}));

console.log(store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppRouter />
);

reportWebVitals();
