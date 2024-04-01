import React from 'react'

import { IoCallOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa6";


function ContactDetails() {
  return (
    <div className='border-t-2 shadow-xl space-y-6 px-10  py-8'>
        <div className='space-y-6'>
            <div className='flex justify-between items-center w-[150px]'>
                <div className='border w-[40px] h-[40px] rounded-full bg-[#db4444] flex justify-center items-center'><IoCallOutline size={25} color='white' /></div>
                <span className='text-2xl font-bold'>Call Us</span>
            </div>
            <div className='text-xl font-medium'>
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +254797955092</p>
            </div>
        </div>
        <hr></hr>
        <div className='space-y-6'>
            <div className='flex justify-between items-center w-[200px]'>
                <div className='border w-[40px] h-[40px] rounded-full bg-[#db4444] flex justify-center items-center'><FaRegEnvelope size={25}  color='white'/></div>
                <span className='text-2xl font-bold'>Write To Us</span>
            </div>
            <div className='space-y-6'>
                <p className='text-xl font-medium'>
                    Fill out our form and we will contact you
                    within 24 hours.
                </p>
                <div>
                    <span className=' text-xl font-medium'>Emails:</span>
                    <div className='text-xl'>
                        <p >customer@shopitech.com</p>
                        <p>support@shopitech.com</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ContactDetails