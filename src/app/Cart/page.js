import Footer from '@/components/Footer/footer'
import Navbar from '@/components/NavBar/navbar'
import React from 'react'
import CartComp from './cart'

function Cart() {
  return (
    <div>
        <Navbar />
        <CartComp />
        <Footer />
    </div>
  )
}

export default Cart