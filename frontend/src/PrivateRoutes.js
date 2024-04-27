import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAppContext } from '../AppContext';

const PrivateRoute = ({ element, ...rest }) => {
    const { user } = useAppContext();

    return user ? <Route {...rest} element={element} /> : <Navigate to="/" />;
};

export default PrivateRoute;
