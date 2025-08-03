
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import CartPage from './pages/cart'
import ProductDetails from './pages/productDetails'

function App() {
  
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cart' element={<CartPage/>} />
            <Route path='/productDetails/:id' element={<ProductDetails/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
