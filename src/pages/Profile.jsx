import React from 'react'
import Navbar from '../component/Navbar'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
export default function Profile() {
    const [selectedOption, setSelectedOption] = useState(null);
    const {user}=useSelector((state)=>state.profile)
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    return (
        <div className='w-full'>
            <div className='w-full h-[70px] bg-[#6BBF59]'>
                <div className='pt-4'></div> <Navbar />
            </div>
            <div className='flex justify-between w-full bg-[#3B3B3A] text-white h-[43px]'>
                <div className='flex m-auto w-[40%] justify-around '>
                    <Link to ="/profile"><div className={selectedOption === 'Profile' ? 'text-[#6BBF59] font-medium' : ''} onClick={() => handleOptionClick('Profile')}>Profile</div></Link>
                    <div className={selectedOption === 'Downloads' ? 'text-[#6BBF59] font-medium' : ''} onClick={() => handleOptionClick('Downloads')}>Downloads</div>
                {user?.role==="User" && <Link to="/profile/my-subscription">
                <div className={selectedOption === 'Subscription' ? 'text-[#6BBF59] font-medium' : ''} onClick={() => handleOptionClick('Subscription')}>
                    My Subscription
                </div>
            </Link>}
            {user?.role==="Contributor" && <Link to="/profile/upload">
                <div className={selectedOption === 'Upload' ? 'text-[#6BBF59] font-medium' : ''} onClick={() => handleOptionClick('Upload')}>
                    Upload
                </div>
            </Link>}
                </div>
            </div>
            

        </div>
    )
}
