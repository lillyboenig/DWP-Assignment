import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Components/Header';
import ProductForm from './Components/ProductForm';
import OrderInfo from './Components/OrderInfo';
import productImage from './images/product-image.jpeg';

import News from './News.jsx';

import Layout from './Layout.jsx';

import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="news" element={<APIExercise />} />
                <Route path="components" element={<ComponentExercise />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
}

function ComponentExercise() {
  const products = [
      { name: "Spooky Mushroom", price: 10.0 },
      { name: "Fancy Mushroom", price: 20.0 },
      { name: "Deluxe Mushroom", price: 30.0 },
  ];

  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleProductChange = (index) => {
      setSelectedProductIndex(index);
  };

  const handleQuantityChange = (newQuantity) => {
      setQuantity(newQuantity);
  };

  return (
      <div>
          <Header image={productImage} title="Mushroom Store" />
          <ProductForm
              products={products}
              onProductChange={handleProductChange}
              onQuantityChange={handleQuantityChange}
          />
          <OrderInfo
              productName={products[selectedProductIndex].name}
              price={products[selectedProductIndex].price}
              quantity={quantity}
          />
      </div>
  );
}

function APIExercise() {
  return (
      <div>
          <h1>WSJ News Explorer</h1>
          <News />
      </div>
  );
}

export default App
