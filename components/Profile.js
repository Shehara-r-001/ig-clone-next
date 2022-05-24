import Image from 'next/image';
import React from 'react';
import { signOut, useSession } from 'next-auth/react';

const Profile = () => {
  const { data: session } = useSession();

  return (
    <div className='ml-4 mt-3 bg-white p-2 shadow-md flex items-center justify-between rounded-sm'>
      <Image
        src={session?.user?.image}
        width={30}
        height={30}
        className='cursor-pointer rounded-full'
      />
      <div className='text-xs flex-1 ml-3'>
        <p className='font-semibold'>{session?.user?.username}</p>
        <p>{session?.user?.name}</p>
      </div>
      <p onClick={signOut} className='text-red-500 text-sm cursor-pointer'>
        Sign out
      </p>
    </div>
  );
};

export default Profile;
