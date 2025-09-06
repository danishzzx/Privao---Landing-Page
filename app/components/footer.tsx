"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUpRight 
} from "lucide-react";

const footerLinks = {
  services: [
    { name: "Private Jet Charter", href: "/services/charter" },
    { name: "Aircraft Management", href: "/services/management" },
    { name: "Jet Card Program", href: "/services/jet-card" },
    { name: "Empty Legs", href: "/services/empty-legs" },
  ],
  company: [
    { name: "About Privao", href: "/about" },
    { name: "Our Fleet", href: "/fleet" },
    { name: "Safety", href: "/safety" },
    { name: "Careers", href: "/careers" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
];

const Footer = () => {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="Privao"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <span className="text-2xl font-bebas tracking-wider">PRIVAO</span>
              </div>
            </Link>
            <p className="text-sm font-light text-neutral-400 mb-6 max-w-sm">
              Elevating private aviation to new heights. Experience unparalleled luxury, 
              safety, and service on every journey.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-light tracking-[0.2em] uppercase mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-neutral-400 hover:text-white transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-light tracking-[0.2em] uppercase mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-neutral-400 hover:text-white transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-light tracking-[0.2em] uppercase mb-6">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-neutral-400 hover:text-white transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-white/10"
        >
          <a
            href="mailto:fly@privao.com"
            className="flex items-center gap-3 text-sm font-light text-neutral-400 hover:text-white transition-colors duration-300"
          >
            <Mail className="w-4 h-4" />
            fly@privao.com
          </a>
          <a
            href="tel:+18001234567"
            className="flex items-center gap-3 text-sm font-light text-neutral-400 hover:text-white transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            +1 (800) 123-4567
          </a>
          <div className="flex items-center gap-3 text-sm font-light text-neutral-400">
            <MapPin className="w-4 h-4" />
            New York • London • Dubai • Singapore
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4"
        >
          <p className="text-xs font-light text-neutral-500">
            © {new Date().getFullYear()} Privao. All rights reserved.
          </p>
          <p className="text-xs font-light text-neutral-500">
            Luxury Private Aviation Since 2009
          </p>
        </motion.div>
      </div>

      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </footer>
  );
};

export default Footer;
