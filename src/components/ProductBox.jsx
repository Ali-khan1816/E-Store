
import Image from 'next/image'
import Link from 'next/link'

const ProductBox = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-pink-300 hover:shadow-pink-400 hover:shadow-2xl transition-shadow duration-300 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
      
      {/* Product Image */}
      <div className="w-full h-48 sm:h-56 md:h-72 relative">
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
      <div className="flex flex-col gap-2 mt-4 sm:mt-4 md:mt-6">
        <h3 className="text-md sm:text-lg md:text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
          {product.title}
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base line-clamp-2">
          {product.description}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xl sm:text-xl md:text-xl font-bold text-green-600">
            ${product.price}
          </span>
          <button className="bg-pink-500 text-whiten   sm:px-2  sm:py-2 rounded hover:bg-pink-800 transition-colors text-xs sm:text-sm md:text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductBox
