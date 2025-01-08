import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <>
        <div className="header">
            <div className="left">
                <h3>Discover Amazing Deals & 
                    Shop with Confidence!</h3>
                <p>
                "Don’t just take our word for it – read what 
                thousands of happy customers
                have to say about their shopping experience with us!"
                </p>
            </div>
            <div className="right">
                <img src="banner.png" alt="banner" />
            </div>
        </div>
    </>
  )
}

export default Header