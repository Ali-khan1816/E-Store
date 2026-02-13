import Container from "@/components/home/Container";
import { getProducts } from "@/libraries";
import Image from "next/image";

const ProductDetailPage = async ({ params }) => {
  const { product_id } = await params;
  const product = await getProducts(product_id);

  return (
    <Container className="col-span-4">
          <div className="max-w-7xl mx-auto px-6 py-12">

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE - IMAGE */}
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-md h-125 bg-white rounded-2xl shadow-lg">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-contain p-8"
            />
          </div>
        </div>

        {/* RIGHT SIDE - DETAILS */}
        <div className="space-y-6">

          <h1 className="text-4xl font-bold">
            {product.title}
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center gap-6">
            <span className="text-3xl font-semibold text-green-600">
              ${product.price}
            </span>

            <span className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm">
              -{product.discountPercentage}%
            </span>
          </div>

          <div className="space-y-2 text-gray-700">
            <p>⭐ Rating: {product.rating}</p>
            <p>📦 Stock: {product.stock}</p>
            <p>🏷 Category: {product.category}</p>
            <p>🔁 Return Policy: {product.returnPolicy}</p>
            <p>📦 Minimum Order: {product.minimumOrderQuantity}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 pt-4">
            {product.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
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
