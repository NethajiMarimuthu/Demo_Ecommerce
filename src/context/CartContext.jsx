import { Children, createContext, useEffect, useState } from "react";
import {products} from "../assets/product.json"

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    // const[product]=useState(data)
    const [cartItem, setCartItem] = useState({})
    const addCart = (id) => {
        if(!cartItem[id]){
            setCartItem((prevItem)=>({...prevItem,[id]:1}))
        }
        else{
            setCartItem((prevItem)=>({...prevItem,[id]:prevItem[id]+1}))
        }
    }

    const removeCart = (id) => {
        setCartItem((prevItem)=>({...prevItem,[id]:prevItem[id]-1}))
    }
    useEffect(()=>{
        console.log(cartItem);
        
    },[cartItem])

    return (
        <CartContext.Provider value={{addCart,removeCart,cartItem,products}}>
            {children}
        </CartContext.Provider>
    )

}