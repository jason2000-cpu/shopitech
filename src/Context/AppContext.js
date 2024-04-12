'use client'

import React, { createContext } from 'react'
import useProductRest  from '@/Hooks/useProductRest';
import useCart from '@/Hooks/useCart';


export const AppContext = createContext();

function AppContextProvider({ children }) {
    const { products, productsLoading } = useProductRest()
    const { cart, cartLoading, setCart } = useCart()

    console.log("PRODUCT PROVIDER FILE:::::",products)

    const contextValue = {
      products,
      productsLoading,
      cart,
      setCart,
      cartLoading
    }

  return (
    <AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider