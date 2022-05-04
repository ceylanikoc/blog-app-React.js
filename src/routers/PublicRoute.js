import React from 'react'
import {connect} from 'react-redux'
import { Route , Redirect } from 'react-router-dom'

const PublicRoute = ({isAuthenticated,component: Component,...rest}) => (
    <Route {...rest} component={ (props) => (
        isAuthenticated ? (
            <Redirect to="/blogs" />
        ) : (
            <Component {...props} />
        )
    )}/>
)

const mapStateToProps = (state) => ({
    // uid string değer olduğundan !! ile uid set edilmişse true , eğer boşsa false değerini döndürmek için kullanıyoruz bu oparatörü
    isAuthenticated : !! state.auth.uid
})

// redux bağlamasını yaptık HOCi props paramatresine set ettik bağladık 

export default connect(mapStateToProps)(PublicRoute)