// app/components/PropertyCard.js
"use client";
// Using inline SVG icons to match the style of the provided image.

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
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition relative font-sans">
      {/* Image and badges */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-yellow-400 text-gray-800 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              {/* Black circle */}
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="currentColor"
                className="text-black"
              />

              {/* Yellow lightning bolt */}
              <path
                d="M12 6L9 12h3l-2 6 6-8h-4z"
                fill="#FACC15" /* Tailwind's yellow-400 */
              />
            </svg>

            {badge}
          </span>
        )}
        <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition">
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
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.936 0-3.598 1.126-4.312 2.733C11.285 4.876 9.623 3.75 7.688 3.75 5.1 3.75 3 5.765 3 8.25c0 7.214 9 11.25 9 11.25s9-4.036 9-11.25z"
            />
          </svg>
        </button>

        {/* Info badges over image */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between gap-2">
          {verified && (
            <span className="bg-white rounded-full px-3 py-1.5 shadow-md flex items-center gap-2 font-medium text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 text-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              Verified
            </span>
          )}
          <span className="bg-white rounded-full px-3 py-1.5 shadow-md flex items-center gap-2 font-medium text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-blue-500"
            >
              <path d="M3 7.5V15a2.25 2.25 0 002.25 2.25h.75a2.25 2.25 0 104.5 0h3a2.25 2.25 0 104.5 0h.75A2.25 2.25 0 0021 15v-3.75a.75.75 0 00-.22-.53l-2.5-2.5a.75.75 0 00-.53-.22H15V7.5A2.25 2.25 0 0012.75 5.25h-7.5A2.25 2.25 0 003 7.5zm3 9a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm10.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            Free Shipping
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{price}</h3>
          {/* Price badge right side */}
          {rating && (
            <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full">
              {rating} months
            </span>
          )}
        </div>
        <p className="text-base text-gray-800 font-medium">{title}</p>

        {/* Location and date */}
        <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 4.148-3.364 7.5-7.5 7.5s-7.5-3.352-7.5-7.5c0-4.149 3.364-7.5 7.5-7.5s7.5 3.351 7.5 7.5z"
              />
            </svg>
            {location}
          </div>
          <div className="text-xs">{date}</div>
        </div>
      </div>
    </div>
  );
}
