import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRouter , {history} from './routers/AppRouter'
import reportWebVitals from './reportWebVitals';
import "./styles/main.scss";
import configureStore from './store/configureStore'
import { addBlog,removeBlog,editBlog,getBlogsFromDatabase, clearBlogs } from './actions/blogs'
import {onAuthStateChanged,auth} from './firebase/firebaseConfig'
import {loginAction, logoutAction} from './actions/auth'



const store = configureStore();

const result = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)



// statik data ile çalışma 
// store.subscribe(() => {
//     console.log(store.getState());
// })

// const blog1 = store.dispatch(addBlog({title:"blog title 1", description:"description blog 1"}))
// const blog2 = store.dispatch(addBlog({title:"blog title 2", description:"description blog 2", dateAdded: Date.now()}))
// store.dispatch(addBlog({title:"blog title 3", description:"description blog 3", dateAdded: Date.now()}))
// store.dispatch(addBlog({title:"blog title 4", description:"description blog 4", dateAdded: Date.now()}))
// store.dispatch(addBlog({title:"blog title 5", description:"description blog 5", dateAdded: Date.now()}))

// console.log(blog1.blog.id);

// store.dispatch(removeBlog({id: blog1.blog.id}))
// store.dispatch(editBlog(blog2.blog.id,{title:'updated blog title', yenititle:"yeni ekledim editBlog ile", description:'updated blog description'}))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<p>Loading...</p>);

let isRendered = false;
const RenderApp = () => {
    if(!isRendered) {
        root.render(result);
        isRendered = true;
    }
}

onAuthStateChanged(auth,(user) => {
    if(user){
        const uid = user.uid;
        store.dispatch(loginAction(uid))
        console.log('kullanıcı giriş yaptı.',user,uid);
        store.dispatch(getBlogsFromDatabase()).then(() => {
            RenderApp();
            if(history.location.pathname === '/') {
                history.push('/blogs')
            }
        })
        
    } else {
        console.log("kullanıcı çıkış yaptı.");
        store.dispatch(logoutAction())
        store.dispatch(clearBlogs())
        history.push('/');
        RenderApp();
    }
})




reportWebVitals();
