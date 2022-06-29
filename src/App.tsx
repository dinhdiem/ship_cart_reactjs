import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { list, remove } from './api/product'
import './App.css'
import About from './pages/About'
import Blogs from './pages/Blogs'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Website_layout from './pages/layouts/Website_layout/Website_layout'
import Product from './pages/Product'
import ProductDetail from './pages/Product-Detail'
import { ProductType } from './types/product'

function App() {
  const [products, setProduct] = useState<ProductType[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProduct(data);
    }
    getProducts()
  },[])

  const removeItem = (id: number) => {
    remove(id);
    setProduct(products.filter(item => item._id !== id));
  }  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Website_layout />}>
          <Route index element={<Home />} />
          <Route path='products'>
            <Route index element={<Product products={products} onRemove={removeItem} />} />
            <Route path=':id' element={<ProductDetail />} />
          </Route>
          <Route path='about' element={<About />} />
          <Route path='blog' element={<Blogs />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<Cart />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
