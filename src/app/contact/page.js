import Footer from '@/components/Footer/footer'
import Navbar from '@/components/NavBar/navbar'
import React from 'react'
import ContactDetails from './mini-components/ContactDetails'
import ContactForm from './mini-components/ContactForm'

function Contact_Page() {
  return (
    <div className='pt-[6.5rem]'>
        <Navbar />
        <div className='mt-10 ml-10'>
            <div>
                <p>Home / <span className='font-bold'>Contact</span></p>
            </div>
            <div className='flex justify-evenly'>
                <ContactDetails />
                <ContactForm />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact_Page