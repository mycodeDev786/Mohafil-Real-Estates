// app/components/PropertySection.js
"use client";
import PropertyCard from "./PropertyCard";

const houses = [
  {
    badge: "FEATURED",
    price: "€650,000",
    title: "Modern Family House with Garden",
    beds: 4,
    baths: 3,
    size: 220,
    location: "Munich, Germany",
    date: "2 days ago",
    rating: 4.8,
    verified: true,
    image: "https://picsum.photos/400/250?random=1",
  },
  {
    badge: "PREMIUM",
    price: "€890,000",
    title: "Traditional Villa in Quiet Area",
    beds: 5,
    baths: 4,
    size: 310,
    location: "Hamburg, Germany",
    date: "1 day ago",
    rating: 4.9,
    verified: true,
    image: "https://picsum.photos/400/250?random=2",
  },
  {
    badge: "NEW",
    price: "€420,000",
    title: "Countryside Home with Large Plot",
    beds: 3,
    baths: 2,
    size: 180,
    location: "Stuttgart, Germany",
    date: "3 days ago",
    rating: 4.6,
    verified: false,
    image: "https://picsum.photos/400/250?random=3",
  },
  {
    badge: "HOT",
    price: "€750,000",
    title: "Urban Townhouse Near Center",
    beds: 4,
    baths: 3,
    size: 240,
    location: "Berlin, Germany",
    date: "5 hours ago",
    rating: 4.7,
    verified: true,
    image: "https://picsum.photos/400/250?random=4",
  },
];

export default function PropertySection() {
  return (
    <section className="px-6 py-10">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Houses</h2>
        <button className="border border-gray-400 text-sm px-3 py-1 rounded hover:bg-gray-100">
          View All Houses
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {houses.map((house, i) => (
          <PropertyCard key={i} {...house} />
        ))}
      </div>

      <div className="mb-10"></div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Apartments</h2>
        <button className="border border-gray-400 text-sm px-3 py-1 rounded hover:bg-gray-100">
          View All Apartments
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {houses.map((house, i) => (
          <PropertyCard key={i} {...house} />
        ))}
      </div>

      <div className="mb-10"></div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Villas</h2>
        <button className="border border-gray-400 text-sm px-3 py-1 rounded hover:bg-gray-100">
          View All villas
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {houses.map((house, i) => (
          <PropertyCard key={i} {...house} />
        ))}
      </div>

      <div className="mb-10"></div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Offices</h2>
        <button className="border border-gray-400 text-sm px-3 py-1 rounded hover:bg-gray-100">
          View All Offices
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {houses.map((house, i) => (
          <PropertyCard key={i} {...house} />
        ))}
      </div>

      <div className="mb-10"></div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Commercial Properties</h2>
        <button className="border border-gray-400 text-sm px-3 py-1 rounded hover:bg-gray-100">
          View All Commercial Properties
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {houses.map((house, i) => (
          <PropertyCard key={i} {...house} />
        ))}
      </div>

      <div className="mb-10"></div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Lands & Plots</h2>
        <button className="border border-gray-400 text-sm px-3 py-1 rounded hover:bg-gray-100">
          View All Lands & Plots
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {houses.map((house, i) => (
          <PropertyCard key={i} {...house} />
        ))}
      </div>
    </section>
  );
}
