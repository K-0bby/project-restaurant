// src/components/BarChart.js
import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Simulated API call function
const fetchDrinksData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "CORONA EXTRA", qty: 10, price: "GH¢ 23.00" },
        { name: "BUDWEISER BEER", qty: 12, price: "GH¢ 23.00" },
        { name: "HEINEKEN", qty: 15, price: "GH¢ 25.00" },
        { name: "STELLA ARTOIS", qty: 8, price: "GH¢ 27.00" },
        { name: "GUINNESS", qty: 5, price: "GH¢ 30.00" },
        { name: "AMSTEL LIGHT", qty: 20, price: "GH¢ 22.00" },
        { name: "CARLSBERG", qty: 10, price: "GH¢ 24.00" },
        { name: "PILSNER URQUELL", qty: 7, price: "GH¢ 26.00" },
        { name: "BLUE MOON", qty: 10, price: "GH¢ 28.00" },
        { name: "LEFFE BLOND", qty: 9, price: "GH¢ 29.00" },
        { name: "SAM ADAMS", qty: 11, price: "GH¢ 31.00" },
        { name: "KONA BREWING CO.", qty: 6, price: "GH¢ 32.00" },
        { name: "TROEGS PERPETUAL IPA", qty: 5, price: "GH¢ 34.00" },
        { name: "RADLER", qty: 12, price: "GH¢ 25.00" },
        { name: "MILLER LITE", qty: 14, price: "GH¢ 20.00" },
        { name: "COORS LIGHT", qty: 9, price: "GH¢ 21.00" },
        { name: "SAPPORO", qty: 11, price: "GH¢ 29.00" },
        { name: "DOS EQUIS", qty: 10, price: "GH¢ 22.00" },
        { name: "FOSTER'S", qty: 8, price: "GH¢ 24.00" },
        { name: "NEWCASTLE BROWN ALE", qty: 6, price: "GH¢ 27.00" },
        { name: "JACK DANIEL'S", qty: 15, price: "GH¢ 120.00" },
        { name: "ABSOLUT VODKA", qty: 10, price: "GH¢ 90.00" },
        { name: "CROWN ROYAL", qty: 8, price: "GH¢ 110.00" },
        { name: "MOET & CHANDON", qty: 5, price: "GH¢ 250.00" },
        { name: "HENNESSY", qty: 7, price: "GH¢ 150.00" },
        { name: "BOMBAY SAPPHIRE", qty: 6, price: "GH¢ 95.00" },
        { name: "CAPTAIN MORGAN", qty: 9, price: "GH¢ 85.00" }
      ]);
    }, 2000); // Simulate a 2-second delay
  });
};

const BarChartComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const drinks = await fetchDrinksData();
      const processedData = drinks.map(drink => {
        const priceValue = parseFloat(drink.price.replace('GH¢ ', '')); // Convert price string to number
        const sales = drink.qty * priceValue; // Calculate total sales
        return { name: drink.name, qtySold: drink.qty, sales };
      });
      setData(processedData);
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading...</div>; // Display loading state
  }

  return (
    <div className="w-full h-full p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Most Patronized Drinks</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} >
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="name" fontSize={12} />
          <YAxis fontSize={12} />
          <Tooltip contentStyle={{ backgroundColor: '#fff', borderColor: '#ccc' }} />
          <Legend />
          <Bar 
            dataKey="qtySold" 
            fill="rgba(136, 132, 216, 0.7)" 
            name="Quantity Sold"
            stroke="#4b3c89"
            strokeWidth={2}
          />
          <Bar 
            dataKey="sales" 
            fill="rgba(130, 202, 157, 0.7)" 
            name="Sales (GH¢)" 
            stroke="#1b8e68"
            strokeWidth={2}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
