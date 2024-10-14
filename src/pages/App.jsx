import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { Mail, Bell, Flag, ArrowRight, User } from 'lucide-react';
import DrinksInterface from '@/components/DrinksInterface';
import { Link } from 'react-router-dom';
import SalesComponent from '@/components/SalesInfo';


const App = () => {
  // States for form inputs and sales type
  const [barcode, setBarcode] = useState('');
  const [productCode, setProductCode] = useState('');
  const [productName, setProductName] = useState('');
  const [salesType, setSalesType] = useState('Wholesale');
  const [selectedTable, setSelectedTable] = useState('');

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
            <button className="text-black">
              <User className="w-5 h-5" />
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
                className="p-2 border border-gray-300 rounded w-full"
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
                className="p-2 border border-gray-300 rounded w-full"
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
                className="p-2 border border-gray-300 rounded w-full"
              />
            </div>
          </div>

          {/* Grid Layout for Drinks Interface and Wholesale Info */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="col-span-2">
              <DrinksInterface />
            </div>

            {/* Wholesale Info and Sales Type Switcher */}
            <div className="mt-3 w-full xl:w-[360px] flex flex-col justify-between rounded pr-10 mx-auto">
              <div className="bg-blue-500 text-white p-6 rounded">
                <h1 className="text-white/80 font-extrabold text-4xl mb-3">Wholesale</h1>
                <p className="py-3">All prices are switched to wholesale.</p>

                {/* Link to Retail Sales */}
                <Link to="/" className="block text-center bg-blue-700 py-2 rounded mt-4">
                  View retail sales 
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </div>

              {/* Sales Type and Table Clear Buttons */}
              <div className="mt-8 space-y-6">
                {/* Sales Type Switcher */}
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-700">Sales Type:</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleSalesTypeChange('Wholesale')}
                      className={`px-3 py-1 rounded text-white transition-colors ${
                        salesType === 'Wholesale' ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                    >
                      Wholesale
                    </button>
                    <button
                      onClick={() => handleSalesTypeChange('Retail')}
                      className={`px-3 py-1 rounded text-white transition-colors ${
                        salesType === 'Retail' ? 'bg-orange-500' : 'bg-gray-300'
                      }`}
                    >
                      Retail
                    </button>
                  </div>
                </div>

                {/* Clear Tables Button */}
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-700">Tables:</span>
                  <button
                    onClick={clearTables}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Clear Tables
                  </button>
                </div>

                {/* Dropdown for Table Selection */}
                <div>
                  <select
                    id="tables"
                    value={selectedTable}
                    onChange={(e) => setSelectedTable(e.target.value)}
                    className="p-2 border border-gray-300 rounded w-full bg-white outline-none"
                  >
                    <option value="">Select Table</option>
                    <option value="table1">Table 1</option>
                    <option value="table2">Table 2</option>
                    <option value="table3">Table 3</option>
                    <option value="table4">Table 4</option>
                  </select>
                </div>
              </div>

              {/* Sales Component Section */}
              <div className="mt-6">
                <SalesComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
