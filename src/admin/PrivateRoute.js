// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, isAuthenticated, ...rest }) => {

    const val=localStorage.getItem('items');
    console.log("inside the rout.js val :", val);
    console.log("inside the router.js   isAuthenticated:", isAuthenticated)
  return  isAuthenticated ? element : <Navigate to="/admin" />;
};

export default PrivateRoute;
