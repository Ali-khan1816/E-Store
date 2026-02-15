// src/components/Footer.jsx
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">E-Store</h2>
          <p className="text-sm leading-6">
            Your one-stop shop for the latest products at the best prices.
            Quality guaranteed and fast delivery nationwide.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition">
              <FaTwitter size={14} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition">
              <FaGithub size={14} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-pink-500 transition">Home</Link>
            </li>
            <li>
              <Link href="/store" className="hover:text-pink-500 transition">Shop</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-pink-500 transition">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink-500 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/store?category=electronics" className="hover:text-pink-500 transition">Electronics</Link>
            </li>
            <li>
              <Link href="/store?category=fashion" className="hover:text-pink-500 transition">Fashion</Link>
            </li>
            <li>
              <Link href="/store?category=home" className="hover:text-pink-500 transition">Home</Link>
            </li>
            <li>
              <Link href="/store?category=beauty" className="hover:text-pink-500 transition">Beauty</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe to get updates on new arrivals and special offers.
          </p>

          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} E-Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
