'use client'
import React, { useState } from 'react';
import { useQuery } from 'react-query'
import { AutoComplete } from 'antd';
import { useRouter } from 'next/navigation';
const App: React.FC = () => {
  const router=useRouter()
  interface Option{
    value:string;
    id:number;
  }
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
  const [options, setOptions] = useState<Option[]>([]);
  const getItemName = async () => {
    const res=await fetch('https://fakestoreapi.com/products')
    const data=res.json()
    return data
            // .then(res=>res.json())
            // .then(json=>setItems(json))
    

  };
  const fillAutoCompleteQuery = useQuery({
    queryKey:["search"],
    queryFn:getItemName,
  })
  if(fillAutoCompleteQuery.isLoading) return <h1>Loading......</h1>
  if(fillAutoCompleteQuery.error) return <pre>{JSON.stringify(fillAutoCompleteQuery.error)}</pre>

  const searchProducts=(text:string)=>{
    setOptions(fillAutoCompleteQuery.data.map((item:Card)=>{
      return {value:item.title,id:item.id}
    }))
  }
// setOptions(fillAutoCompleteQuery.data)
  return (
    <AutoComplete
    className='border-gray-200 border-2'
      options={options}
      style={{ width: 400 }}
      placeholder="Search for Products"
      onSearch={(text) => {searchProducts(text)}}
      // onSelect={(text,obj)=>router.push(`/product?id=${item.id}`)}}
      onSelect={(text,item)=>router.push(`/product?id=${item.id}`)}
      bordered={false}
    />
  );
};

export default App;