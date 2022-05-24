import Head from 'next/head';
import Feed from '../components/Feed';
import Header from '../components/Header';
// import { useSession } from 'next-auth/react';

export default function Home() {
  // const {data: session} = useSession();
  return (
    <div className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide'>
      <Head>
        <title>Strider - Instagram</title>
      </Head>

      <Header />
      <main>
        <Feed />
      </main>
    </div>
  );
}
