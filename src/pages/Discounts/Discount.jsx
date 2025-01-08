import React, { useContext } from 'react'
import "./Discount.css"
import ProductItem from '../../components/ProdectItem/ProductItem'
import { CartContext } from '../../context/CartContext'

const Discount = () => {
    const{products}=useContext(CartContext)

    const prods=products.filter(data=>data.category==="Discount")
    
  return (
    <>
        <div>
            <h1 className="head1">Discount Sale</h1>
            <div className="discount">
            {prods.map((item)=>(
                <ProductItem Id={item.id} Name={item.name} Image={item.image} Amount={item.amount} Company={item.company} ></ProductItem>
            ))}
            </div>
        </div>
    </>
  )
}

export default Discount