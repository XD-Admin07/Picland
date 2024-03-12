import React from 'react'
import dummy from "../../asset/images/city.jpg"
import Card from './card'

// Imagebar.jsx
export default function Imagebar({ dummy }) {
    return (
     
        <div className='flex'>
      <div className=" w-[80%] m-auto grid grid-cols-3 gap-4">
        {dummy.map((item, index) => (
          <div key={index} className="w-[391px] h-[227px] bg-cover" style={{ backgroundImage: `url(${item.img})` }}></div>
        ))}
      </div>
      
      </div>
      
     
    );
  }
  