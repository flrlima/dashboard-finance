import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';
import SignIn from '../pages/SignIn';

const AppRoutes: React.FC = () => (
    <>
        <Layout>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/list/:type" element={<List />} />
            </Routes>
        </Layout>
    </>
);

export default AppRoutes;