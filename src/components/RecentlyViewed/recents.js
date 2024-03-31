import React from 'react'
import Card from '../FlashSales/card'

const ViewdRecently = [ 
    {
        id: 1,
        favorite: true,
        pic: '/static/images/G92_GamePad.png',
        item_name: 'Havit HV-G92 Gamepad',
        initial_price: 'ksh 160',
        current_price: 'Ksh 120',
        rating: '88'
    },
    {
        id: 2,
        favorite: false,
        pic: '/static/images/AK_Keyboard.png',
        item_name: 'AK-900 Wired Keyboard',
        initial_price: 'Ksh 1160',
        current_price: 'Ksh 960',
        rating: '75'
    },
    {
        id: 3,
        favorite: false,
        pic: '/static/images/Gaming_Monitor.png',
        item_name: 'IPS LCD Gaming Monitor',
        initial_price: 'Ksh 50 000',
        current_price: 'Ksh 45, 000',
        rating: '99'
    },
    {
        id: 4,
        favourite: false,
        pic: '/static/images/Comfort_Chair.png',
        item_name: 'S-Series Comfort Chair',
        initial_price: 'Ksh 15 000',
        current_price: 'Ksh 13 500',
        rating: '99'
    }
]
function RecentlyViewd() {
  return (
    <div className='mx-12 my-16'>
            <div className='flex'>
                <div className='bg-[#db4444] w-4 h-8 mr-2' ></div>
                <p className='text-[#db4444] h-8 flex items-center text-xl' >Today's</p>
            </div>
            <div className='flex justify-between mx-10 my-10'>
                <span className='text-2xl'>Recently Viewed</span>
                <span>
                    <button className='bg-[#db4444] border rounded w-[159px] h-[56px] text-white'>View All</button>
                </span>
            </div>
            <div className='flex justify-between'>
                {ViewdRecently.map(item =>{
                    return <Card key={item.id} item={item} />
                })}
            </div>
    </div>
  )
}

export default RecentlyViewd