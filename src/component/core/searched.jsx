// import React, { useState } from 'react';
// import Navbar from '../Navbar';
// import Search from '../Search';
// import Imagebar from './imagesbar';
// import { fetchimage } from '../../services/operation/fetchimage';
// function Searched() {
//   const [searchTerm, setSearchTerm] = useState('');
//   // Call the fetchimage function

//   // Call the fetchimage function
// fetchimage()
// .then(response => {
//   // Use the response data here
//   console.log("Response data:", response);
// })
// .catch(error => {
//   // Handle any errors here
//   console.error("Error fetching images:", error);
// });

// //   const dummyData = [
// //     { img: 'https://res.cloudinary.com/djpn31ptd/image/upload/v1695012247/cld-sample-2.jpg' },
// //     { img: 'https://res.cloudinary.com/djpn31ptd/image/upload/v1695012246/cld-sample.jpg' },
// //     { img: 'https://res.cloudinary.com/djpn31ptd/image/upload/v1695012248/cld-sample-4.jpg' },
// //     { img: 'https://res.cloudinary.com/djpn31ptd/image/upload/v1695012248/cld-sample-4.jpg' },
// //     { img: 'https://res.cloudinary.com/djpn31ptd/image/upload/v1695012248/cld-sample-4.jpg' },
// //     { img: 'https://res.cloudinary.com/djpn31ptd/image/upload/v1695012248/cld-sample-4.jpg' },
// //     // Add more items as needed
// //   ];

// //   // Filter the dummyData based on the search term
// //   const filteredData = dummyData.filter(item =>
// //     item.img.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <div className='w-[100%]'>
// //       <div className='bg-[#6BBF59] w-full h-[70px] m-0'>
// //         <div className='pt-4 text-white'><Navbar /></div>
// //         <div className='flex'>
// //           <div className='m-auto'><Search borderColor='#6BBF59' onChange={(e) => setSearchTerm(e.target.value)} /></div>
// //         </div>
// //       </div>
// //       <div className='mt-[130px] text-[30px] font-medium text-[#c0bdc0]'>Search Results for Nature</div>

// //       <div className="mt-10">
// //         <div>
// //           <Imagebar dummy={filteredData} />
// //         </div>
// //       </div>
// //     </div>
// //   );
//  }

// export default Searched;




// Searched.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Search from '../Search';
import { fetchimage } from '../../services/operation/fetchimage';
import studio from '../../asset/icon/navstudio.svg';
import Footer from '../Footer';

function Searched() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTermFromUrl = searchParams.get('term');

  const [clickedImage, setClickedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState(searchTermFromUrl || '');
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchimage()
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  const handleImageClick = (image) => {
    setClickedImage(image);
    navigate(`/photos/{${image._id}}`, { state: { image: image.image, name: image.name, studio: image.studio } });
  }

  const handleCloseImage = () => {
    setClickedImage(null);
    navigate('/');
  }

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredImages = images.filter(image => (
    image.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    image.category.toLowerCase().includes(searchTerm.toLowerCase())
  ));

  return (
    <>
    <div className='flex flex-col items-center'>
      <div className='m-auto w-full bg-[#6BBF59] pt-5 h-[70px]'>
        <Navbar />
      </div>
      <div className={`w-full m-auto ${clickedImage ? 'hidden' : ''}`}>
        <Search onSearch={handleSearch} searchTerm={searchTerm} />
      </div>
      {searchTerm && (
        <p className="text-lg">Showing results for "{searchTerm}"</p>
      )}
      <div className={`w-full ${clickedImage ? 'hidden' : ''}`}>
        <div className="grid w-[85%] m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {filteredImages.map(image => (
            <div key={image._id} className="card relative overflow-hidden cursor-pointer rounded" onClick={() => handleImageClick(image)}>
              <div className="aspect-w-1 aspect-h-1 relative">
                <img className="object-cover" src={image.image} alt={image.name} />
                {image.studio === "true" && <div className="absolute top-3 left-3 w-[30px] h-[30px] bg-black rounded-[20%] opacity-100 flex items-center justify-center">
                  <div><img className="w-[20px] h-[20px] opacity-100" src={studio} /></div>
                </div>}
              </div>
            </div>
          ))}
        </div>
      </div>
      {clickedImage && (
        <div className="absolute top-0 left-0 right-0 p-4 bg-gray-800 bg-opacity-50">
          <button className="text-white" onClick={handleCloseImage}>Back</button>
        </div>
      )}


    </div>
    <div className='mt-10 w-full'>
        <Footer/>
      </div>
    </>
  );
}

export default Searched;
