import React from 'react'

function CategoriesCard({ item }) {
  return (
    <div className='border rounded-lg h-[145px] w-[170px] flex justify-center items-center hover:bg-[#db4444] hover:text-white'>
      {item}
    </div>
  )
}

export default CategoriesCard