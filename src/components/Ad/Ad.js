import React from 'react'
import AdCountDown from '../Countdown/AdCountDown'

function Ad() {
  return (
    <div className='mx-16 my-10'>
        <div className='flex justify-between bg-black w-[100%] h-[500px] py-10 px-8   '>
            <div>
                <span className='text-[#00ff66]'>Categories</span>
                <div className='space-y-10 ml-12 mt-24'>
                    <div>
                        <span className='text-4xl text-white space'>
                            <p>Enhance Your</p>
                            <p>Music Experience</p>
                        </span>
                    </div>
                    <AdCountDown />

                    {/* <div className='flex justify-between w-[25rem] text-sm'>
                        <span className='bg-white border rounded-full h-20 w-20 flex flex-col justify-center items-center'><span className='text-2xl'>23</span>Days</span>
                        <span className='bg-white border rounded-full h-20 w-20 flex flex-col justify-center items-center'><span className='text-2xl'>05</span>Hours</span>
                        <span className='bg-white border rounded-full h-20 w-20 flex flex-col justify-center items-center'><span className='text-2xl'>59</span>Minutes</span>
                        <span className='bg-white border rounded-full h-20 w-20 flex flex-col justify-center items-center'><span className='text-2xl'>35</span>Seconds</span>
                    </div> */}
                    <button className='bg-[#00ff66] rounded w-[171px] h-[56px]'>Buy Now!</button>
                </div>
            </div>
            <div className='text-white  w-[45rem] flex items-center justify-center'>
                <div className='h-[350px] w-[350px] border rounded-full  drop-shadow-2xl shadow-black bg-[#d9d9d977] blur-3xl'>
                </div>
                <img src="/static/images/JBL_Speaker.png " className='absolute' alt='JBL speaker' />
            </div>
        </div>
    </div>
  )
}

export default  Ad