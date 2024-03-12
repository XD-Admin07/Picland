import React from 'react'
import logo from '../asset/logo/logo_white.png'
import mobileLogo from '../asset/logo/moblog.svg'
import { useSelector } from "react-redux"
import { useDispatch} from "react-redux"
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import {logout} from '../services/operation/authApi'
import studio_icon from "../asset/icon/studio_grey.svg";
import Profiledrop from '../component/core/profiledrop';
import hamburger from '../asset/icon/ham.svg'
export default function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.profile)
    return (
        <div className='flex m-auto justify-between w-[90%] font-medium text-[13px]'>

        <div className='flex justify-around'>
          <div className='flex lg:flex-col md:flex-col'>
            <Link to="/"><div className='lg:w-[163px] h-[25px] w-[28px] mr-5'><img src={window.innerWidth <= 768 ? mobileLogo : logo} alt="Logo" /></div></Link>
            {token !== null &&(user?.Plan==="yearly" || user?.Plan==="monthly") && (<div className='mt-2 lg:ml-[100px] md:ml-[100px] ml-[-10px]'><img src={studio_icon} alt="Studio Icon" /></div>)}
          </div>
          <div>
           <Link to="/photos"> <button className='hidden lg:block md:block'>Photos</button></Link>
          </div>
        </div>
  
        <div className='flex items-center'>
          <div className='hidden lg:block md:block'>
            <Link to='/csignup'><button className='mr-5 text-[#e7d24a]'>Join community</button></Link>
          </div>
         {(!user || user?.Plan==="false") && <div className='hidden lg:block md:block'>
           <Link to='/pricing'><button className='mr-5 text-[#e7d24a]'>Pricing</button></Link> 
          </div>}
  
          {token !== null && (<Profiledrop/>)}
          {token === null && (<Link to='/login'><div><button className='mr-5 text-[10px] md:text-[13px] lg-[13px]'>Sign in</button></div></Link>)}
          {token === null && (<Link to='/signup'><div><button className='border text-[10px] md:text-[13px] lg-[13px] lg:w-[88px] w-[73px] h-[29px] lg:h-[35px] md:w-[88px] md:h-[35px] rounded-[7px]'>Sign up</button></div></Link>)}
          <div className='lg:hidden md:hidden w-[33px] h-[26.65px] ml-5'><img src={hamburger}/></div>
        </div>
      </div>
    )
}
