'use client'
import React from 'react'
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {  Tag } from 'antd';
import { NavBar } from '../components';
import { removeFromCart } from '../redux/reducerSlice/cart'

const Card = () => {
  const dispatch = useAppDispatch();
  const cartList = useAppSelector((state) => state.carts.cartList)
  return (
    <div>
      <NavBar ></NavBar>
      <div className='relative top-20'>
        {
        cartList.map((item:any)=>{
          return (
            <div>
              <div className='border-gray-200 border-2 rounded-lg mx-10 my-10 flex gap-10 py-10 px-10'>
                <div ><img className="w-[150px] h-[150px] object-contain" src={item.image} alt="F" /></div>
                <div className='flex flex-col gap-3'>
                  <div className='text-2xl bold'>{item.title}</div>
                  <div className='text-lg'>$ {item.price}</div>
                  <div className=''><Tag>{item.category}</Tag></div>
                  <div className='flex gap-4'>Quantity:<button className='px-3  border-gray-200 border-2 rounded-md'>-</button> {item.quantity}<button  className='px-3  border-gray-200 border-2 rounded-md'>+</button> </div>
                  <hr></hr>
                  <div>
                    <button className='rounded-2xl px-1 py-2 w-40  bg-orange-400 ' onClick={() => dispatch(removeFromCart(item))}> Remove item</button></div>
                </div>
              </div>
            </div>
          )
        })
        }
      </div>
      </div>
  )
}

export default Card