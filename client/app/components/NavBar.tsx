import Image from 'next/image'
import React from 'react'
import Logo from '../../public/onlinestorelogo.png'
import Link from 'next/link'
import { ShoppingOutlined } from '@ant-design/icons'
import AutoComplete from './AutoComplete'
const NavBar = () => {
  return (
    <nav className='w-screen flex justify-between items-center	 px-20 bg-gray-100 '>
        <div className='flex'>
           <Link href='/' className='flex gap-4'> <div><Image src={Logo} width={75} height={75} alt='logo' ></Image></div><div className=''>Online Store</div></Link>
        </div>
        <div><AutoComplete></AutoComplete></div>
        <div className="text-green-500 text-4xl"><ShoppingOutlined /></div>
    </nav>
  )
}

export default NavBar