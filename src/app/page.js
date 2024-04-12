'use client'

import React from 'react'
import Image from "next/image";
import Index from "@/components";
import AppContextProvider from '@/Context/AppContext';



export default function Home() {

  return(
      <AppContextProvider>
          <Index />
      </AppContextProvider>
  );
}
