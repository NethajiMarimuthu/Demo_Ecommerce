import React, { useContext, useState } from 'react';
import data from "../assets/data.json";
import { ImEyeMinus } from 'react-icons/im';
import { Context } from '../Context/Context';
import { HiChatBubbleBottomCenterText } from 'react-icons/hi2';
import Category from '../Sidebar/Category/Category';
import { MdAddChart } from 'react-icons/md';

const Product = () => {

  const [product] = useState(data);
  
  const {category,price,color,addCart}=useContext(Context)
  const items = (category === 'all' && price === 'all' && color=='all') ? product : product.filter((item) => (category === 'all' || item.category === category) && (price === 'all' || item.newPrice === price) && (color === 'all' || item.color === color));

  
  return (
    <div className='flex flex-wrap gap-10 mt-20 ml-[250px]'>
      {items.map((item) => (
        <div className='w-48 h-80 border-2 border-solid border-b-gray-950 p-4'>
          <img onClick={()=>addCart(item.id)} src={item.img} alt={item.title} className="w-fit h-40 object-contain" />
          <p className="text-center font-semibold mt-2">{item.title}</p>
          <p className="text-center text-sm text-gray-500">{item.reviews}</p>
          <p className="text-center line-through text-sm">{item.prevPrice}</p>
          <p className="text-center text-lg font-bold">${item.newPrice}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
