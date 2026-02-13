import React from 'react'
import Container from './home/Container';
import Link from 'next/link';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className='flex items-center gap-7'>

      
      <ul className='flex gap-5'>
        <li className='text-xl hover:text-pink-500 transition-colors duration-300 cursor-pointer'>
          <Link href="/">Home</Link>
        </li>
        <li className='text-xl hover:text-pink-500 transition-colors duration-300 cursor-pointer'>
          <Link href="/store">Store</Link>
        </li>
      </ul>

      {/* Cart Icon with Badge */}
      <div className="relative w-fit cursor-pointer">
        <FiShoppingCart
          className='text-gray-700 hover:text-pink-500 transition-colors duration-300'
          size={28}
        />
        <span className='absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold'>
          3
        </span>
      </div>

    </nav>
  )
}

const Header = () => {
  return (
    <header className='bg-white/40 backdrop-blur-md p-3 shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-300'>
      <Container className='flex justify-between items-center'>

        {/* Logo */}
        <Link href="/">
          <div className='flex items-center cursor-pointer'>
            <span className='text-5xl font-bold text-pink-500'>
              E Store<b className='text-black'>.</b>
            </span>
          </div>
        </Link>

        {/* Search Bar */}
        <div className='flex items-center'>
          <input
          name='search'
            type="text"
            placeholder='Search for product'
            className='border border-r-0 rounded-l-full px-4 py-2 w-70 focus:outline-none'
          />
          <button className='bg-pink-500 rounded-r-full p-2 text-white hover:bg-pink-700 transition-colors duration-300'>
            <FiSearch size={26} />
          </button>
        </div>

        <Navbar />

      </Container>
    </header>
  )
}

export default Header;
