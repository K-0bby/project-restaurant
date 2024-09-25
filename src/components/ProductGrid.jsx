import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ title }) => (
  <div>
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    <div className="grid grid-cols-3 gap-4">
      {/* Replace with actual product data */}
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  </div>
);

export default ProductGrid;
