'use client'

import React, { useState } from 'react'
import Navbar from '../../components/NavBar/navbar'
import Footer from '../../components/Footer/footer'
import OTPInput from './OTPInput/OTPInput'

function PasswdReset() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("")

  const handleSendOTP = ()=> {
    setShow(true)
    alert("sending otp")
  }


  return (
    <div className='mt-[10rem]'>
        { show ? <OTPInput  email={email} setShow={setShow}/> : (
          <main className="grid min-h-full place-items-center bg-white sm:py-32 lg:px-8">
          <div className="text-center space-y-6 flex flex-col">
            <h1>Enter Your Email</h1>
              <input 
                type='email'
                value={email}
                className='w-[20rem] border px-1'
                onChange={(e)=> setEmail(e.target.value)}
                />
              <button 
                className='bg-[#db4444] border rounded-md text-white h-[50px] w-'
                disabled={!email.includes('@')} 
                onClick={handleSendOTP}
                >Send OTP Code</button>
          </div>
        </main>
        )}

        <Footer />
    </div>
  )
}

export default PasswdReset