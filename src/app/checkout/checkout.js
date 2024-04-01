import React from 'react'

import BillingForm from '@/components/BillingForm/BillingForm'
import Billing from './Billing'

function CheckoutComp() {
  return (
    <div className='my-8 mx-4'>
        <div className='mx-16'>
            <p>Home / Cart <span className='font-semibold'>/ Checkout</span></p>
        </div>
        <div className='mx-28 my-16'>
            <span className='text-3xl font-bold'>Billing Details</span>
        </div>
        <div className='flex justify-around'>
            <div className='form'>
                <BillingForm />
            </div>
            <div className='billing'>
                <Billing />
            </div>
        </div>
    </div>
  )
}

export default CheckoutComp