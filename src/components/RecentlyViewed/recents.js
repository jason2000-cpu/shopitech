import React, { useContext } from 'react'
import Card from '../FlashSales/card'
import { AppContext } from '@/Context/AppContext'

function RecentlyViewd() {
    const { products } = useContext(AppContext);
  return (
    <div className='mx-12 my-16'>
            <div className='flex'>
                <div className='bg-[#db4444] w-4 h-8 mr-2' ></div>
                <p className='text-[#db4444] h-8 flex items-center text-xl' >Today's</p>
            </div>
            <div className='flex justify-between mx-10 my-10'>
                <span className='text-2xl'>Recently Viewed</span>
                <span>
                    <button className='bg-[#db4444] border rounded w-[159px] h-[56px] text-white'>View All</button>
                </span>
            </div>
            <div className='flex justify-between'>
                {products.map(item =>{
                    return <Card key={item.id} item={item} />
                })}
            </div>
    </div>
  )
}

export default RecentlyViewd