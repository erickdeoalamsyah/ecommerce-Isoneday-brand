import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import featured from "../data/future";
import products from "../data/products";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Details = () => {
  const { id } = useParams();
  const allProducts = [...products, ...featured];
  const product = allProducts.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return <p>Product not found</p>;
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.src.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.src.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
    <Header/>
    <div className="py-[6rem] px-4 lg:px-10 flex flex-col lg:flex-row gap-8 items-start lg:items-start bg-gradient-to-b from-black to-red-900 font-[orbitron]">
      {/* Thumbnail Section */}
      <div className="flex items-center justify-between lg:flex-col space-y-2 lg:space-y-6 space-x-3 lg:space-x-0">
        {product.src.map((image, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-20 h-20 lg:w-[6rem] lg:h-[6rem] flex items-center justify-center rounded-md ${
              currentImageIndex === index
                ? "border border-gray-300 "
                : "bg-black/50"
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              loading="lazy"
              className="object-cover w-full h-full"
              onClick={() => setCurrentImageIndex(index)}
            />
          </div>
        ))}
      </div>

      {/* Main Image Section */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative bg-black/50 rounded-md">
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl text-white p-2 rounded-full"
            onClick={handlePrevImage}
          >
            {"<"}
          </button>
          <img
            src={product.src[currentImageIndex]}
            alt={`Product ${currentImageIndex + 1}`}
            className="w-96 h-96 object-cover lg:w-[38rem] lg:h-[38rem]"
          />
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-3xl text-white p-2 rounded-full"
            onClick={handleNextImage}
          >
            {">"}
          </button>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="flex-1 space-y-3 text-left">
        <nav className="text-xs md:text-sm text-white mb-6">
          <Link to="/" className="hover:font-semibold hover:underline">
            HOME
          </Link>{" "}
          /{" "}
          <Link to="/shop" className="hover:font-semibold hover:underline">
            THE SHOP
          </Link>
        </nav>
        <h1 className="text-lg md:text-xl text-white font-semibold">{product.name}</h1>
        <div className="flex justify-start space-x-2">
          <span className="text-yellow-500">★★★★★</span>
          <span className="text-sm text-gray-300">
            {product.reviews}+ reviews
          </span>
        </div>
        <p className="text-lg md:text-xl font-semibold text-white">{product.price}</p>
        <p className="text-xs text-gray-300 leading-relaxed">{product.description}</p>

        <div className="flex items-center justify-center lg:justify-start space-x-4">
          <div className="flex items-center text-black bg-white w-fit overflow-hidden">
            <button
              className="p-2"
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
              className="w-14 p-2 text-center"
            />
            <button
              className="px-2"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <Link
            to="https://s.shopee.co.id/BC7H4aOG2"
            className="w-[70%] text-white bg-black py-2 hover:bg-white border-2 border-gray-400 hover:text-black transition-all"
          >
            <button className="w-full h-full flex items-center  justify-center">
              SHOP
            </button>
          </Link>
        </div>

        <div className="pt-4 text-xs text-gray-300 space-y-2">
          <p>CATEGORIES: {product.categories.join(", ")}</p>
          <p>TAGS: {product.tags.join(", ")}</p>
          <p>WEIGHT: {product.weight}</p>
          <p>DIMENSION: {product.dimension}</p>
          <p>SIZE: {product.sizes.join(", ")}</p>
          <p>COLOR: {product.color}</p>
          <p>STORAGE: {product.storage}</p>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-b from-red-900 to-black">
    <Footer/>
    </div>
    </>
  );
};

export default Details;
