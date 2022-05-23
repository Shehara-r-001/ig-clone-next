import Image from 'next/image';
import React from 'react';

const Profile = () => {
  return (
    <div className='ml-4 mt-3 bg-white p-2 shadow-md flex items-center justify-between rounded-sm'>
      <Image
        src='https://avatars.githubusercontent.com/u/84827162?v=4'
        width={30}
        height={30}
        className='cursor-pointer rounded-full'
      />
      <div className='text-xs flex-1 ml-3'>
        <p className='font-semibold'>strider</p>
        <p>This is instagram</p>
      </div>
      <p className='text-red-500 text-sm cursor-pointer'>Sign out</p>
    </div>
  );
};

export default Profile;
