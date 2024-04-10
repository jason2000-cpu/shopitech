import React, { useContext } from 'react'
import { AppContext } from '@/app/page';

import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { ImStarEmpty } from "react-icons/im";
import { ImStarFull } from "react-icons/im";
import { ImStarHalf } from "react-icons/im"


function Card({ product }) {
    const context = useContext(AppContext);

    const handleAddCart = ()=> {
        context.cartItems += 1;
        // alert(`${item.item_name} Added to Cart Successfully Total items ${context.cartItems}`)
    }
  return (
    <div className='w-72 border rounded-xl mx-4'>
        <div className='bg-gray-100 p-2'>
            <div className='flex justify-between'>
                <span className='text-white bg-[#db4444] border rounded-md px-2 py-1'>20</span>
                {/* <div>{product.favourite ? 'not fav': <MdOutlineFavoriteBorder  size={25}/>}</div> */}
                <div><MdOutlineFavoriteBorder  size={25}/></div>
            </div>
            <div className='flex justify-center'>
                {/* <img src="/static/images/no-image-icon.png" /> */}
                <img src={product.image} alt={product.title} />
            </div>
        </div>
        <div className='border flex justify-center items-center bg-black text-white rounded cursor-pointer h-[41px]'>
            <span onClick={handleAddCart}>Add to Cart</span>
        </div>
        <div className='p-2'>
            <span className='text-lg '>{product.title}</span>
            <div>
                <span className='text-[#db4444]'>{product.price} </span>
                <span className='line-through'>5000</span>
            </div>
            <span>Rating {product.rating.rate}</span>
        </div>
    </div>
  )
}

export default Card