import React from 'react'

function CategoriesCard({ item }) {
  return (
    <div className='border rounded-lg h-[145px] w-[170px] flex  flex-col justify-center  items-center hover:bg-[#db4444] hover:text-white'>
      {item.icon}
      {item.category_name}
    </div>
  )
}

export default CategoriesCard