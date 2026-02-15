import Container from "@/components/home/Container";
import { getProducts } from "@/libraries";
import Image from "next/image";

const ProductDetailPage = async ({ params }) => {
  // Unwrap params correctly
  const routeParams = await params;
  const { product_id } = routeParams;

  // Fetch product data
  const product = await getProducts(product_id);

  return (
    <Container className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid: Mobile = 1 column, Desktop = 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* LEFT SIDE - IMAGE */}
          <div className="w-full flex justify-center order-1 md:order-1">
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-full h-64 sm:h-80 md:h-[500px] bg-white rounded-2xl shadow-lg">
              {product.thumbnail ? (
                <Image
                  src={product.thumbnail}
                  alt={product.title || "Product Image"}
                  fill
                  className="object-contain p-4 sm:p-6"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-gray-100 rounded-2xl">
                  <p className="text-gray-400">No Image Available</p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE - DETAILS */}
          <div className="space-y-4 sm:space-y-6 order-2 md:order-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {product.title}
            </h1>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
              <span className="text-2xl sm:text-3xl font-semibold text-green-600">
                ${product.price}
              </span>

              <span className="bg-red-100 text-red-600 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm mt-2 sm:mt-0">
                -{product.discountPercentage}%
              </span>
            </div>

            <div className="space-y-1 text-gray-700 text-sm sm:text-base">
              <p>⭐ Rating: {product.rating}</p>
              <p>📦 Stock: {product.stock}</p>
              <p>🏷 Category: {product.category}</p>
              {product.returnPolicy && <p>🔁 Return Policy: {product.returnPolicy}</p>}
              {product.minimumOrderQuantity && <p>📦 Minimum Order: {product.minimumOrderQuantity}</p>}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4">
              {product.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetailPage;
