import React from 'react'

function ContactForm() {
  return (
    <div className=' border-t-2 shadow-xl w-[800px] px-6 py-10 space-y-12'>
      <div className='flex justify-between'>
        <div>
            <input type='text' placeholder='Your Name'  className='w-[235px] h-[50px] bg-[#f5f5f5] rounded'/>
        </div>
        <div>
            <input type='text' placeholder='Youre Email' className='w-[235px] h-[50px] bg-[#f5f5f5] rounded' />
        </div>
        <div>
            <input type='text' placeholder='Your Phone' className='w-[235px] h-[50px] bg-[#f5f5f5] rounded'/>
        </div>
      </div>
      <div>
        <textarea placeholder="Write your message here" className='w-[737px] h-[207px] bg-[#f5f5f5] border border-black rounded'></textarea>
      </div>
      <div className='flex justify-end'>
        <button className='w-[215px] h-[56px] bg-[#db4444] text-white text-xl border rounded'>Send Message</button>
      </div>
    </div>
  )
}

export default ContactForm