import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

const Suggestions = () => {
  const [recomendations, setRecomendations] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(6)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setRecomendations(suggestions);
  }, []);
  return (
    <div className='bg-white mt-3 ml-4 p-2 shadow-md rounded-sm'>
      <div className='flex items-center justify-between'>
        <h1 className='text-sm text-gray-600'>Suggestions</h1>
        <p className='text-sm font-semibold cursor-pointer'>see all</p>
      </div>
      {recomendations.map((user) => (
        <div
          key={user.id}
          className='mt-2 flex items-center justify-between text-xs'
        >
          <img
            src={user.avatar}
            alt=''
            className='w-10 h-10 p-[1px] rounded-full cursor-pointer hover:scale-105 transition duration-200'
          />
          <div className='flex-1 mx-2 truncate'>
            <p className='font-semibold cursor-pointer'>{user.username}</p>
            <p className='text-gray-500'>{user.email}</p>
          </div>
          <p className='text-blue-500 cursor-pointer hover:text-blue-300'>
            Follow
          </p>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
