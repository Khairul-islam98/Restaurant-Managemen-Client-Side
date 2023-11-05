import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <div>
            <Navbar />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;