import React from 'react';
import Post from './Post';

const posts = [
  {
    id: 1,
    username: 'strider',
    avatar: 'https://avatars.githubusercontent.com/u/84827162?v=4',
    img: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/apex-legends-mobile-faq/common/apex-mobile-announce-art-3840x2160.jpg.adapt.crop16x9.575p.jpg',
    caption: '#ApexLegends',
  },
  {
    id: 2,
    username: 'strider',
    // avatar: 'https://i.pravatar.cc/300?img=1',
    avatar: 'https://avatars.githubusercontent.com/u/84827162?v=4',
    img: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/apex-legends-mobile-faq/common/apex-mobile-announce-art-3840x2160.jpg.adapt.crop16x9.575p.jpg',
    caption: '#ApexLegends',
  },
];

const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          avatar={post.avatar}
          caption={post.caption}
          image={post.img}
        />
      ))}
    </div>
  );
};

export default Posts;
