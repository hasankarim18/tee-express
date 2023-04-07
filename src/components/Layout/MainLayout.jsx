import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import  { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div className="" >
            <Header />
            <Outlet />
            <Toaster />
        </div>
    );
};

export default MainLayout;