import React from 'react'

function BillingForm() {
  return (
    <div className=''>
        <form className='space-y-4'>
        <div>
            <div className='mb-2'>First Name <span className='text-[red] text-xl'>*</span></div>
            <div>
                <input type='text' className='border-2 border-black w-[400px] h-[50px] text-xl rounded' required />
            </div>
        </div>

        <div>
            <div className='mb-2'>Company Name <span className='text-[red] text-xl'>*</span></div>
            <div>
                <input type='text' className='border-2 border-black w-[400px] h-[50px] text-xl rounded' required  />
            </div>
        </div>

        <div>
            <div className='mb-2'>Street Address <span className='text-[red] text-xl'>*</span></div>
            <div>
                <input type='text' className='border-2 border-black w-[400px] h-[50px] text-xl rounded' required />
            </div>
        </div>

        <div>
            <div className='mb-2'>Town/City <span className='text-[red] text-xl'>*</span></div>
            <div>
                <input type='text' className='border-2 border-black w-[400px] h-[50px] text-xl rounded' required />
            </div>
        </div>

        <div>
            <div className='mb-2'>Phone Number <span className='text-[red] text-xl'>*</span></div>
            <div>
                <input type='text' className='border-2 border-black w-[400px] h-[50px] text-xl rounded' required />
            </div>
        </div>

        <div>
            <div className='mb-2'>Email Address <span className='text-[red] text-xl'>*</span></div>
            <div>
                <input type='email' className='border-2 border-black w-[400px] h-[50px] text-xl rounded' required />
            </div>
        </div>
        </form>

       <div className='flex justify-between items-center mt-2'>
            <div>
                <input type='checkbox' className='h-[24px] w-[24px] mt-4' />
            </div> 
            <span className='mt-2 font-semibold'>Save this information for faster check-out next time</span>
       </div>
    </div>
  )
}

export default BillingForm