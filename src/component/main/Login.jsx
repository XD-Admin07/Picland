import React from 'react'
import loginv from '../../asset/images/dejan-zakic-vqmaHCvHrqU-unsplash.jpg'
import Glogo from '../../asset/logo/logo_green.png';
import Google from '../../asset/logo/google.png';
import Email from '../../asset/logo/email.png';
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../services/operation/authApi"
import { useState } from 'react';
export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { email, password } = formData 

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }

  const [showForm, setShowForm] = useState(0);
  // Function to handle button click and toggle the visibility of the form
  const handleButtonClick = () => {
    setShowForm(!showForm);
  };
  
 



  // Function to handle back button click
  const handleBackButtonClick = () => {
    setShowForm(false); // Hide the form
  };
  return (
    <div className='w-full flex'>
      <div className='lg:w-[45%] md:[40%] w-[90%] m-auto lg:m-0 md:m-0  h-full flex flex-col justify-center items-center'>
        <h1 className='font-medium text-[35px] mt-[110px] mb-10'>Welcome back!</h1>
        <Link to="/"><div className='w-[210px] flex justify-center items-center'>
          <img src={Glogo} alt="Google Logo" />
        </div></Link>
        {!showForm ? (<><button className='flex items-center justify-center w-[295px] h-[39px] mt-10 border-2 rounded-[7px]'>
          <img src={Google} alt="Google Logo" className='w-[16px] h-[16px] mr-2' />
          <span className="text-center">Continue with Google</span>
        </button>
          <button onClick={handleButtonClick} className='flex items-center justify-center w-[295px] h-[39px] mt-5 border-2 rounded-[7px]'>
            <img src={Email} alt="Google Logo" className='w-[16px] h-[16px] mr-2' />
            <span className="text-center">Sign in with Email</span>
          </button></>) : (
          <div className=''>
            <form onSubmit={handleOnSubmit}>
             <div className=''>
                <div class="flex flex-col mt-10">
                  <label for="email" class="text-left " >Email</label>
                  <input onChange={handleOnChange} type="email" id="email" name="email" class="border-2 rounded-[6px] w-[290px] h-[34px] p-2"placeholder='user_7@picland.com' />
                </div>

                <div class="flex flex-col mt-4">
                  <label for="password" class="text-left " >Password</label>
                  <input onChange={handleOnChange}  type="password" id="password" name="password" class="border-2 rounded-[6px] w-[290px] h-[34px] p-2" placeholder='enter_password' />
                </div>
               <Link to="forgot-password"><p className='text-right text-[12px] text-gray-500 cursor-pointer' >Forgot Password</p></Link> 
              </div>
             
              <div>
                
              </div>
              <div className='flex justify-between'>
              <div>
              <button className='text-white rounded-[4px] w-[93px] mt-7 h-[32px] bg-[#575757]' onClick={ handleBackButtonClick}>Back</button>

              </div>
                <div>
              <button type="submit" className='text-white rounded-[4px] w-[93px] mt-7 h-[32px] bg-[#6BBF59]'>Sign in</button>
              </div>
              
              </div>
            </form>
          </div>
        )}

<Link to='/signup'><div className='mt-5 underline'>Don't have an account?</div></Link> 
      </div>
      <div className="w-full hidden lg:block  md:block h-screen bg-cover bg-center  items-center justify-center overflow-hidden">
        <img src={loginv} alt="Cover" className="w-full h-auto object-cover" />
      </div>

    </div>
  )
}
