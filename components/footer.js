import React from 'react'
import Link from 'next/link'
import {AiFillFacebook, AiFillLinkedin, AiFillInstagram} from "react-icons/ai"
const footer = () => {
  return (
    <footer >
        <div className='site-title'>MAYVEN</div>
        <div>A place where you can find products and brands that match your value</div>
        <div>hello@shopmayven.com</div>
        <div className='socials'>
            <Link
            href={'https://www.facebook.com/people/Mayven/100063923690306/'}
            target='_blank'
            className='social-link'
            >
            <AiFillFacebook 
            size={25}
            className='icon'
           /> 
            </Link>

            <Link
            href={'https://www.linkedin.com/company/shopmayven/'}
            className='social-link'
            target='_blank'
            >
            <AiFillLinkedin 
            size={25}
            className='icon'
           /> 
            </Link>

            <Link
            href={'https://www.instagram.com/shopmayven/'}
            className='social-link'
            target='_blank'
            
            >
            <AiFillInstagram 
            size={25}
            className='icon'
           /> 
            </Link>

        </div>
    </footer>
  )
}

export default footer