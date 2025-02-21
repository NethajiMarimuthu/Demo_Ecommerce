import React, { useContext, useState } from 'react';
import data from "../assets/data.json";
import { ImEyeMinus } from 'react-icons/im';
import { Context } from '../Context/Context';
import Category from '../Sidebar/Category/Category';
import { MdAddChart } from 'react-icons/md';
import { MdOutlineAddBox } from "react-icons/md";
import { CgRemoveR } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";

const Product = () => {

  const [product] = useState(data);
  
  const {cart,category,price,color,addCart,removeCart,handleLike}=useContext(Context)
  const items = (category === 'all' && price === 'all' && color=='all') ? product : product.filter((item) => (category === 'all' || item.category === category) && (price === 'all' || item.newPrice === price) && (color === 'all' || item.color === color));

  
  return (
    <div className='flex flex-wrap gap-10 mt-20 ml-[250px]'>
      {items.map((item) => (
        <div className='w-58 h-80 border-2 border-solid border-b-gray-950 p-4'>
          <img onClick={()=>addCart(item.id)} src={item.img} alt={item.title} className="w-fit h-40 object-contain" />
          <p className="text-center font-semibold mt-2">{item.title}</p>
          <p className="text-center text-sm text-gray-500">{item.reviews}</p>
          <p className="text-center line-through text-sm">{item.prevPrice}</p>
          <p className="text-center text-lg font-bold">${item.newPrice}</p>
          {!cart[item.id]>0?
            <div className='flex space-x-3'>
              <button onClick={()=>addCart(item.id)} className=' w-40 mt-2 bg-yellow-300 cursor-pointer '>
              Buy
              </button>
              <FaRegHeart onClick={()=>handleLike(item.id)} className='mt-3 text-xl cursor-pointer hover:text-red-500' />
            </div>:
            <div  className='w-40 flex space-x-5'>
              < MdOutlineAddBox onClick={()=>addCart(item.id)} className='mt-1 cursor-pointer text-4xl'></MdOutlineAddBox>
              <p className='text-lg font-bold mt-2'>{cart[item.id]}</p>
              <CgRemoveR onClick={()=>removeCart(item.id)} className='mt-2 cursor-pointer text-3xl font-bold'></CgRemoveR>
              <FaRegHeart className='ml-8 mt-2 text-3xl cursor-pointer hover:text-red-500'/>
            </div>
          }
        </div>
      ))}
    </div>
  );
};

export default Product;
