import React, { useContext, useState } from 'react'
import "./ProductItem.css"
import { CartContext } from '../../context/CartContext'

const ProductItem = ({ Id, Name, Image, Amount, Company }) => {
    const{addCart,cartItem,removeCart}=useContext(CartContext)
    


    return (
        <div className='product'>
            <div className="item">
                <div className="img">
                    <img src={Image} alt="Image" />
                </div>
                <div className="details">
                    <h4>{Name}</h4>
                    <p className='company'>{Company}</p>
                    <p className='amt'>{Amount}</p>
                    <button onClick={()=>addCart(Id)} className='buy'>BUY</button>
                    <button onClick={()=>removeCart(Id)}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
