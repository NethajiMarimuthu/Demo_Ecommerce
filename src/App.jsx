import { useState } from 'react';
import './App.css';
import Nav from './Nav/Nav';
import Product from './Product/Product';
import Sidebar from './Sidebar/Sidebar';
import ContextProvider from './Context/Context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Cart/Cart';
import Like from "./Like/like"

function App() {
  return (
    <Router>
      <ContextProvider>
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Nav />
            <Routes>
              <Route path="/" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/like" element={<Like />} />
            </Routes>
          </div>
        </div>
      </ContextProvider>
    </Router>
  );
}

export default App;
