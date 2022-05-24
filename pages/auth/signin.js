import React from 'react';
import { getProviders, signIn } from 'next-auth/react';
import Header from '../../components/Header';
import Image from 'next/image';

const signin = ({ providers }) => {
  return (
    <>
      <Header />

      <div className='h-screen flex items-center flex-col justify-center -mt-10'>
        <div className='h-20 w-48 relative cursor-pointer'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className=''>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              {/* <button onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
              </button> */}
              <button
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                className='relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-pink-500 rounded-xl group'
              >
                <span className='absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-pink-700 rounded group-hover:-mr-4 group-hover:-mt-4'>
                  <span className='absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white'></span>
                </span>
                <span className='absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-pink-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0'></span>
                <span className='relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white italic'>
                  Sign in with {provider.name}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signin;
