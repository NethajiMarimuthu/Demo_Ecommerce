import React, { useContext } from 'react'
import { Context } from '../../Context/Context'


const Colors = () => {
  const {handleColor}=useContext(Context)
  return (
    <div>
        <div className='mt-10'>
            <h1>Colors</h1>
            <div>
              <input 
                onChange={handleColor}
                type="radio"
                name="color" 
                id="all" 
                value="all" 
              />
              <label htmlFor="all">All</label><br />
              <input 
                onChange={handleColor}
                type="radio"
                name="color" 
                id="white" 
                value="white" 
              />
              <label htmlFor="white">White</label><br />
              <input
                onChange={handleColor}
                type="radio"
                name="color" 
                id="black" 
                value="black" 
              />
              <label htmlFor="black">Black</label><br />
              <input 
                onChange={handleColor}
                type="radio"
                name="color" 
                id="red" 
                value="red" 
              />
              <label htmlFor="red">Red</label><br />
              <input 
                onChange={handleColor}
                type="radio"
                name="color" 
                id="green" 
                value="green" 
              />
              <label htmlFor="green">Green</label><br />
              <input 
                onChange={handleColor}
                type="radio"
                name="color" 
                id="blue" 
                value="blue" 
              />
              <label htmlFor="blue">Blue</label>
            </div>
            
        </div>
    </div>
  )
}

export default Colors