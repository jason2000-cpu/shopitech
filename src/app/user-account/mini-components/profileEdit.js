import React from 'react'

function ProfileEdit() {
  return (
    <div className='mx-10  w-[870px] p-6 shadow-2xl'>
        <div>
            <span className='text-[#db4444] font-bold text-xl'>Edit Your Profile</span>
        </div>
        <div className='form'>
            <div className='space-y-4'>
                <div className='flex justify-between'>
                    <div className=''>
                        <span>First Name</span>
                        <div className=''>
                            <input type='text' className=' h-[50px] w-[400px] bg-gray-100 border rounded pl-2' />
                        </div>
                    </div>
                    <div>
                        <span>Last Name</span>
                        <div>
                            <input type='text' className=' h-[50px] w-[400px] bg-gray-100 border rounded pl-2'/>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <span>Email</span>
                        <div>
                            <input type='text' className=' h-[50px] w-[400px] bg-gray-100 border rounded pl-2'/>
                        </div>
                    </div>
                    <div>
                        <span>Address</span>
                        <div>
                            <input type='text' className=' h-[50px] w-[400px] bg-gray-100 border rounded pl-2' />
                        </div>
                    </div>
                </div>

            </div>
            <div className='mt-6'>
                <span className='text-xl font-semibold'>Password Changes</span>
                <div className='space-y-4 my-4'>
                    <div>
                        <input type='text' placeholder='Current Password' className='h-[50px] w-[810px] bg-gray-100 border rounded  pl-2' />
                    </div>
                    <div>
                        <input type='text' placeholder='New Password' className='h-[50px] w-[810px] bg-gray-100 border rounded  pl-2'/>
                    </div> 
                    <div>
                        <input type='text'  placeholder='Cnfirm New Password' className='h-[50px] w-[810px] bg-gray-100 border rounded pl-2'/>
                    </div>
                </div>
            </div>

            <div className='flex justify-end'>
                <button className='mr-6 text-xl font-semibold'>Cancel</button>
                <button className=' border rounded h-[56px] w-[214px] bg-[#db4444] text-white'>Save Changes</button>
            </div>
        </div>
    </div>
  )
}

export default ProfileEdit