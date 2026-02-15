import React from "react";
import Slider from "./Slider";
import Container from "./Container";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Container>
      <section className="flex flex-col lg:flex-row items-center gap-10 py-10">

        {/* LEFT SIDE (TEXT) */}
        <div className="flex-1 text-center lg:text-left">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            One Stop Solution{" "}
            <span className="text-pink-500">E Store</span>
          </h1>

          <p className="opacity-80 mb-4 text-sm sm:text-base md:text-lg">
            Discover the latest headphones, earphones, mobiles,
            tablets and more.
          </p>

          <p className="opacity-80 mb-6 text-sm sm:text-base">
            Exclusive deals just for you!
          </p>

          <Link href="/store">
            <button className="px-6 py-2 border border-pink-500 text-pink-500 rounded-full hover:bg-pink-500 hover:text-white transition duration-300">
              Shop Now
            </button>
          </Link>

        </div>

        {/* RIGHT SIDE (SLIDER) */}
        <div className="flex-1 w-full">
          <Slider />
        </div>

      </section>
    </Container>
  );
};

export default HeroSection;
