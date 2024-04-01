'use client'

import React from 'react';
import CountDown from './CountDown';


const FlashSaleCountDown = () => {
  const timerComponents = [];

  let timeLeft = CountDown()

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
        <div key={interval}className='flex flex-col justify-between items-center h-16'>
            <p className='text-sm'>{interval}</p>
            <p className='text-3xl font-semibold'>{timeLeft[interval]}</p>
        </div>
    );
  });

  return (
    <div className='flex text-xl space-x-8'>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span>Countdown complete!</span>
      )}
    </div>
  );
};

export default FlashSaleCountDown;