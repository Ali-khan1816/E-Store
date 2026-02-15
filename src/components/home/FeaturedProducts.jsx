import React from 'react'
import Container from './Container'
import ProductBox from '../ProductBox'

const FeaturedProducts = async () => {
 const responce = await fetch('https://dummyjson.com/products/search?q=phone&limit=5')
 const data = await responce.json()
  return (
    <div className='mt-15'>
      <Container>
        <h1 className='text-4xl text-center font-bold mb-20'>Feature Products</h1>
        <div className="grid gap-6 p-4 
                        grid-cols-1 
                        sm:grid-cols-2 
                        md:grid-cols-3 
                        lg:grid-cols-4 
                        xl:grid-cols-5">
          {
            data.products.map((prod) =>(
              <ProductBox key={prod.id} product={prod}/>
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default FeaturedProducts