// app/components/PropertyCategories.js
"use client";
import { FaBuilding, FaHome, FaCrown, FaTree } from "react-icons/fa";
import { MdBusiness, MdOutlineMeetingRoom } from "react-icons/md";

const categories = [
  {
    name: "Apartments",
    count: "450+ Properties",
    icon: <FaBuilding size={28} />,
    color: "bg-blue-200",
  },
  {
    name: "Houses",
    count: "320+ Properties",
    icon: <FaHome size={28} />,
    color: "bg-green-200",
  },
  {
    name: "Villas",
    count: "180+ Properties",
    icon: <FaCrown size={28} />,
    color: "bg-purple-200",
  },
  {
    name: "Commercial",
    count: "95+ Properties",
    icon: <MdBusiness size={28} />,
    color: "bg-amber-200",
  },
  {
    name: "Offices",
    count: "75+ Properties",
    icon: <MdOutlineMeetingRoom size={28} />,
    color: "bg-rose-200",
  },
  {
    name: "Land",
    count: "60+ Properties",
    icon: <FaTree size={28} />,
    color: "bg-teal-200",
  },
];

export default function PropertyCategories() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10">
        Explore Property Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className={`${cat.color} h-48 rounded-xl flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1`}
          >
            <div className="bg-white p-3 rounded-full shadow mb-3 text-gray-700">
              {cat.icon}
            </div>
            <h3 className="font-semibold text-gray-800">{cat.name}</h3>
            <p className="text-sm text-gray-700">{cat.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
