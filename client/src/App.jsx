import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import React from 'react'

import Home from "./pages/Home";
import Products from './pages/Products';
import CheckOut from "./pages/CheckOut";
import Profile from './pages/Profile';


const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </Layout>
  );
}

export default App;