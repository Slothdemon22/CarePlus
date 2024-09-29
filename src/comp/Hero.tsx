import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="hero flex flex-col w-screen h-screen p-6 md:flex-row md:p-8 overflow-x-hidden font-gilroy">
      <div className='flex flex-col justify-center gap-8 md:w-1/2'>
        <h1 className='w-[330px] md:w-full text-4xl sm:text-5xl md:text-6xl text-[#252B61]'>
          Medical Care Now <br className='hidden md:block' />Simplified For <span className='text-blue-500'>Everyone</span>
        </h1>
        <p className='md:w-full text-gray-500'>
          Health carely is a new way to get health insurance quotes. We offer tools similar to those
          provided by insurance companies for free and prices are based on donations and not
          restrictive health plan networks.
        </p>
        <Link href="/signUp" passHref>
          <button type="button" className='text-white py-2  px-8 border-none rounded-lg max-w-[120px] font-bold bg-blue-600 hover:bg-blue-800 transition-all duration-300'>
            Register
          </button>
        </Link>
      </div>
      <div className='h-[50%] md:h-auto'>
        <img src="illustration.png" alt="image" className="max-w-full h-full object-contain" />
      </div>
    </div>
  );
};

export default Hero;
