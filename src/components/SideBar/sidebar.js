import Link from 'next/link'
import React from 'react'

const Categories = [
    'Woman\'s Fashion', 
    'Men\'s Fashion', 
    'Electronics', 
    'Home & Lifestyle', 
    'Medicine',
    'Sports & Outdoor', 
    'Baby\'s & Toys', 
    'Groceries & Pets', 
    'Health & Beauty'
]
function SideBar() {
  return (
    <div className='flex flex-col border px-12 w-80 h-[87vh] space-y-10 pt-12 font-semibold'>
        {Categories.map(cat =>{
            return <Link href={cat}>{cat}</Link>
        })}
    </div>
  )
}

export default SideBar