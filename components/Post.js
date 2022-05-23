import React from 'react';
import {
  BsThreeDots,
  BsBookmark,
  BsChatDots,
  BsEmojiLaughing,
} from 'react-icons/bs';
import { FaRegPaperPlane } from 'react-icons/fa';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';

const Post = ({ username, image, avatar, caption }) => {
  return (
    <div className='w-full mt-4 shadow-md bg-white rounded-sm'>
      <div className='flex justify-between px-2 items-center pt-2'>
        <img
          className='w-10 h-10 rounded-full border-2 border-pink-600 p-[1px] hover:scale-110 transition duration-300 ease-out cursor-pointer'
          src={avatar}
          alt={username}
        />
        <p className='flex-1 ml-2 text-sm font-semibold'>{username}</p>
        <BsThreeDots className='mr-2 cursor-pointer' />
      </div>
      <div className='my-2'>
        <img className='object-cover' src={image} alt='' />
      </div>
      <div className='flex items-center justify-between pt-3 pb-2 mx-3'>
        <div className='flex space-x-4'>
          <HiOutlineHeart className='postIcon w-6 h-6' />
          <FaRegPaperPlane className='postIcon' />
          <BsChatDots className='postIcon' />
        </div>
        <div>
          <BsBookmark className='postIcon' />
        </div>
      </div>
      <div className='mx-3 text-xs pb-4'>
        <p>Liked by ...</p>
        <p className='truncate'>
          <span className='font-bold cursor-pointer'>{username} </span>
          {caption}
        </p>
        <p>View all 53 comments..</p>
        <p>1 day ago</p>
      </div>
      <form className='flex items-center px-3 pb-2'>
        <BsEmojiLaughing className='mr-2 postIcon' />
        <input
          type='text'
          placeholder='Add a comment'
          className='flex-1 focus:ring-0 outline-none border-none text-xs'
        />
        <p className='text-sm uppercase font-semibold cursor-pointer hover:scale-110 transition duration-200 ease-in-out ml-2 text-blue-500'>
          POST
        </p>
      </form>
    </div>
  );
};

export default Post;
