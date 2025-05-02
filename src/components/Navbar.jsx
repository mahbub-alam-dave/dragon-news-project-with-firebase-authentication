import React from 'react';
import { NavLink, useLocation  } from 'react-router';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const location = useLocation();
    const isHomeActive = () => {
        // Set Home active on homepage and category pages
        return location.pathname === "/" || location.pathname.startsWith("/category");
      };
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <ul id='navbar' className='flex gap-6 pl-20'>
                <NavLink to={'/'} className={`navLink text-base sm:text-lg leading-[30px] text-[#706f6f] ${isHomeActive() ? "active" : ""}` }><li>Home</li></NavLink>
                <NavLink to={'/about'} className='text-base sm:text-lg leading-[30px] text-[#706f6f]'><li>About</li></NavLink>
                <NavLink to={'/career'} className='text-base sm:text-lg leading-[30px] text-[#706f6f]'><li>Career</li></NavLink>
            </ul>

            <div className='flex gap-4 items-center'>
            <FaUserCircle size={28}/>
            <button className='btn text-lg sm:text-xl font-semibold text-white bg-[#1E1E1E]'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;