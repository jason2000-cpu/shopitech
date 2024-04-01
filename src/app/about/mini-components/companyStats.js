import React from 'react'
import { FaSackDollar } from 'react-icons/fa6'
import { MdShop, MdShoppingBag } from 'react-icons/md'
import { TbMoodDollar } from 'react-icons/tb'


function CompanyStats() {
  return (
    <div className='flex justify-evenly my-24'>
        <div className='border rounded shadow-lg p-4 flex flex-col items-center h-[230px] w-[260px] hover:bg-[#db4444] hover:text-white'>
            <div className='border  bg-gray-300 w-[80px] h-[80px] rounded-full flex justify-center items-center' >
                <div className='bg-black h-[55px] w-[55px] border rounded-full text-white flex justify-center items-center'><MdShop size={40}/></div>
            </div>
            <div className='font-bold text-2xl mt-2'><span>10.5k</span></div>
            <div>
                <p className='font-semibold'>Sallers active on our site</p>
            </div>
        </div>

        <div className='border rounded shadow-lg p-4 flex flex-col items-center h-[230px] w-[260px] hover:bg-[#db4444] hover:text-white'>
            <div className='border  bg-gray-300 w-[80px] h-[80px] rounded-full flex justify-center items-center' >
                <div className='bg-black h-[55px] w-[55px] border rounded-full text-white flex justify-center items-center'><TbMoodDollar size={40}/></div>
            </div>
            <div className='font-bold text-2xl mt-2'><span>33k</span></div>
            <div>
                <p className='font-semibold'>Monthly Produce Sale</p>
            </div>
        </div>

        <div className='border rounded shadow-lg p-4 flex flex-col items-center h-[230px] w-[260px] hover:bg-[#db4444] hover:text-white'>
            <div className='border  bg-gray-300 w-[80px] h-[80px] rounded-full flex justify-center items-center' >
                <div className='bg-black h-[55px] w-[55px] border rounded-full text-white flex justify-center items-center'><MdShoppingBag size={40}/></div>
            </div>
            <div className='font-bold text-2xl mt-2'><span>45.5k</span></div>
            <div>
                <p className='font-semibold'>Customers Active In Our Site</p>
            </div>
        </div>

        <div className='border rounded shadow-lg p-4 flex flex-col items-center h-[230px] w-[260px] hover:bg-[#db4444] hover:text-white'>
            <div className='border  bg-gray-300 w-[80px] h-[80px] rounded-full flex justify-center items-center' >
                <div className='bg-black h-[55px] w-[55px] border rounded-full text-white flex justify-center items-center'><FaSackDollar size={40}/></div>
            </div>
            <div className='font-bold text-2xl mt-2'><span >25k</span></div>
            <div>
                <p className='font-semibold'>Anual Gross Sale In Our Site</p>
            </div>
        </div>
    </div>
  )
}

export default CompanyStats