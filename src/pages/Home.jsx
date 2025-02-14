import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Product from "../components/Product";
import Featured from "../components/Featured";
import FutureProduct from "../components/FutureProduct";
import Art from "../components/Art";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <Header />
        <Hero />
        <div className="bg-gradient-to-t from-black to-red-900">
        <Product />
        </div>
        <Featured />
        <FutureProduct />
        <Art />
        <div className="bg-gradient-to-t from-black to-red-900">
        <Footer/>
        </div>
      </div>
    </>
  );
};

export default Home;
