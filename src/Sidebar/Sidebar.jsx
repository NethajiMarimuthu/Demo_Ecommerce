import React, { useContext } from 'react'
import Category from './Category/Category'
import Prices from './Prices/Prices'
import Colors from './Colors/Colors'
import { Context } from '../Context/Context'

const Sidebar = () => {

  const{cart}=useContext(Context);
  console.log(cart);
  
  return (
    <div className="w-[200px] fixed top-0 left-0 bottom-0 bg-white p-5 z-50 border-r-2 border-gray-400">Sidebar

        <Category/>    
        <Prices/>
        <Colors/>
    </div>
  )
}

export default Sidebar