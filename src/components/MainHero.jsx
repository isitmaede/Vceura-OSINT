'use client';
import React from 'react';
import Image from 'next/image';

export default function MainHero() {
  return (
    <div className='px-4 py-10'>
      <div className='flex flex-col justify-center items-center text-gray-50 text-center max-w-3xl mx-auto'>

       
        <h1 className='text-2xl md:text-3xl font-light leading-relaxed text-gray-200'>
          Vercura is an OSINT 
          <span className='font-semibold text-gray-100'> (Open Source Intelligence) </span> 
          platform that combines a rich collection of powerful investigative tools.
        </h1>
        
        
        <div className='mt-10 w-full flex justify-center items-center h-[40vh]'>
          <Image 
            src={'/osint.png'} 
            alt='osint' 
            width={500} 
            height={500}
            className='object-contain'
          />
        </div>
      </div>
    </div>
  );
}
