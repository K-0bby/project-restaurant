import React from 'react';
import { BarChart2, DollarSign, TrendingDown, TrendingUp } from 'lucide-react';

const cards = [
  { title: 'Sales', value: 'GHS 1,240,000', icon: <BarChart2 /> },
  { title: 'Revenue', value: 'GHS 3,450,000', icon: <DollarSign /> },
  { title: 'Expenses', value: 'GHS 540,000', icon: <TrendingDown /> },
  { title: 'Profit', value: 'GHS 2,910,000', icon: <TrendingUp /> },
];

const TopCards = () => (
  <div className="col-span-1 lg:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-6">
    {cards.map((card, idx) => (
      <div
        key={idx}
        className="p-4 bg-white shadow-lg rounded-lg flex items-center space-x-4"
      >
        <div className="text-3xl text-gray-600">{card.icon}</div>
        <div>
          <h3 className="text-xl font-semibold">{card.title}</h3>
          <p className="text-lg text-gray-600">{card.value}</p>
        </div>
      </div>
    ))}
  </div>
);

export default TopCards;
