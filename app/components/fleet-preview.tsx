"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Gauge, Globe } from "lucide-react";

const fleet = [
  {
    name: "Gulfstream G650",
    category: "Ultra Long Range",
    image: "/g650.png",
    capacity: "14 passengers",
    range: "7,500 nm",
    speed: "Mach 0.925",
    features: ["Flagship comfort", "Intercontinental range", "Advanced avionics"]
  },
  {
    name: "Bombardier Global 7500",
    category: "Ultra Long Range",
    image: "/7500.jpg",
    capacity: "19 passengers",
    range: "7,700 nm",
    speed: "Mach 0.925",
    features: ["Largest cabin", "Four living spaces", "Full kitchen"]
  },
  {
    name: "Citation Longitude",
    category: "Super Midsize",
    image: "/long.jpg",
    capacity: "12 passengers",
    range: "3,500 nm",
    speed: "Mach 0.84",
    features: ["Quiet cabin", "Full flat-floor", "Advanced technology"]
  }
];

const FleetPreview = () => {
  return (
    <section className="relative py-24 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <p className="text-sm md:text-base font-light tracking-[0.3em] uppercase text-neutral-400 mb-4">
            Our Fleet
          </p>
          <h2 className="heading-2 mb-6">
            <span className="block">Aircraft Tailored to</span>
            <span className="block italic font-bebas font-light">Your Journey</span>
          </h2>
          <p className="text-sm md:text-base font-light text-neutral-400">
            From short hops to intercontinental journeys, our meticulously maintained fleet 
            ensures you travel in ultimate comfort and style.
          </p>
        </motion.div>

        {/* Fleet Cards */}
        <div className="space-y-8 md:space-y-12">
          {fleet.map((aircraft, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden bg-black border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-[300px] lg:h-[400px] overflow-hidden">
                  <Image
                    src={aircraft.image}
                    alt={aircraft.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <p className="text-xs md:text-sm font-light tracking-[0.2em] uppercase text-neutral-400 mb-3">
                      {aircraft.category}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-light mb-6">
                      {aircraft.name}
                    </h3>

                    {/* Specs */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      <div>
                        <Users className="w-5 h-5 text-neutral-400 mb-2" />
                        <p className="text-sm font-light text-neutral-300">{aircraft.capacity}</p>
                      </div>
                      <div>
                        <Globe className="w-5 h-5 text-neutral-400 mb-2" />
                        <p className="text-sm font-light text-neutral-300">{aircraft.range}</p>
                      </div>
                      <div>
                        <Gauge className="w-5 h-5 text-neutral-400 mb-2" />
                        <p className="text-sm font-light text-neutral-300">{aircraft.speed}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-8">
                      {aircraft.features.map((feature, i) => (
                        <p key={i} className="text-sm font-light text-neutral-400">
                          • {feature}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/fleet/${aircraft.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-2 text-sm font-light tracking-wider uppercase group/link"
                  >
                    <span className="relative">
                      View Details
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover/link:w-full" />
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="/fleet"
            className="group relative inline-block overflow-hidden border border-white/30 hover:border-white transition-all duration-500"
          >
            <span className="relative z-10 flex items-center gap-3 px-10 py-4 text-sm font-light tracking-wider uppercase transition-colors duration-500 group-hover:text-black">
              Explore Full Fleet
              <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
            </span>
            <div className="absolute inset-0 bg-white transform translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FleetPreview;
