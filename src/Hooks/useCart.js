'use client'

import React, { useState, useEffect, useId } from 'react';


function useCart(){
    const [ cart, setCart ] = useState([]);
    const [ cartLoading, setLoading ] = useState(true)
    const [userId, setUserId] = useState('')

    useEffect(()=>{
        async function getCartItems(userId){
            try{
                await fetch('/api/products/cart')
                .then(res => res.json())
                .then(json =>{
                    setCart(json);
                    console.log("FROM useCart HOOK:::::::",json)
                    setLoading(false);
                })
            } catch (error) {
                setLoading(false);
                console.log(`${error}. Occured while getting Cart Items`)
            }
        }
        getCartItems(useId)
    }, [])

    return { cart, cartLoading, setCart }

}

export default useCart;