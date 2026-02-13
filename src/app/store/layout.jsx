import Container from '@/components/home/Container'
import { getCategories } from '@/libraries'
import React from 'react'

const StoreLayout = ({children}) => {
  return (
    <Container className="grid grid-cols-5 gap-3">
           <CategoryListing/>
           {children}
    </Container>
  )
}
export default StoreLayout

const CategoryListing = async () => {
  const categories = await getCategories();

  return (
    <div>
      <div className='text-2xl text-center'>CATEGORIES</div>
      <ul>
        {categories?.map((category) => (
          <li
            key={category.slug}
            className='p-2 text-center my-2 shadow-md hover:shadow-pink-400 hover:cursor-pointer'
          >
            {category.name.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
};