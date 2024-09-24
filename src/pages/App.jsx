import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import { Mail, Bell, Flag, ArrowRight } from 'lucide-react';
import DrinksInterface from '@/components/DrinksInterface';
import { Link } from 'react-router-dom';


const App = () => {

  return (
    <main className="max-w-screen-xl  relative">
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Header Icons */}
        <div className="flex space-x-6 absolute top-4 right-6 my-2 mx-2">
          <button className="text-black">
            <Mail className="w-4 h-4" />
          </button>
          <button className="text-black">
            <Bell className="w-4 h-4" />
          </button>
          <button className="text-black">
            <Flag className="w-4 h-4" />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 py-16 px-5">

          {/* Product Input Fields */}
          <div className="flex space-x-3">
            <div className="w-full">
              <label htmlFor="barcode" className="block text-sm font-bold text-gray-700 mb-1">Barcode:</label>
              <input
                type="text"
                id="barcode"
                value={barcode}
                onChange={(e) => setBarcode(e.target.value)}
                placeholder="Enter Barcode"
                className="p-1.5 border border-gray-300 rounded-sm w-full"
              />
            </div>

            <div className="w-full">
              <label htmlFor="productCode" className="block text-sm font-bold text-gray-700 mb-1">Product Code:</label>
              <input
                type="text"
                id="productCode"
                value={productCode}
                onChange={(e) => setProductCode(e.target.value)}
                placeholder="Enter Product Code"
                className="p-1.5 border border-gray-300 rounded-sm w-full"
              />
            </div>

            <div className="w-full">
              <label htmlFor="productName" className="block text-sm font-bold text-gray-700 mb-1">Product Name:</label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Enter Product Name"
                className="p-1.5 border border-gray-300 rounded-sm w-full"
              />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-10'>
            {/* Drinks Interface */}
            <div className="mt-6">
              <DrinksInterface />
            </div>

            <div className='mt-9 '>
              <div className='bg-blue-500 text-white px-2'>
                <h1 className='text-white/50 font-extrabold text-4xl'>Wholesale</h1>
                <p className='py-3'>All prices are switched to wholesale</p>

                <div className='flex items-center justify-center bg-blue-800 w-full'>
                  <p className='flex items-center  gap-2 text-center'>View retail sales <ArrowRight className='w-4 h-4 border rounded-full bg-slate-400'/></p>
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
