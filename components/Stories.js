import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import Story from './Story';

const Stories = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setUsers(suggestions);
  }, []);

  return (
    <div className='flex border shadow-md overflow-x-scroll mt-2 lg:mt-3 p-2 py-4 space-x-2 rounded-[3px] scrollbar-thin scrollbar-thumb-pink-600 bg-white'>
      {users.map((user) => (
        <Story key={user.id} username={user.username} avatar={user.avatar} />
      ))}
    </div>
  );
};

export default Stories;
