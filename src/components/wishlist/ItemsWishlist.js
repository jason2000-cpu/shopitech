import React from 'react'
import WishlistCard from './WishlistCard'

const wishlistItems = [
    {
        id: 1,
        price_cut: '-40%',
        favourite: true,
        pic: '/static/images/G92_GamePad.png',
        item_name: 'Havit HV-G92 Gamepad',
        initial_price: 'ksh 160',
        current_price: 'Ksh 120',
        rating: '88'
    },
    {
        id: 2,
        price_cut: '-36%',
        favourite: true,
        pic: '/static/images/AK_Keyboard.png',
        item_name: 'AK-900 Wired Keyboard',
        initial_price: 'Ksh 1160',
        current_price: 'Ksh 960',
        rating: '75'
    },
    {
        id: 3,
        price_cut: '-30%',
        favourite: true,
        pic: '/static/images/Gaming_Monitor.png',
        item_name: 'IPS LCD Gaming Monitor',
        initial_price: 'Ksh 50 000',
        current_price: 'Ksh 45, 000',
        rating: '99'
    },
    {
        id: 4,
        price_cut: '-25%',
        favourite: true,
        pic: '/static/images/Comfort_Chair.png',
        item_name: 'S-Series Comfort Chair',
        initial_price: 'Ksh 15 000',
        current_price: 'Ksh 13 500',
        rating: '99'
    }
]
function ItemsWishlist() {
  return (
    <div>
        <div className='mt-16 ml-16 text-2xl'>Wishlist (4)</div>
        <div className='flex justify-between my-10 mx-12'>
            {wishlistItems.map(item =>{
                return <WishlistCard item={item} />
            })}
        </div>
    </div>
  )
}

export default ItemsWishlist