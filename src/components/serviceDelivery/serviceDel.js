import React from 'react'

// icons
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiSecurityGate } from 'react-icons/gi';


function ServiceDel() {
  return (
    <div className='flex justify-evenly my-24'>
        <div className='flex flex-col items-center'>
            <div className='border border-black bg-gray-300 w-[80px] h-[80px] rounded-full flex justify-center items-center' >
                <div className='bg-black h-[55px] w-[55px] border rounded-full text-white flex justify-center items-center'><TbTruckDelivery size={40}/></div>
            </div>
            <div className='flex flex-col items-center mt-4 space-y-2'>
                <h3 className='text-xl font-bold'>FREE AND FAST DELIVERY</h3>
                <p className='text-[18px]'>Free delivery for all orders over Ksh 60,000</p>
            </div>
        </div>

        <div className='flex flex-col items-center'>
            <div className='border border-black bg-gray-300 w-[80px] h-[80px] rounded-full flex justify-center items-center' >
                <div className='bg-black h-[55px] w-[55px] border rounded-full text-white flex justify-center items-center'><RiCustomerService2Line size={40}/></div>
            </div>
            <div className='flex flex-col items-center mt-4'>
                <h3 className='text-xl font-bold'>24/7 CUSTOMER SERVICE</h3>
                <p className='text-[18px]'>Friendly 24/7 customer support</p>
            </div>
        </div>

        <div className='flex flex-col items-center'>
            <div className='border border-black bg-gray-300 w-[80px] h-[80px] rounded-full flex justify-center items-center' >
                <div className='bg-black h-[55px] w-[55px] border rounded-full text-white flex justify-center items-center'><GiSecurityGate  size={40}/></div>
            </div>
            <div className='flex flex-col items-center mt-4'>
                <h3 className='text-xl font-bold'>MONEY BACK GUARANTEE</h3>
                <p className='text-[18px]'>We return money within 30 days</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceDel