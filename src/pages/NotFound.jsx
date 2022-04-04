import React from 'react';

function NotFound() {
  return (
    <div className='w-full h-screen flex justify-center items-center text-black gap-6'>
      <h1 className='font-extrabold text-2xl'>404</h1>
      <div className='w-[.1rem] h-[5rem] bg-gray-300'></div>
      <p>This page could not be found.</p>
    </div>
  );
}

export default NotFound;
