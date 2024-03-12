import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import studios from '../../asset/icon/navstudio.svg'
import download from '../../asset/icon/d_icon.png';
import { UseSelector, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

function Imageview({ onClose, watermark }) {
    const location = useLocation();
    const image = location.state?.image;
    const name = location.state?.name;
    const studio=location.state?.studio;
    const {token}=useSelector((state)=>state.auth)
    const{user}=useSelector((state)=>state.profile)
    const navigate = useNavigate();

    const handleDownload = (token) => {

      if(token){
        fetch(image)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Error downloading image:', error));
      }
      else{
        navigate("/login")
        console.log("login to download");
      }
      
    };

    return (
        <div>
            <div className='w-full h-[70px] bg-[#6BBF59] p-5'><Navbar /></div>

            <div className='lg:flex md:flex lg:w-[85%] md:w-[85%] w-[100%] m-auto mt-[30px] justify-between'>
                <div className='lg:w-[65%] md:w-[65%] w-[90%] m-auto'>
                    <img src={image} alt="Image" />
                    <div className='text-black'>{name}</div>
                </div>

                <div className='lg:w-[25%] md:w-[25%] w-[85%] mt-10 lg:mt-0 md:mt-0 m-auto space-y-5 text-white font-medium text-[20px] border-2 h-[323px]'>
                {(user?.Plan==="yearly" || user?.Plan==="monthly")?(<div onClick={handleDownload} className='cursor-pointer flex items-center justify-center w-[90%] h-[62px] bg-[#ea9f3d] rounded-md m-auto mt-5 gap-1'>
                        <img src={studios} className='w-[24px]' />
                        <div>Studio download</div>
                    </div>):( <Link to='/pricing'><div className='flex items-center justify-center w-[90%] h-[62px] bg-[#ea9f3d] rounded-md m-auto mt-5 gap-1'>
                        <img src={studios} className='w-[24px]' />
                        <div>Go Studio</div>
                    </div></Link>)}

                   

                   { studio==="false" && <div className='flex items-center justify-center w-[90%] h-[62px] bg-[#6BBF59] rounded-md m-auto mt-5 gap-1 cursor-pointer' onClick={() => handleDownload(token)}>
                        <div className='mt-1'><img src={download} /></div>
                        <div>Free download</div>
                    </div>}
                    <div className='text-[#9b9d9b] flex flex-col text-left text-sm w-[90%] m-auto gap-y-2'>
                      <div>Attribute required</div>
                      <div>Free license</div>
                      <div>File type</div>
                    </div>
                </div>

            </div>
            <div>
              
            </div>
            <div className='mt-10 w-full'> 
            <Footer/>
            </div>
        </div>
    );
}

export default Imageview;

