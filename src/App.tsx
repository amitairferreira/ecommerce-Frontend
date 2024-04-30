import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Layout from './layout/Layout';
import Shop from './pages/Shop/Shop';
import Details from './pages/Details/Details';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/" element={<Layout />}>
        <Route index path="/home" element={<Home />} />
        <Route index path="/shop" element={<Shop />} />
        <Route index path="/shop/:id" element={<Shop />} />
        <Route index path="/product/details/:id" element={<Details />} />
        <Route index path="/product/details/:id/category/:categoryId" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;