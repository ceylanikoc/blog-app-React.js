import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import reportWebVitals from './reportWebVitals';
import "./App.css";
import configureStore from './store/configureStore'
import { addBlog,removeBlog,editBlog } from './actions/blogs'



const store = configureStore();


store.subscribe(() => {
    console.log(store.getState());
})

const blog1 = store.dispatch(addBlog({title:"blog title 1", description:"description blog 1"}))
const blog2 = store.dispatch(addBlog({title:"blog title 2", description:"description blog 2", dateAdded: Date.now()}))
store.dispatch(addBlog({title:"blog title 3", description:"description blog 3", dateAdded: Date.now()}))

console.log(blog1.blog.id);

store.dispatch(removeBlog({id: blog1.blog.id}))
store.dispatch(editBlog(blog2.blog.id,{title:'updated blog title', yenititle:"yeni ekledim editBlog ile", description:'updated blog description'}))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

reportWebVitals();
