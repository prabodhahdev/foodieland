import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {   FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Header = () => {
  return (
    <div className=' flex items-center justify-between py-5  ] border-b border-gray-400'>
        <div>
         <Image src="/logo.png" width={150} height={50} alt='Logo'/>
        </div>
      
      <ul className='flex items-center '>
        <li className='hover:text-[#FF7426]'><Link href="/">Home</Link></li>
        <li className='hover:text-[#FF7426]'><Link href="/recipes">Recipes</Link></li>
        <li className='hover:text-[#FF7426]'><Link href="/blog">Blog</Link></li>
        <li className='hover:text-[#FF7426]'><Link href="/contact">Contact</Link></li>
        <li className='hover:text-[#FF7426]'><Link href="/about">About Us</Link></li>
      </ul>
     <div className='flex items-center'>
     <FaFacebookF size={55}  className='hover:text-[#FF7426] cursor-pointer  '/>
     <FaTwitter size={60}  className='hover:text-[#FF7426] cursor-pointer'/>
     <FaInstagram size={60}  className='hover:text-[#FF7426] cursor-pointer'/>
     </div>
    
    
    </div>
  )
}

export default Header
