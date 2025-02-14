import { motion } from "framer-motion";
import { Shirt, Star, Package } from "lucide-react";
import art8 from "../assets/art/art8.png";

const Featured = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-black to-red-900 px-4 py-16  font-[orbitron]">
      <div className="max-w-7xl mx-auto w-full px-4">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h1 className="text-2xl md:text-3xl lg:text-5xl text-gray-300 leading-tight">
            PREMIUM
            <br />
            CLOTHING
            <br />
            COLLECTION
          </h1>
        </motion.div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-24 text-center md:text-left">
          {/* Left Section */}
          <motion.div
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            className="relative w-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] rounded-md overflow-hidden"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${art8})`,
              }}
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 flex items-center justify-center h-full">
              <h2 className="text-xl md:text-2xl text-gray-200">
                ABOUT OUR PRODUCTS
              </h2>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: +100 }}
            transition={{ duration: 1 }}
            className="text-gray-300 flex items-center justify-center h-full"
          >
            <p className="text-md md:text-lg leading-relaxed">
              Isoneday is more than just a clothing brand. It is a platform for
              artistic expression, bridging creativity with classic fashion.
              Born from the bedrock merch movement, Isoneday brings artistic
              trends into the world of streetwear with its signature arts—unique
              and authentic. "Not just clothing, but wearable art." We believe
              that every design represents a piece of artistic reality woven
              into fabric. With each product, we deliver quality, creativity,
              and the spirit of art, making it accessible to everyone,
              everywhere.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              icon: <Shirt className="w-12 h-12" />,
              title: "PREMIUM FABRICS",
              description:
                "Crafted from high-quality materials that ensure maximum comfort and durability for everyday wear.",
            },
            {
              icon: <Star className="w-12 h-12" />,
              title: "HANDCRAFTED QUALITY",
              description:
                "Every product is designed with meticulous attention to detail by a dedicated team of artists and fashion creators.",
            },
            {
              icon: <Package className="w-12 h-12" />,
              title: "SUSTAINABLE PACKAGING",
              description:
                "We support eco-friendly initiatives with packaging that reflects our commitment to environmental responsibility.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 1.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="rounded-full border-2 border-gray-200 p-10 text-center duration-300 group text-gray-200"
            >
              <div className="flex justify-center mb-6">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl mb-4">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
