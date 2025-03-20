import { Routes, Route } from 'react-router-dom';
import Layout from './template/Layout';
import React from 'react'

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";


const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Layout>
  );
}

export default App;