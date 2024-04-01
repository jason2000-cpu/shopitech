import React from 'react'

const billingItems = [
    {
        id: 1,
        name: 'LCD Monitor',
        img_path: '/static/images/Gaming_Monitor.png',
        price: '16 000',
        subtotal: '32 000'
    },
    {
        id: 2,
        name: 'H1 GamePad',
        img_path: '/static/images/G92_GamePad.png',
        price: '1 000',
        subtotal: '4 000'
    }
]
function Billing() {
  return (
    <div className='w-[627px] h-[600px] py-4 px-4'>
        <div className='space-y-8'>
            {billingItems.map(item =>{
                return (
                    <div key={item.id} className='flex justify-between mx-10'>
                        <div className='flex'>
                            <img src={item.img_path} alt={item.name} className='w-[54px] h-[54px] mr-6' />
                            <span>{item.name}</span>
                        </div>
                        <div>
                            <span>Ksh. {item.price}</span>
                        </div>
                    </div>
                )
            })}
        </div>
        
    
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

        
        <div className='bank-pay'>
            <div className='flex justify-between'>
                <div className='flex justify-evenly w-32'>
                    <input type='radio'  name='option' id='2' className='w-6' /> 
                    <span className='text-xl'>Bank</span>
                </div>
                <div className='flex justify-evenly w-[20rem]'>
                    <span><img src='/static/images/visacard.png' alt='visa' className='w-[42px] h-[28px]' /></span>
                    <span><img src='/static/images/mastercard.png' alt='mastercard'  className='w-[42px] h-[28px]'/></span>
                    <span><img src='/static/images/M-pay.png' alt='M'  className='w-[42px] h-[28px]'/></span>
                </div>
            </div>
        </div>


        <div>
            <div className='flex justify-evenly w-48 my-4 ml-4 '>
                <input type='radio' name='option' id='2' className='w-6' /> 
                <span className='text-xl'>Cash On Delivery</span>
            </div>
        </div>

        <div className='flex justify-between'>
            <div>
                <input type='text'  placeholder='Coupon Code' className='border rounded  border-black w-[250px] h-[56px]'/>
            </div>
            <div>
                <button className='border rounded w-[300px] h-[56px] bg-[#db4444] text-white'>Apply Coupon</button>
            </div>
        </div>

        <div className='flex justify-center my-4'>
            <button className='border rounded w-[400px] h-[56px] bg-[#db4444] text-white'>Place Order</button>
        </div>


    </div>
  )
}

export default Billing