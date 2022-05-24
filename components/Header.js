import React, { useState } from 'react';
import Image from 'next/image';
import {
  AiFillHome,
  AiOutlineHome,
  AiOutlinePlus,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineMenu,
} from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';
import { FaRegCompass } from 'react-icons/fa';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

const Header = () => {
  const [border, setBorder] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const [open, setOpen] = useRecoilState(modalState);

  // console.log(session);

  return (
    <div className='w-full fixed top-0 py-1.5 shadow-md z-50 bg-white'>
      <div className='flex justify-between max-w-[764px] mx-auto'>
        <div
          onClick={() => router.push('/')}
          className='w-8 h-8 relative lg:hidden cursor-pointer ml-2'
        >
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/800px-Instagram_icon.png'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div
          onClick={() => router.push('/')}
          className='hidden lg:inline flex-shrink-0 h-10 w-24 relative cursor-pointer'
        >
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png'
            layout='fill'
            objectFit='contain'
          />
        </div>

        <div
          className={`flex items-center lg:mt-1 rounded-md bg-gray-50 ${
            border ? 'border-2 border-black' : ''
          }`}
        >
          <div className='absolute inset-y-0 flex items-center lg:pt-1 lg:pl-2 pl-1'>
            <AiOutlineSearch className=' w-4 h-4 lg:w-5 lg:h-5 pointer-events-none' />
          </div>
          <input
            type='text'
            placeholder='Search'
            className='w-[140px] sm:w-[180px] border-none outline-none bg-gray-50 text-sm pl-6 lg:pl-8 focus:border-black focus:ring-black rounded-md'
            // onClick={() => setBorder(!border)}
          />
        </div>
        <div className='flex items-center justify-between w-[100px] sm:w-[220px] pr-2'>
          {session ? (
            <>
              <AiFillHome
                onClick={() => router.push('/')}
                className='header_icons hidden sm:inline'
              />
              <div className='relative hidden sm:inline'>
                <RiMessengerLine className='header_icons hidden sm:inline' />
                <div className='absolute -top-0.5 -right-1 bg-red-500 rounded-full h-4 w-4 text-xs'>
                  <p className='ml-1'>5</p>
                </div>
              </div>
              <AiOutlinePlus
                onClick={() => setOpen(true)}
                className='header_icons hidden sm:inline border-2 border-black rounded-md'
              />
              <FaRegCompass className='header_icons hidden sm:inline' />
              <AiOutlineMenu className='header_icons sm:hidden' />
              <AiOutlineHeart className='header_icons' />
              <Image
                src={session?.user?.image}
                onClick={signOut}
                width={25}
                height={25}
                className='cursor-pointer rounded-full'
              />
            </>
          ) : (
            <p
              className='text-sm text-blue-500 uppercase cursor-pointer hover:scale-110 transition duration-300'
              onClick={signIn}
            >
              Signin
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
