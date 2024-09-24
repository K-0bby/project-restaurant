import React from 'react';

const Header = ({ salesType, onSalesTypeChange }) => {
  return (
    <div className="bg-teal-500 p-4 text-white flex justify-between items-center">
      <div>
        <button 
          className={`mr-2 px-4 py-2 ${salesType === 'wholesale' ? 'bg-white text-teal-500' : 'bg-teal-500 text-white'} rounded-md`}
          onClick={() => onSalesTypeChange('wholesale')}
        >
          Wholesale
        </button>
        <button 
          className={`px-4 py-2 ${salesType === 'retail' ? 'bg-white text-teal-500' : 'bg-teal-500 text-white'} rounded-md`}
          onClick={() => onSalesTypeChange('retail')}
        >
          Retail
        </button>
      </div>
      <button className="bg-red-500 px-4 py-2 rounded-md">Clear Sales</button>
    </div>
  );
};

export default Header;
