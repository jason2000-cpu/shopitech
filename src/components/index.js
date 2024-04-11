'use client'

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


// icon
import { FaArrowUp } from "react-icons/fa6";

function Index() {
  return (
    <div>
        <Navbar />
        <div className='flex pt-[6.5rem]'>
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
        {/* <div className='relative flex justify-end my-10 mx-16'>
            <FaArrowUp   className='cursor-pointer' size={30}/>
        </div> */}
        <Footer />
    </div>
  )
}

export default Index