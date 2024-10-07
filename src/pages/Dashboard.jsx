import React, { useState, useEffect } from "react";
import { Mail, Bell, Flag, User } from 'lucide-react';
import TopCards from "@/components/TopCards";  
import SalesOverview from "@/components/charts/SalesOverview";
import MarketShare from "@/components/charts/MarketShare";
import Sidebar from "@/components/Sidebar";
import BarChartComponent from "@/components/charts/BarChartComponent";

// Mock fetch function to simulate backend
const fetchInventoryData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: 'Chardonnay', available: true, stockCount: 15, stockValue: 300 },
        { name: 'Merlot', available: true, stockCount: 25, stockValue: 625 },
        { name: 'Heineken', available: false, stockCount: 0, stockValue: 0 },
        { name: 'Budweiser', available: true, stockCount: 10, stockValue: 250 },
        { name: 'Coca-Cola', available: true, stockCount: 50, stockValue: 500 },
        { name: 'Pepsi', available: false, stockCount: 0, stockValue: 0 },
        { name: 'Orange Juice', available: true, stockCount: 20, stockValue: 200 },
        { name: 'Whiskey', available: true, stockCount: 5, stockValue: 1000 },
        // Add more drinks here if needed
      ]);
    }, 1000); // Simulate a delay of 1 second
  });
};

// Inventory Component
const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getInventory = async () => {
      const data = await fetchInventoryData();
      setInventory(data);
      setLoading(false);
    };

    getInventory();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading Inventory...</div>;
  }

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
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.available ? 'Available' : 'Unavailable'}</td>
              <td className="px-4 py-2">{item.stockCount}</td>
              <td className="px-4 py-2">GHS {item.stockValue.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Dashboard = () => {
  return(
    <main className="max-w-screen-7xl mx-auto relative overflow-hidden">
      <div className="flex h-screen">
        {/* Sidebar component */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 py-6 px-4 sm:px-8 lg:px-10 overflow-y-scroll bg-gray-100">
          {/* Header with Mail, Notification, and Flag icons */}
          <div className="flex justify-end space-x-6 mb-6">
            <button className="text-black">
              <Mail className="w-5 h-5" />
            </button>
            <button className="text-black">
              <Bell className="w-5 h-5" />
            </button>
            <button className="text-black">
              <Flag className="w-5 h-5" />
            </button>
            <button className="text-black">
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Top Cards */}
            <TopCards />

            {/* Sales Overview and Market Share Charts */}
            <div className="col-span-1 lg:col-span-1 p-4 bg-white rounded border shadow-sm">
              <SalesOverview />
            </div>
            <div className="col-span-1 lg:col-span-2 p-4 bg-white rounded border shadow-sm">
              <BarChartComponent />
            </div>
            <div className="col-span-1 lg:col-span-1 p-4 bg-white rounded border shadow-sm">
              <MarketShare />
            </div>

            {/* Inventory Component */}
            <div className="col-span-1 lg:col-span-4 p-4 bg-white rounded border shadow-sm">
              <Inventory />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
