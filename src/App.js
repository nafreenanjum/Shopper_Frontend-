import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes
import ShopContextProvider from "./CONTENT/ShopContext";
import Navbar from "./COMPONENT/Navbar";
import Shop from "./PAGES/Shop";
import ShopCategory from "./PAGES/ShopCategory";
import Product from "./PAGES/Product";
import Cart from "./PAGES/Cart";
import LoginSignup from "./PAGES/LoginSignup";
import Footer from "./COMPONENT/Footer/Footer";
import banner_mens from './COMPONENT/Assets/banner_mens.png';
import banner_women from './COMPONENT/Assets/banner_women.png';
import banner_kids from './COMPONENT/Assets/banner_kids.png';

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        {/* Wrap all Route components inside Routes */}
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={banner_mens} category="men" />} />
          <Route path="/kids" element={<ShopCategory banner={banner_kids} category="kid" />} />
          <Route path="/womens" element={<ShopCategory banner={banner_women} category="women" />} />
          <Route path="/product/:productId" element={<Product />} /> {/* Dynamic Route */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;


