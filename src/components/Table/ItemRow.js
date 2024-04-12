'use client'

import React, { useState } from 'react'

import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";


function ItemRow({ item }) {
    console.log("FROM ITEM ROW::::::",item)
    const [ subtotal, setSubtotal ] = useState(item.price);
    const [ quantity, setQuantity ] = useState(1);

    const addQuantity = ()=>{
        setQuantity(quantity + 1);
        setSubtotal(item.price * quantity);
    }

    const subQuantity = ()=>{
        setQuantity(quantity > 2 ? quantity - 1 : 1);
        setSubtotal(item.price * quantity);
    }
    return (
        <tr>
            <td className="border p-2">
                <div className='flex justify-center items-center'>
                    <img src={item.image_path} alt={item.product_name} className='w-[54px] h-[54px]' />
                    <p className='pl-4'>{item.name}</p>
                </div>
            </td>
            <td className="border p-2">
                <div className='flex justify-center'>
                    Ksh. {item.price}
                </div>
            </td>
            <td className="border p-2">
                <div className='flex justify-center space-x-4'>
                    <div className='h-[44px] w-[72px] border rounded border-black p-2 flex justify-center items-center '>
                        <span className='font-semibold'>{quantity}</span>
                    </div>
                    <div className='flex flex-col' >
                        <button>
                            <TiArrowSortedUp className='cursor-pointer'  onClick={addQuantity} size={20}/>
                        </button>
                        <button>
                            <TiArrowSortedDown className='cursor-pointer' onClick={subQuantity} size={20}/>
                        </button>
                    </div>
                </div>
            </td>
            <td className='border p-2'>
                <div className='flex justify-center'>
                    Ksh. {subtotal}
                </div>
            </td>
        </tr>
    )
}

export default ItemRow;