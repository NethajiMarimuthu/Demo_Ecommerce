import React, { useContext } from 'react';
import { Context } from '../../Context/Context';

const Category = () => {
  const { handleCategory } = useContext(Context); 

  return (
    <div>
      <div className="mt-10">
        <h1>Category</h1>
        <div>
          <input
            onChange={handleCategory} 
            value="all"
            type="radio"
            name="category"
            id="all"
          />
          <label htmlFor="all">All</label><br />
          
          <input
            onChange={handleCategory} 
            value="sneakers"
            type="radio"
            name="category"
            id="sneakers"
          />
          <label htmlFor="sneakers">Sneakers</label><br />
          
          <input
            onChange={handleCategory} 
            value="flats"
            type="radio"
            name="category"
            id="flats"
          />
          <label htmlFor="flats">Flats</label><br />
          
          <input
            onChange={handleCategory} 
            value="sandles"
            type="radio"
            name="category"
            id="sandles"
          />
          <label htmlFor="sandles">Sandles</label><br />
          
          <input
            onChange={handleCategory} 
            value="heels"
            type="radio"
            name="category"
            id="heels"
          />
          <label htmlFor="heels">Heels</label><br />
        </div>
      </div>
    </div>
  );
}

export default Category;
