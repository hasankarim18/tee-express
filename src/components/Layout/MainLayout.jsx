import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="" >
            <Header />
            <Outlet />
        </div>
    );
};

export default MainLayout;