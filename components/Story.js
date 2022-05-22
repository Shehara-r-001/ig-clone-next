import React from 'react';

const Story = ({ avatar, username }) => {
  return (
    <div>
      <img
        className='h-10 w-10 lg:h-12 lg:w-12  rounded-full border-2 border-pink-600 p-[1px] transition-all duration-300 object-contain cursor-pointer hover:scale-110'
        src={avatar}
        alt={username}
      />
      <p className='text-xs w-12 truncate lg:w-14 text-center'>{username}</p>
    </div>
  );
};

export default Story;
