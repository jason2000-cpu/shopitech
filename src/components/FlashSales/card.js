import React, { useContext } from 'react'

import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { ImStarEmpty } from "react-icons/im";
import { ImStarFull } from "react-icons/im";
import { ImStarHalf } from "react-icons/im"


function Card({ item }) {
  
  return (
    <div className='w-72 border rounded-xl mx-4'>
        <div className='bg-gray-100 p-2'>
            <div className='flex justify-between'>
                {item.price_cut ? <span className='text-white bg-[#db4444] border rounded-md px-2 py-1'>{item.price_cut}</span> : <div></div>}
                <div>{item.favorite ? <MdOutlineFavorite size={25} />: <MdOutlineFavoriteBorder  size={25}/>}</div>
            </div>
            <div className='flex justify-center'>
                {/* <img src="/static/images/no-image-icon.png" /> */}
                <img src={item.pic} alt={item.name} />
            </div>
        </div>
        <div className='border flex justify-center items-center bg-black text-white rounded cursor-pointer h-[41px]'>
            <span>Add to Cart</span>
        </div>
        <div className='p-2'>
            <span className='text-lg '>{item.name}</span>
            <div>
                <span className='text-[#db4444]'>{item.current_price} </span>
                <span className='line-through'>{item.initial_price}</span>
            </div>
            <span>Rating {item.rating}</span>
        </div>
    </div>
  )
}

export default Card