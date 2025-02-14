import React from "react";
import FutureProduct from "../components/FutureProduct";
import Footer from "../components/Footer";
import Product from "../components/Product";
import Header from "../components/Header";

export const Shop = () => {
  return (
    <>
    <Header/>
    <div className="pt-5">
      <div className="bg-gradient-to-b from-black to-red-900">
      <Product/>
      </div>
      <FutureProduct />
      <div className="bg-gradient-to-b from-black to-red-900">
        <Footer/>
        </div>
    </div>
    </>
  );
  
};

export default Shop;
