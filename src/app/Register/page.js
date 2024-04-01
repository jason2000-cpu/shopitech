import Footer from '@/components/Footer/footer'
import Floatbanner from '@/components/NavBar/floatbanner'
import Navbar from '@/components/NavBar/navbar'
import RegPage from '@/components/RegPage'
import React from 'react'

function Register() {
  return (
    <div className='mt-[6.5rem]'>
        <Navbar />
        <RegPage />
        <Footer />
    </div>
  )
}

export default Register