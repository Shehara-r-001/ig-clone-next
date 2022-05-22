import React from 'react';
import Posts from './Posts';
import Stories from './Stories';

const Feed = () => {
  return (
    <div className='mt-[50px]  grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-5xl mx-auto'>
      <div className='col-span-2'>
        <Stories />
        <Posts />
      </div>
      <div>
        {/* profile */}
        {/* suggestions */}
      </div>
    </div>
  );
};

export default Feed;
