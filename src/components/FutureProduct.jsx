import { motion } from "framer-motion";
import art3 from "../assets/art/art3.png";
import products from "../data/future";
import { Link } from "react-router-dom";

const FutureProduct = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-b from-red-900 to-black font-[orbitron] py-16 ">
      <div className="max-w-7xl mx-auto w-full px-4 flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div
          className=" lg:w-1/2 lg:sticky lg:top-0 lg:h-screen lg:absolute lg:left-0 md:w-full sm:w-full xs:w-full"
          style={{ display: "block" }}
        >
          <div
            className="relative w-full bg-cover bg-center p-8 lg:p-16 flex flex-col justify-center rounded-md md:h-screen sm:h-[50vh] xs:h-[40vh]"
            style={{
              backgroundImage: `url(${art3})`,
            }}
          >
            <div className="absolute inset-0 bg-black/50 rounded-md" />{" "}
            <motion.div
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              className="text-white max-w-xl relative z-10"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                ART IS CHAOS, WE WEAR IT
              </h1>
              <p className="text-lg mb-8 text-gray-200">
                No limits. No rules. Just raw expression through fabric and
                rebellion in every stitch.
              </p>
              <Link to="/shop">
                <div
                  variant="outline"
                  className="bg-black p-2 w-fit border border-white text-white rounded-md hover:bg-white hover:text-black transition-all"
                >
                  VIEW ALL
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 p-2 md:w-full sm:w-full xs:w-full font-[orbitron] text-gray-300 overflow-hidden lg:overflow-y-auto scrollbar-hide">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: +150 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl mb-10">
              UP-COMING
              <br />
              PRODUCTS
            </motion.h2>

            <div className="grid grid-cols-2 gap-2 md:gap-4">
              {products.map((product) => (
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  className="group cursor-pointer"
                >
                  <div className="rounded-md transition-all duration-300 bg-black/50 text-gray-300 text-xs hover:bg-gradient-to-b from-black to-red-900">
                    <div className="relative aspect-square p-2 overflow-hidden border-b border-red-600">
                      <img
                        src={
                          Array.isArray(product.src)
                            ? product.src[0]
                            : product.src
                        }
                        alt={product.name}
                        loading="lazy"
                        className="object-cover w-full h-full transition-all duration-400 ease-in group-hover:opacity-0 "
                      />
                      {Array.isArray(product.src) && product.src.length > 1 && (
                        <img
                          src={product.src[1]}
                          alt={product.name}
                          loading="lazy"
                          className="w-full h-full max-h-70 p-2 object-cover transition-all duration-400 ease-in opacity-0 group-hover:opacity-100 absolute top-0 left-0"
                        />
                      )}
                      <Link
                        to={`/product/${product.id}`}
                        className="absolute text-center text-xs bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out bg-black text-white font-semibold p-2 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-red-600"
                      >
                        View Detail
                      </Link>
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold mt-2">{product.name}</h3>
                      <p className="py-2">{product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FutureProduct;
