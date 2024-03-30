import React from 'react'
import Card from './card'

const flashsales = [ 
    {
        price_cut: '-40%',
        favorite: true,
        pic: 'img.jpg',
        item_name: 'Havit HV-G92 Gamepad',
        initial_price: 'ksh 160',
        current_price: 'Ksh 120',
        rating: '88'
    },
    {
        price_cut: '-36%',
        favorite: false,
        pic: 'img.jpg',
        item_name: 'AK-900 Wired Keyboard',
        initial_price: 'Ksh 1160',
        current_price: 'Ksh 960',
        rating: '75'
    },
    {
        price_cut: '-30%',
        favorite: false,
        pic: 'img.jpg',
        item_name: 'IPS LCD Gaming Monitor',
        initial_price: 'Ksh 50 000',
        current_price: 'Ksh 45, 000',
        rating: '99'
    },
    {
        price_cut: '-25%',
        favourite: false,
        pic: 'img.jpg',
        item_name: 'S-Series Comfort Chair',
        initial_price: 'Ksh 15 000',
        current_price: 'Ksh 13 500',
        rating: '99'
    }
]
function FlashSale() {
  return (
    <div>
        <div className='mx-12 my-16'>
            <div className='flex'>
                <div className='bg-[#db4444] w-4 h-8 mr-2' ></div>
                <p className='text-[#db4444] h-8 flex items-center text-xl' >Today's</p>
            </div>
            <div className='flex mt-6 justify-around'>
                <p className='text-4xl'>Flash Sales</p>
                <div className='flex text-xl space-x-8'>
                    <div className='flex flex-col justify-between items-center h-16'>
                        <p className='text-sm'>Days</p>
                        <p className='text-3xl'>03</p>
                    </div>
                    <span className='flex items-end h-14 text-2xl'>:</span>
                    <div className='flex flex-col  justify-between items-center'>
                        <p className='text-sm'>Hours</p>
                        <p className='text-3xl'>23</p>
                    </div>
                    <span className='flex items-end h-14 text-2xl'>:</span>
                    <div className='flex flex-col justify-between items-center'>
                        <p className='text-sm'>Minutes</p>
                        <p className='text-3xl'>19</p>
                    </div>
                    <span className='flex items-end h-14 text-2xl'>:</span>
                    <div className='flex flex-col justify-between items-center'>
                        <p className='text-sm'>Seconds</p>
                        <p className='text-3xl'>56</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='border rounded-full h-10 w-10 bg-[#f5f5f5] flex justify-center items-center mr-2 text-2xl'>  {'<'} </div>
                    <div className='border rounded-full h-10 w-10 bg-[#f5f5f5] flex justify-center items-center text-2xl'>&gt;</div>
                </div>
            </div>
            {/* Flash Sale Cards */}
            <div className='flex justify-evenly my-10'>
                { flashsales.map(item =>{
                    return <Card item={item} />
                })}

            </div>
        </div>
    </div>
  )
}

export default FlashSale