import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import "./Kids.css"
import ProductItem from '../../components/ProdectItem/ProductItem'

export const Kids = () => {
    const{products}=useContext(CartContext)

    const prods=products.filter(data=>data.category==="Kids")

  return (
    <>
        <div>
            <h1 className="head1">Kids Section</h1>
            <div className="kids_list">
                {prods.map((item)=>(
                    <ProductItem Id={item.id} Name={item.name} Image={item.image} Amount={item.amount} Company={item.company} ></ProductItem>
                ))}
            </div>
        </div>
    </>
  )
}
