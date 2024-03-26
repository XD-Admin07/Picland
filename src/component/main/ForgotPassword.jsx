import React from 'react'
import loginv from '../../asset/images/dejan-zakic-vqmaHCvHrqU-unsplash.jpg'
import Glogo from '../../asset/logo/logo_green.png';
import Google from '../../asset/logo/google.png';
import Email from '../../asset/logo/email.png';
import { getPasswordResetToken } from '../../services/operation/authApi';
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../services/operation/authApi"
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
export default function ForgetPassword() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email,setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false)

  const { loading } = useSelector((state) => state.auth)

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(getPasswordResetToken(email, setEmailSent))
  }
  
 
  return (
    <div className='w-full flex'>
      <div className='lg:w-[45%] m-auto md:w-[40%] w-[90%] lg:m-0 md:m-0 h-full flex flex-col justify-center items-center'>
        <h1 className='font-medium text-[35px] mt-[110px] mb-10'>{!emailSent?("Forgot Password"):("Check your email")}</h1>
        <Link to="/"><div className='w-[210px] flex justify-center items-center'>
          <img src={Glogo} alt="Google Logo" />
        </div></Link>
        
         {!emailSent &&<div className=''>
            <form onSubmit={handleOnSubmit}>
             <div className=''>
                <div class="flex flex-col mt-10">
                  <label for="email" class="text-left " >Email</label>
                  <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" class="border-2 rounded-[6px] w-[290px] h-[34px] p-2"placeholder='user_7@picland.com' />
                </div>

     
              </div>
             
              <div>
                
              </div>
              <div className='flex justify-between'>
              <div>
             <Link to="/login"> <button className='text-white rounded-[4px] w-[93px] mt-7 h-[32px] bg-[#575757]'>Back</button></Link>

              </div>
                <div>
              <button type="submit" className='text-white rounded-[4px] w-[93px] mt-7 h-[32px] bg-[#6BBF59]'>Continue</button>
              </div>
              
              </div>
            </form>
            </div>}

            {
                emailSent && <div className='mt-10'>Reset link sent successfully to your email address</div>
            }
        

     {!emailSent && <Link to='/signup'><div className='mt-5 underline'>Don't have an account?</div></Link> }
      </div>
      <div className="hidden  lg:block md:block w-full h-screen bg-cover bg-center  items-center justify-center overflow-hidden">
        <img src={loginv} alt="Cover" className="w-full h-auto object-cover" />
      </div>

    </div>
  )
}
