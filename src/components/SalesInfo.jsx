import React from 'react';

const SalesInfo = ({ discount, total, onDiscountChange }) => {
  return (
    <div className="bg-white shadow-md p-4 mt-4">
      <div className="flex justify-between items-center">
        <div className="w-full mr-2">
          <label className="block mb-2 text-sm font-bold">Discount:</label>
          <input
            type="number"
            value={discount}
            onChange={onDiscountChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Discount %"
          />
        </div>
        <div className="text-right">
          <p className="text-sm">Discount Price:</p>
          <p className="text-2xl font-bold">GH₵ {discount > 0 ? (total * discount / 100).toFixed(2) : '0.00'}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="text-center w-full">
          <button className="bg-green-500 text-white px-8 py-4 rounded-md">
            <i className="fa fa-shopping-cart mr-2"></i> Checkout
          </button>
        </div>
        <div className="text-right">
          <p className="text-sm">Total:</p>
          <p className="text-4xl font-bold">GH₵ {total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default SalesInfo;
