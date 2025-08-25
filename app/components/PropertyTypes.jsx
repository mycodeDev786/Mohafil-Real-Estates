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
    <div className="flex flex-wrap justify-center gap-6 py-8">
      {categories.map((cat, i) => (
        <div
          key={i}
          className={`${cat.color} w-44 h-40 rounded-xl flex flex-col items-center justify-center shadow-md hover:scale-105 transition`}
        >
          <div className="bg-white p-3 rounded-full shadow-sm mb-3 text-gray-700">
            {cat.icon}
          </div>
          <h3 className="font-semibold text-gray-700">{cat.name}</h3>
          <p className="text-sm text-gray-600">{cat.count}</p>
        </div>
      ))}
    </div>
  );
}
