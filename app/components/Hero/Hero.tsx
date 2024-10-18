import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className='flex flex-col justify-center items-center h-screen text-center bg-primary text-secondary'>
      <h1 className='text-6xl font-extrabold tracking-tight sm:text-7xl'>App Paddle</h1>
      <p className='text-xl sm:text-2xl mt-4 tracking-wide font-light'>
        Bring your ideas to digital reality.
      </p>
    </section>
  );
};

export default Hero;
