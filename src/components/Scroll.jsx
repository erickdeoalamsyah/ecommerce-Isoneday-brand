import { motion } from "framer-motion";

const texts = ["ART", "★", "ABSTRACT", "★", "STREETWEAR", "★"];

const Scroll = () => {
  return (
    <section className="relative py-6 bg-black overflow-hidden font-[orbitron]">
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex space-x-16"
          animate={{ x: [0, -texts.length * 120] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          style={{ display: 'flex', minWidth: 'max-content' }}
        >
          {[...texts, ...texts, ...texts].map((text, index) => (
            <div key={index} className="text-gray-200 text-xl hover:text-white transition-transform transform hover:scale-110">
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Scroll;