"use client";

import Card from "@/app/components/Card";
import FilterBar from "@/app/components/FilterBar";
import WidthWrapper from "@/app/components/WidthWrapper";
import ViewCollectionButton from "../components/ViewCollectionButton";
import { useAtom } from "jotai";
import { productsData } from "../store";

interface Product {
  image: string;
  name: string;
  price: number;
  id: number;
}

const Products = () => {
  // Fetch products from atom state
  const [products] = useAtom<Product[]>(productsData);

  return (
    <WidthWrapper>
      {/* FilterBar for filtering the products */}
      <FilterBar />

      {/* Product List Container */}
      <div className="container mx-auto px-4 py-8">
        {products.length === 0 ? (
          <div className="text-center text-gray-600 text-lg">
            No products available at the moment. Please check back later.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* View Collection Button */}
        <div className="mt-8 flex justify-center">
          <ViewCollectionButton />
        </div>
      </div>
    </WidthWrapper>
  );
};

export default Products;
