import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitter } from "react-icons/io";
import { SiInstagram } from "react-icons/si";
const RightSidebar = () => {
    return (
        <div className='flex flex-col gap-7'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-[color:var(--color-primary)] text-lg md:text-xl font-semibold leading-[30px]'>Login With</h2>
                <div className='flex flex-col gap-2'>
                
                <button className='btn btn-outline bg-transparent text-base text-[color:var(color-primary)] hover:text-blue-400 hover:bg-gray-100 flex gap-4 items-center'><FaGoogle size={20}/> Login with Google</button>
                <button className='btn btn-outline bg-transparent text-base text-[color:var(color-primary)] hover:text-blue-400 hover:bg-gray-100 flex gap-4 items-center'><FaGithub size={20}/> Login with Github</button>
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <h2 className='text-[color:var(--color-primary)] text-lg md:text-xl font-semibold leading-[30px]'>Find Us On</h2>
                <div className='border rounded-lg border-gray-200'>
                    <div className='flex gap-4 items-center border-b border-gray-200 p-3'>
                        <figure className='bg-gray-200 p-[6px] rounded-[50%] flex items-center'>
                        <TiSocialFacebook size={20} className='text-blue-500'/>
                        </figure>
                        <span>Facebook</span>
                    </div>
                    <div className='flex gap-4 items-center border-b border-gray-200 p-3'>
                        <figure className='bg-gray-200 p-[6px] rounded-[50%] flex items-center'>
                        <IoLogoTwitter size={20} className='text-blue-500'/>
                        </figure>
                        <span>Twitter</span>
                    </div>
                    <div className='flex gap-4  p-3'>
                    <figure className='bg-gray-200 p-[6px] rounded-[50%] flex items-center'>
                        <SiInstagram size={20} className='text-blue-500'/>
                        </figure>
                        <span>Instagram</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-8 bg-gray-200 p-4'>
                <h2 className='text-[color:var(--color-primary)] text-lg md:text-xl font-semibold leading-[30px]'>Q-Zone</h2>
                <div className='flex flex-col gap-6'>
                <img src="/assets/swimming.png" alt="" />
                <img src="/assets/playground.png" alt="" />
                <img src="/assets/class.png" alt="" />
                </div>
            </div>

            <img src="/assets/bg.png" alt="" />
        </div>
    );
};

export default RightSidebar;
/* https://ibb.co.com/zHW4Rnb2
https://ibb.co.com/7tR4R5D7 */