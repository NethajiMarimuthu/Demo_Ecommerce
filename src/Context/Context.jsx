import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const Context = createContext(null);

const ContextProvider = (props) => {
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState("all");
  const [cart,setCart]=useState({})

  const handleCategory = (e) => {
    setCategory(e.target.value);
  }

  const handlePrice=(e)=>{
    setPrice(e.target.value)    
  }

  const addCart=(id)=>{
    if(!cart[id]){
      setCart(prevCart => ({...prevCart,[id]:1
      }));
    }else{
      setCart(prevCart => ({...prevCart,[id]:prevCart[id] + 1
      }));
    }
  }

  const removeCart=(id)=>{
    if (cart[id]) {
      setCart(prevCart=>({...prevCart,[id]:prevCart[id]-1}))
    }
  }

  useEffect(()=>{
    console.log(cart);  
  },[cart])

  return (
    <Context.Provider value={{ handleCategory, category, price, handlePrice,addCart,removeCart,cart}}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
