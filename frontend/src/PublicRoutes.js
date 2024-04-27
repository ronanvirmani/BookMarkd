// PublicRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAppContext } from '../AppContext';

const PublicRoute = ({ element, ...rest }) => {
    const { user } = useAppContext();

    return user ? <Navigate to="/profile" /> : <Route {...rest} element={element} />;
};

export default PublicRoute;
