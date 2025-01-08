import React from 'react'
import "./Footer.css"
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
    const list=[
        {id:"1",title:"Get to Konw Us",li:["About easyshop","Press Release"]},
        {id:"2",title:"Contact with Us",li:["Facebook","Twitter","Instagram"]},
        {id:"3",title:"Make Money with Us",li:["Sell on easyshop","Sell under easyshop","protect and Build Your Brand","Amazon Global Selling","Supply to Amazon","Fulfilment by Amazon"]},
        {id:"4",title:"Let Us Help You",li:["Your Account","Return Centenr","Recall and Protect","easyshop App Download","Help"]}
    ]

  return (
    <>
        <div>
            <div className="main">
                <div className="container">
                    {list.map((list)=>(
                        <div key={list.id} className='con'>
                            <h2>{list.title}</h2>
                            <ul>
                                {list.li.map((liItem, liIndex) => (
                                    <li key={liIndex}>{liItem}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="closer">
                    <ul>
                        <li>Condition of Use & Sale</li>
                        <li>Privacy Notice</li>
                        <li>Interest-Based Ads</li>
                        <li className='copy'><FaRegCopyright /> 1999-2025,easyshop.com, Inc. or its affiliated
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer