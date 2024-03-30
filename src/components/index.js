import React from 'react'
import Navbar from './NavBar/navbar'
import SideBar from './SideBar/sidebar'
import Featured from './Featured/featured'
import FlashSale from './FlashSales/flashsale'
import Categories from './Categories/categories'
import RecentlyViewd from './RecentlyViewed/recents'
import Ad from './Ad/Ad'
import ServiceDel from './serviceDelivery/serviceDel'
import Footer from './Footer/footer'

function Index() {
  return (
    <div>
        <Navbar />
        <div className='flex'>
        <SideBar />
        <Featured />
        </div>
        <FlashSale />
        <hr className='bg-red h-8'></hr>
        <Categories />
        <hr></hr>
        <RecentlyViewd />
        <Ad />
        <ServiceDel />
        <Footer />
    </div>
  )
}

export default Index