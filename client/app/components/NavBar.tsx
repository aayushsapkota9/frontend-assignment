'use client'
import Image from 'next/image'
import React from 'react'
import Logo from '../../public/onlinestorelogo.png'
import Link from 'next/link'
import { ShoppingOutlined } from '@ant-design/icons'
import AutoComplete from './AutoComplete'
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const NavBar = () => {

  const cartList = useAppSelector((state) => state.carts?.cartList)

  return (
    <nav className='w-screen flex justify-between items-center	fixed top-0 px-20 bg-gray-100  z-10'>
        <div className='flex'>
           <Link href='/' className='flex gap-4'> <div><Image src={Logo} width={75} height={75} alt='logo' ></Image></div><div className='relative top-3 text-2xl font-extrabold	 '>Online <br></br>Store</div></Link>
        </div>
        <div><AutoComplete></AutoComplete></div>
        <Link href={'/cart'}><div className="text-green-500 text-4xl"><ShoppingOutlined />{cartList.length} </div></Link>
    </nav>
  )
}

export default NavBar