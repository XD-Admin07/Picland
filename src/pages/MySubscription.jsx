import React from 'react'
import Subscription from '../component/Subscription'
import Subscribed from '../component/Subscribed'
import Navbar from '../component/Navbar'
import Profile from './Profile'
import { UseSelector, useSelector } from 'react-redux'
export default function MySubscription() {
       const {user}=useSelector((state)=>state.profile)
  return (
    <div className='w-full'>
             <Profile/>
             {(user?.Plan==="yearly" || user?.Plan==="monthly")?( <div className='mt-10'>
            <Subscribed
               price={user?.Plan === "yearly" ? "18999" : "2999"}
               type={user?.Plan === "yearly" ? "12 Month" : "1 Month"}
               date={user?.Plan === "yearly" ? "12 dec 2024" : "13 April"}
            />
            </div>):( <div className='mt-10'>
            <Subscription/>
            </div>)}
           
    </div>
  )
}
