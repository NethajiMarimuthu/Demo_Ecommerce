import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const Context = createContext(null);

const ContextProvider = (props) => {
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState("all");
  const [color,setColor]=useState("all")
  const [cart,setCart]=useState({})
  const [total,setTotal]=useState(0)
  const [like,setLike]=useState({})

  const handleCategory = (e) => {
    setCategory(e.target.value);
  }

  const handlePrice=(e)=>{
    setPrice(e.target.value)    
  }

  const handleColor=(e)=>{
    setColor(e.target.value)
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
  
  const handleLike=(id)=>{
    if(!like[id]){
      setLike(prevItem=>({...prevItem,[id]:1}))
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

  useEffect(()=>{
    console.log(like);  
  },[like])

  return (
    <Context.Provider value={{ handleCategory, category, price,color,handlePrice,handleColor,addCart,removeCart,cart,handleLike}}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
