"use client";

import Container from "@/components/home/Container";
import { getCategories } from "@/libraries";
import ProductBox from "@/components/ProductBox";
import React, { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// --- CATEGORY LISTING ---
const CategoryListing = ({ categories, closeSidebar }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl text-center font-bold mb-4">CATEGORIES</h2>
      <ul>
        {categories?.map((category) => (
          <li
            key={category.slug}
            className="p-2 text-center my-2 shadow-md hover:shadow-pink-400 cursor-pointer transition"
            onClick={closeSidebar} // Close sidebar on mobile
          >
            {category.name.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- STORE LAYOUT ---
const StoreLayout = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false); // Mobile toggle
  const [isMobile, setIsMobile] = useState(false); // Check mobile width

  // Check if mobile on mount
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <Container className="py-10">
      {/* MOBILE CATEGORY TOGGLE */}
      {isMobile && (
        <div
          className="flex justify-between items-center mb-4 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <h2 className="text-xl font-bold">Categories</h2>
          {mobileOpen ? (
            <FiChevronUp className="text-pink-500 text-2xl" />
          ) : (
            <FiChevronDown className="text-pink-500 text-2xl" />
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* CATEGORY SIDEBAR */}
        {(mobileOpen || !isMobile) && (
          <div className="md:col-span-3">
            <CategoryListing
              categories={categories}
              closeSidebar={() => setMobileOpen(false)}
            />
          </div>
        )}

        {/* PRODUCT LISTING */}
        <div className="md:col-span-9">{children}</div>
      </div>
    </Container>
  );
};

export default StoreLayout;
