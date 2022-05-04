import React from 'react'
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import BlogListPage from '../components/BlogListPage'
import BlogDetailsPage from '../components/BlogDetailsPage'
import ContactPage from '../components/ContactPage'
import NotFoundPage from '../components/NotFoundPage'
import AddBlogPage from '../components/AddBlogPage'
import EditBlogPage from '../components/EditBlogPage'
import LoginPage from '../components/LoginPage'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header></Header>
                <Switch>
                    {/* <Route path="/" component={HomePage} exact/> */}
                    <Route path="/" component={LoginPage} exact/>
                    <Route path="/blogs" component={BlogListPage} exact/>
                    <Route path="/create" component={AddBlogPage}/>
                    <Route path="/edit/:id" component={EditBlogPage}/>
                    <Route path="/blogs/:id" component={BlogDetailsPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter
