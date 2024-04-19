'use client'

import React, { useState, useEffect, useId } from 'react';

import { toast } from 'react-toastify';



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
          toast.error(`${item.name} Already Exists`)
        } else {
          setCart((prevCart) => [...prevCart, item])
          toast.success("Success Notification !");
        }
      }

    return { cart, cartLoading, addToCart }

}

export default useCart;