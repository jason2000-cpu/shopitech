import React from 'react'

function OTPInput({ email, setShow }) {

const handleConfirmOTP = ()=> {
    alert('OTP Confirmation Success!')
    
    }

  return (
    <main className="grid min-h-full place-items-center bg-white sm:py-32 lg:px-8">
    <div className="text-center space-y-6 flex flex-col">
      <h1>An OTP Code has been sent to <span className='font-semibold'>{email}</span></h1>
      <div className='space-x-4'>
        <input type='number'  className='h-[40px] w-[4rem] border px-2 text-xl font-semibold'/>
        <input type='number'  className='h-[40px] w-[4rem] border px-2 text-xl font-semibold'/>
        <input type='number'  className='h-[40px] w-[4rem] border px-2 text-xl font-semibold'/>
        <input type='number'  className='h-[40px] w-[4rem] border px-2 text-xl font-semibold'/>
      </div>

      <button className='bg-[#db4444] border rounded-md text-white h-[50px]' onClick={handleConfirmOTP}>Confirm Code</button>

      <button onClick={()=>setShow(false)}>Change Email</button>
    </div>
  </main>
  )
}

export default OTPInput
