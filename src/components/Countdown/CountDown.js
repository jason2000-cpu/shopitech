'use client'

import React, { useState, useEffect } from 'react'

const CountDown = ()=>{

  const targetDate = new Date('2024-04-20T12:30:00');

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)) > 0 ? Math.floor(difference / (1000 * 60 * 60 * 24)) : '00' ,
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24) > 0 ? Math.floor((difference / (1000 * 60 * 60)) % 24) : '00' ,
        Minutes: Math.floor((difference / 1000 / 60) % 60) > 0 ? Math.floor((difference / 1000 / 60) % 60) : '00',
        Seconds: Math.floor((difference / 1000) % 60) > 0 ? Math.floor((difference / 1000) % 60) : '00',
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return timeLeft
}

export default CountDown;
