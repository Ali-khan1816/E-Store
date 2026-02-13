// src/components/ProductBox.jsx
import Image from 'next/image'
import Link from 'next/link'

const ProductBox = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-pink-300 hover:shadow-pink-400 hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col justify-between">
      
      {/* Product Image */}
        <div className="w-full h-72 relative">
          <Link href={`/store/product-details/${product.id}`} className="block w-full h-full">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-contain transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </Link>
        </div>

      {/* Product Details */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
          {product.title}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2">
          {product.description}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xl font-bold text-green-600">${product.price}</span>
          <button className="bg-pink-500 text-white px-2 py-1 rounded-md hover:bg-pink-800 transition-colors text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductBox
