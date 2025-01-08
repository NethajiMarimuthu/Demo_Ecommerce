import React, { useContext, useState } from 'react'
import ProductItem from '../../components/ProdectItem/ProductItem'
import "./Women.css"
import { CartContext } from '../../context/CartContext'

const Women = () => {
    const{products}=useContext(CartContext)

    const prods=products.filter(data=>data.category==="Women")


  return (
    <>
        <div>
            <h1 className="head1">Womens Section</h1>
            <div className="women_list">
                {prods.map((item)=>(
                    <ProductItem Id={item.id} Name={item.name} Image={item.image} Amount={item.amount} Company={item.company} ></ProductItem>
                ))}
            </div>
        </div>
    </>
  )
}

export default Women