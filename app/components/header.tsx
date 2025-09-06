"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Fleet", href: "/fleet" },
  { name: "Destinations", href: "/destinations" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const menuVariants: any = {
    closed: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    open: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const linkVariants: any = {
    closed: {
      opacity: 0,
      y: 20,
    },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? "bg-black/60 backdrop-blur-md" 
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 md:px-12 py-6 md:py-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <motion.div
                whileHover={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center space-x-2"
              >
                <Image
                  src="/logo.png"
                  alt="Privao"
                  width={40}
                  height={40}
                  className="w-10 h-10 md:w-12 md:h-12"
                  priority
                />
                <span className="text-2xl md:text-3xl font-bebas tracking-wider">
                  PRIVAO
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.1 + i * 0.05, 
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                >
                  <Link
                    href={link.href}
                    className="relative text-sm font-light tracking-wide uppercase hover:text-neutral-300 transition-colors duration-300 group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Link
                  href="/book"
                  className="group relative inline-block px-8 py-3 overflow-hidden border border-white/30 hover:border-white transition-all duration-500"
                >
                  <span className="relative z-10 text-sm font-light tracking-wider uppercase flex items-center gap-2 transition-colors duration-500 group-hover:text-black">
                    Book Flight
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  <div className="absolute inset-0 bg-white transform translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {!isMenuOpen ? (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-black lg:hidden"
          >
            <div className="flex flex-col justify-center items-center h-full px-6">
              <nav className="flex flex-col items-center space-y-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-4xl md:text-5xl font-bebas tracking-wider uppercase hover:text-neutral-300 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  custom={navLinks.length}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="mt-8"
                >
                  <Link
                    href="/book"
                    onClick={() => setIsMenuOpen(false)}
                    className="group relative inline-block px-12 py-4 overflow-hidden border border-white"
                  >
                    <span className="relative z-10 text-lg font-light tracking-wider uppercase flex items-center gap-3 transition-colors duration-500 group-hover:text-black">
                      Book Flight
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                    <div className="absolute inset-0 bg-white transform translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
