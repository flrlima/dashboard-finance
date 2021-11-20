import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';

const AppRoutes: React.FC = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/list/:type" element={<List />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Layout>
    </BrowserRouter>
);

export default AppRoutes;