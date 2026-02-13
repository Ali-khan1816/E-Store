
import ProductBox from '@/components/ProductBox'
import { getProducts } from '@/libraries'
import React from 'react'

const StorePage = () => {
  return (
      <ProductListing/>
  )
}

export default StorePage

const ProductListing =async () =>{
  const products = await getProducts();
return <div className='col-span-4 grid grid-cols-3 gap-5  '>
  {
    products.map((prod)=>(
      <ProductBox key={prod.id} product={prod} />
    ))
  }

</div>
    
}
