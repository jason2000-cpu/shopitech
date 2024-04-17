import Footer from '@/components/Footer/footer'
import Navbar from '@/components/NavBar/navbar'
import React from 'react'
import ItemsWishlist from '../../components/wishlist/ItemsWishlist'

function Wishlist() {
  return (
    <div className='mt-[7rem]'>
        <ItemsWishlist />
        <Footer />
    </div>
  )
}

export default Wishlist