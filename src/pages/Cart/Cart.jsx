import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import "./Cart.css"

const Cart = () => {

  
  const {cartItem,products,removeCart}=useContext(CartContext)

  console.log(cartItem);
  
    
    
  return (
    <>
      <div className='cart-contain'>
        {products.map((item,index)=>{
          if(cartItem[item.id]>0){
            return(
              <div key={index} className='cart'>
                <div className="cart-img">
                  <img src={item.image} alt="" />
                </div>
                <div className='cart-details'>
                  <p>Name:{item.name}</p>
                  <p>Company:{item.company}</p>
                  <p>No of Itmes{cartItem[item.id]}</p>
                  <p>Total:{parseFloat(item.amount.substring(1,5))*parseFloat(cartItem[item.id])}</p>
                  <p>Description:{item.description}</p>
                  <p>Discount-Amount-{item.discount_amount}</p>
                  <button onClick={()=>removeCart(item.id)}>remove</button>
                </div>
                
              </div>
            )
          }
        })}
      </div>
    </>
    
  )
}

export default Cart