import React,{useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import ProductItem from '../../components/ProdectItem/ProductItem'
import "./Men.css"

const Men = () => {
    const{products}=useContext(CartContext)

    const prods=products.filter(data=>data.category==="Men")
    
  return (
    <>
        <div>
            <h1 className="head1">Mens Section</h1>
            <div className="men">
              {prods.map((item)=>(
                <ProductItem Id={item.id} Name={item.name} Image={item.image} Amount={item.amount} Company={item.company} ></ProductItem>
              ))}
            </div>
        </div>
    </>
  )
}

export default Men