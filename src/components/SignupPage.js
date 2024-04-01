import React from 'react'
import Link from 'next/link'

function SignupPage() {
  return (
    <div className='flex justify-between'>
        <div className='w-[80%] h-[85vh]'>
            <img src='/static/images/signupBanner.png' alt='signup banner' className='h-[100%] w-[100%]' />
        </div>
        <div className='w-[50%] mx-10 my-2 pt-16 pl-4  '>
            <div className='space-y-8'>
                <h2 className='text-4xl'>Login to ShopiTech</h2>
                <h4>Enter your details below</h4>
                <div className=' space-y-4'>
                    <div className='h-10'>
                        <input className='w-[30rem] border-b-4 focus:outline-none focus:border-b-4' type='text' placeholder='Phone' />
                    </div>
                    <div className='h-10'>
                        <input className='w-[30rem] border-b-4 focus:outline-none focus:border-b-4' type='text' placeholder='Password' />
                    </div>

                    <div className='flex justify-end'>
                        <span className='text-[#db4444]'>Forgot password ?</span>
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
                <div>Don't have and account ? <span className='text-[#db4444]'><Link href='/Register'>Register</Link></span></div>
            </div>
        </div>
    </div>
  )

}

export default SignupPage