import React from 'react'
import { selectUser } from '../../redux/features/adminSlice';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const user = useSelector(selectUser);

    if(!user.isAuthenticated){
        return <Navigate to="/" replace/>
    }

  return children;
}

export default PrivateRoute