import Footer from '@/components/Footer/footer'
import Navbar from '@/components/NavBar/navbar'
import React from 'react'
import Navigation from './mini-components/navigation'
import ProfileEdit from './mini-components/profileEdit'

function UserAccount() {
  return (
    <div className='mt-[7.5rem]'>
        <Navbar />
        <div className='mx-24 my-4'>
            <div className='flex justify-between '>
                <div>
                    <p>Home <span className='font-bold '>/ My Account</span></p>
                </div>
                <div>
                    <p className='font-semibold'>Welcome <span className='text-[#db4444]'>Jackson</span></p>
                </div>
            </div>
            <div className='flex my-6 justify-between'>
                <Navigation />
                <ProfileEdit />
            </div>
        
        </div>
        <Footer />
    </div>
  )
}

export default UserAccount