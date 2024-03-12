import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '../asset/icon/search_icon.svg'
export default function Search({ onSearch, results, borderColor, searchTerm }) {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm || '');

  const handleSearch = () => {
    onSearch(localSearchTerm, results);
  };

  return (
    <div className="relative m-auto lg:w-[70%] md:w-[70%] w-[85%] my-[55px] flex items-center">
      <select className="absolute hidden lg:block md:block left-[10px] h-[39px] w-[104px] text-black rounded-lg">
        <option>Photos</option>
        <option>Video</option>
        <option>Vector</option>
      </select>
      <input
        type="search"
        placeholder="Search by name"
        className={`flex-1 lg:h-[54px] mg:h-[54px] h-[24px] outline-[#cacaca] rounded-lg p-5 text-black lg:pl-[160px] lg:pr-[204px] border-2 border-[${borderColor}]`}
        value={localSearchTerm}
        onChange={(e) => setLocalSearchTerm(e.target.value)}
      />
<div className="absolute lg:right-[10px] md:right-[10px] right-[10px] h-[39px] lg:w-[104px] md:w-[w-104px] flex items-center">
      <button className="lg:h-[39px] lg:w-[104px] md:h-[39px] md:w-[104px] w-[27px] h-[27px] bg-[#6BBF59] text-white rounded-lg flex justify-center items-center" onClick={handleSearch}>
       {window.innerWidth < 768 ? <img src={icon} alt="Search Icon" /> : 'Search'}
       </button>

      </div>
      
    </div>
  );
}
