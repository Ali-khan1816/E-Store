import FeaturedProducts from '@/components/home/FeaturedProducts'
import HeroSection from '@/components/home/HeroSection'
import RecentlyAdded from '@/components/home/RecentlyAdded'
import React from 'react'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <RecentlyAdded/>
      <FeaturedProducts/>
    </>
  )
}

export default Home
