import React from 'react'
import {connect} from 'react-redux'
import { Route , Redirect } from 'react-router-dom'
import Header from '../components/Header'

const PrivateRoute = ({isAuthenticated,component: Component,...rest}) => (
    <Route {...rest} component={ (props) => (
        isAuthenticated ? (
            <div>
                <Header></Header>
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/" />
        )
    )}/>
)

const mapStateToProps = (state) => ({
    // uid string değer olduğundan !! ile uid set edilmişse true , eğer boşsa false değerini döndürmek için kullanıyoruz bu oparatörü
    isAuthenticated : !! state.auth.uid
})

// redux bağlamasını yaptık HOCi props paramatresine set ettik bağladık 

export default connect(mapStateToProps)(PrivateRoute)