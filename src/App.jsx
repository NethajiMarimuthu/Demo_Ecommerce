import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/nav/Nav.jsx'
import Home from './pages/Home/Home.jsx'
import Discount from './pages/Discounts/Discount.jsx'
import Men from './pages/Men/Men.jsx'
import Women from './pages/Women/Women.jsx'
import {Kids} from './pages/Kids/Kids.jsx'
import Footer from './components/Footer/Footer.jsx'
import Cart from './pages/Cart/Cart.jsx'
import { CartProvider } from './context/CartContext.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <CartProvider>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/discount' element={<Discount></Discount>}/>
          <Route path='/men' element={<Men></Men>}></Route>
          <Route path='/women' element={<Women></Women>}></Route>
          <Route path='/kids' element={<Kids></Kids>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
        </Routes>
        </CartProvider>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
