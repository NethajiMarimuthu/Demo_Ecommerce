import React from 'react';
import { RiHeartLine } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between ml-[200px] px-4 md:px-20 mt-5'>
        
        <div className='w-full md:w-[40%]'>
            <input className='w-full border border-gray-300 border-solid focus:outline-none p-2' type="text" placeholder='Enter your choice' />
        </div>

        <div className='flex space-x-2 text-2xl mt-4 md:mt-0'>
          <ul className='flex space-x-5'>
            <li>
              <RiHeartLine className='text-xl md:text-2xl' />
            </li>
            <li>
              <Link to="/cart">
                <FaOpencart className='text-xl md:text-2xl' />
              </Link>
            </li>
            <li>
              <Link to="/">
                <IoHome className='text-xl md:text-2xl' />
              </Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Nav;
