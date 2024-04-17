'use client'

import React, { useState, useEffect, useId } from 'react';


function useCart(){
    const [cart, setCart] = useState([]);
    const [cartLoading, setLoading] = useState(true)
    const [userId, setUserId] = useState('')

    // useEffect(()=>{
    //     async function getCartItems(){
    //         try{
    //             const response = await fetch('/api/products/cart')
    //             const cartData = await response.json();
    //             setCart(cartData);
    //             setLoading(false);
    //         } catch (error) {
    //             setLoading(false);
    //             console.log(`${error}. Occured while getting Cart Items`)
    //         }
    //     }
    //     getCartItems();

    // }, [])

    const addToCart = (item)=>{
        const checkExist  = cart.filter((cartItem) => cartItem.id === item.id)
        if (checkExist != false){
          alert(`${item.name} Already exists`)
        } else {
          setCart((prevCart) => [...prevCart, item])
          alert(`${item.name} added to Cart. New Length::`, cart.length)
        }
      }

    return { cart, cartLoading, addToCart }

}

export default useCart;