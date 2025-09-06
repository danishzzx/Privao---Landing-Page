"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Plane } from "lucide-react";
import Header from "./components/header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
          {/* Animated plane icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                rotate: [-5, 5, -5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Plane className="w-24 h-24 md:w-32 md:h-32 text-white/20" />
            </motion.div>
          </motion.div>

          {/* 404 Text */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="text-[150px] md:text-[200px] lg:text-[250px] font-bebas leading-none"
            >
              404
            </motion.h1>
          </div>

          {/* Error message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-sm md:text-base font-light tracking-[0.3em] uppercase text-neutral-400 mb-4">
              Flight Path Not Found
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-6">
              <span className="block">Looks like this destination</span>
              <span className="block italic">doesn't exist</span>
            </h2>
            <p className="text-sm md:text-base font-light text-neutral-400 max-w-md mx-auto">
              The page you're looking for has taken off to unknown coordinates. 
              Let's navigate you back to familiar skies.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/"
              className="group relative inline-block overflow-hidden bg-white text-black transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-3 px-8 py-4 text-sm font-light tracking-wider uppercase transition-colors duration-500 group-hover:text-white">
                <ArrowLeft className="w-5 h-5 transition-transform duration-500 group-hover:-translate-x-2" />
                Return Home
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-neutral-800 transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            </Link>
            
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 border border-white/30 hover:border-white transition-all duration-500"
            >
              <span className="text-sm font-light tracking-wider uppercase">
                Contact Support
              </span>
            </Link>
          </motion.div>

          {/* Navigation hints */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-24 flex justify-center gap-8 text-xs font-light tracking-wider uppercase text-neutral-500"
          >
            <Link href="/fleet" className="hover:text-white transition-colors duration-300">
              View Fleet
            </Link>
            <span className="text-neutral-700">•</span>
            <Link href="/destinations" className="hover:text-white transition-colors duration-300">
              Destinations
            </Link>
            <span className="text-neutral-700">•</span>
            <Link href="/services" className="hover:text-white transition-colors duration-300">
              Services
            </Link>
          </motion.div>
        </div>

        {/* Error code background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <span className="text-[40vw] font-bebas leading-none select-none">404</span>
        </motion.div>
      </main>
    </>
  );
}
