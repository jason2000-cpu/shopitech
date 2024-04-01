import React from 'react'

function Navigation() {
  return (
    <div className='space-y-10'>
        <div className='space-y-4'>
            <span className='font-bold text-xl'>Manage My Account</span>
            <div className='flex flex-col ml-8 space-y-2'>
                <span className='text-[#db4444] cursor-pointer'>My Profile</span>
                <span className='cursor-pointer'>Address Book</span>
                <span className='cursor-pointer'>My Payment Options</span>
            </div>
        </div>
        <div className='space-y-2'>
            <span className='font-bold text-xl'>My Orders</span>
            <div className='flex flex-col ml-8 space-y-2'>
                <span className='cursor-pointer'>My Returns</span>
                <span className='cursor-pointer'>My Cancellations</span>
            </div>
        </div>

    </div>
  )
}

export default Navigation