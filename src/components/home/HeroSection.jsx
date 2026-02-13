import React from 'react'
import Slider from './Slider'
import Container from './Container'

const HeroSection = () => {
  return (
    <Container >
      <section className="flex flex-col lg:flex-row items-center gap-10 my-8">
        
        {/* LEFT SIDE (TEXT) */}
        <div className="flex-1">
          <h1 className='text-4xl font-bold my-5'>
            One Stop Solution <span className='text-pink-500'>E Store</span>
          </h1>
          <p className='opacity-80 my-5'>
            Discover the latest headphones, earphone, mobile, tablets etc.
          </p>
          <p className='opacity-80 mb-5'>Exclusive deal for you!</p>
          <button className='text-pink-500 border p-1.5 rounded-3xl w-20 hover:bg-pink-500 hover:text-white'>
            Shop
          </button>
        </div>

        {/* RIGHT SIDE (SLIDER) */}
        <div className="flex-1 w-full relative h-112.5">
          <Slider />
        </div>

      </section>
    </Container >
  )
}

export default HeroSection
