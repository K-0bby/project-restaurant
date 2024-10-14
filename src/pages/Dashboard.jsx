import React, { useState, useEffect } from "react";
import { Mail, Bell, Flag, User } from 'lucide-react';
import TopCards from "@/components/TopCards";  
import SalesOverview from "@/components/charts/SalesOverview";
import MarketShare from "@/components/charts/MarketShare";
import Sidebar from "@/components/Sidebar";
import BarChartComponent from "@/components/charts/BarChartComponent";
import Inventory from "@/components/Inventory";
import AddDrinkForm from "@/components/AddDrinkForm";

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

const Dashboard = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const getInventory = async () => {
      const data = await fetchInventoryData();
      setInventory(data);
    };

    getInventory();
  }, []);

  const handleAddDrink = (newDrink) => {
    setInventory([...inventory, newDrink]);
  };

  return (
    <main className="max-w-screen-7xl mx-auto relative overflow-hidden">
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 py-6 px-4 sm:px-8 lg:px-10 overflow-y-scroll bg-gray-100">
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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <TopCards />
            <div className="col-span-1 lg:col-span-1 p-4 bg-white rounded border shadow-sm">
              <SalesOverview />
            </div>
            <div className="col-span-1 lg:col-span-2 p-4 bg-white rounded border shadow-sm">
              <BarChartComponent />
            </div>
            <div className="col-span-1 lg:col-span-1 p-4 bg-white rounded border shadow-sm">
              <MarketShare />
            </div>
            <div className="col-span-1 lg:col-span-4">
              <AddDrinkForm onAddDrink={handleAddDrink} />
            </div>
            <div className="col-span-1 lg:col-span-4 p-4 bg-white rounded border shadow-sm">
              <Inventory inventory={inventory} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
