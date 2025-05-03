import React, { useContext } from 'react';
import { ContextValue } from '../context/ContextValue';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const location = useLocation();

    const {user} = useContext(ContextValue);

    if(!user) return <Navigate to={'/login'} state={location.pathname}></Navigate>


    return children
};

export default PrivateRoute;