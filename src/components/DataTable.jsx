import React from 'react';

const DataTable = () => {
  const data = [
    { date: '01-09-2024', description: 'Purchase', amount: 'GHS 1,000' },
    { date: '02-09-2024', description: 'Refund', amount: 'GHS 500' },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Transaction History</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 text-left">Date</th>
            <th className="py-2 text-left">Description</th>
            <th className="py-2 text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td className="py-2">{row.date}</td>
              <td className="py-2">{row.description}</td>
              <td className="py-2">{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
