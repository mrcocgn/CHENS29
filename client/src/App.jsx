import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import React from 'react'

import Home from "./pages/Home";
import Products from './pages/Products';
import CheckOut from "./pages/CheckOut";
import UserProfile from './supabase/UserProfile';
import AdminDashboard from './admin/AdminDashboard';


const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Layout>
  );
}

export default App;