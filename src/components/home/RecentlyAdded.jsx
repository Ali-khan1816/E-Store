"use client"

import React, { useEffect, useState } from 'react'
import Container from './Container'
import ProductBox from '../ProductBox' // now correctly exported

const RecentlyAdded = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products/search?q=phone&limit=5')
    const data = await response.json()
    setProducts(data.products) // <-- make sure it's `data.products`, not `data`
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="bg-gray-200 py-10">
      <Container>
        <h2 className="text-3xl text-center font-bold mb-4">
          Recently Added Products
        </h2>
        <div className="grid grid-cols-5 gap-10 p-5">
          {products.length > 0 ? (
            products.map((product) => <ProductBox key={product.id} product={product} />)
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </Container>
    </div>
  )
}

export default RecentlyAdded
