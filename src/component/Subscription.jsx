import React from 'react';
import tick from '../asset/icon/tick.png';
import cross from '../asset/icon/cross (2).png';
import dot from '../asset/icon/dot.svg'
import { BuySubscription } from '../services/operation/Payment';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import rupee from "../asset/icon/rupee.png"
export default function Subscription() {
    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.profile)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const plan = {
        yearly: "yearly",
        monthly: "monthly",

    }
    const handleBuySub12 = () => {
        if (token) {
            BuySubscription(token, plan.yearly, user, navigate, dispatch)
        }
    }
    const handleBuySub1 = () => {
        if (token) {
            BuySubscription(token, plan.monthly, user, navigate, dispatch)
        }
    }
    return (
        <div className='w-full'>
            <div className='lg:w-[80%] md:w-[80%] w-[100%] flex flex-col m-auto'>
                <div className='lg:h-[290px] md:h-[290px] flex lg:text-[16px] mg:text-[16px] text-sm m-auto justify-around lg:w-[80%] md:w-[80%] w-[95%] lg:p-10 md:p-10 p-5 text-[#3B3B3A] bg-[#FFECA6] rounded-[9px] '>
                    <div className='flex flex-col gap-y-5 font-medium text-left'>
                        <h6 className='font-bold text-center'>Get Picland <span className='text-[#9C7A02]'>STUDIO</span></h6>
                        <div className='flex gap-1'><img src={dot} /> <p>More than 1000+ Exclusive pic</p></div>
                        <div className='flex gap-1'><img src={dot} /> <p>No daily downloads limit</p></div>
                        <div className='flex gap-1'><img src={dot} /> <p>Pic for commercial use</p></div>
                        <div className='flex gap-1'><img src={dot} /> <p>High resolution downloads</p></div>

                    </div>
                    <div className='flex flex-col gap-y-6 items-center'>
                        <p className='font-bold text-[#9C7A02]'>STUDIO</p>
                        <div><img src={tick} alt="Tick" className='lg:w-[28px] md:w-[28px] w-[24px]' /></div>
                        <div><img src={tick} alt="Tick" className='lg:w-[28px] md:w-[28px] w-[24px]' /></div>
                        <div><img src={tick} alt="Tick" className='lg:w-[28px] md:w-[28px] w-[24px]' /></div>
                        <div><img src={tick} alt="Tick" className='lg:w-[28px] md:w-[28px] w-[24px]' /></div>
                    </div>
                    <div className='flex flex-col gap-y-6 items-center'>
                        <p className='font-bold'>FREE</p>
                        <div><img src={cross} alt="Cross" className='lg:w-[22px] md:w-[22px] w-[19px]' /></div>
                        <div><img src={cross} alt="Cross" className='lg:w-[22px] md:w-[22px] w-[19px]' /></div>
                        <div><img src={cross} alt="Cross" className='lg:w-[22px] md:w-[22px] w-[19px]' /></div>
                        <div><img src={cross} alt="Cross" className='lg:w-[22px] md:w-[22px] w-[19px]' /></div>
                    </div>
                </div>
                <div className='mt-5 lg:w-[80%] md:w-[80%] lg:text-[16px] md:text-[16px] text-sm w-[95%] m-auto bg-[#FFECA6] md:h-[52px] h-[40px] flex items-center rounded-[9px] hover:shadow-lg hover:scale-105 transition-transform duration-300'>

                    <div className='flex justify-around w-full font-bold text-[#81827C]'>
                        <p>Get Picland <span className='text-[#9C7A02]'>STUDIO</span></p>
                        <p>12 Month</p>
                        <div className='flex justify-center items-center'>
                            <img className='h-[12px]' src={rupee} width={8} />
                            <p>18999</p>
                        </div>

                        {!user ? (
                            <Link to="/login" className='text-[#9C7A02] cursor-pointer'>SUBSCRIBE</Link>
                        ) : (
                            <p className='text-[#9C7A02] cursor-pointer' onClick={handleBuySub12}>SUBSCRIBE</p>
                        )}
                    </div>
                </div>
                <div className='mt-2 lg:w-[80%] md:w-[80%] lg:text-[16px] md:text-[16px] text-sm w-[95%] m-auto bg-[#FFECA6] lg:h-[52px] md:h-[52px] h-[40px] flex items-center rounded-[9px] hover:shadow-lg hover:scale-105 transition-transform duration-300'>
                    <div className='flex justify-around w-full font-bold text-[#81827C]'>
                        <p>Get Picland <span className='text-[#9C7A02]'>STUDIO</span></p>
                        <p>1 Month</p>
                        <div className='flex justify-center items-center'>
                            <img className='h-[12px]' src={rupee} width={8} />
                            <p>2999</p>
                        </div>
                        {!user ? (
                            <Link to="/login" className='text-[#9C7A02] cursor-pointer'>SUBSCRIBE</Link>
                        ) : (
                            <p className='text-[#9C7A02] cursor-pointer' onClick={handleBuySub1}>SUBSCRIBE</p>
                        )}
                    </div>


                </div>

            </div>
        </div>
    );
}