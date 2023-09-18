import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../CustomHook/useAdmin';
import Loader from '../loader/Loader';

const PrivateAdmin = ({children}) => {
    const {user} = useContext(AuthContext)
    const [isAdmin, adminLoading] = useAdmin(user?.email)
    const location = useLocation()

    if (adminLoading) {
        return <Loader></Loader>;
      }
      
      if (!isAdmin) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
      }
      
      return children;
    
};

export default PrivateAdmin;