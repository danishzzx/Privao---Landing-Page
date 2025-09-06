"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    content: "Privao has redefined what luxury travel means to me. Every flight feels like a perfectly orchestrated experience, from the moment I book to the moment I land.",
    author: "Sarah Mitchell",
    position: "CEO, Mitchell Industries",
    location: "New York"
  },
  {
    content: "The attention to detail is extraordinary. They remember my preferences, anticipate my needs, and consistently deliver service that exceeds expectations.",
    author: "Marcus Chen",
    position: "Investment Director",
    location: "Singapore"
  },
  {
    content: "In 10 years of private aviation, I've never experienced such seamless service. Privao doesn't just provide flights; they craft journeys.",
    author: "Elena Vasquez",
    position: "Art Collector",
    location: "Madrid"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-24 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-sm md:text-base font-light tracking-[0.3em] uppercase text-neutral-400 mb-4">
            Client Stories
          </p>
          <h2 className="heading-2">
            <span className="block">Voices of</span>
            <span className="block italic font-bebas font-light">Experience</span>
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-12"
            >
              <Quote className="w-16 h-16 md:w-20 md:h-20 text-white/10" />
            </motion.div>

            {/* Testimonial Content */}
            <div className="relative h-[300px] md:h-[250px]">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: activeIndex === index ? 1 : 0,
                    y: activeIndex === index ? 0 : 20
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 ${activeIndex === index ? 'pointer-events-auto' : 'pointer-events-none'}`}
                >
                  <blockquote className="text-center">
                    <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-8">
                      "{testimonial.content}"
                    </p>
                    <footer>
                      <p className="text-lg md:text-xl font-light mb-1">
                        {testimonial.author}
                      </p>
                      <p className="text-sm font-light text-neutral-400">
                        {testimonial.position}, {testimonial.location}
                      </p>
                    </footer>
                  </blockquote>
                </motion.div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'w-8 bg-white' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
