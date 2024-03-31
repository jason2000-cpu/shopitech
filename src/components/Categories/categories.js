import React from 'react'

import CategoriesCard from './CategoriesCard';

// icons

import { GiSmartphone } from "react-icons/gi";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { TbDeviceWatchStats } from "react-icons/tb";
import { MdOutlineCameraAlt } from "react-icons/md";
import { ImHeadphones } from "react-icons/im";
import { TbDeviceGamepad } from "react-icons/tb";

const categories = [
    {
        id: 1,
        category_name: 'Phones',
        icon: <GiSmartphone size={50}/>
    },
    {
        id: 2,
        category_name: 'Computers',
        icon: <HiMiniComputerDesktop size={50}/>
    },
    {
        id: 3,
        category_name: 'SmartWatch',
        icon: <TbDeviceWatchStats size={50}/>
    },
    {
        id: 4,
        category_name: 'Camera',
        icon: <MdOutlineCameraAlt size={50}/>
    },
    {
        id: 5,
        category_name: 'HeadPhones',
        icon: <ImHeadphones size={50}/>
    },
    {
        id: 6,
        category_name: 'Gaming',
        icon: <TbDeviceGamepad size={50}/>
    }

]

function Categories() {
  return (
    <div className='mx-10 mb-11'>
        <div className='flex'>
            <div className='bg-[#db4444] w-4 h-8 mr-2' ></div>
            <p className='text-[#db4444] h-8 flex items-center text-xl' >Categories</p>
        </div>
        <div className='flex justify-between mt-5 mx-32'>
            <span className='text-[36px]'>Browse By Category</span>
            <span>
                <div className='flex justify-between'>
                    <div className='border rounded-full h-10 w-10 bg-[#f5f5f5] flex justify-center items-center mr-2 text-2xl'>  {'<'} </div>
                    <div className='border rounded-full h-10 w-10 bg-[#f5f5f5] flex justify-center items-center text-2xl'>&gt;</div>
                </div>
            </span>
        </div>
        <div className='flex justify-between mt-6'>
            {categories.map(item =>{
                return <CategoriesCard key={item.id} item={item} />
            })}

        </div>
    </div>
  )
}

export default Categories