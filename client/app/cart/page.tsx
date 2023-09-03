'use client'
import React from 'react'
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {  Tag } from 'antd';
import { NavBar } from '../components';
import { Button, message } from 'antd';
import { addToCart,subtractQuantity,removeFromCart } from '../redux/reducerSlice/cart'

const Card = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const dispatch = useAppDispatch();
  const cartList = useAppSelector((state) => state.carts.cartList)
  const handleAddQuantity=(item:any)=>{
    dispatch(addToCart(item))
  }
  const handleSubQuantity=(item:any)=>{
    if(item.quantity>1)
    {
      dispatch(subtractQuantity(item))
      
    }
  }
  return (
    <div>
      <NavBar ></NavBar>
      <div className='relative top-20'>
        {contextHolder}
        {
        cartList.map((item:any)=>{
          return (
            <div key={item.key}>
              <div className='border-gray-200 border-2 rounded-lg mx-10 my-10 flex gap-10 py-10 px-10' >
                <div ><img className="w-[150px] h-[150px] object-contain" src={item.image} alt="F" /></div>
                <div className='flex flex-col gap-3'>
                  <div className='text-2xl bold'>{item.title}</div>
                  <div className='text-lg'>$ {item.price}</div>
                  <div className=''><Tag>{item.category}</Tag></div>
                  <div className='flex gap-4'>Quantity:<button className='px-3  border-gray-200 border-2 rounded-md' onClick={()=>handleSubQuantity(item)}>-</button> {item.quantity}<button  className='px-3  border-gray-200 border-2 rounded-md'onClick={()=>handleAddQuantity(item)}>+</button> </div>
                  <hr></hr>
                  <div>
                    <button className='rounded-2xl px-1 py-2 w-40  bg-orange-400 ' onClick={() => {   dispatch(removeFromCart(item)), messageApi.info('Item removed')}}> Remove item</button></div>
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