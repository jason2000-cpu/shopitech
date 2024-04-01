import Footer from '@/components/Footer/footer'
import Navbar from '@/components/NavBar/navbar'
import React from 'react'
import CompanyStats from './mini-components/companyStats'
import CompanyTeam from './mini-components/CompanyTeam'
import ServiceDel from '@/components/serviceDelivery/serviceDel'

function About_page() {
  return (
    <div className='mt-[6.5rem]'>
        <Navbar />
        <div className='flex justify-between items-center'>
            <div className='w-[525px] h-[336px] ml-20 p-4 space-y-6'>
                <span className='text-3xl font-bold'>Our Story</span>
                <article className='text-[18px] font-serif'>
                    Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace
                     with an active presense in Bangladesh. Supported by wide range of tailored marketing, 
                     data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons 
                     customers across the region.
                </article>
                <article className='text-[18px] font-serif'>
                    Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive 
                    offers a diverse assotment in categories ranging  from consumer.
                </article>
            </div>
            <div>
                <img src='/static/images/african_women.png'  alt='african women'  className='w-[705px] h-[609px]'/>
            </div>
        </div>
        <CompanyStats />
        <CompanyTeam />
        <ServiceDel />
        <Footer />
    </div>
  )
}

export default About_page