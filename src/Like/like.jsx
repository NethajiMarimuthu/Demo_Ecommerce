import React, { useContext, useState } from 'react'
import data from '../assets/data.json'
import { Context } from '../Context/Context';


const like = () => {
    const [product] = useState(data);
    const {like,removeLike}=useContext(Context)
  return (
    <div className='ml-[200px]'>
        <h1 className='mt-10 text-center text-3xl font-semibold'>Liked Items</h1>
        <div className='flex gap-5 mt-10 ml-10'>
            {product.map((item)=>{
                if(like[item.id]>0){
                    return(
                        <div className='w-58 h-80 border-2 border-solid border-b-gray-950 p-4'>
                            <img onClick={()=>addCart(item.id)} src={item.img} alt={item.title} className="w-fit h-40 object-contain" />
                                <p className="text-center font-semibold mt-2">{item.title}</p>
                                <p className="text-center text-sm text-gray-500">{item.reviews}</p>
                                <p className="text-center line-through text-sm">{item.prevPrice}</p>
                                <p className="text-center text-lg font-bold">${item.newPrice}</p>
                                <button onClick={()=>removeLike(item.id)} className='w-full text-blue-600 font-semibold cursor-pointer'>Remove</button>
                        </div>
                    )
                }
            })}
        </div>
    </div>
  )
}

export default like