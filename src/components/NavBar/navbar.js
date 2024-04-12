'use client'

import React from 'react'
import Floatbanner from './floatbanner'
import Link from 'next/link'

import Dropdown from '../Dropdown/Dropdown';

// icons
import { MdOutlineFavoriteBorder, MdSearch } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import useCart from '@/Hooks/useCart';


// const NavLinks = ['Home', 'Contact', 'About', 'Signup']

const NavLinks = [
    {
        id: 1,
        name: 'Home',
        path: '/',
    },
    {
        id: 2,
        name: 'Contact',
        path: '/contact',
    },
    {
        id: 3,
        name: 'About',
        path: '/about',
    },
    {
        id: 4,
        name: 'Signup',
        path: '/Signup'
    }
]
function Navbar() {
    // console.log(context.cartItems)

    const { cart } = useCart();
    console.log("CART ITEMS FROM NAVBAR::::", cart);
  return (
    <div className='fixed z-10 bg-white w-[100vw] top-0 left-0'>
        <Floatbanner />
        <div className='flex justify-between h-20 items-center px-8 shadow-lg'>
            <div>
                <span className=''>
                    <img src='/static/images/logo.png' alt='SHOPITECH' className='w-24 h-[4.8rem]' />
                </span>
            </div>
            <div className='space-x-20 text-[18px]'>
                {NavLinks.map(nav => {
                    return <Link className='cursor-pointer' href={`${nav.path}`}>{nav.name}</Link>
                })}
            </div>
            <div className='flex justify-between w-[40rem]  '>
                <div className='flex'>
                    <input className='p-2 border w-[27rem] h-10 rounded-sm' type='text' placeholder='What are you looking for?' />
                    <MdSearch  size={30} className='relative top-[0.4rem] right-[2rem]'/>
                </div>
                <div className='flex  justify-between w-32 items-center'>
                    <div className='cursor-pointer'>
                        <Link href='/Wishlist'>
                            <MdOutlineFavoriteBorder size={30} /> 
                            <span className='absolute top-10 right-32 bg-[#db4444] border rounded-full h-4 w-4  p-[.6rem]  flex justify-center items-center text-white '>0</span>
                        </Link>
                    </div>
                    <div className='cursor-pointer'>
                        <Link href='/Cart'>
                            <HiOutlineShoppingCart size={30}/>
                            <span className='absolute top-10 right-20 bg-[#db4444] border rounded-full h-4 w-4 p-[.6rem]  flex justify-center items-center text-white'>{cart.length}</span>
                        </Link>
                    </div>
                    <Dropdown />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar