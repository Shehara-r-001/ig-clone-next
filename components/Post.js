import React, { useEffect, useState } from 'react';
import {
  BsThreeDots,
  BsBookmark,
  BsChatDots,
  BsEmojiLaughing,
} from 'react-icons/bs';
import { FaRegPaperPlane } from 'react-icons/fa';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import { useSession } from 'next-auth/react';
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  setDoc,
  doc,
  deleteDoc,
} from '@firebase/firestore';
import { db } from '../firebase';
import Moment from 'react-moment';

const Post = ({ username, image, avatar, caption, id }) => {
  const { data: session } = useSession();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    );
  }, [likes]);

  const likePosts = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid));
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username,
      });
    }
  };

  useEffect(
    () =>
      onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc')
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, id]
  );

  const sendComment = async (e) => {
    e.preventDefault();
    const newComment = comment;
    setComment('');

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: newComment,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className='w-full mt-4 shadow-md bg-white rounded-sm'>
      <div className='flex justify-between px-2 items-center pt-2'>
        <img
          className='w-10 h-10 rounded-full border-2 border-pink-600 p-[1px] hover:scale-110 transition duration-300 ease-out cursor-pointer'
          src={avatar}
          alt={username}
        />
        <p className='flex-1 ml-2 text-sm font-semibold'>{username}</p>
        <BsThreeDots className='mr-2 cursor-pointer' />
      </div>
      <div className='my-2'>
        <img className='object-cover' src={image} alt='' />
      </div>
      {session && (
        <div className='flex items-center justify-between pt-3 pb-2 mx-3'>
          <div className='flex space-x-4'>
            {hasLiked ? (
              <HiHeart
                onClick={likePosts}
                className='postIcon w-6 h-6 text-pink-500'
              />
            ) : (
              <HiOutlineHeart
                onClick={likePosts}
                className='postIcon w-6 h-6'
              />
            )}
            <FaRegPaperPlane className='postIcon' />
            <BsChatDots className='postIcon' />
          </div>
          <div>
            <BsBookmark className='postIcon' />
          </div>
        </div>
      )}
      <div className='mx-3 text-xs pb-4'>
        {likes.length > 0 && likes.length < 2 ? (
          <p>
            Liked by{' '}
            <span className='font-semibold text-sm'>
              {likes[0].data().username}
            </span>
          </p>
        ) : likes.length >= 2 ? (
          <p>
            Liked by{' '}
            <span className='font-semibold text-sm'>
              {likes[0].data().username}
            </span>{' '}
            and {likes.length - 1} others..
          </p>
        ) : (
          ''
        )}
        <p className='truncate'>
          <span className='font-bold cursor-pointer'>{username} </span>
          {caption}
        </p>
        {/* <p>View all 53 comments..</p> */}
        {comments.length > 0 && (
          <div className='h-14 overflow-y-scroll scrollbar-thumb-pink-500 scrollbar-thin my-2 space-y-1'>
            {comments.map((item) => (
              <div className='flex items-center ml-3' key={item.id}>
                <img
                  className='h-6 w-6 rounded-full mr-2'
                  src={item.data().userImage}
                  alt=''
                />
                <p className='text-xs flex-1'>
                  <span className='mr-1 font-bold '>
                    {item.data().username}
                  </span>
                  {item.data().comment}
                </p>
                <Moment className='text-[10px] text-gray-600 pr-4' fromNow>
                  {item.data().timestamp?.toDate()}
                </Moment>
              </div>
            ))}
          </div>
        )}
        {/* <p>1 day ago</p> */}
      </div>
      {session && (
        <form className='flex items-center px-3 pb-2'>
          <BsEmojiLaughing className='mr-2 postIcon' />
          <input
            type='text'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder='Add a comment'
            className='flex-1 focus:ring-0 outline-none border-none text-xs'
          />
          <button
            type='submit'
            disabled={!comment.trim()}
            onClick={sendComment}
            className='text-sm uppercase font-semibold cursor-pointer hover:scale-110 transition duration-200 ease-in-out ml-2 text-blue-500'
          >
            POST
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;
