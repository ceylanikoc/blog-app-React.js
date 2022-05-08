import React from 'react';
import {login} from '../actions/auth';

export const LoginPage = () => (
    <div className='d-flex justify-content-center login-pages'>
        <button className="btn btn-block btn-success" onClick={login}>Login With Google</button>
    </div>
)

export default LoginPage;