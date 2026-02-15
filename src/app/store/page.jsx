"use client";

import ProductBox from "@/components/ProductBox";
import { getProducts } from "@/libraries";
import React, { useEffect, useState } from "react";

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid gap-6 
                    grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-3 
                    xl:grid-cols-4">
      {products.length > 0 ? (
        products.map((prod) => <ProductBox key={prod.id} product={prod} />)
      ) : (
        <p className="text-center w-full">Loading products...</p>
      )}
    </div>
  );
};

export default ProductListing;
