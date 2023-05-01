import React, { Children, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    if(loading){
        return <Spinner animation="border" variant="primary" />
    }

    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;

/**
 * ---------------
 *      Steps     
 * ---------------
 * 1. check user logged in or not
 * 2. if user logged in then allow then to visit the route
 * 3. else redirect the user to login page
 * 4. setup the private route
 * 5. handle loading
 * 
*/