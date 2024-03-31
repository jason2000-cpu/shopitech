import React from 'react'
import { MdDelete, MdOutlineFavorite } from 'react-icons/md'
import { MdOutlineFavoriteBorder } from 'react-icons/md'

function WishlistCard({ item }) {
  return (
    <div className='w-72 border rounded-xl mx-4'>
        <div className='bg-gray-100 p-2'>
            <div className='flex flex-col items-end'>
                {/* <span className='text-white bg-[#db4444] border rounded-md px-2 py-1'>{item.price_cut}</span> */}
                <div className='mb-4'>{item.favourite ? <MdOutlineFavorite size={25} color='#db4444' /> : <MdOutlineFavoriteBorder color='#db4444' size={25} /> }</div>
                <div><MdDelete color='#db4444' size={25} /></div>
            </div>
            <div className='flex justify-center'>
                {/* <img src="/static/images/no-image-icon.png" /> */}
                <img src={item.pic} alt={item.pic} />
            </div>
        </div>
        <div className='p-2'>
            <span className='text-lg '>{item.item_name}</span>
            <div>
                <span className='text-[#db4444]'>{item.current_price} </span>
                <span>{item.initial_price}</span>
            </div>
            <span>Rating {item.rating}</span>
        </div>
    </div>
  )
}

export default WishlistCard