import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductsPage from './Pages/ProductsPage'
import CartPage from './Pages/CartPage'
import HomePage from './Pages/HomePage'
import { ApiDataProvider } from './Context/ApiDataContext';
import { CartProvider } from './Context/CartContext'
import ProductDetailPage from './Pages/ProductDetailPage'
import LoginPage from './Pages/LoginPage'

const App = () => {
  return (
    <CartProvider>
    <ApiDataProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          {/* <Route path="/products" element={<ProductsPage />} /> */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/:productId" element={<ProductDetailPage/>} />
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </ApiDataProvider>
    </CartProvider>

  )
}

export default App