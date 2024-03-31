import React from 'react'

function BillingForm() {
  return (
    <div className=''>
        <form className='space-y-10'>
        <div>
            <div>First Name <span>*</span></div>
            <div>
                <input type='text' className='border-2 border-black w-[400px] h-[50px] text-xl rounded' required />
            </div>
        </div>

        <div>
            <div>Company Name <span>*</span></div>
            <div>
                <input type='text' className='border-2 border-black w-[400px] h-[50px] text-xl rounded' required  />
            </div>
        </div>

        <div>
            <div>Street Address <span>*</span></div>
            <div>
                <input type='text' className='border-2 border-black w-[400px] h-[50px] text-xl rounded' required />
            </div>
        </div>

        <div>
            <div>Town/City <span>*</span></div>
            <div>
                <input type='text' className='border-2 border-black w-[400px] h-[50px] text-xl rounded' required />
            </div>
        </div>

        <div>
            <div>Phone Number <span>*</span></div>
            <div>
                <input type='text' className='border-2 border-black w-[400px] h-[50px] text-xl rounded' required />
            </div>
        </div>

        <div>
            <div>Email Address <span>*</span></div>
            <div>
                <input type='email' className='border-2 border-black w-[400px] h-[50px] text-xl rounded' required />
            </div>
        </div>
        </form>

        <input type='checkbox' className='h-[24px] w-[24px] mt-4' /> <span>Save this information for faster check-out next time</span>
    </div>
  )
}

export default BillingForm