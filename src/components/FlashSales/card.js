import React from 'react'

function Card({ item }) {
  return (
    <div className='h-80 w-72 border rounded-xl p-2'>
        <div className='flex justify-between'>
            <span className='bg-[#db4444] border rounded-md px-2 py-1'>{item.price_cut}</span>
            <div>{item.favourite ? 'not fav': 'fav'}</div>
        </div>
        <div className='flex justify-center'>
            <img src="/static/images/no-image-icon.png" />
        </div>
        <span className='text-lg '>{item.item_name}</span>
        <div>
            <span>{item.current_price} </span>
            <span>{item.initial_price}</span>
        </div>
        <span>{item.rating}</span>
    </div>
  )
}

export default Card