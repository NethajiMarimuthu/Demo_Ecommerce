import React, { useState } from 'react'
import "./Explore.css"
import {products} from "../../assets/product.json"
import Discount from '../../pages/Discounts/Discount'
import ProductItem from '../ProdectItem/ProductItem'
import { Link } from 'react-router-dom'

const Explore = () => {
    // const [product]=useState(data)
    const prods = products.filter(data => data.category === "Discount");

   
    
        
  return (
    <>
        <div>
            {prods.length>5? <div className="discount">
            <h1 className="head1">DISCOUNTS SALE</h1>
            <div className='exp'>
            {prods.slice(0,5).map((item)=>(
                <ProductItem Id={item.id} Name={item.name} Image={item.image} Amount={item.amount} Company={item.company} ></ProductItem>
                
            ))}
            </div>
            <Link to={"/discount"}>
                <button className='exp_btn'>Explore More</button>
            </Link>
        </div> : <div className="discount">
            <h1 className="head1">DISCOUNTS SALE</h1>
            <div className='exp'>
            {prods.map((item)=>(
                <ProductItem Id={item.id} Name={item.name} Image={item.image} Amount={item.amount} Company={item.company} ></ProductItem>
                
            ))}
            </div>
        </div>}
        </div>
        <hr/>
    </>
  )
}

export default Explore