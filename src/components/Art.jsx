"use client";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import art from "../data/art";

const Art = () => {
  const scrollRef = useRef(null);
  let scrollInterval; 

  const startScroll = () => {
    scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 20);
  };

  useEffect(() => {
    startScroll();

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, []);

  return (
    <section className="text-gray-300 font-[orbitron] bg-gradient-to-b from-black to-red-900 overflow-hidden py-16">
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left side - Heading */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-300 leading-tight">
              JOIN US
              <br />
              ON INSTAGRAM
            </h2>
          </motion.div>

          {/* Right side - Text and Button */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center"
          >
            <p className="text- mb-6 leading-relaxed">
            Discover the Art, Live the Culture. At Isoneday, every piece tells a story of rebellion, passion, and creativity. Join our journey and express your identity through art and style.
            </p>
            <Link
              to="https://www.instagram.com/isoneday.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black hover:bg-red-900 text-white w-fit flex items-center gap-2"
            >
              <FaInstagram className="w-4 h-4" />
              FOLLOW NOW
            </Link>
          </motion.div>
        </div>

        {/* Image Gallery */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden overflow-y-hidden cursor-grab select-none scrollbar-none"
          onMouseEnter={(e) => {
            const container = e.currentTarget;
            container.style.cursor = "grab";
            clearInterval(scrollInterval);
          }}
          onMouseLeave={(e) => {
            const container = e.currentTarget;
            container.style.cursor = "auto";
            startScroll();
          }}
        >
          {art.map((art, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-34 h-34 md:w-72 md:h-72 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <img
                src={Array.isArray(art.image) ? art.image[0] : art.image}
                alt={art.name}
                className="w-full h-full object-contain rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Art;
