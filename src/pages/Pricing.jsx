import React from 'react'
import Subscription from '../component/Subscription'
import Navbar from '../component/Navbar'
export default function Pricing() {
    return (
        <div className='flex flex-col'>
            <div className='m-auto w-full bg-[#6BBF59] p-5 h-[70px]'>
            <Navbar />
            </div>
            <div className='h-[120px] bg-[#313911]'>
                <p className='lg:text-[32px] md:text-[32px] font-bold text-white text-left lg:ml-[90px] md:ml-[90px] text-[25px] ml-5 pt-5'><span className='text-[#FFECA6]'>Create</span> great designs, faster</p>
                <p className='text-white text-left lg:ml-[90px] md:ml-[90px] lg:text-[16px] md:text-[16px] text-sm ml-5 pt-1 font-medium'>Picland <span className='text-[#FFECA6]'>STUDIO</span> now includes Exclusive pic.
                    Access over 145M images, videos, icons and more.</p>
            </div>
            <div className='m-auto mt-10 w-full'><Subscription/></div>
        </div> 
    )
}
