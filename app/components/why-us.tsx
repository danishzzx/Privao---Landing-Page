"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Shield, Star, Clock } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Tailored Excellence",
    subtitle: "Your Choice, Perfected",
    description: "Every journey is meticulously crafted to your preferences. From aircraft selection to in-flight amenities, we ensure every detail reflects your unique requirements.",
    image: "/choose.jpg",
    icon: Star,
    stat: "500+",
    statLabel: "Satisfied Clients"
  },
  {
    title: "Unmatched Luxury",
    subtitle: "Inside Perfection",
    description: "Experience the pinnacle of comfort with our premium fleet. Handcrafted interiors, gourmet dining, and personalized service create an atmosphere of refined elegance.",
    image: "/inside.jpg",
    icon: Shield,
    stat: "50+",
    statLabel: "Premium Aircraft"
  },
  {
    title: "Seamless Service",
    subtitle: "Excellence in Every Detail",
    description: "Our dedicated team ensures flawless execution from booking to landing. 24/7 concierge service, flexible scheduling, and attention to every preference.",
    image: "/sales.jpg",
    icon: Clock,
    stat: "24/7",
    statLabel: "Global Support"
  }
];

const WhyUs = () => {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants: any = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="relative py-24 md:py-32 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-sm md:text-base font-light tracking-[0.3em] uppercase text-neutral-400 mb-4">
            Why Choose Privao
          </p>
          <h2 className="heading-2">
            <span className="block">Elevating Private</span>
            <span className="block italic font-bebas font-light">Aviation Standards</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative overflow-hidden bg-white h-[500px] md:h-[600px]"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
                  {/* Top Section */}
                  <div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6"
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </motion.div>

                    <p className="text-xs md:text-sm font-light tracking-[0.2em] uppercase text-neutral-300 mb-3">
                      {feature.subtitle}
                    </p>

                    <h3 className="text-3xl md:text-4xl font-light mb-6 text-white">
                      {feature.title}
                    </h3>

                    <p className="text-sm md:text-base font-light leading-relaxed text-neutral-200">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Section */}
                  <div>
                    {/* Stats */}
                    <div className="flex items-baseline gap-2 mb-8">
                      <span className="text-4xl md:text-5xl font-bebas text-white">
                        {feature.stat}
                      </span>
                      <span className="text-xs md:text-sm font-light tracking-wider uppercase text-neutral-300">
                        {feature.statLabel}
                      </span>
                    </div>

                    {/* Learn More Link */}
                    <Link
                      href={`/${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center gap-2 text-sm font-light tracking-wider uppercase text-white group/link"
                    >
                      <span className="relative">
                        Learn More
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover/link:w-full" />
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 md:mt-24"
        >
          <p className="text-sm md:text-base font-light text-neutral-400 mb-8 max-w-2xl mx-auto">
            Experience the difference that comes with choosing excellence. Let us elevate your journey to extraordinary heights.
          </p>
          
          <Link
            href="/contact"
            className="group relative inline-block overflow-hidden bg-white text-black transition-all duration-500"
          >
            <span className="relative z-10 flex items-center gap-3 px-10 py-4 text-sm font-light tracking-wider uppercase transition-colors duration-500 group-hover:text-white">
              Start Your Experience
              <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-neutral-800 transform translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
