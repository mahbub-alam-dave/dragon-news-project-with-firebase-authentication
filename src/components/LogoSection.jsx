import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
import Marquee from 'react-fast-marquee';

const LogoSection = () => {

    const date = format(new Date(), "EEEE, MMMM MM, yyyy")
    return (
        <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-3 justify-center items-center'>
            <img src={logo} alt="" />
            <span className='text-base font-normal sm:text-lg leading-[30px] text-[#706f6f]'>Journalism Without Fear or Favour</span>
            <span className='text-lg sm:text-xl font-medium leading-[30px] text-[#403f3f]'>{date}</span>
        </div>
{/*         <div className='bg-gray-100 flex items-center p-4 gap-4'>
        <span className='bg-red-500 px-5 py-2 font-medium text-lg sm:text-xl leading-[30px] text-white'>Latest</span>
        <marquee behavior="" direction=""  >   Match Highlights: Germany vs Spain as happened  !   Match Highlights: Germany vs Spain as happened</marquee>
        <Marquee className='flex gap-5'>
            <span className='font-semibold text-base sm:text-lg leading-[30px] text-[#403f3f] mr-4'>Match Highlights: Germany vs Spain — as it happened   !</span>
            <span className='font-semibold text-base sm:text-lg leading-[30px] text-[#403f3f] mr-4'>Match Highlights: Germany vs Spain — as it happened   !</span>
            <span className='font-semibold text-base sm:text-lg leading-[30px] text-[#403f3f] mr-4'>Match Highlights: Germany vs Spain — as it happened   !</span>
        </Marquee>
        </div> */}

        </div>
    );
};

export default LogoSection;