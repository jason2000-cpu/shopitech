import React from 'react'

function Footer() {
  return (
    <div className='w-[100%] h-[440px] bg-black py-10 px-8 text-white flex justify-between pt-20'>
        <div className='space-y-10'>
            <h2 className='text-2xl'>Exclusive</h2>
            <div className='space-y-4'>
                <h4 className='text-xl'>Subscribe</h4>
                <p>Get 10% off your first order</p>
                <input type='email' placeholder='Enter your email'  className='w-[217px] h-[48px]'/>
            </div>
        </div>
        <div className='space-y-10'>
            <h2 className='text-2xl'>Support</h2>
            <div className='space-y-4'>
                <div>
                    <span className='text-xl'>Address</span>
                    <p>Ralpha Bunche Road, Upper Hill</p>
                    <p>Nairobi, Kenya</p>
                </div>
                <div>
                    <span className='text-xl'>Email</span>
                    <p>info@shopitech.com</p>
                </div>
                <div>
                    <span  className='text-xl'>Phone</span>
                    <p>+254797955092</p>
                </div>
            </div>
        </div>

        <div className='space-y-10'>
            <h2 className='text-2xl'>Quick Link</h2>
            <div className='space-y-4'>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>
        </div>

        <div className='space-y-10'>
            <h2 className='text-2xl'>Download App</h2>

            <div>
                <span>Save Ksh 200 with App. New User Only</span>
                <div className='flex justify-around my-4'>
                    <div className='border border-white h-32 w-32'>QRCODE</div>
                    <div className='space-y-4 flex flex-col justify-center'>
                        <div className='border border-white rounded-md h-10 w-40 flex items-center justify-center'>GOOGLE PLAY</div>
                        <div className='border border-white rounded-md h-10 w-40 flex items-center justify-center'>APP STORE</div>
                    </div>
                </div>
            </div>
            <span className='flex justify-between'>
                <div>facebook</div>
                <div>Twitter</div>
                <div>Instagram</div>
                <div>LinkedIn</div>
            </span>
        </div>
    </div>
  )
}

export default Footer