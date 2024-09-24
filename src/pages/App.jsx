import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { Mail, Bell, Flag, ArrowRight } from 'lucide-react';
import DrinksInterface from '@/components/DrinksInterface';
import { Link } from 'react-router-dom';

const App = () => {
  // States for form inputs and sales type
  const [barcode, setBarcode] = useState('');
  const [productCode, setProductCode] = useState('');
  const [productName, setProductName] = useState('');
  const [salesType, setSalesType] = useState('Wholesale');

  // Handler for sales type switch
  const handleSalesTypeChange = (type) => {
    setSalesType(type);
  };

  // Clear tables function
  const clearTables = () => {
    console.log("Tables cleared");
    // Add additional logic to clear tables
  };

  return (
    <main className="max-w-screen-7xl mx-auto relative overflow-hidden">
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
          </div>

          {/* Product Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label htmlFor="barcode" className="block text-sm font-bold text-gray-700 mb-1">Barcode:</label>
              <input
                type="text"
                id="barcode"
                value={barcode}
                onChange={(e) => setBarcode(e.target.value)}
                placeholder="Enter Barcode"
                className="p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="productCode" className="block text-sm font-bold text-gray-700 mb-1">Product Code:</label>
              <input
                type="text"
                id="productCode"
                value={productCode}
                onChange={(e) => setProductCode(e.target.value)}
                placeholder="Enter Product Code"
                className="p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="productName" className="block text-sm font-bold text-gray-700 mb-1">Product Name:</label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Enter Product Name"
                className="p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>

          {/* Grid Layout for Drinks Interface and Wholesale Info */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            <div className="mt-3">
              <DrinksInterface />
            </div>

            {/* Wholesale Info and Sales Type Switcher */}
            <div className="mt-6">
              {/* Wholesale Info Box */}
              <div className="bg-blue-500 text-white p-6 rounded-lg">
                <h1 className="text-white/60 font-extrabold text-4xl mb-3">Wholesale</h1>
                <p className="py-3">All prices are switched to wholesale.</p>

                {/* Link to Retail Sales */}
                <Link to="/" className="block text-center bg-blue-700 py-2 rounded-md mt-4">
                  View retail sales 
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </div>

              {/* Sales Type and Table Clear Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between mt-8 space-y-4 sm:space-y-0">
                {/* Sales Type Switcher */}
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-gray-700">Sales Type:</span>
                  <button
                    onClick={() => handleSalesTypeChange('Wholesale')}
                    className={`px-3 py-1 rounded-md text-white transition-colors ${
                      salesType === 'Wholesale' ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  >
                    Wholesale
                  </button>
                  <button
                    onClick={() => handleSalesTypeChange('Retail')}
                    className={`px-3 py-1 rounded-md text-white transition-colors ${
                      salesType === 'Retail' ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                  >
                    Retail
                  </button>
                </div>

                {/* Clear Tables Button */}
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-gray-700">Tables:</span>
                  <button
                    onClick={clearTables}
                    className="px-3 py-1 bg-red-500 text-white rounded-md"
                  >
                    Clear Tables
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
};

export default App;
