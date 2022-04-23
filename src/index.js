import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter'
import reportWebVitals from './reportWebVitals';
import "./App.css";
import { v4 as uuid } from 'uuid';


import { createStore, combineReducers } from 'redux'


// ACTION CREATOR

const addBlog = ({title='',description='',dateAdded=0}) => ({
    type: "ADD_BLOG",
    blog: {
        id:uuid(),
        title: title,
        description: description,
        dateAdded: dateAdded
    }
})

const removeBlog = ({ id }) => (
    {
        type: "REMOVE_BLOG",
        id: id
    }
)

const editBlog = (id,updates) => ({
    type: "EDIT_BLOG",
    id,
    updates
})

const blogsState = []

const blogReducer = (state = blogsState,action) => {
    switch (action.type) {
        case "ADD_BLOG" :
            return [
                ...state,
                action.blog
            ]
        case "REMOVE_BLOG" :
            return state.filter(({ id }) => {
                return id !== action.id
            })  
        case "EDIT_BLOG" : 
            return state.map((blog) => {
                if(blog.id === action.id) {
                    return {
                        ...blog,
                        ...action.updates
                    }
                } else {
                    return blog
                }
            })  
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

store.subscribe(() => {
    console.log(store.getState());
})

const blog1 = store.dispatch(addBlog({title:"blog title 1", description:"description blog 1"}))
const blog2 = store.dispatch(addBlog({title:"blog title 2", description:"description blog 2", dateAdded: Date.now()}))

console.log(blog1.blog.id);



store.dispatch(removeBlog({id: blog1.blog.id}))
store.dispatch(editBlog(blog2.blog.id,{title:'updated blog title', yenititle:"yeni ekledim editBlog ile", description:'updated blog description'}))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppRouter />
);

reportWebVitals();
