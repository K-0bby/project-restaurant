import React from "react";

const Inventory = ({ inventory }) => {
  return (
    <div className="p-4 bg-white rounded border shadow-sm">
      <h2 className="text-lg font-bold mb-4">Inventory Overview</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="px-4 py-2 text-left">Drinks</th>
            <th className="px-4 py-2 text-left">Availability</th>
            <th className="px-4 py-2 text-left">Stock Count</th>
            <th className="px-4 py-2 text-left">Stock Value</th>
            <th className="px-4 py-2 text-left">Barcode</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.available ? 'Available' : 'Unavailable'}</td>
              <td className="px-4 py-2">{item.stockCount}</td>
              <td className="px-4 py-2">GHS {item.stockValue.toFixed(2)}</td>
              <td className="px-4 py-2">{item.barcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
