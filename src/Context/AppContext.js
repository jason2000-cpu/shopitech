'use client'

import React, { createContext, useState } from 'react'
import useProductRest  from '@/Hooks/useProductRest';
import useCart from '@/Hooks/useCart';


export const AppContext = createContext();

function AppContextProvider({ children }) {
  const { products, productsLoading } = useProductRest()
  const { cart, cartLoading, addToCart } = useCart()

 
  const contextValue = {
    products,
    productsLoading,
    cart,
    addToCart,
    cartLoading
  }


  return (
    <AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider