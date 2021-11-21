import React from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import { useAuth } from '../hooks/auth';
import { BrowserRouter } from 'react-router-dom';

const Routes: React.FC = () => {
        const { logged } = useAuth();
        return (
                <BrowserRouter>
                        {/* <AppRoutes /> */}
                        {logged ? <AppRoutes /> : <AuthRoutes />}
                </BrowserRouter>

        );
}
export default Routes;