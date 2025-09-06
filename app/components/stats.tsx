"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: 15,
    suffix: "+",
    label: "Years of Excellence",
    description: "Delivering premium aviation services"
  },
  {
    value: 500,
    suffix: "+",
    label: "Satisfied Clients",
    description: "Trust us with their journeys"
  },
  {
    value: 50,
    suffix: "",
    label: "Aircraft Fleet",
    description: "Modern and meticulously maintained"
  },
  {
    value: 200,
    suffix: "+",
    label: "Global Destinations",
    description: "Your gateway to the world"
  }
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, { 
        duration: 2.5,
        ease: [0.22, 1, 0.36, 1]
      });

      const unsubscribe = rounded.on("change", (latest) => {
        setDisplayValue(latest);
      });

      return () => {
        animation.stop();
        unsubscribe();
      };
    }
  }, [count, value, rounded, isInView]);

  return (
    <span ref={ref} className="font-bebas">
      {displayValue}{suffix}
    </span>
  );
}

const Stats = () => {
  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(255,255,255,.1) 35px,
            rgba(255,255,255,.1) 70px
          )`
        }} />
      </div>

      <div className="relative container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-sm md:text-base font-light tracking-[0.3em] uppercase text-neutral-400 mb-4">
            By The Numbers
          </p>
          <h2 className="heading-2">
            <span className="block">A Legacy of</span>
            <span className="block italic font-bebas font-light">Excellence</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl mb-4">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg md:text-xl font-light mb-2">
                {stat.label}
              </h3>
              <p className="text-xs md:text-sm font-light text-neutral-400">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-24"
        />
      </div>
    </section>
  );
};

export default Stats;
