"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

const DeveloperCredit = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session
    const shown = sessionStorage.getItem("developerCreditShown");
    if (shown) {
      setHasBeenShown(true);
      return;
    }

    // Show popup after 8 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem("developerCreditShown", "true");
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleClick = () => {
    window.open("https://danishfolio.cc", "_blank", "noopener,noreferrer");
    setIsVisible(false);
  };

  if (hasBeenShown) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="fixed bottom-8 right-8 z-[70] max-w-sm"
          >
            <div className="relative bg-black border border-white/20 backdrop-blur-xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-white transition-colors duration-300"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Content */}
              <div className="p-8 pr-16">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-xs font-light tracking-[0.2em] uppercase text-neutral-400 mb-3"
                >
                  Crafted With Excellence
                </motion.p>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-2xl font-light mb-4"
                >
                  Website by <span className="font-bebas">Danish</span>
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-sm font-light text-neutral-400 mb-6"
                >
                  Experience premium web development that elevates your digital presence
                </motion.p>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  onClick={handleClick}
                  className="group relative inline-flex items-center gap-2 text-sm font-light tracking-wider uppercase hover:text-white transition-colors duration-300"
                >
                  <span className="relative">
                    View Portfolio
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.button>
              </div>

              {/* Decorative element */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 3,
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DeveloperCredit;
