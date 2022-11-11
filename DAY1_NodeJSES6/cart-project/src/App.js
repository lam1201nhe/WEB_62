import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import ProductList from "./ProductList/ProductList";
import Header from "./Header/Header";
import ProductDetail from "./ProductDetail/ProductDetail";
import Cart from "./Cart/Cart";
const initialProduct = [1, 2, 3, 4, 5];

const App = () => {
  const [products, setProducts] = useState([]);

  //Get products from server
  useEffect(() => {
    setProducts(initialProduct);
  }, []);

  return (
    <div>
      <Header />
      <ProductDetail />
      <Cart carts={carts}/>
      <ProductList products={products}/>
    </div>
  );
};

export default App;
