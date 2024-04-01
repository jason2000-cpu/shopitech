import Link from 'next/link'
import React from 'react'

import { BsEyeSlash } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";

function RegPage() {
  return (
    <div className='flex justify-between'>
        <div className='w-[80%] h-[85vh]'>
            <img src='/static/images/signupBanner.png' alt='signup banner' className='w-[100%] h-[100%]' />
        </div>
        <div className='w-[50%] mx-10 my-2 pt-4  '>
            <div className='space-y-8'>
                <h2 className='text-4xl'>Create an account</h2>
                <h4>Enter your details below</h4>
                <div className=' space-y-4'>
                    <div className='h-10'>
                        <input className='w-[30rem] border-b-4 focus:outline-none focus:border-b-4' type='text' placeholder='Name' />
                    </div>
                    <div className='h-10'>
                        <input className='w-[30rem] border-b-4 focus:outline-none focus:border-b-4' type='text' placeholder='Email'  />
                    </div>
                    <div className='h-10'>
                        <input className='w-[30rem] border-b-4 focus:outline-none focus:border-b-4' type='text' placeholder='Phone' />
                    </div>
                    <div className='h-10'>
                        <input className='w-[30rem] border-b-4 focus:outline-none focus:border-b-4' type='text' placeholder='Password' />
                    </div>

                    <div className='flex flex-col items-center my-4'>
                        <button className='h-[56px] w-[371px] text-white bg-[#db4444] border rounded '>Create Account</button>
                        <div className='my-2'>or</div>
                        <button className='h-[56px] w-[371px] border rounded' >
                            <span></span>
                            <h3>Sign up with Google</h3>
                        </button>
                    </div>
                    
                </div>
            </div>
            <div className='mt-8'>
                Already have an account? <span className='text-[#db4444]'><Link href='/Signup'>Login</Link></span>
            </div>
        </div>
    </div>
  )
}

export default RegPage