import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import Post from './Post';

// const posts = [
//   {
//     id: 1,
//     username: 'strider',
//     avatar: 'https://avatars.githubusercontent.com/u/84827162?v=4',
//     img: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/apex-legends-mobile-faq/common/apex-mobile-announce-art-3840x2160.jpg.adapt.crop16x9.575p.jpg',
//     caption: '#ApexLegends',
//   },
//   {
//     id: 2,
//     username: 'strider',
//     // avatar: 'https://i.pravatar.cc/300?img=1',
//     avatar: 'https://avatars.githubusercontent.com/u/84827162?v=4',
//     img: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/apex-legends-mobile-faq/common/apex-mobile-announce-art-3840x2160.jpg.adapt.crop16x9.575p.jpg',
//     caption: '#ApexLegends',
//   },
// ];

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          avatar={post.data().profileImg}
          caption={post.data().caption}
          image={post.data().image}
        />
      ))}
    </div>
  );
};

export default Posts;
