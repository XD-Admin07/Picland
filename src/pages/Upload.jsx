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
        <form onSubmit={handleOnSubmit} encType="multipart/form-data" className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
      Name
    </label>
    <input  onChange={handleOnChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="name"
      name="name"
      value={name}
      type="text"
      placeholder="Name"
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image" name='file'>
      Image
    </label>
    <input  onChange={handleOnFileChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="image"
      type="file"
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subscription">
      Studio
    </label>
    <input  onChange={handleOnChange}
      className="mr-2 leading-tight"
      id="studio"
      name="studio"
      value={studio}
      type="checkbox"
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
      Category
    </label>
    <input  onChange={handleOnChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="category"
      name="category"
      type="text"
      value={category}
      placeholder="Category"
    />
  </div>
  <div className="flex items-center justify-between">
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Submit
    </button>
  </div>
</form>

        </div>
    </div>
  )
}
