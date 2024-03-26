// import React from 'react'
// import main from '../asset/images/nature.jpg'
// import Search from '../component/Search'
// import Navbar from '../component/Navbar'
// import {Link} from 'react-router-dom'

// export default function Main() {
//   return (
// <div className={`text-white w-full  h-[560px]`} style={{backgroundImage: `url(${main})`, backgroundSize: 'cover', overflowY: 'hidden'}}> 
// <div className='mt-5'><Navbar/></div>
// <div className='flex flex-col mt-[150px]'>
// <h1 className='text-[39px] font-inter font-bold  '>Great Product Need Great Picture, Isn’t?</h1>
// <p className='text-[18px] mt-[5px]'>Explore Plenty of Hi-res images and videos on Picland for free</p>
// <div className='m-auto mt-0'><Search
// borderColor='#'/></div>
// </div>
// </div>

    

//   )
// }

import React, { useState, useEffect } from 'react';
import { fetchimage } from '../services/operation/fetchimage';
import Navbar from '../component/Navbar';
import Search from '../component/Search';
import {a} from "../asset/images/a.jpg"
import { Link, useNavigate } from 'react-router-dom';
import icon from '../asset/icon/search_icon.svg'
export default function Main() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      navigate(`/photos?term=${searchTerm}`);
    }
  };
  // const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const image = {};
function importAll(r) {
  r.keys().forEach(key => {
    image[key.replace('./', '')] = r(key);
  });
}
importAll(require.context('../asset/images/', false, /\.(jpg)$/));

const img=[
  {a:image['a.jpg']},
  {a:image['1.jpg']},
  {a:image['2.jpg']},
  {a:image['3.jpg']},
  {a:image['4.jpg']},
  {a:image['5.jpg']},
  {a:image['6.jpg']},
  {a:image['7.jpg']},
  {a:image['8.jpg']},
  {a:image['9.jpg']},
  {a:image['10.jpg']},
  {a:image['11.jpg']},
]


  // useEffect(() => {
   
  //   const fetchImages = async () => {
  //     try {
  //       const response = await fetchimage(); // Assuming fetchimage returns an array of image objects
  //       setImages(response);
  //     } catch (error) {
  //       console.error('Error fetching images:', error);
  //     }
  //   };

  //   fetchImages();
  // },[]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % img.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [img]);


  const imageStyle = {
    // backgroundImage: `url(${images[currentImageIndex]?.image})`,
    backgroundImage: `url(${image['2.jpg']?.default})`

,
    backgroundSize: 'cover',
    overflowY: 'hidden',
    transition: 'background-image 1s ease-in-out', // Smooth transition
    backgroundColor: '#6BBF59', // Fallback background color
  };

  return (
    
    <div className="text-white w-full lg:h-[560px] md:h-[560px] h-[535px]" 
    style={{
      backgroundImage: `url(${img[currentImageIndex].a})`,
      backgroundSize: 'cover',
      overflowY: 'hidden',
      transition: 'background-image 1s ease-in-out', // Smooth transition
      backgroundColor: '#6BBF59', // Fallback background color
    }}>
      {/* <img src={image['2.jpg']}/> */}
      <div className="mt-5 ">
        <Navbar />
      </div>
      
    
      


      <div className="flex flex-col mt-[150px] w-[80%] lg:w-[100%] m-auto">
        <h1 className="lg:text-[39px] font-inter font-bold text-3xl">
        Empower Your Vision with Exceptional Images
        </h1>
        <p className="lg:text-[18px] mt-[25px] text-sm">
          Explore plenty of Hi-res images and videos on Picland for free
        </p>
        {/* <div className="m-auto mt-0">
          <Search borderColor="#" />
        </div> */}
        
        <div className="relative lg:w-[70%] md:w-[70%] w-[100%] my-[55px] flex items-center m-auto">
      <select className="absolute hidden lg:block md:block left-[10px] h-[39px] w-[104px] text-black rounded-lg">
        <option>Photos</option>
        {/* <option>Video</option>
        <option>Vector</option> */}
      </select>
      <input
        type="search"
        placeholder="Search all images"
        className={`text-sm lg:text-md md:text-md flex-1 lg:h-[54px] mg:h-[54px] h-[24px]  outline-[#cacaca] rounded-lg p-5 text-black lg:pl-[160px] lg:pr-[204px] border-2`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="absolute lg:right-[10px] md:right-[10px] right-[10px] h-[39px] lg:w-[104px] md:w-[w-104px] flex items-center">
      <button className="lg:h-[39px] lg:w-[104px] md:h-[39px] md:w-[104px] w-[27px] h-[27px] bg-[#6BBF59] text-white rounded-lg flex justify-center items-center" onClick={handleSearch}>
       {window.innerWidth < 768 ? <img src={icon} alt="Search Icon" /> : 'Search'}
       </button>

      </div>
      
    </div>

{/* 
         <div className='text-black'>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
        </div> */}
        <p className='text-right lg:mr-10 md:mr-10 lg:mt-14 md:mt-14 mt-[-20px] lg:text-[12px] md:text-[12px] text-[10px]'>Image by <span className='font-medium'>Unplash</span></p>
      </div>
      
    </div>
  );
}
