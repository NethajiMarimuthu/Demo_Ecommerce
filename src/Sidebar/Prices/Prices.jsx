import React, { useContext } from 'react'
import { Context } from '../../Context/Context'

const Prices = () => {
  const{handlePrice}=useContext(Context)
  return (
    <div>
        <div className='mt-10'>
            <h1>Prices</h1>
            <div>
          <input
            onChange={handlePrice} 
            value="all"
            type="radio"
            name="newPrice"
            id="all"
          />
          <label htmlFor="all">All</label><br />
          
          <input
            onChange={handlePrice} 
            value="50"
            type="radio"
            name="newPrice"
            id="$0-$50"
          />
          <label htmlFor="$0-$50">$50</label><br />
          
          <input
            onChange={handlePrice} 
            value="100"
            type="radio"
            name="newPrice"
            id="$50-$100"
          />
          <label htmlFor="$50-$100">$100</label><br />
          
          <input
            onChange={handlePrice} 
            value="150"
            type="radio"
            name="newPrice"
            id="sandles"
          />
          <label htmlFor="sandles">$150</label><br />
          
          <input
            onChange={handlePrice} 
            value="200"
            type="radio"
            name="newPrice"
            id="$150-$200"
          />
          <label htmlFor="$150-$200">$200</label><br />
        </div>
        </div>
    </div>
  )
}

export default Prices