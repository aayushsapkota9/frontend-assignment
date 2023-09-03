'use client'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { ShoppingCartOutlined} from '@ant-design/icons';
import { Avatar, Card,Carousel, Tag } from 'antd';
import { useRouter } from 'next/navigation'
import { addToCart } from '../redux/reducerSlice/cart'
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Button, message } from 'antd';

const App = () => {
  const router= useRouter()
  const dispatch = useAppDispatch();

  interface Card{
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:Rating,
  }
  interface Rating{
    rate:string,
    count:number
  }
  const [items,setItems]=useState([])
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const [messageApi, contextHolder] = message.useMessage();
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '40rem',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'url("https://c8.alamy.com/comp/2E4CJJD/1111-shopping-day-mega-sale-poster-or-flyer-design-global-shopping-day-online-sale-2E4CJJD.jpg")',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',

  };
  const handleAddCart=(item:any)=>{
    messageApi.info('Item Added to Cart');
    dispatch(addToCart(item))
  }
  const getItems = async () => {
    const res=await fetch('https://fakestoreapi.com/products')
    const data=res.json()
    return data
            // .then(res=>res.json())
            // .then(json=>setItems(json))
  
  };
    
  const postsQuery = useQuery({
    queryKey:["posts"],
    queryFn:getItems,
  })
  if(postsQuery.isLoading) return <h1>Loading......</h1>
  if(postsQuery.error) return <pre>{JSON.stringify(postsQuery.error)}</pre>

  return (<div className='relative top-20'>
          {contextHolder}
        <Carousel afterChange={onChange}>
  <div>
    <h3 style={contentStyle}>1</h3>
  </div>
  <div>
    <h3 style={contentStyle}>2</h3>
  </div>
  <div>
    <h3 style={contentStyle}>3</h3>
  </div>
  <div>
    <h3 style={contentStyle}>4</h3>
  </div>
  
</Carousel>
    <div className='flex flex-wrap mx-16	'>

{postsQuery.data.map((item:Card)=>{
  return (<div className=' 	border-2 border-gray-200 rounded-3xl px-10 py-10 flex flex-col justify-center items-center gap-3 mx-5 my-10 w-96 '>
    <div ><img className="w-[150px] h-[150px] object-contain	"
    src={item.image}
    alt="F" 
  /></div>
  <div className='w-64 px-4 text-lg'>{item.title}</div>
  {/* <p>{item.description}</p> */}
  <div className='w-64 px-4'>Rs.{item.price}</div>
  <p className='w-64 px-4'><Tag
          >
            {item.category}
          </Tag><br /></p>
  {/* <button onClick={() => dispatch(addToCart(item))}><ShoppingCartOutlined /> Add to Cart</button>
  <button onClick={() => router.push(`/product?id=${item._id}`)}>Buy Now</button> */}
  <div className='flex justify-around gap-4 relative top-2'>
  <button className='rounded px-1 py-2 w-40  bg-orange-400 ' onClick={()=>handleAddCart(item)} ><ShoppingCartOutlined /> Add to Cart</button>
  <button className='rounded px-1 py-2 w-24  bg-orange-400 ' onClick={() => router.push(`/product/${item.id}`)}> Buy Now</button>
  
  </div>

</div>)
})}
</div>
  </div>)
}

export default App