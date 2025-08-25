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
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Header() {
  const { language, changeLanguage } = useLanguage();
  const t = headerTranslations[language];
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [locationOpen, setLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(t.location);

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
    <header className="w-full border-b bg-white">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-green-900 text-white font-bold w-20 h-10 flex items-center justify-center rounded">
            Mohafil
          </div>
          <span className="font-semibold text-lg hidden sm:inline">
            RealEstate
          </span>
        </div>

        {/* Search Bar (hidden on mobile) */}
        <div className="hidden md:flex flex-1 max-w-xl mx-6">
          <input
            type="text"
            placeholder={t.search}
            className="w-full border rounded px-4 py-2 text-sm focus:outline-none"
          />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 text-sm">
          {/* Location dropdown */}
          <div
            className="hidden md:flex items-center gap-1 cursor-pointer relative"
            onClick={toggleLocation}
          >
            <span>{selectedLocation}</span>
            <IoMdArrowDropdown
              className={`transition-transform ${
                locationOpen ? "rotate-180" : ""
              }`}
            />

            {/* Dropdown menu */}
            {locationOpen && (
              <div className="absolute top-full mt-2 left-0 w-40 bg-white border shadow-lg rounded z-10">
                {locations.map((loc) => (
                  <div
                    key={loc}
                    onClick={() => selectLocation(loc)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {loc}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => changeLanguage(language === "ar" ? "en" : "ar")}
          >
            <span>{language.toUpperCase()}</span>
          </div>
          <button className="hidden md:block hover:underline">
            {t.signIn}
          </button>
          <button className="hidden md:block bg-amber-700 text-white px-4 py-2 rounded">
            {t.listProperty}
          </button>

          {/* Mobile menu toggle */}
          <button className="md:hidden text-xl" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Categories (desktop only) */}
      <div className="hidden md:flex items-center justify-center gap-8 px-6 py-2 border-t text-sm overflow-x-auto">
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
        <div className="flex items-center gap-1 cursor-pointer">
          <span>{t.categories}</span>
          <IoMdArrowDropdown />
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white p-4 text-sm space-y-4">
          <input
            type="text"
            placeholder={t.search}
            className="w-full border rounded px-4 py-2 text-sm focus:outline-none"
          />
          <div className="flex flex-col gap-3">
            <div className="cursor-pointer">{t.location}</div>
            <div className="cursor-pointer">{t.signIn}</div>
            <button className="bg-amber-700 text-white px-4 py-2 rounded">
              {t.listProperty}
            </button>
          </div>
          <div className="flex flex-wrap gap-4 pt-3 border-t">
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
          </div>
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
    <div className="flex items-center gap-2 cursor-pointer">
      <span className={`w-2 h-2 rounded-full ${dotColor}`} />
      {icon}
      <span>{label}</span>
      <span className="text-gray-500">{count}</span>
    </div>
  );
}
