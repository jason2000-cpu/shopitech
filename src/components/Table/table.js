'use client'

import React, { useContext } from 'react';
import { AppContext } from '@/Context/AppContext';
import ItemRow from './ItemRow';

function Table() {
    const { cart } = useContext(AppContext);

  return (
    <div className="overflow-x-auto">
        <div className='my-10'>
            <table className="table-auto w-full border-collapse border">
                <thead  className='text-xl'>
                    <tr>
                        <th className="border p-2">Product</th>
                        <th className="border p-2">Price</th>
                        <th className="border p-2">Quantity</th>
                        <th className="border p-2">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => <ItemRow item={item} />)}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Table