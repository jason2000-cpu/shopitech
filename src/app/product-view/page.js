import Footer from '@/components/Footer/footer'
import Navbar from '@/components/NavBar/navbar'
import RecentlyViewd from '@/components/RecentlyViewed/recents';
import Link from 'next/link';
import React from 'react'

import { MdOutlineFavoriteBorder } from "react-icons/md";
import { GrCycle } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";


function ProductView() {
  return (
    <div className='mt-[6.5rem]'>
        <div className='px-10 pt-10'>
            <div>
                <p>Home / <span className='font-semibold'> GamePad</span></p>
            </div>
            <div className='flex justify-evenly my-10'>
                <div className='flex justify-between w-[700px]'>
                    <div className='space-y-6'>
                        <div className='w-[170px] h-[130px] bg-[#f5f5f5] flex justify-center items-center'><img src='/static/images/Gamepad1.png' alt='Gamepad' /></div>
                        <div className='w-[170px] h-[130px] bg-[#f5f5f5] flex justify-center items-center'><img src='/static/images/Gamepad2.png' alt='Gamepad' /></div>
                        <div className='w-[170px] h-[130px] bg-[#f5f5f5] flex justify-center items-center'><img src='/static/images/Gamepad3.png' alt='Gamepad' /></div>
                        <div className='w-[170px] h-[130px] bg-[#f5f5f5] flex justify-center items-center'><img src='/static/images/Gamepad4.png' alt='Gamepad' /></div>
                    </div>
                    <div className='w-[500px] h-[600px] bg-[#f5f5f5] flex justify-center items-center'>
                        <img src='/static/images/GamepadXL.png' alt='Gamepad' className='' />
                    </div>
                </div>
                <div className='w-[500px] space-y-6'>
                    <span className='text-3xl font-bold'>Havic HV G-92 Gamepad</span>
                    <div className='space-x-4'>
                        <span>* * * * *</span>
                        <span>(150 Reviews)</span>
                        <span>|</span>
                        <span>In stock</span>
                    </div>
                    <div className='font-semibold text-xl'>
                        <p>Ksh. 1 000</p>
                    </div>
                    <div>
                        <p>
                            PlayStation 5 Controller Skin High quality vinyl with
                            air channel for easy bubble free install & mess
                            free removal pressure sensitive
                        </p>
                    </div>
                    <hr></hr>

                    <div className='space-x-4'>
                        <span className='text-xl'>Colours:</span>
                        <input type='radio' className='w-[20px] h-[25px] relative' name='color'  />
                        <input type='radio' className='w-[50px] h-[25px] relative' name='color' />
                    </div>

                    <div className='flex justify-between items-center w-[296px] h-[32px]'>
                        <span className='text-xl'>Size:</span>
                        <div className='border flex justify-center items-center p-2 w-[32px] h-[32px]'><p>XS</p></div>
                        <div className='border flex justify-center items-center p-2 w-[32px] h-[32px]'><p>S</p></div>
                        <div className='border flex justify-center items-center bg-[#db4444] text-white p-2 w-[32px] h-[32px]'><p>M</p></div>
                        <div className='border flex justify-center items-center p-2 w-[32px] h-[32px]'><p>L</p></div>
                        <div className='border flex justify-center items-center p-2 w-[32px] h-[32px]'><p>XL</p></div>
                    </div>

                    <div className='flex justify-between '>
                        <div className='flex w-[159px] h-[44px] text-xl'>
                            <span className='border w-[40px]  flex justify-center items-center hover:bg-[#db4444] hover:text-white text-2xl cursor-pointer '>-</span>
                            <span className='border  w-[80px]  flex justify-center items-center'>2</span>
                            <span className='border  w-[40px]  flex justify-center items-center hover:bg-[#db4444] hover:text-white text-2xl cursor-pointer'>+</span>
                        </div>
                        <div>
                            <button className='bg-[#db4444] text-white border rounded flex justify-center items-center h-[44px] w-[200px]'>Buy Now</button>
                        </div>
                        <div className='border flex justify-center items-center p-2 h-[44px] cursor-pointer'>
                            <MdOutlineFavoriteBorder size={30} />
                        </div>
                    </div>

                    <div className='border border-black space-y-4 p-4'>
                        <div className='flex space-x-12 items-center'>
                            <div>
                                <TbTruckDelivery />
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-xl font-semibold'>Free Delivery</span>
                                <Link href="/user-account">Enter Your Postal Code for Delivery Availability</Link>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='flex space-x-12 items-center'>
                            <div>
                                <GrCycle />
                            </div>
                            <div>
                                <span className='text-xl font-semibold'>Return Delivery</span>
                                <p>Free 30 Days Delivery Returns <Link href='#'>Details</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <RecentlyViewd />
        <Footer />
    </div>
  )
}

export default ProductView