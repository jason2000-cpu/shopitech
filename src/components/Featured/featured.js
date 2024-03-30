import React from 'react'

function Featured() {
  return (
    <div className='flex justify-center border borer black w-[100%]'>
        <div className='bg-black h-[70vh] w-[75vw] mx-6 border my-10 text-white px-10 py-16'>
            <div className='flex justify-between'>
                <div className='flex flex-col space-y-24'>
                    <div><span>icon</span> iPhone 14 Series</div>
                    <div className='text-5xl '>
                        Up to 10% off <br />
                         Voucher
                    </div>
                    <span>
                        <span>Shop Now -&gt;</span>
                    </span>
                </div>
                <div className='h-[22rem] w-[30rem] border border-white'>
                    PIC
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