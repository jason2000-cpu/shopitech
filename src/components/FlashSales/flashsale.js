'use client'

import React, {useContext, useEffect, useState } from 'react'
import Card from './card'

import useProductRest from '@/Hooks/useProductRest';

// icons
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";
import FlashSaleCountDown from '../Countdown/FlashSaleCountDown';
import MyCarousel from './MyCarousel';


const flashsales = [ 
    {
        id: 1,
        price_cut: '-40%',
        favorite: true,
        pic: '/static/images/G92_GamePad.png',
        name: 'Havit HV-G92 Gamepad',
        initial_price: 'ksh 160',
        current_price: 'Ksh 120',
        rating: '88'
    },
    {
        id: 2,
        price_cut: '-36%',
        favorite: false,
        pic: '/static/images/AK_Keyboard.png',
        name: 'AK-900 Wired Keyboard',
        initial_price: 'Ksh 1160',
        current_price: 'Ksh 960',
        rating: '75'
    },
    {
        id: 3,
        price_cut: '-30%',
        favorite: false,
        pic: '/static/images/Gaming_Monitor.png',
        name: 'IPS LCD Gaming Monitor',
        initial_price: 'Ksh 50 000',
        current_price: 'Ksh 45, 000',
        rating: '99'
    },
    {
        id: 4,
        price_cut: '-25%',
        favourite: false,
        pic: '/static/images/Comfort_Chair.png',
        name: 'S-Series Comfort Chair',
        initial_price: 'Ksh 15 000',
        current_price: 'Ksh 13 500',
        rating: '99'
    }
]



function FlashSale() {


  return (
    <div>
        <div className='mx-12 my-16'>
            <div className='flex'>
                <div className='bg-[#db4444] w-4 h-8 mr-2' ></div>
                <p className='text-[#db4444] h-8 flex items-center text-xl' >Today's</p>
            </div>
            <div className='flex mt-6 justify-around'>
                <p className='text-4xl'>Flash Sales</p>
                <FlashSaleCountDown />
                <div className='flex justify-between'>
                    <div className='border rounded-full h-10 w-10 bg-[#f5f5f5] flex justify-center items-center mr-2 text-2xl'>  {'<'} </div>
                    <div className='border rounded-full h-10 w-10 bg-[#f5f5f5] flex justify-center items-center text-2xl'>&gt;</div>
                </div>
            </div>
            {/* Flash Sale Cards */}
            <div className='flex justify-evenly my-10'>
                { flashsales.map(item =>{
                    return <Card key={item.id} item={item} />
                })}

            </div>
            <div className='flex justify-center '>
                <button className='text-white bg-[#db4444] border rounded-[4px] h-[56px] w-[234px]'>View All Products</button>
            </div>
        </div>

        <MyCarousel  />

    </div>
  )
}

export default FlashSale