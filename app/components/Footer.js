// app/components/Footer.js
"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-bold mb-3">RealEstate Pro</h3>
          <p className="text-sm mb-4">
            Your trusted partner in finding the perfect property. We connect
            buyers and sellers with expert guidance.
          </p>
          <div className="flex space-x-4 text-gray-300">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Buy Properties
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Sell Properties
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Rent Properties
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Property Valuation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Market Analysis
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Investment Advice
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Legal Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Financing Help
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm mb-4">
            <li className="flex items-center gap-2">
              <MdPhone /> +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <MdEmail /> info@realestatepro.com
            </li>
            <li className="flex items-center gap-2">
              <MdLocationOn /> 123 Real Estate St, City, State
            </li>
          </ul>

          {/* Newsletter */}
          <div>
            <h5 className="text-sm font-semibold mb-2">Newsletter</h5>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-l-md bg-white text-black text-sm focus:outline-none"
              />
              <button className="bg-orange-500 text-white px-2 py-2 rounded-r-md text-sm hover:bg-orange-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2024 RealEstate Pro. All rights reserved. |{" "}
        <a href="#" className="hover:text-white">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="#" className="hover:text-white">
          Terms of Service
        </a>
      </div>
    </footer>
  );
}
