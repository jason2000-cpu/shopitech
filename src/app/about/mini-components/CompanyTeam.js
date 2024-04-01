import React from 'react'

import { ImFacebook } from "react-icons/im";
import { SlSocialTwitter } from "react-icons/sl";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';

const members = [
    {
        id: 1,
        name: 'Jackson Mwangi',
        position: 'Founder & CEO',
        linkedIn: 'https://linkedIn.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com'
            
        
    },
    {
        id: 2,
        name: 'David Mwangi',
        position: 'Managing Director',
        linkedIn: 'https://linkedIn.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com'
        

    },
    {
        id: 3,
        name: 'Elias Mbuvi',
        position: 'Product Designer',
        linkedIn: 'https://linkedIn.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com'
        
    }
]
function CompanyTeam() {
  return (
    <div className='my-24'>
        <div className='flex justify-evenly'>
            {members.map(member =>{
                return (
                    <div key={member.id} className='h-[564px] w-[370px] shadow-md'>
                    <div className='h-[430px] w-[370px] bg-[#f5f5f5]'>
                        <img src={member.img_path} alt={member.name} />
                    </div>
                    <div className='mx-4 my-2 w-[231px] h-[102px]'>
                        <div className='flex flex-col space-y-2'>
                            <span className='text-2xl font-bold'>{member.name}</span>
                            <span className='text-xl'>{member.position}</span>
                        </div> 
                        <div className='flex justify-between mt-4 w-[150px]'>
                            <Link href={member.twitter}><SlSocialTwitter  size={20}/></Link>
                            <Link href={member.instagram}><BsInstagram size={20} /></Link>
                            <Link href={member.linkedIn} ><FaLinkedinIn size={20} /></Link>
                        </div> 
                    </div>
                    </div>
                )
            })}
        </div>

        <div className='flex justify-center mt-10'>
                <span className='mx-2 cursor-pointer h-4 w-4 rounded-full border bg-[rgb(245,245,245)]'></span>
                <span className='mx-2 cursor-pointer h-4 w-4 rounded-full border bg-[#f5f5f5]'></span>
                <span className='mx-2 cursor-pointer h-4 w-4 rounded-full border border-[#f5f5f5] bg-pink-600'></span>
                <span className='mx-2 cursor-pointer h-4 w-4 rounded-full border bg-[#f5f5f5]'></span>
            </div>
    </div>
  )
}

export default CompanyTeam