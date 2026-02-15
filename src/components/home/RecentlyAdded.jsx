"use client"

import React, { useEffect, useState } from 'react'
import Container from './Container'
import ProductBox from '../ProductBox' // make sure it's correctly exported

const RecentlyAdded = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products/search?q=phone&limit=5')
    const data = await response.json()
    setProducts(data.products) // data.products
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="bg-gray-200 py-10">
      <Container>
        <h2 className="text-3xl text-center font-bold mb-6">
          Recently Added Products
        </h2>

        <div className="grid gap-6 p-4 
                        grid-cols-1 
                        sm:grid-cols-2 
                        md:grid-cols-3 
                        lg:grid-cols-4 
                        xl:grid-cols-5">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductBox key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center w-full">Loading...</p>
          )}
        </div>
      </Container>
    </div>
  )
}

export default RecentlyAdded
