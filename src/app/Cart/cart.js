'use client'

import React, { useContext } from 'react'

import Link from 'next/link'

import Table from '@/components/Table/table'
import { AppContext } from '@/Context/AppContext'



function CartComp() {
    const { cart } = useContext(AppContext);

  return (
    <div className='mx-10'>
        <div className='mt-16 text-[19px]'>Home <span className='font-bold'> /Cart</span></div>

        {
            cart.length <= 0 ? <div className='flex items-center justify-center'>EMPTY CART!!</div> :
            <Table />
        }

        <div className='flex justify-between w-[80vw] ml-10 mb-8 font-bold'>
            <button className='border rounded   p-4 w-[218px] h-[56px] hover:bg-[#db4444] hover:text-white'>Return to Shop</button>
            <button className='border rounded   p-4 w-[218px] h-[56px] hover:bg-[#db4444] hover:text-white'>Update Cart</button>
        </div>

        <div className='flex justify-around'>
            <div className='border px-4 py-4'>
                <input type='text' placeholder='Coupon Code'  className='h-[56px] w-[300px] border border-black mr-2'/>
                <button className='bg-[#db4444] text-white h-[56px] w-[211px] border rounded'>Apply Copoun</button>
            </div>
            <div className=' border border-black my-4 w-[470px] h-[400px] p-4'>
                <span className='font-bold text-2xl'>Cart Total</span>
                <div className='my-10 space-y-4'>
                    <div className='flex justify-between px-8'>
                        <span>Subtotal:</span> 
                        <span>ksh 37 000</span>
                    </div>
                    <hr></hr>
                    <div className='flex justify-between px-8'>
                        <span>Shipping:</span>
                        <span>Free</span>
                    </div>
                    <hr></hr>
                    <div className='flex justify-between px-8'>
                        <span>Total:</span>
                        <span>Ksh 37 000</span>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-[#db4444] mx-4 my-2 text-white w-[260px] h-[56px] border rounded font-bold'>
                        <Link href="/checkout">Proceed to Checkout</Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartComp