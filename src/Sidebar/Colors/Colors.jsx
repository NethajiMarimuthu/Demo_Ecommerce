import React from 'react'

const Colors = () => {
  return (
    <div>
        <div className='mt-10'>
            <h1>Category</h1>
            <div className=''>
            <input  type="radio" name="All" id="" />
            <label htmlFor="All">All</label><br />
            <input type="radio" name="Red" id="" />
            <label htmlFor="Red">Red</label><br />
            <input type="radio" name="Green" id="" />
            <label htmlFor="Green">Green</label><br />
            <input type="radio" name="White" id="" />
            <label htmlFor="White">White</label><br />
            <input type="radio" name="Black" id="" />
            <label htmlFor="Black">Black</label><br />
            </div>
        </div>
    </div>
  )
}

export default Colors