import React from 'react'
import "./Card.css"
import { IoIosArrowDroprightCircle } from "react-icons/io"

const Card = () => {
    const card=[
        {id:1,quote:"Join Our VIP Club and Save More on Every Purchase!",img:"./card1.jpg"},
        {id:2,quote:"Act Fast – Limited Inventory on Our Bestsellers!",img:"./card2.jpg"}
    ]
  return (
    <>
        <div className="card-contain">
            {card.map((cardings)=>(
                <div key={cardings.id} className="contain">
                    <div className="card-left">
                        <h2>{cardings.quote}</h2>
                        <button className='exp'>Explore More </button>
                        <IoIosArrowDroprightCircle className='exp-i'/>
                    </div>
                    <div className="card-right">
                        <img src={cardings.img} alt="Image" />
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default Card