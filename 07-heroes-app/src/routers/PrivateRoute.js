import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';


export const PrivateRoute = ({ 
    isAuth,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastpath', rest.location.pathname);

    return (
        <Route {...rest}
            component={props => isAuth
                ? <Component {...props} /> 
                : <Redirect to="/login" />}
            >            
        </Route>
    );
}

PrivateRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};