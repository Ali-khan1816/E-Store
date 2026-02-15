"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/ep1.webp",
  "/headphone1.png",
  "/headphone2.png",
  "/ep2.webp",
  "/handfree1.webp",
  "/handfree2.webp",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative items-center w-full 
                    h-64 
                    sm:h-80 
                    md:h-96 
                    lg:h-[450px] 
                    overflow-hidden rounded-2xl">
      
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt="Product Image"
            fill
            className="object-contain p-4"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
