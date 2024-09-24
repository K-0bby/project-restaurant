import React from 'react';

const SalesHistory = () => {
  const sales = [
    { item: 'Item 1', price: 10, quantity: 2, total: 20, time: '12:30 PM' },
    { item: 'Item 2', price: 15, quantity: 1, total: 15, time: '12:45 PM' }
  ];

  return (
    <div className="bg-white shadow-md p-4 mt-4">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Items</th>
            <th className="text-left">Unit Price</th>
            <th className="text-left">Quantity</th>
            <th className="text-left">Total</th>
            <th className="text-left">Time</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale, index) => (
            <tr key={index} className="border-t">
              <td>{sale.item}</td>
              <td>GH₵ {sale.price}</td>
              <td>{sale.quantity}</td>
              <td>GH₵ {sale.total}</td>
              <td>{sale.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesHistory;
