"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { useEffect } from "react";
import Header from "./components/header";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
          {/* Animated warning icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{ 
                rotate: [0, -10, 10, -10, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: 3,
                repeatDelay: 2,
              }}
            >
              <AlertTriangle className="w-24 h-24 md:w-32 md:h-32 text-white/30" />
            </motion.div>
          </motion.div>

          {/* Error message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-sm md:text-base font-light tracking-[0.3em] uppercase text-red-400/80 mb-4">
              Technical Turbulence
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              <span className="block">Something went</span>
              <span className="block italic font-bebas">wrong</span>
            </h1>
            <p className="text-sm md:text-base font-light text-neutral-400 max-w-md mx-auto">
              We've encountered unexpected turbulence in our systems. 
              Our crew is working to restore smooth operations.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={reset}
              className="group relative inline-block overflow-hidden bg-white text-black transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-3 px-8 py-4 text-sm font-light tracking-wider uppercase transition-colors duration-500 group-hover:text-white">
                Try Again
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-neutral-800 transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            </button>
            
            <Link
              href="/"
              className="group relative inline-flex items-center gap-3 px-8 py-4 border border-white/30 hover:border-white transition-all duration-500"
            >
              <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-2" />
              <span className="text-sm font-light tracking-wider uppercase">
                Return Home
              </span>
            </Link>
          </motion.div>

          {/* Error details (development only) */}
          {process.env.NODE_ENV === "development" && error.message && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-16 p-4 bg-white/5 backdrop-blur-sm rounded-lg max-w-2xl mx-auto"
            >
              <p className="text-xs font-mono text-neutral-400 break-all">
                {error.message}
              </p>
            </motion.div>
          )}
        </div>
      </main>
    </>
  );
}
