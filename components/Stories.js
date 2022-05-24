import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import Story from './Story';
import { useSession } from 'next-auth/react';
import { AiOutlinePlus } from 'react-icons/ai';

const Stories = () => {
  const [users, setUsers] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setUsers(suggestions);
  }, []);

  return (
    <div className='flex border shadow-md overflow-x-scroll mt-2 lg:mt-3 p-2 py-4 space-x-2 rounded-[3px] scrollbar-thin scrollbar-thumb-pink-600 bg-white'>
      {session && (
        <div className='relative'>
          <Story username={session.user.username} avatar={session.user.image} />
          <AiOutlinePlus className='absolute top-2 left-2 h-6 w-6 text-white opacity-80 cursor-pointer lg:top-2.5 lg:left-2.5 lg:h-7 lg:w-7' />
        </div>
      )}

      {users.map((user) => (
        <Story key={user.id} username={user.username} avatar={user.avatar} />
      ))}
    </div>
  );
};

export default Stories;
