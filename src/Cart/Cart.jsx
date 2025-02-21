import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../Context/Context';
import data from "../assets/data.json";

const Cart = () => {
    const { cart,removeCart } = useContext(Context);
    const [product] = useState(data);
    
    console.log("Cart:", cart);  


    return (
        <div className='ml-[300px]'>
            <h1 className='text-center mt-10 text-4xl font-semibold'>Shopping Cart</h1>
            <div className='w-[75%]  h-auto mt-20'>
                {product.map((item) => {
                    if ( cart[item.id] > 0) {
                        return (
                            <div className='w-[700px]  h-36 border-2 border-solid border-gray-300 flex gap-10 mt-10' key={item.id}>
                                <div className='p-5 w-[150px] h-full'>
                                    <img className='w-full h-fit' src={item.img} alt="" />
                                </div>
                                <div className='flex gap-36'>
                                    <div className='pl-20 pt-5'>
                                        <p className='font-bold'>{item.title}</p>
                                        <p>{item.company}</p>
                                        <p>{item.category}</p>
                                    </div>
                                    <div className='pt-5 flex-row space-y-4'>
                                        <p className='font-semibold'>{cart[item.id]}</p>
                                        <p className='font-semibold'>{item.newPrice*cart[item.id]}</p>
                                        <button className='border-none text-blue-600 font-medium cursor-pointer' onClick={()=>removeCart(item.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default Cart;
