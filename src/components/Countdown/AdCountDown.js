'use client'

import React from 'react';
import CountDown from './CountDown';


const AdCountDown = () => {
  const timerComponents = [];

  let timeLeft = CountDown()

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
        // <div key={interval}className='flex flex-col justify-between items-center h-16 text-white'>
        //     <p className='text-sm'>{interval}</p>
        //     <p className='text-3xl font-semibold'>{timeLeft[interval]}</p>
        // </div>,
        <span className='bg-white border rounded-full h-20 w-20 flex flex-col justify-center items-center'><span className='text-2xl font-semibold'>{timeLeft[interval]}</span>{interval}</span>
    );
  });

  
    {/* <div className='flex justify-between w-[25rem] text-sm'>
        <span className='bg-white border rounded-full h-20 w-20 flex flex-col justify-center items-center'><span className='text-2xl'>23</span>Days</span>
        <span className='bg-white border rounded-full h-20 w-20 flex flex-col justify-center items-center'><span className='text-2xl'>05</span>Hours</span>
        <span className='bg-white border rounded-full h-20 w-20 flex flex-col justify-center items-center'><span className='text-2xl'>59</span>Minutes</span>
        <span className='bg-white border rounded-full h-20 w-20 flex flex-col justify-center items-center'><span className='text-2xl'>35</span>Seconds</span>
    </div> */}

  return (
    <div className='flex justify-between w-[25rem] text-sm'>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span>Countdown complete!</span>
      )}
    </div>
  );
};

export default AdCountDown;