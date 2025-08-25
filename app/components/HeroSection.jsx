"use client";

import { assets } from "@/assets/assets";
import { useLanguage } from "./LanguageContext";
import heroTranslations from "../translations/hero";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Background images
const movingBackgroundImages = [assets.b1, assets.b2, assets.b3];

// Background animation
const backgroundImageVariants = {
  initial(direction) {
    return {
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    };
  },
  animate: {
    x: "0%",
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
  exit(direction) {
    return {
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95,
      transition: { duration: 1.2, ease: "easeInOut" },
    };
  },
};

// Content animation
const contentVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function HeroSection() {
  const { language } = useLanguage();
  const t = heroTranslations[language] || heroTranslations.en;
  const isRTL = language === "ar";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [parallaxY, setParallaxY] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  // Background auto-slide
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % movingBackgroundImages.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setParallaxY(window.scrollY * 0.2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center text-white"
      aria-label="Hero Section"
    >
      {/* Dark container */}
      <div className="absolute inset-0 flex justify-center items-center px-4 sm:px-8 lg:px-16 z-0">
        <div className="w-full max-w-6xl h-[70vh] sm:h-[75vh] rounded-2xl bg-black"></div>
      </div>

      {/* Animated Background with Parallax */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={backgroundImageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ y: parallaxY * 0.3 }}
          className="absolute inset-0 z-0 flex justify-center items-center px-4 sm:px-8 lg:px-16"
        >
          <div className="relative w-full max-w-6xl h-[70vh] sm:h-[75vh] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={movingBackgroundImages[currentIndex]}
              alt={`Background ${currentIndex + 1}`}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-20 flex flex-col items-center text-center px-4 sm:px-6"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg leading-tight">
          {t.title}
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl drop-shadow-md">
          {t.subtitle}
        </p>

        {/* ✅ Clean Responsive Search Bar */}
        <div className="mt-8 w-full max-w-3xl bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200 p-4 sm:p-6">
          {/* Search Field */}
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            aria-label="Search"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition text-black"
          />

          {/* Desktop Filters (always visible) */}
          <div className="hidden sm:flex gap-3 mt-4">
            <select
              aria-label="Property Type"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition text-black"
            >
              <option>{t.propertyType}</option>
            </select>
            <select
              aria-label="Location"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition text-black"
            >
              <option>{t.location}</option>
            </select>
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 focus:ring-2 focus:ring-green-400 transition font-medium">
              {t.search}
            </button>
          </div>

          {/* Mobile Filters (collapsible) */}
          <div className="sm:hidden mt-3">
            <button
              onClick={() => setShowFilters((prev) => !prev)}
              className="w-full text-sm text-green-700 font-medium underline"
            >
              {showFilters ? "Hide Filters" : "More Filters"}
            </button>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-3 mt-3"
                >
                  <select
                    aria-label="Property Type"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition text-black"
                  >
                    <option>{t.propertyType}</option>
                  </select>
                  <select
                    aria-label="Location"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition text-black"
                  >
                    <option>{t.location}</option>
                  </select>
                  <button className="w-full bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 focus:ring-2 focus:ring-green-400 transition font-medium">
                    {t.search}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {movingBackgroundImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3.5 h-3.5 rounded-full transition ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-300"
            }`}
            animate={{
              scale: index === currentIndex ? 1.4 : 1,
              opacity: index === currentIndex ? 1 : 0.6,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </section>
  );
}
