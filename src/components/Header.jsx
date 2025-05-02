import React from 'react';
import LogoSection from './LogoSection';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='pt-4 flex flex-col gap-6'>
            <LogoSection></LogoSection>
            <Navbar />
        </div>
    );
};

export default Header;