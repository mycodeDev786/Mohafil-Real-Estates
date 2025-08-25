"use client";
import { useState } from "react";
import { useLanguage } from "../components/LanguageContext";
import headerTranslations from "../translations/header";
import {
  FaHome,
  FaBuilding,
  FaHotel,
  FaWarehouse,
  FaBars,
  FaTimes,
  FaMapMarkerAlt, // Location icon
  FaSearch, // Search icon
  FaGlobe, // Language icon
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Header() {
  const { language, changeLanguage } = useLanguage();
  const t = headerTranslations[language];
  const [menuOpen, setMenuOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(t.location);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLocation = () => setLocationOpen(!locationOpen);

  const locations =
    language === "ar"
      ? ["ألمانيا", "السعودية", "الإمارات", "قطر"]
      : ["Germany", "Saudi Arabia", "UAE", "Qatar"];

  const selectLocation = (loc) => {
    setSelectedLocation(loc);
    setLocationOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full  bg-white">
      {/* Main Header Bar */}
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo and Site Name */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-20 items-center justify-center rounded bg-green-900 font-bold text-white">
            Mohafil
          </div>
          <span className="hidden text-xl font-bold text-gray-800 sm:inline">
            RealEstate
          </span>
        </div>

        {/* Search Bar (visible on desktop) */}
        <div className="relative hidden w-full max-w-lg md:flex">
          <input
            type="text"
            placeholder={t.search}
            className="w-full rounded-full border px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>

        {/* Action Buttons and Icons */}
        <div className="flex items-center gap-2 text-sm md:gap-4">
          {/* Mobile Search Icon */}
          <button className="text-xl text-gray-600 md:hidden">
            <FaSearch />
          </button>

          {/* Language Toggle with Icon */}
          <button
            className="flex items-center gap-1 text-gray-600 hover:underline"
            onClick={() => changeLanguage(language === "ar" ? "en" : "ar")}
          >
            <FaGlobe className="text-base" />
            <span className="hidden md:inline">{language.toUpperCase()}</span>
          </button>

          {/* Location Dropdown */}
          <div className="relative hidden md:block">
            <button
              className="flex items-center gap-1 rounded-full border px-3 py-1.5 text-gray-600 hover:bg-gray-100"
              onClick={toggleLocation}
            >
              <FaMapMarkerAlt className="text-sm text-green-700" />
              <span>{selectedLocation}</span>
              <IoMdArrowDropdown
                className={`transition-transform ${
                  locationOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {/* Dropdown Menu */}
            {locationOpen && (
              <div className="absolute right-0 top-full z-10 mt-2 w-40 rounded-md border bg-white shadow-lg">
                {locations.map((loc) => (
                  <div
                    key={loc}
                    onClick={() => selectLocation(loc)}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  >
                    {loc}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sign In Button */}
          <button className="hidden text-gray-600 hover:underline md:block">
            {t.signIn}
          </button>

          {/* List Property Button */}
          <button className="hidden rounded-full bg-amber-700 px-4 py-2 text-white shadow-sm hover:bg-amber-800 md:block">
            {t.listProperty}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="text-2xl text-gray-600 md:hidden"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Categories Bar (desktop only) */}
      {/* <div className="hidden items-center justify-center gap-8 border-t border-gray-200 px-6 py-2 text-sm md:flex">
        <Category icon={<FaHome />} label={t.houses} count="2,450" dot="blue" />
        <Category
          icon={<FaBuilding />}
          label={t.apartments}
          count="3,200"
          dot="green"
        />
        <Category
          icon={<FaHotel />}
          label={t.condos}
          count="1,800"
          dot="purple"
        />
        <Category
          icon={<FaWarehouse />}
          label={t.commercial}
          count="650"
          dot="orange"
        />
        <div className="flex cursor-pointer items-center gap-1">
          <span>{t.categories}</span>
          <IoMdArrowDropdown />
        </div>
      </div> */}

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 w-full animate-fade-in-down border-t border-gray-200 bg-white px-4 py-4 text-sm md:hidden">
          {/* Mobile Search Input */}
          <div className="relative mb-4 w-full">
            <input
              type="text"
              placeholder={t.search}
              className="w-full rounded-full border px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <div className="mb-4 flex flex-col items-start gap-4 border-b pb-4">
            <div className="relative cursor-pointer" onClick={toggleLocation}>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-green-700" />
                <span>{selectedLocation}</span>
                <IoMdArrowDropdown
                  className={`transition-transform ${
                    locationOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              {locationOpen && (
                <div className="absolute top-full z-10 mt-2 w-40 rounded-md border bg-white shadow-lg">
                  {locations.map((loc) => (
                    <div
                      key={loc}
                      onClick={() => selectLocation(loc)}
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    >
                      {loc}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              className="flex items-center gap-2 text-gray-700 hover:underline"
              onClick={() => changeLanguage(language === "ar" ? "en" : "ar")}
            >
              <FaGlobe className="text-base" />
              Language: {language.toUpperCase()}
            </button>
            <div className="cursor-pointer text-gray-700 hover:underline">
              {t.signIn}
            </div>
            <button className="w-full rounded-full bg-amber-700 px-4 py-2 text-white shadow-sm hover:bg-amber-800">
              {t.listProperty}
            </button>
          </div>
          {/* <div className="flex flex-wrap gap-4 pt-3">
            <Category
              icon={<FaHome />}
              label={t.houses}
              count="2,450"
              dot="blue"
            />
            <Category
              icon={<FaBuilding />}
              label={t.apartments}
              count="3,200"
              dot="green"
            />
            <Category
              icon={<FaHotel />}
              label={t.condos}
              count="1,800"
              dot="purple"
            />
            <Category
              icon={<FaWarehouse />}
              label={t.commercial}
              count="650"
              dot="orange"
            />
          </div> */}
        </div>
      )}
    </header>
  );
}

function Category({ icon, label, count, dot }) {
  const dotColor = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
  }[dot];

  return (
    <div className="flex items-center gap-2 cursor-pointer transition-colors hover:text-green-700">
      <span className={`h-2 w-2 rounded-full ${dotColor}`} />
      {icon}
      <span>{label}</span>
      <span className="text-gray-500">{count}</span>
    </div>
  );
}
