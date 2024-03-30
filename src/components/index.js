import React from 'react'
import Navbar from './NavBar/navbar'
import SideBar from './SideBar/sidebar'
import Featured from './Featured/featured'
import FlashSale from './FlashSales/flashsale'

function Index() {
  return (
    <div>
        <Navbar />
        <div className='flex'>
        <SideBar />
        <Featured />
        </div>
        <FlashSale />
    </div>
  )
}

export default Index