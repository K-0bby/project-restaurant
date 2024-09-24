import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const SalesComponent = () => {
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(100); 
  
  // Function to calculate the discounted price
  const calculateDiscountedPrice = () => {
    return (totalPrice - (totalPrice * discount) / 100).toFixed(2);
  };

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-md shadow-sm">
      <h2 className="text-xl font-bold mb-4">Sales</h2>

      {/* Discount Dropdown */}
      <div className="flex items-center justify-between mb-4">
        <label className="text-gray-700 font-semibold">Discount:</label>
        <select
          value={discount}
          onChange={(e) => setDiscount(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded-md w-1/3 outline-none"
        >
          <option value="0">0%</option>
          <option value="5">5%</option>
          <option value="10">10%</option>
          <option value="15">15%</option>
        </select>
      </div>

      {/* Discount Price Display */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-gray-700 font-semibold">Discount Price:</span>
        <span className="font-bold text-lg">GH₵ {calculateDiscountedPrice()}</span>
      </div>

      {/* Cart and Total Price */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <ShoppingCart className="w-10 h-10 text-green-500" />
        </div>
        <span className="font-extrabold text-2xl">GH₵ {totalPrice}</span>
      </div>
    </div>
  );
};

export default SalesComponent;
