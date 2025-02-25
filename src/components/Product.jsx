// import React from "react";
// import products from "../data/products";
// import { Link } from "react-router-dom";

// const Sticker = () => {
//   return (
//     <section className="max-w-7xl mx-auto w-full px-4 py-16 font-[Orbitron]">
//       <h1 className="text-center text-2xl md:text-3xl lg:text-5xl text-gray-300 leading-tight mb-8">
//         WEAR THE ART
//         <br />
//         FEEL THE TASTE
//       </h1>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 max-w-7xl mx-auto">
//         {products.map((product, index) => (
//           <div key={product.id} className="relative text-xs rounded-lg  shadow-lg bg-black/50 flex flex-col items-center text-center overflow-hidden group transition-all duration-300 ease-in-out hover:bg-gradient-to-b from-black to-red-900">
//             {product.soldOut && (
//               <span className="absolute top-3 left-3 bg-red-600 text-white text-sm font-semibold px-2 py-1 rounded-full z-10">
//                 SOLD OUT
//               </span>
//             )}
//             <div
//               className="w-full p-2 aspect-square flex items-center justify-center border-b border-red-600 relative overflow-hidden transition-shadow duration-300 ease-in-out"
//               onClick={() => (window.location.href = `/product/${product.id}`)} // Tambahkan klik langsung ke detail
//             >
//               <img
//                 src={Array.isArray(product.src) ? product.src[0] : product.src}
//                 alt={product.name}
//                 loading="lazy"
//                 className="w-full h-auto max-h-200 object-cover transition-all duration-400 ease-in group-hover:opacity-0"
//               />
//               {Array.isArray(product.src) && product.src.length > 1 && (
//                 <img
//                   src={product.src[1]}
//                   alt={product.name}
//                   loading="lazy"
//                   className="w-full p-2 h-auto max-h-200 object-cover transition-all duration-300 ease-in opacity-0 group-hover:opacity-100 absolute top-0 left-0"
//                   onClick={() =>
//                     (window.location.href = `/product/${product.id}`)
//                   } // Tambahkan klik
//                 />
//               )}

//               {/* Pastikan Link berada di atas */}
//               <Link
//                 to={`/product/${product.id}`}
//                 className="absolute text-xs bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in bg-black text-white font-semibold p-2 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-red-600 z-20"
//               >
//                 View Detail
//               </Link>
//             </div>

//             <h2 className="font-bold text-gray-300 tracking-widest mt-2">
//               {product.name}
//             </h2>
//             <p className="text-gray-300 py-2">{product.price}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Sticker;
import React, { useState } from "react";
import products from "../data/products";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <section className="max-w-7xl mx-auto w-full px-4 py-16 font-[Orbitron]">
      <h1 className="text-center text-2xl md:text-3xl lg:text-5xl text-gray-300 leading-tight mb-8">
        WEAR THE ART
        <br /> FEEL THE TASTE
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative text-xs rounded-lg shadow-lg bg-black/50 flex flex-col items-center text-center overflow-hidden group transition-all duration-300 ease-in-out hover:bg-gradient-to-b from-black to-red-900 ${
              hoveredProduct === product.id ? "bg-gradient-to-b from-black to-red-900" : ""
            }`}
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
            onTouchStart={() => setHoveredProduct(product.id)} // Untuk Mobile Touch
            onClick={() => navigate(`/product/${product.id}`)} // Klik langsung ke detail
          >
            <div className="w-full p-2 aspect-square relative overflow-hidden transition-shadow duration-300 ease-in-out border-b border-red-600">
              {/* Image 1 */}
              <img
                src={Array.isArray(product.src) ? product.src[0] : product.src}
                alt={product.name}
                loading="lazy"
                className={`w-full h-auto object-cover transition-all duration-400 ease-in ${
                  hoveredProduct === product.id ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Image 2 */}
              {Array.isArray(product.src) && product.src.length > 1 && (
                <img
                  src={product.src[1]}
                  alt={product.name}
                  loading="lazy"
                  className={`w-full h-auto object-cover transition-all duration-300 ease-in absolute top-0 left-0 ${
                    hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}

              {/* View Detail Button */}
              <div
                className={`absolute text-xs bottom-2 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out bg-black text-white font-semibold p-2 rounded-lg ${
                  hoveredProduct === product.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                View Detail
              </div>
            </div>

            {/* Product Name and Price */}
            <h2 className="font-bold text-gray-300 tracking-widest mt-2">
              {product.name}
            </h2>
            <p className="text-gray-300 py-2">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
