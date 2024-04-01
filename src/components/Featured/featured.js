import React from 'react'

import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

function Featured() {
  return (
    <div className='flex justify-center border borer-black w-[100%]'>
        <div className='bg-black h-[70vh] w-[75vw] mx-6 border my-10 text-white px-10 py-16'>
            <div className='flex justify-between'>
                <div className='flex flex-col space-y-24'>
                    <div className='flex items-center'>
                        <span>
                            <img src='/static/images/apple_icon.png' alt='apple icon' />
                        </span>
                        <p className='text-xl ml-2'>iPhone 14 Series</p>
                    </div>
                    <div className='text-5xl '>
                        Up to 10% off <br />
                         Voucher
                    </div>
                    <span>
                        <span className='text-xl flex items-center'>Shop Now<FaArrowRight size={20} className='ml-2' /> </span>
                    </span>
                </div>
                <div className='h-[22rem] w-[30rem]'>
                    <img src='/static/images/phone_end_frame.png'  alt='phone-end-frame' className='w-[100%] h-[100%]' />
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <span className='mx-2 cursor-pointer h-4 w-4 rounded-full border border-white'></span>
                <span className='mx-2 cursor-pointer h-4 w-4 rounded-full border border-white'></span>
                <span className='mx-2 cursor-pointer h-4 w-4 rounded-full border border-white bg-pink-600'></span>
                <span className='mx-2 cursor-pointer h-4 w-4 rounded-full border border-white'></span>
            </div>
        </div>

    </div>
  )
}

export default Featured