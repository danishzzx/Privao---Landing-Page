"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    image: "/hero-1.jpg",
    title: "Elevate Your Journey",
    subtitle: "Experience Private Aviation Redefined",
  },
  {
    image: "/hero-2.jpg",
    title: "Unmatched Luxury",
    subtitle: "Where Excellence Meets Exclusivity",
  },
  {
    image: "/hero-3.jpg",
    title: "Your Sky Awaits",
    subtitle: "Freedom Without Boundaries",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants: any = {
    enter: {
      opacity: 0,
      scale: 1.1,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const textVariants: any = {
    enter: {
      opacity: 0,
      y: 50,
    },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            priority
            quality={100}
            className="object-cover"
          />
          {/* Overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-5xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-sm md:text-base font-light tracking-[0.3em] uppercase text-neutral-300 mb-6"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                
                <h1 className="heading-1 mb-8 md:mb-12">
                  <span className="block overflow-hidden">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ 
                        duration: 1, 
                        delay: 0.7,
                        ease: [0.22, 1, 0.36, 1] 
                      }}
                      className="block"
                    >
                      {slides[currentSlide].title.split(" ").slice(0, -1).join(" ")}
                    </motion.span>
                  </span>
                  <span className="block overflow-hidden">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ 
                        duration: 1, 
                        delay: 0.85,
                        ease: [0.22, 1, 0.36, 1] 
                      }}
                      className="block italic font-bebas font-light"
                    >
                      {slides[currentSlide].title.split(" ").slice(-1)[0]}
                    </motion.span>
                  </span>
                </h1>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <Link
                href="/book"
                className="group relative inline-block overflow-hidden bg-white text-black transition-all duration-500"
              >
                <span className="relative z-10 flex items-center gap-3 px-8 py-4 text-sm font-light tracking-wider uppercase transition-colors duration-500 group-hover:text-white">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-neutral-800 transform translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
              </Link>
              
              <Link
                href="/fleet"
                className="group relative inline-flex items-center gap-3 px-8 py-4 border border-white/30 hover:border-white transition-all duration-500"
              >
                <span className="text-sm font-light tracking-wider uppercase">
                  Explore Fleet
                </span>
                <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-6 md:left-12 flex items-center gap-3"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative w-12 h-[2px] overflow-hidden bg-white/20 transition-all duration-500"
            aria-label={`Go to slide ${index + 1}`}
          >
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ scaleX: 0 }}
              animate={{ 
                scaleX: currentSlide === index ? 1 : 0,
                transformOrigin: "left"
              }}
              transition={{ 
                duration: currentSlide === index ? 5 : 0.3,
                ease: "linear"
              }}
            />
          </button>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 right-6 md:right-12 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-light tracking-wider uppercase rotate-90 origin-center mb-4">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
