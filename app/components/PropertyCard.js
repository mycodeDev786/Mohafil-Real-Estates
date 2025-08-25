// app/components/ProductCard.js
"use client";

export default function ProductCard({
  badge,
  image,
  price,
  title,
  sellerRating,
  location,
  date,
  installments,
}) {
  // Render stars (max 5)
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <span key={`full-${i}`} className="text-orange-500 text-lg">
              ★
            </span>
          ))}
        {hasHalfStar && <span className="text-orange-500 text-lg">☆</span>}
        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <span key={`empty-${i}`} className="text-gray-300 text-lg">
              ☆
            </span>
          ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition font-sans w-full overflow-hidden flex flex-col">
      {/* Image Section */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />

        {/* Top Badge */}
        {badge && (
          <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-lg shadow">
            {badge}
          </span>
        )}

        {/* Favorite Button */}
        <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.936 
                 0-3.598 1.126-4.312 2.733C11.285 
                 4.876 9.623 3.75 7.688 3.75 5.1 
                 3.75 3 5.765 3 8.25c0 7.214 
                 9 11.25 9 11.25s9-4.036 
                 9-11.25z"
            />
          </svg>
        </button>

        {/* Info Badges Bottom */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
          <span className="bg-white rounded-full px-3 py-1 shadow-md text-sm font-medium flex items-center gap-2">
            ✅ Wallet Safe
          </span>
          <span className="bg-white rounded-full px-3 py-1 shadow-md text-sm font-medium flex items-center gap-2">
            🚚 Free Shipping
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        {/* Price & Installments */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-bold text-gray-900">{price}</h3>
          {installments && (
            <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
              {installments} installments
            </span>
          )}
        </div>

        {/* Title */}
        <p className="text-lg text-gray-800 font-semibold leading-snug mb-2 line-clamp-2">
          {title}
        </p>

        {/* Seller Rating */}
        {sellerRating && (
          <div className="flex items-center gap-2 mb-3">
            {renderStars(sellerRating)}
            <span className="text-gray-800 text-sm font-semibold">
              {sellerRating}
            </span>
            <span className="text-gray-500 text-sm">Seller Score</span>
          </div>
        )}

        {/* Location & Date */}
        <div className="flex items-center justify-between text-sm text-gray-600 mt-auto">
          <div className="flex items-center gap-1">📍 {location}</div>
          <div className="text-xs">{date}</div>
        </div>
      </div>
    </div>
  );
}
