// app/components/PropertyCard.js
"use client";
import { FaBath, FaBed, FaRulerCombined, FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

export default function PropertyCard({
  badge,
  price,
  title,
  beds,
  baths,
  size,
  location,
  date,
  rating,
  verified,
  image,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition relative">
      {/* Image */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {badge && (
          <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {badge}
          </span>
        )}
        <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-gray-100">
          <AiOutlineHeart size={18} className="text-gray-600" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{price}</h3>
        <p className="text-sm text-gray-600">{title}</p>

        {/* Icons row */}
        <div className="flex items-center gap-4 text-gray-500 text-sm mt-3">
          <div className="flex items-center gap-1">
            <FaBed /> {beds}
          </div>
          <div className="flex items-center gap-1">
            <FaBath /> {baths}
          </div>
          <div className="flex items-center gap-1">
            <FaRulerCombined /> {size}m²
          </div>
        </div>

        {/* Location & footer */}
        <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <MdLocationOn /> {location}
          </div>
          <div className="text-xs">{date}</div>
        </div>

        {/* Verified + rating */}
        <div className="flex items-center gap-2 mt-2">
          {verified && (
            <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded">
              Verified
            </span>
          )}
          {rating && (
            <div className="flex items-center gap-1 text-yellow-500 text-xs font-medium">
              <FaStar /> {rating}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
