"use client";

import { assets } from "@/assets/assets";
import { useLanguage } from "./LanguageContext";
import heroTranslations from "../translations/hero";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Background images
const movingBackgroundImages = [assets.b1, assets.b2, assets.b3];

// Animation variants
const backgroundImageVariants = {
  initial: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 1.1,
  }),
  animate: {
    x: "0%",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  }),
};

export default function HeroSection() {
  const { language } = useLanguage();
  const t = heroTranslations[language] || heroTranslations.en;
  const isRTL = language === "ar";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % movingBackgroundImages.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen w-full overflow-hidden bg-white text-white flex flex-col justify-center"
    >
      {/* Black background only in the image area */}
      <div className="absolute inset-0 flex justify-center items-center px-6 md:px-12 lg:px-24 z-0">
        <div className="w-full max-w-6xl h-[75vh] rounded-2xl bg-black"></div>
      </div>

      {/* Moving Background Images on top of that black area */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={backgroundImageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 z-0 flex justify-center items-center px-6 md:px-12 lg:px-24"
        >
          <div className="relative w-full max-w-6xl h-[75vh] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={movingBackgroundImages[currentIndex]}
              alt={`Background ${currentIndex + 1}`}
              fill
              unoptimized
              className="object-cover"
            />
            {/* Overlay only on image */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg text-white"
        >
          {t.title}
        </motion.h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl drop-shadow-md text-white">
          {t.subtitle}
        </p>

        {/* Search Bar */}
        <div className="mt-8 w-full max-w-4xl bg-white/95 backdrop-blur-md rounded-xl shadow-xl p-4 flex flex-col md:flex-row gap-4 items-center text-black">
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-green-600 transition"
          />
          <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-green-600 transition">
            <option>{t.propertyType}</option>
          </select>
          <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-green-600 transition">
            <option>{t.location}</option>
          </select>
          <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 focus:ring-2 focus:ring-green-400 transition">
            {t.search}
          </button>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {movingBackgroundImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-orange-400 scale-125" : "bg-gray-400"
            }`}
            animate={{
              scale: index === currentIndex ? 1.3 : 1,
              opacity: index === currentIndex ? 1 : 0.6,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </section>
  );
}
