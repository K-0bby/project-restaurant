import React from "react";
import { Mail, Bell, Flag, User } from 'lucide-react';
import TopCards from "@/components/TopCards";  
import SalesOverview from "@/components/charts/SalesOverview";
import MarketShare from "@/components/charts/MarketShare";
import ProductGrid from "@/components/ProductGrid";
import DataTable from "@/components/DataTable";
import Sidebar from "@/components/Sidebar";

const Dashboard = () => {
  return (
    <main className="max-w-screen-xl mx-auto relative overflow-hidden">
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1 py-6 px-4 sm:px-8 lg:px-10 overflow-y-scroll">
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
            <div className="col-span-1 lg:col-span-2 p-4 bg-white rounded-lg shadow-md">
              <SalesOverview />
            </div>
            <div className="col-span-1 lg:col-span-1 p-4 bg-white rounded-lg shadow-md">
              <MarketShare />
            </div>

            {/* Product Grid */}
            {/* <div className="col-span-1 lg:col-span-1 p-4 bg-white rounded-lg shadow-md">
              <ProductGrid title="Top Products" />
            </div> */}

            {/* Transaction Table */}
            <div className="col-span-1 lg:col-span-2 p-4 bg-white rounded-lg shadow-md">
              <DataTable />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
