import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Features from './Pages/Features';
// import ContactUs from  "./Components/Contactus/Contactus";
// import Checkout  from './Components/Checkout/Checkout';
// import Checkout from './Components/Checkout/Checkout';
import Seller from './Components/Sellers/Sellers';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout';
import Newseller from './Components/Newseller/Newseller'
import ProductCheckout from './Components/Product/ProductCheckout'
import Men from './Components/Product/Men';
import Women from './Components/Product/Women';


function App() {
  return (
    <>
    
    <div>
      <Router>
        <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />s
      <Route path='/trending' element={<Features/>} />
      <Route path='/seller' element={<Seller/>} />
      <Route path="/productcheckout/:id" element={<ProductCheckout/>} />
      <Route path='/newseller' element={<Newseller/>} />
      <Route path="/checkout" element={<Checkout />}/>
          <Route path="/contactus" component={Checkout} />
          <Route path="/men" element={<Men />}/>
          <Route path="/women" element={<Women />}/>

    </Routes>
      </Router>
    </div>
    </>
  )
  
}

export default App