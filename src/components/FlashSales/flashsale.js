'use client'

import Card from './card'

import useProductRest from '@/Hooks/useProductRest';
import useCart from '@/Hooks/useCart';

// icons
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";
import FlashSaleCountDown from '../Countdown/FlashSaleCountDown';
import MyCarousel from './MyCarousel';


function FlashSale() {

    const { products, productsLoading } = useProductRest();

  return (
    <div>
        <div className='mx-12 my-16'>
            <div className='flex'>
                <div className='bg-[#db4444] w-4 h-8 mr-2' ></div>
                <p className='text-[#db4444] h-8 flex items-center text-xl' >Today's</p>
            </div>
            <div className='flex mt-6 justify-around'>
                <p className='text-4xl'>Flash Sales</p>
                <FlashSaleCountDown />
                <div className='flex justify-between'>
                    <div className='border rounded-full h-10 w-10 bg-[#f5f5f5] flex justify-center items-center mr-2 text-2xl'>  {'<'} </div>
                    <div className='border rounded-full h-10 w-10 bg-[#f5f5f5] flex justify-center items-center text-2xl'>&gt;</div>
                </div>
            </div>
            {/* Flash Sale Cards */}
            <div className='flex justify-evenly my-10'>
                { productsLoading ? <h2>Items Loading</h2> : (
                    products.map(item =>{
                    return <Card key={item.id} item={item}  />
                })
                )}

            </div>
            <div className='flex justify-center '>
                <button className='text-white bg-[#db4444] border rounded-[4px] h-[56px] w-[234px]'>View All Products</button>
            </div>
        </div>

        <MyCarousel  />

    </div>
  )
}

export default FlashSale