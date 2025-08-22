// components/Hero.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gray-50 min-h-[70vh] flex items-center mb-6 px-4 md:px-6 py-5">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Discover the Latest Electronics
          </h1>
          <p className="text-gray-600 mb-6">
            Explore our wide range of gadgets, accessories, and electronics. 
            High quality products at unbeatable prices.
          </p>
          <Link
            href="/products"
            className="btn_primary px-6 py-3 rounded-lg  transition duration-100"
          >
            Shop Now
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/hero2.jpg"
            alt="Electronics Products"
            width={600}  // adjust size according to your layout
            height={600} // adjust size according to your layout
            className="rounded-lg shadow-lg"
            priority // ensures LCP optimization
          />
        </motion.div>

      </div>
    </section>
  );
}
