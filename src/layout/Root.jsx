import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useLocation, useNavigation } from 'react-router';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import LogoSection from '../components/LogoSection';
import Marqueee from '../components/Marqueee';
import { ContextValue } from '../context/ContextValue';
import Loader from '../components/Loader';

const Root = () => {

    const location = useLocation();
    const {loading} = useContext(ContextValue)
    const {state} = useNavigation()

    if(loading) return <Loader />

    return (
        <div className='max-w-[1172px] w-full p-4 mx-auto'>
        
        <div className='pt-4 flex flex-col gap-6'>
            <div className={`${location.pathname === "/login" || location.pathname === "/register" ? "hidden" : "block"}`}><LogoSection></LogoSection></div>
            <div className={`${location.pathname.startsWith("/category/") ? "block" : "hidden"}`}><Marqueee /></div>
            <div className={`${location.pathname.length > 15 ? "hidden" : "block"}`}><Navbar /></div>
        </div>
            {/* <Header /> */}
            <div className='mt-12 grid grid-cols-1 md:grid-cols-8 w-full gap-4'>
            <aside className={`${location.pathname === "/login" || location.pathname === "/register" || location.pathname.length > 15 ? "hidden" : "md:col-span-2 order-1 md:order-0 sticky top-0 h-screen"}`}><LeftSidebar /></aside>
            <div className={`${location.pathname === "/login" || location.pathname === "/register" ? "md:col-span-8" : location.pathname.length >15 ? "md:col-span-6" : "md:col-span-4"}`}> 
            {state === "loading" ? <Loader /> : <Outlet />}
            </div>
            <aside className={`${location.pathname === "/login" || location.pathname === "/register" ? "hidden" : "md:col-span-2 order-1 md:order-0 sticky top-0 h-screen"}`}><RightSidebar  /></aside>
            </div>
            
        </div>
    );
};

export default Root;


// live link: https://fir-private-route-auth-fefd8.web.app/category/3