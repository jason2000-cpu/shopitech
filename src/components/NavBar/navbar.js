import React from 'react'
import Floatbanner from './floatbanner'
import Link from 'next/link'

const NavLinks = ['Home', 'Contact', 'About', 'Sign Up']
function Navbar() {
  return (
    <div>
        <Floatbanner />
        <div className='flex justify-between border border-black h-20 items-center'>
            <div className='ml-10 border'>
                <span className=''>LOGO</span>
            </div>
            <div className='space-x-20 border'>
                {NavLinks.map(nav => {
                    return <Link href="#">{nav}</Link>
                })}
            </div>
            <div className='flex mr-5'>
                <input className='border' type='text' placeholder='What are you looking for?' />
                <p className='mx-5'>icon</p>
                <p>icon</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar