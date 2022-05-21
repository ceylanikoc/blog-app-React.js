import React from 'react'
import { NavLink } from 'react-router-dom'
import {logout} from '../actions/auth'

const Header = () => {
    return (
        <header>
            <h1 class="text-center color-primary">Blog App</h1>
            <NavLink to="/blogs" activeClassName="active">Blogs</NavLink>
            <NavLink to="/create" activeClassName="active">Create</NavLink>
            <button className="btn btn-secondary" onClick={logout}>Logout</button>
        </header>
    )
}

export default Header
