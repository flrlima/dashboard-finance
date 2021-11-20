import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';

const AuthRoutes: React.FC = () => (

    <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
            </Routes>
    </BrowserRouter>

)

export default AuthRoutes;
