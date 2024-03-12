import React from 'react';
import tick from '../asset/icon/tick.png';
import cross from '../asset/icon/cross (2).png';
import dot from '../asset/icon/dot.svg'
import { BuySubscription } from '../services/operation/Payment';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import rupee from "../asset/icon/rupee.png"
export default function Subscribed({ price, type, date }) {
    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.profile)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const timestamp = user.PlanDate;
    const datee = new Date(timestamp);
    const day = datee.getDate();
    const month = datee.toLocaleString('default', { month: 'long' });
    const year = datee.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;
    
    console.log(formattedDate);

    console.log(datee.toString());


    return (
        <div className='w-full'>
            <div className='lg:w-[80%] md:w-[80%] w-[100%] flex flex-col m-auto lg:text-[16px] md:text-[16px] text-sm'>
                <div className='lg:h-[290px] md:h-[290px] flex m-auto justify-around md:w-[80%] lg:w-[80%] w-[95%] lg:p-10 md:p-10 p-5 text-[#3B3B3A] bg-[#FFECA6] rounded-[9px] '>
                    <div className='flex flex-col gap-y-5 font-medium text-left'>
                        <h6 className='font-bold text-center'>Get Picland <span className='text-[#9C7A02]'>STUDIO</span></h6>
                        <div className='flex gap-1'><img src={dot} /> <p>More than 1000+ Exclusive pic</p></div>
                        <div className='flex gap-1'><img src={dot} /> <p>No daily downloads limit</p></div>
                        <div className='flex gap-1'><img src={dot} /> <p>Pic for commercial use</p></div>
                        <div className='flex gap-1'><img src={dot} /> <p>High resolution downloads</p></div>

                    </div>
                    <div className='lg:flex lg:flex-col md:flex md:flex-col hidden gap-y-6 items-center' >
                        <p className='font-bold text-[#9C7A02]'>STUDIO</p>
                        <div><img src={tick} alt="Tick" className='w-[28px]' /></div>
                        <div><img src={tick} alt="Tick" className='w-[28px]' /></div>
                        <div><img src={tick} alt="Tick" className='w-[28px]' /></div>
                        <div><img src={tick} alt="Tick" className='w-[28px]' /></div>
                    </div>
                    <div className='lg:flex lg:flex-col md:flex md:flex-col hidden gap-y-6 items-center' >
                        <p className='font-bold'>FREE</p>
                        <div><img src={cross} alt="Cross" className='w-[22px]' /></div>
                        <div><img src={cross} alt="Cross" className='w-[22px]' /></div>
                        <div><img src={cross} alt="Cross" className='w-[22px]' /></div>
                        <div><img src={cross} alt="Cross" className='w-[22px]' /></div>
                    </div>

                    <div style={{ borderRight: '2px solid #000000', opacity: "40%" }}></div>

                    <div className='flex flex-col font-medium gap-y-5 mt-12'>
                        <p className='font-bold text-[#9C7A02]'>SUBSCRIBED</p>
                        <div className='flex justify-center'>
                            <p>{`${type}`}-</p>


                            <p>{`${price}`}</p>


                        </div>


                        <p>Valid till {`${formattedDate}`}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}