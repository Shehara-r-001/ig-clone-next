import React, { useState } from 'react';
import Image from 'next/image';
import {
  AiFillHome,
  AiOutlineHome,
  AiOutlinePlus,
  AiOutlineHeart,
  AiOutlineSearch,
} from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';
import { FaRegCompass } from 'react-icons/fa';

const Header = () => {
  const [border, setBorder] = useState(false);
  return (
    <div className='w-full fixed top-0 py-1.5'>
      <div className='flex justify-between max-w-[764px] mx-auto'>
        <div className='w-10 h-10 relative lg:hidden cursor-pointer ml-2'>
          <Image
            src='https://img.icons8.com/color/344/instagram-new.png'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='hidden lg:inline flex-shrink-0 h-10 w-24 relative cursor-pointer'>
          <Image
            src='https://freepngimg.com/save/76861-web-instagram-script-typeface-typography-font/1785x612'
            layout='fill'
            objectFit='contain'
          />
        </div>

        <div
          className={`flex items-center mt-1 h-8 rounded-md bg-gray-50 px-2 ${
            border ? 'border-2 border-black' : ''
          }`}
        >
          <AiOutlineSearch className='w-5 h-5 mr-2 pointer-events-none' />
          <input
            type='text'
            placeholder='Search'
            className='w-[100px] sm:w-[140px] border-none outline-none bg-gray-50 text-sm'
            // onClick={() => setBorder(!border)}
          />
        </div>
        <div className='flex items-center justify-between w-[180px] sm:w-[220px] pr-2'>
          <AiFillHome className='header_icons' />
          <RiMessengerLine className='header_icons' />
          <AiOutlinePlus className='header_icons border-2 border-black rounded-md' />
          <FaRegCompass className='header_icons' />
          <AiOutlineHeart className='header_icons' />
          <Image
            src='https://img.icons8.com/material-rounded/344/user.png'
            width={25}
            height={25}
            className='cursor-pointer rounded-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
