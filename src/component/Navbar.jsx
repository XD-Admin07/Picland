import React, { useRef,useState } from 'react'
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
import cross from '../asset/icon/cross.svg'
import tag from '../asset/icon/tags (2).svg'
import commu from '../asset/icon/commu.svg'
import img from '../asset/icon/photos.svg'
import prof from '../asset/icon/profile.svg'
import useOnClickOutside from '../hooks/useOnclickOutside'
export default function Navbar() {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.profile)

    const [showSidebar, setShowSidebar]=useState(false);
    const handleSidebar=()=>(setShowSidebar(!showSidebar));
    const ref=useRef(null);
    useOnClickOutside(ref, () => setShowSidebar(false));

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
          {token === null && (<Link to='/login'><div><button className='mr-5 text-[10px] md:text-[13px] lg-[13px] text-white'>Sign in</button></div></Link>)}
          {token === null && (<Link to='/signup'><div><button className='border text-[10px] md:text-[13px] lg-[13px] lg:w-[88px] w-[73px] h-[29px] lg:h-[35px] md:w-[88px] md:h-[35px] rounded-[7px] text-white'>Sign up</button></div></Link>)}
          <div onClick={handleSidebar} className='lg:hidden md:hidden w-[33px] h-[26.65px] ml-5'><img src={hamburger}/></div>
        </div>

        {/* mobile nav */}
        <nav className='absolute'>
       <div className='w-[100%] md:hidden lg:hidden block'>
             
    <div className={`top-0 fixed z-10 w-[150px] ${showSidebar ? 'right-0' : 'right-[-100%]'}`}>
    <div className='bg-[#3B3B3A]  h-[535px]'>
        <img onClick={handleSidebar} className={`absolute top-2 left-2 ${showSidebar ? 'block' : 'hidden'}`} src={cross}/>
        {user?.image && <div className={`w-[60px] pt-6 m-auto   rounded-[50%]`}>
           <img src={user?.image}/>
          </div>}
        <div className='flex flex-col gap-y-2 pt-5 text-[#8C8888]'>
        <div className='flex m-auto gap-1'>
            <img src={prof}/>
            <p>My profile</p>
            </div>
          <div className='flex m-auto gap-1'>
            <img src={tag}/>
            <p>Pricing</p>
            </div>
          <div className='flex m-auto gap-1'>
            <img src={commu}/>
            <p>Join community</p>
            </div>
            <div className='flex m-auto gap-1'>
            <img src={img}/>
            <p>Photos</p>
            </div>
          
         {token!==null && <div><button onClick={() => {
              dispatch(logout(navigate))
              
            }} className='w-[73px] h-[30px] border rounded-md border-[#8C8888]'>Sign out</button></div>}
          
        </div>
    </div>
</div>

        </div>
        </nav>
      </div>
  
     
    )
}
