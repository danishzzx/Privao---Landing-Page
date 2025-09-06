"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

const CTA = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/sales.jpg"
          alt="Private jet interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
      </div>

      <div className="relative container mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm md:text-base font-light tracking-[0.3em] uppercase text-neutral-300 mb-4">
              Ready to Fly?
            </p>
            <h2 className="heading-1 mb-8">
              <span className="block">Your Next</span>
              <span className="block italic font-bebas font-light">Adventure Awaits</span>
            </h2>
            <p className="text-lg md:text-xl font-light text-neutral-200 mb-12 max-w-2xl">
              Join an exclusive circle of travelers who demand nothing but excellence. 
              Let us craft your perfect journey today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link
                href="/book"
                className="group relative inline-block overflow-hidden bg-white text-black transition-all duration-500"
              >
                <span className="relative z-10 flex items-center gap-3 px-10 py-5 text-sm font-light tracking-wider uppercase transition-colors duration-500 group-hover:text-white">
                  Book Your Flight
                  <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-neutral-800 transform translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
              </Link>
              
              <a
                href="tel:+1234567890"
                className="group relative inline-flex items-center gap-3 px-10 py-5 border border-white/30 hover:border-white transition-all duration-500"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm font-light tracking-wider uppercase">
                  Call Us Now
                </span>
              </a>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-16 flex flex-wrap gap-8 text-xs font-light tracking-wider uppercase text-neutral-400"
            >
              <span>24/7 Concierge</span>
              <span className="text-neutral-600">•</span>
              <span>Global Coverage</span>
              <span className="text-neutral-600">•</span>
              <span>Instant Booking</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
