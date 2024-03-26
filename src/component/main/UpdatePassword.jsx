import React from 'react'
import loginv from '../../asset/images/dejan-zakic-vqmaHCvHrqU-unsplash.jpg'
import Glogo from '../../asset/logo/logo_green.png';

import { resetPassword } from '../../services/operation/authApi';
import { Link, useNavigate,useLocation } from "react-router-dom"

import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
export default function UpdatePassword() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  })
  const { password, confirmPassword } = formData

  const { loading } = useSelector((state) => state.auth)

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const token = location.pathname.split("/").at(-1)
    dispatch(resetPassword(password, confirmPassword, token, navigate))
  }
  return (
    <div className='w-full flex'>
      <div className='lg:w-[45%] md:w-[45%] w-[90%] m-auto lg:m-0 md:m-0 h-full flex flex-col justify-center items-center'>
        <h1 className='font-medium text-[35px] mt-[110px] mb-10'>Choose a new Password</h1>
        <Link to="/"><div className='w-[210px] flex justify-center items-center'>
          <img src={Glogo} alt="Google Logo" />
        </div></Link>
        
         <div className=''>
            <form onSubmit={handleOnSubmit}>
             <div className=''>
                <div class="flex flex-col mt-10">
                  <label for="password" class="text-left " >Password</label>
                  <input required value={password} onChange={handleOnChange} type="password" id="password" name="password" class="border-2 rounded-[6px] w-[290px] h-[34px] p-2"placeholder='************' />
                </div>

                <div class="flex flex-col mt-10">
                  <label for="email" class="text-left " >Confirm Password</label>
                  <input required value={confirmPassword} onChange={handleOnChange} type="password" id="confirmPassword" name="confirmPassword" class="border-2 rounded-[6px] w-[290px] h-[34px] p-2"placeholder='************' />
                </div>

     
              </div>
             
              <div>
                
              </div>
              <div className='flex justify-between '>
              <div className='m-auto'>
             <button type="submit" className='text-white rounded-[4px] w-[153px] mt-7 h-[32px] bg-[#575757]'>Reset Password</button>

              </div>
              
              </div>
            </form>
            </div>
        


      </div>
      <div className="hidden lg:block md:block w-full h-screen bg-cover bg-center  items-center justify-center overflow-hidden">
        <img src={loginv} alt="Cover" className="w-full h-auto object-cover" />
      </div>

    </div>
  )
}
