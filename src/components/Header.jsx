"use client";

import React, { useState } from "react";
import Container from "./home/Container";
import Link from "next/link";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white/40 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50">

      <Container className="flex items-center justify-between py-3 px-2 sm:px-6 lg:px-8 gap-4">

        {/* LOGO */}
        <Link href="/" className="flex-shrink-0">
          <span className="text-2xl sm:text-3xl font-bold text-pink-500 cursor-pointer">
            E Store<b className="text-black">.</b>
          </span>
        </Link>

        {/* SEARCH BAR (Desktop Only) */}
        <div className="hidden md:flex flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-r-0 px-4 py-2 rounded-l-full focus:outline-none"
          />
          <button className="bg-pink-500 px-4 rounded-r-full text-white hover:bg-pink-600 transition">
            <FiSearch size={20} />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-pink-500 transition">
            Home
          </Link>

          <Link href="/store" className="hover:text-pink-500 transition">
            Store
          </Link>

          {/* Cart */}
          <div className="relative cursor-pointer">
            <FiShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
              3
            </span>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </Container>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-6 space-y-6">

          {/* Mobile Search */}
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border border-r-0 px-4 py-2 rounded-l-full focus:outline-none"
            />
            <button className="bg-pink-500 px-4 rounded-r-full text-white">
              <FiSearch size={20} />
            </button>
          </div>

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-pink-500"
          >
            Home
          </Link>

          <Link
            href="/store"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-pink-500"
          >
            Store
          </Link>

          {/* Cart Mobile */}
          <div className="flex items-center gap-2 cursor-pointer">
            <FiShoppingCart size={20} />
            <span>Cart (3)</span>
          </div>

        </div>
      )}
    </header>
  );
};

export default Header;
