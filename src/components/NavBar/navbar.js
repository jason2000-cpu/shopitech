import React from 'react'
import Floatbanner from './floatbanner'
import Link from 'next/link'

// icons

import { MdOutlineFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";


const NavLinks = ['Home', 'Contact', 'About', 'Signup']
function Navbar() {
  return (
    <div>
        <Floatbanner />
        <div className='flex justify-between border border-black h-20 items-center px-8'>
            <div className='border'>
                <span className=''>LOGO</span>
            </div>
            <div className='space-x-20 text-[18px]'>
                {NavLinks.map(nav => {
                    return <Link className='cursor-pointer' href={`/${nav}`}>{nav}</Link>
                })}
            </div>
            <div className='flex justify-between w-96  '>
                <div>
                    <input className='border border-black w-60 h-10 rounded-sm' type='text' placeholder='What are you looking for?' />
                </div>
                <div className='flex  justify-between w-32 items-center'>
                    <div className='cursor-pointer'>
                        <MdOutlineFavoriteBorder size={30} /> 
                        <span className='absolute top-10 right-32 bg-[#db4444] border rounded-full h-4 w-4 p-2  flex justify-center items-center'>2</span>
                    </div>
                    <div className='cursor-pointer'>
                        <HiOutlineShoppingCart size={30}/>
                        <span className='absolute top-10 right-20 bg-[#db4444] border rounded-full h-4 w-4 p-2  flex justify-center items-center'>4</span>
                    </div>
                    <p className='cursor-pointer'><FaRegUser size={30}/></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar