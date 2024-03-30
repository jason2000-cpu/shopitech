import React from 'react'

import CategoriesCard from './CategoriesCard';

const categories =['Phones', 'Computers', 'SmartWatch', 'Camera', 'HeadPhones', 'Gaming'];

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
                return <CategoriesCard item={item} />
            })}

        </div>
    </div>
  )
}

export default Categories