import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';

const Root = () => {
    return (
        <div className='max-w-[1172px] w-full p-4 mx-auto'>
            <Header />
            <div className='mt-12 grid grid-cols-1 md:grid-cols-8 w-full gap-6'>
            <aside className='md:col-span-2'><LeftSidebar /></aside>
            <div className=' md:col-span-4'>
            <Outlet />
            </div>
            <aside className=' md:col-span-2'><RightSidebar  /></aside>
            </div>
            
        </div>
    );
};

export default Root;