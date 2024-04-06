'use client'

import React, { useState } from 'react'
import Navbar from '../../components/NavBar/navbar'
import Footer from '../../components/Footer/footer'

function PasswdReset() {
  const [show, setShow] = useState(false);


  const confirmOTP = ()=> {
    alert('OTP Confirmation Success!')
    
  }

  const PasswordInput = ()=>{
    return (
        <main className="grid min-h-full place-items-center bg-white sm:py-32 lg:px-8">
          <div className="text-center space-y-6 flex flex-col">
            <h1>Enter Your Email</h1>
            <input type='email'  className='w-[20rem] border px-1'/>

            <button className='bg-[#db4444] border rounded-md text-white h-[50px]' onClick={()=>{setShow(true)}}>Send OTP Code</button>
          </div>
        </main>
    )
  }

  const OTPInput = ()=>{
    return (
      <main className="grid min-h-full place-items-center bg-white sm:py-32 lg:px-8">
        <div className="text-center space-y-6 flex flex-col">
          <h1>An OTP Code has been sent to your email</h1>
          <div className='space-x-4'>
            <input type='number'  className='h-[40px] w-[4rem] border px-2 text-xl font-semibold'/>
            <input type='number'  className='h-[40px] w-[4rem] border px-2 text-xl font-semibold'/>
            <input type='number'  className='h-[40px] w-[4rem] border px-2 text-xl font-semibold'/>
            <input type='number'  className='h-[40px] w-[4rem] border px-2 text-xl font-semibold'/>
          </div>

          <button className='bg-[#db4444] border rounded-md text-white h-[50px]' onClick={confirmOTP}>Confirm Code</button>
        </div>
      </main>
    )
  }

  return (
    <div className='mt-[10rem]'>
        <Navbar />
        { show ? <OTPInput /> : <PasswordInput />}
        <Footer />
    </div>
  )
}

export default PasswdReset