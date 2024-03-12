import React from 'react';
import { Link } from 'react-router-dom';

export default function Hcard({ img, text }) {
  return (
    <Link to={`/photos?term=${text}`}>
      <div className='bg-black flex flex-col justify-end m-2' style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', overflowY: 'hidden', paddingBottom: '60%', position: 'relative' }}>
        <div className='absolute text-[12px] lg:text-base md:text-base bottom-0 left-0 bg-gradient-to-r from-black to-transparent text-white text-left font-medium pl-4 pb-1.5'>{text}</div>
      </div>
    </Link>
  );
}
