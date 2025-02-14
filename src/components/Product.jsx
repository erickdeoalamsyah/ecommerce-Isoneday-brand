import React from "react";
import { motion } from "framer-motion";
import products from "../data/products";
import { Link } from "react-router-dom";

const Sticker = () => {
  return (
    <section className="max-w-7xl mx-auto w-full px-4 py-16 font-[Orbitron]">
      <h1 className="text-center text-2xl md:text-3xl lg:text-5xl text-gray-300 leading-tight mb-8">
        WEAR THE ART
        <br />
        FEEL THE TASTE
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <motion.div
          key={product.id}
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.2,         
            delay: index * 0.1,   
          }}
            className="relative text-xs rounded-lg  shadow-lg bg-black/50 flex flex-col items-center text-center overflow-hidden group transition-all duration-300 ease-in-out hover:bg-gradient-to-b from-black to-red-900"
          >
            {product.soldOut && (
              <span className="absolute top-3 left-3 bg-red-600 text-white text-sm font-semibold px-2 py-1 rounded-full z-10">
                SOLD OUT
              </span>
            )}
            <div className="w-full p-2 aspect-square flex items-center justify-center border-b border-red-600 relative overflow-hidden transition-shadow duration-300 ease-in-out">
              <img
                src={Array.isArray(product.src) ? product.src[0] : product.src}
                alt={product.name}
                loading="lazy"
                className="w-full h-auto max-h-200 object-cover transition-all duration-400 ease-in group-hover:opacity-0"
              />
              {Array.isArray(product.src) && product.src.length > 1 && (
                <img
                  src={product.src[1]}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-auto max-h-200  object-cover transition-all duration-300 ease-in opacity-0 group-hover:opacity-100 absolute top-0 left-0"
                />
              )}
              <Link
                to={`/product/${product.id}`}
                className="absolute text-xs bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in bg-black text-white font-semibold p-2 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-red-600"
              >
                View Detail
              </Link>
            </div>
            <h2 className="font-bold text-gray-300 tracking-widest mt-2">
              {product.name}
            </h2>
            <p className="text-gray-300 py-2">{product.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Sticker;
