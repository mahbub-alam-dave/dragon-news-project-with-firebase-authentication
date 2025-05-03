import React, { useContext } from 'react';
import { Link, NavLink, useLocation  } from 'react-router';
import { FaUserCircle } from "react-icons/fa";
import { ContextValue } from '../context/ContextValue';

const Navbar = () => {
    const {logOutUser, user} = useContext(ContextValue)
    const location = useLocation();
    const isHomeActive = () => {
        // Set Home active on homepage and category pages
        return location.pathname === "/" || location.pathname.startsWith("/category");
      };

    const handleLogOut = () => {
        logOutUser()
    }
    return (
        <div className='flex justify-between items-center'>
            <div>{user && <span className='text-green-500'>{user.email}</span>}
            </div>
            <ul id='navbar' className='flex gap-6 pl-20'>
                <NavLink to={'/'} className={`navLink text-base sm:text-lg leading-[30px] text-[#706f6f] ${isHomeActive() ? "active" : ""}` }><li>Home</li></NavLink>
                <NavLink to={'/about'} className='text-base sm:text-lg leading-[30px] text-[#706f6f]'><li>About</li></NavLink>
                <NavLink to={'/career'} className='text-base sm:text-lg leading-[30px] text-[#706f6f]'><li>Career</li></NavLink>
            </ul>

            <div className='flex gap-4 items-center'>
            <FaUserCircle size={28}/>
            {
                user ?
                <button onClick={handleLogOut} className='btn'>Sign Out</button>
                :
                <Link to={'/login'}><button className='btn text-lg sm:text-xl font-semibold text-white bg-[#1E1E1E]'>Login</button>
                </Link>
            }

            </div>
        </div>
    );
};

export default Navbar;