'use client'

import React, { createContext } from 'react'
import Image from "next/image";
import Index from "@/components";

export const AppContext = createContext()

const appConfig = {
   user: 'Jackson',
   favorites: 0,
   cartItems: 0,
}

export default function Home() {
  return(
   <AppContext.Provider value={appConfig} >
      <Index />
   </AppContext.Provider>
  );
}
