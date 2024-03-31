import Link from 'next/link'
import React from 'react'

import { IoIosArrowDown } from "react-icons/io";

function Floatbanner() {
  return (
    <div className='bg-black text-white flex justify-evenly'>
        <div >
            <p>
                Summer Sale for All Suits And Free Express Delivery -OFF 50%  
                <span> <Link href="#">ShopNow</Link></span>
            </p>
        </div>
        <div>
            <p>English</p>
        </div>
        
    </div>
  )
}

export default Floatbanner