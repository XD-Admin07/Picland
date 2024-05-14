import React from 'react'
import { useState } from 'react'
import Profile from './Profile'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { Addimage } from '../services/operation/imageBar'


export default function Upload() {
  const {token}=useSelector((state)=>state.auth)
  const {user}=useSelector((state)=>state.profile)
  
  const userId=user?(user._id):null;
  console.log(userId);
 
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        studio: false,
        image: null, // Changed to null since it will be a file
        category: ""
    });

    const { name, studio, image, category } = formData;

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
            
        }));
        console.log(formData);
        
    };

    const handleOnFileChange = (e) => {
        const file=e.target.files[0];
        console.log(file);
        if(file){
            setFormData((prevData) => ({
                ...prevData,
                image: file, // Use files[0] to get the first selected file
            }));
        }
        
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        //Create a new FormData object to send the file
        const formDataToSend = new FormData();
        formDataToSend.append('name', name);
        formDataToSend.append('studio', studio);
        formDataToSend.append('image', image);
        formDataToSend.append('category', category);
        formDataToSend.append('userId',userId)
        dispatch(Addimage(formDataToSend,token,userId));
        console.log([...formDataToSend]); // Convert FormData to array for logging
    };

  

  return (
    <div>
        <Profile/>
        <div>
          <div className='w-[60%] m-auto'>
            <div className='flex mt-10'>
        <form onSubmit={handleOnSubmit} encType="multipart/form-data" className=" max-w-lg mx-auto bg-[#3B3B3A] w-[556px] h-[715px] shadow-md rounded-[9px] px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
    <label className="block text-[#8F8787] text-sm font-medium mb-2" htmlFor="image" name='file'>
      {/* Image */}
    </label>
    <input  onChange={handleOnFileChange}
      className="appearance-none  rounded m-auto mw-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="image"
      type="file"
    />
  </div>
  
  <div className="mb-4 flex flex-col">
    <div className='flex flex-col m-auto'>
    <label className=" text-[#8F8787] text-sm text-left font-medium mb-2" htmlFor="name">
      Name<span className='text-[#b43434]'>*</span>
    </label>
    <input  onChange={handleOnChange}
      className="shadow appearance-none h-[39px] rounded-[9px] w-[380px] bg-[#1E1E1E] py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
      id="name"
      name="name"
      value={name}
      type="text"
      placeholder="Name"
    />
  </div>
  </div>
  <div className="mb-4 flex flex-col">
    <div className='flex flex-col m-auto'>
    <label className=" text-[#8F8787] text-sm text-left font-medium mb-2" htmlFor="name">
      Description<span className='text-[#b43434]'>*</span>
    </label>
    <textarea onChange={handleOnChange}
      className="shadow appearance-none  rounded-[9px] w-[380px] bg-[#1E1E1E] py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
      id="description"
      name="description"
      rows="4" cols="50"
      //value={description}
      type="text"
      placeholder="description"
    />
  </div>
  </div>
  
  
  <div className="mb-4 flex flex-col">
    <div className='flex flex-col m-auto'>
    <label className=" text-[#8F8787] text-sm text-left  font-medium mb-2" htmlFor="category">
      Category<span className='text-[#b43434]'>*</span>
    </label>
    <input  onChange={handleOnChange}
      className="shadow appearance-none  h-[39px] rounded-[9px] w-[380px] bg-[#1E1E1E]  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="category"
      name="category"
      type="text"
      value={category}
      placeholder="Category"
    />
    </div>
  </div>
  <div className="mb-4 mt-5">
    <div className='flex space-x-5 w-[380px] m-auto'>
    <p className='text-[#8F8787] '>Content type<span className='text-[#b43434]'>*</span></p>
    <div className='flex space-x-3'>
    <div>
   
    <input  onChange={handleOnChange}
      className=" leading-tight"
      id="studio"
      name="studio"
      value={studio}
      type="radio"
    />
     <label className=" text-[#8F8787] text-sm font-medium mb-2" htmlFor="subscription">
      Studio
    </label>
    </div>
    <div>
   
    <input  onChange={handleOnChange}
      className=" leading-tight"
      id="studio"
      name="studio"
      value={studio}
      type="radio"
    />
     <label className=" text-[#8F8787] text-sm font-medium mb-2" htmlFor="subscription">
      Free
    </label>
    </div>
    </div>
  </div>
  <div className='mb-4 mt-4'>
    
   <div className='flex space-x-5 w-[380px] m-auto'>
   <p className='text-[#8F8787]'>File type</p>
   <div className='flex space-x-3'>
    <div>
    <input className=''
           id='file-type'
           type='radio' 
           name="JPG"    
    />
     <label className='text-[#8F8787]'>
      PNG
    </label>
    </div>
     <div>
    <input className=''
           id='file-type'
           type='radio'  
           name="JPG"   
    />
    <label className='text-[#8F8787]'>
      JPG
    </label>
    </div>
    <div>
    <input className=''
           id='file-type'
           name="JPG"
          
           type='radio'     
    />
    <label className='text-[#8F8787] text-medium'>
      JPEG
    </label>
    </div>
    </div>
    </div>
    </div>
  </div>
  <div className="mt-8">
    <button
      className="bg-[#6BBF59]  w-[92px] h-[31px] text-white font  px-4 rounded-[7px] focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Upload
    </button>
  </div>
</form>
<div className='bg-[#3B3B3A] rounded-[9px] w-[329px] h-[715px]'>

</div>
</div>

</div>


        </div>
    </div>
  )
}
