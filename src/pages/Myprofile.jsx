import React from 'react'
import Profile from './Profile'
import { useSelector } from 'react-redux'
export default function Myprofile() {

    const {user}=useSelector((state)=>state.profile);
  return (
    <div>
        <Profile/>
        <div className='flex mt-10 w-[80%] m-auto'>
                <div className='w-[25%] m-auto'>
                    <div className='w-[230px] h-[270px] bg-[#3B3B3A] rounded-lg'>
                        <div className='w-[70%] m-auto pt-5'><img src={user?.image}/></div>
                        <div className='flex'>
                            <input type="file" id="myFile" name="filename"/>
                            <button className='w-[40px] bg-[#6BBF59]'>Change</button>
                        </div>
                    </div>
                </div>
                <div className=' w-[45%] m-auto bg-[#3B3B3A] rounded-lg'>
                    <form className="max-w-xs mx-auto mt-5 text-white  ">
                        <div className="mb-4">
                            <label htmlFor="firstname" className="block text-sm font-medium">First Name</label>
                            <input type="text" id="firstname" name="FirstName" className="border-2 rounded-md w-full px-3 py-2 mt-1 text-sm text-gray-900" placeholder="Ronin" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastname" className="block text-sm font-medium ">Last Name</label>
                            <input type="text" id="lastname" name="LastName" className="border-2 rounded-md w-full px-3 py-2 mt-1 text-sm text-gray-900" placeholder="Agarwal" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium ">Email</label>
                            <input type="email" id="email" name="email" className="border-2 rounded-md w-full px-3 py-2 mt-1 text-sm text-gray-900" placeholder="user_7@picland.com" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium ">Username</label>
                            <input type="text" id="username" name="username" className="border-2 rounded-md w-full px-3 py-2 mt-1 text-sm text-gray-900" placeholder="@ronit" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="mobile" className="block text-sm font-medium ">Mobile</label>
                            <input type="tel" id="mobile" name="mobile" className="border-2 rounded-md w-full px-3 py-2 mt-1 text-sm text-gray-900" placeholder="+918804593332" />
                        </div>


                        <div><button type='submit'>Submit</button></div>
                    </form>

                </div>
            </div>
    </div>
  )
}
