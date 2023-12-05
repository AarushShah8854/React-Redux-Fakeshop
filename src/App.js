import React from "react";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductComponent from "./containers/ProductComponent";
import ProductDetails from "./containers/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />}/>
          <Route path="product/:productId" element={<ProductDetails />}/>
          <Route path="*" element={<h1>No Page Found!!</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
