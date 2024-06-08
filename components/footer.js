import React from 'react'
import Link from 'next/link'
import {AiFillFacebook, AiFillLinkedin, AiFillInstagram} from "react-icons/ai"
const footer = ({marginTop}) => {
  return (
    <footer  className={`${marginTop} flex flex-col bottom-0 left-0 items-center p-5 gap-[7px] bg-[#faf9f9] mt-[70px]`} >

        <div className='text-xl font-extrabold'>MAYVEN</div>
        <div className=' text-center leading-tight'>A place where you can find products and brands that match your value</div>
        <div>hello@shopmayven.com</div>
        <div className='flex gap-2.5'>
            <Link
            href={'https://www.facebook.com/people/Mayven/100063923690306/'}
            target='_blank'
            className='text-[#222] no-underline'
            >
            <AiFillFacebook 
            size={25}
            className='cursor-pointer'
            name='shopmayven facebook profile'
           /> 
            </Link>

            <Link
            href={'https://www.linkedin.com/company/shopmayven/'}
            className='social-link'
            target='_blank'
            >
            <AiFillLinkedin 
            size={25}
            className='cursor-pointer'
            name='shopmayven linkedin profile'
           /> 
            </Link>

            <Link
            href={'https://www.instagram.com/shopmayven/'}
            className='social-link'
            target='_blank'
            >
            <AiFillInstagram 
            size={25}
            className='cursor-pointer'
            name='shopmayven instagram profile'
           /> 
            </Link>

        </div>
    </footer>
  )
}

export default footer