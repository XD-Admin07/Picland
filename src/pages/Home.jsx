import React from 'react'
import Main from '../component/Main'
import Hcard from '../component/Hcard';
import nature from '../asset/images/nature.jpg'
import wild from '../asset/images/wild.jpg'
import ai from '../asset/images/ai.jpg'
import city from '../asset/images/city.jpg'
import fashion from '../asset/images/fashion.jpg'
import concept from '../asset/images/concept.jpg'
import gold from '../asset/icon/Group 24.svg';
import worth from '../asset/icon/worth.svg'
import productivity from '../asset/icon/groww.svg'
import quality from '../asset/icon/valuee.svg'
import contri from '../asset/images/Group 14.svg'
import graphic from '../asset/images/creator svg 1.png'
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Home() {
  const {user}=useSelector((state)=>state.profile);
  return (
    <div>
         <Main />
      <h2 className='mt-5 font-medium w-[70%] lg:text-[32px] md:text-[32px] text-2xl m-auto  text-[#3B3B3A]'><span className='text-[#6BBF59] lg:text-[32px] md:text-[32px] text-2xl'>Explore </span>trending categories on Picland</h2>
      <p className='lg:text-[16px] md:text-[16px] text-sm mt-[15px] w-[90%] m-auto'>Check what’s popular on Picland and make your project look trendy and professional.</p>

      <div className='mt-7 lg:w-[80%] w-[95%] m-auto'>
        <div className=' align-middle justify-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
          <Hcard
            img={nature}
            text="Nature" />

          <Hcard
            img={wild}
            text="Wild" />

          <Hcard
            img={fashion}
            text="Fashion" />
             <Hcard
            img={ai}
            text="AI" />

          <Hcard
            img={city}
            text="City" />

          <Hcard
            img={concept}
            text="Concept" />

        </div>

      </div>

      < div className='mt-12 flex flex-col'>
        <h2 className='m-auto lg:m-0 md:m-0 lg:mt-5 md:mt-5 font-medium lg:text-[32px] md:-text-[32px] text-2xl text-[#3B3B3A] text-left lg:pl-[110px] md:pl-[110px] '><span className='text-[#9E7B00]'>Unlock</span> your inner creator</h2>
        <p className='lg:text-left md:text-left lg:pl-[35px] md:pl-[35px] w-[90%] m-auto mt-[12px]'>Get the inspiration you need with these collections carefully selected to boost your project’s engagement.</p>
        <div className='w-[90%] m-auto mt-10 lg:h-[638px] md:h-[638px] h-[760px] bg-[#9E7B00] flex flex-col'>
          <div className='flex justify-between'>
            <p className='lg:text-[24px] md:text-[24px] text-md lg:font-bold md:font-bold font-medium text-left lg:pl-[90px] md:pl-[90px] pt-[20px] text-white m-auto lg:m-0 md:m-0 lg:mt-[12px] md:mt-[12px] mt-[12px]'>With our Picland <span className='text-[#FFECA6]'>STUDIO </span>plan</p>
           <Link to ="/pricing"><p className='font-medium lg:text-[22px] md:text-[22px] hidden lg:block md:block pr-10 pt-5 text-white'>{user?.Plan!==false?"Subscribed":"Subscribe"}</p></Link> 
          </div>
          <p className='lg:pl-[90px] md:pl-[90px] m-auto mt-1 lg:m-0 md:m-0 text-left text-white font-kalam lg:text-[16px] md:text-[16px] text-sm lg:mt-[8px] md:mt-[8px]' >You will get amazing exclusive collection</p>

          <div className='w-[90%] h-[80%] align-middle m-auto items-center lg:flex  justify-between'>
            <div><img src={gold} className='lg:w-[360px] md:w-[36px] w-[320px] m-auto lg:mt-[20px] mg:mt-[20px]' /></div>
            <div className='flex-col space-y-10 mt-[15px]'>
              <div className='flex'>
                <img src={worth} className='w-[62px]' />
                <div>
                  <p className='lg:font-bold md:font-bold font-semibold lg:text-[20px] md:text-[20px] pl-5 text-[#FFECA6] text-left'>Value for money</p>
                  <p className='text-white lg:text-[16px] md:text-[16px] text-sm text-left pl-5'>The Picland Studio plan is the ultimate value for your money</p>
                </div>
              </div>
              <div className='flex'>
                <img src={quality} className='w-[62px] ' />
                <div>
                  <p className='lg:font-bold md:font-bold font-semibold lg:text-[20px] md:text-[20px] pl-5 text-[#FFECA6] text-left'>Quality content</p>
                  <p className='text-white lg:text-[16px] md:text-[16px] text-sm text-left pl-5'>Explore 1000+ Exclusive content with our Picland Studio plans</p>
                </div>
              </div>
              <div className='flex'>
                <img src={productivity} className='w-[62px]' />
                <div>
                  <p className='lg:font-bold md:font-bold font-semibold lg:text-[20px] md:text-[20px] pl-5 text-[#FFECA6] text-left'>Productivity</p>
                  <p className='text-white  lg:text-[16px] md:text-[16px] text-sm text-left pl-5'>Our Exclusive content may help you to increase your ultimate
                    productivity</p>
                </div>
              </div>
              <Link to ="/pricing"><p className='font-medium lg:text-[22px] md:text-[22px]  lg:hidden md:hidden text-right pr-3 pt-5 text-white'>{(user?.Plan=="yearly" || user?.Plan==="monthly")?"Subscribed":"Subscribe"}</p></Link> 
            </div>
          </div>
        </div>
      </div>

      <div className='w-full lg:h-[620px] h-[700px] lg:bg-gradient-to-r from-green-500 to-white bg-gradient-to-b from-green-500 to-white mt-[80px]'>
        <p className='lg:text-left lg:pl-20 text-[24px] lg:text-[32px] md:text-[32px] font-medium text-white pt-10'>Contributors</p>
        <p className='lg:text-left lg:pl-20  text-white w-[90%] m-auto lg:m-0 md:m-0'>Behind every stock image there’s a creative mind</p>
         <div className='lg:flex justify-around items-center mt-[20px]'> 
            <div className='lg:w-[469px]  w-[320px]  '><img src={contri}/></div>
            <div><img src={graphic} className='lg:w-[520px] w-[320px] m-auto'/></div>
         </div>
         <Link to ="/csignup"><button className='w-[255px] mt-[40px] h-[56px] bg-[#6BBF59] text-white rounded-[7px]'>Join community</button></Link>

      </div>

     <Footer/>
    </div>
  )
}
