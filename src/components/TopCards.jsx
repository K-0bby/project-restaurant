import React from 'react';
import { BarChart2, CreditCard, BookOpen, PlusCircle, Users } from 'lucide-react';

const cards = [
  { 
    title: 'Daily Sales', 
    value: 'GHS 30.00', 
    icon: <BarChart2  />
  },
  { 
    title: 'Daily Credit', 
    value: 'GHS 30.00', 
    icon: <CreditCard /> 
  },
  { 
    title: 'Monthly Credit', 
    value: 'GHS 41,851', 
    icon: <BookOpen /> 
  },
  { 
    title: 'Monthly Invoices', 
    value: '721', 
    icon: <BookOpen />
  },
  { 
    title: 'Total Daily Cash Sales', 
    value: 'GHS 80.00', 
    icon: <PlusCircle />
  },
  { 
    title: 'Monthly Cash Sales', 
    value: 'GHS 80.00', 
    icon: <Users /> 
  },
  { 
    title: 'Daily Mobile Money Sales', 
    value: 'GHS 0.00', 
    icon: <CreditCard />
  },
  { 
    title: 'Monthly Mobile Money Sales', 
    value: 'GHS 0.00', 
    icon: <CreditCard /> 
  },
];

const TopCards = () => (
  <div className="col-span-1 lg:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-4">
    {cards.map((card, idx) => (
      <div
        key={idx}
        className="px-3 py-2 bg-white shadow-sm rounded flex flex-col text-center items-center space-x-3 border"
      >
        <div className="text-3xl">{card.icon}</div>
        <div>
          <h3 className="text-lg font-semibold">{card.title}</h3>
          <p className="text-md text-gray-600">{card.value}</p>
        </div>
      </div>
    ))}
  </div>
);

export default TopCards;
