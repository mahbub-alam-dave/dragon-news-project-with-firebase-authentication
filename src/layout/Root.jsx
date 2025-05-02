import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';

const Root = () => {
    return (
        <div className='max-w-[1172px] p-4 mx-auto'>
            <Header />
            <div className='mt-12 flex flex-col md:flex-row justify-between gap-4 md:gap-6 '>
            <LeftSidebar className='w-[20%]' />
            <Outlet />
            <RightSidebar className='w-[20%]' />
            </div>
            
        </div>
    );
};

export default Root;