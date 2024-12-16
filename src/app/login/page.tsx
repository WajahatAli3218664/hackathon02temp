'use client'; // Mark this file as a Client Component

import { useRouter } from 'next/navigation';
import Head from 'next/head';

const UnderConstruction = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Page Under Construction</title>
        <meta name="description" content="This page is under construction. Please check back later." />
      </Head>

      <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-50 px-4 text-center">
        <div className="max-w-md sm:max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A254B] mb-6">
            🚧 Page Under Construction 🚧
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">
            We’re working hard to bring this page to life. Unfortunately, due to time constraints, it couldn’t be designed yet.
          </p>
          <p className="text-sm sm:text-md text-gray-500">
            Please check back later. We appreciate your patience and understanding!
          </p>

          <button
            onClick={() => router.push('/')}
            className="mt-6 px-6 py-3 bg-[#2A254B] text-white text-sm sm:text-base rounded-lg hover:bg-[#4b437d] transition duration-200"
          >
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default UnderConstruction;
