import React from 'react'

const cartItems = [
    {
        id: 1,
        product_name: 'LCD Monitor',
        img_path: '/static/images/Gaming_Monitor.png',
        price: '16 000',
        quantity: '2',
        subtotal: '32 000'
    },
    {
        id: 2,
        product_name: 'H1 GamePad',
        img_path: '/static/images/G92_GamePad.png',
        price: '1 000',
        quantity: '4',
        subtotal: '4 000'
    }
]
function Table() {
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
                    {cartItems.map(item => {
                        return (
                            <tr>
                                <td className="border p-2">
                                    <div className='flex justify-center items-center'>
                                        <img src={item.img_path} alt={item.product_name} className='w-[54px] h-[54px]' />
                                        <p className='pl-4'>{item.product_name}</p>
                                    </div>
                                </td>
                                <td className="border p-2">
                                    <div className='flex justify-center'>
                                        Ksh. {item.price}
                                    </div>
                                </td>
                                <td className="border p-2">
                                    <div className='flex justify-center'>
                                    <input className='h-[44px] w-[72px] border rounded border-black p-2' type='number' value={item.quantity} />
                                    </div>
                                </td>
                                <td className='border p-2'>
                                    <div className='flex justify-center'>
                                        Ksh. {item.subtotal}
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Table