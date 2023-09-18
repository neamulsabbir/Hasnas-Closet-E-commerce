import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../loader/Loader';

const PrivateRoute = ({children}) => {
    const{user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Loader />
    }

    if(user){
        return children
    }
    return <Navigate to="/signin" state={{ from: location }} replace /> 
};

export default PrivateRoute;