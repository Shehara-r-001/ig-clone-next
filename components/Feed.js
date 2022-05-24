import React from 'react';
import Posts from './Posts';
import Profile from './Profile';
import Stories from './Stories';
import Suggestions from './Suggestions';
import { useSession } from 'next-auth/react';

const Feed = () => {
  const { data: session } = useSession();
  return (
    <div
      className={`mt-[50px]  grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-5xl mx-auto ${
        !session && '!grid-cols-1 !max-w-3xl'
      }`}
    >
      <div className='col-span-2'>
        <Stories />
        <Posts />
      </div>
      {session && (
        <div className='hidden lg:inline-grid md:col-span-1'>
          <div className='fixed top-[50px] lg:w-[280px]'>
            <Profile />
            <Suggestions />
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;
