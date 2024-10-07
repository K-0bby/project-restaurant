import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Mail, Bell, Flag, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Records = () => {
  // State to store records (dummy data for now)
  const [records, setRecords] = useState([
    { date: '25th Sept, 2024', time: '11:17:42 AM', role: 'Cashier', amount: 30.00 },
    { date: '24th Sept, 2024', time: '01:44:50 PM', role: 'Cashier', amount: 1813.00 },
    // Add more dummy records as needed
  ]);

  // State to control the modal popup (for adding new records)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to handle form data for adding new records
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    role: 'Cashier', // Default value for role
    amount: 0,       // Default amount set to 0
  });

  // Function to handle input change in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update form data state
  };

  // Function to handle form submission and add new record
  const handleSubmit = () => {
    // Update the records state by adding new record (convert amount to float)
    setRecords([...records, { ...formData, amount: parseFloat(formData.amount) || 0 }]);
    
    // Close modal after submission
    setIsModalOpen(false);
    
    // Reset form data after submission
    setFormData({
      date: '',
      time: '',
      role: 'Cashier',
      amount: 0,
    });
  };

  return (
    <main className="max-w-screen-7xl mx-auto relative overflow-hidden">
      <div className="flex h-screen">
        {/* Sidebar component */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 py-6 px-4 sm:px-8 lg:px-10 overflow-y-scroll">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6 flex-row-reverse">
            {/* Header with Mail, Notification, Flag, and User icons */}
            <div className="flex space-x-6">
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

            {/* Add New Record Button */}
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => setIsModalOpen(true)} // Open modal when button is clicked
            >
              Add New Record
            </button>
          </div>

          {/* Records Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Time</th>
                  <th className="px-4 py-2 text-left">Role</th>
                  <th className="px-4 py-2 text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-2">{record.date}</td>
                    <td className="px-4 py-2">{record.time}</td>
                    <td className="px-4 py-2">{record.role}</td>
                    <td className="px-4 py-2">
                      {/* Ensure amount is a number before calling toFixed */}
                      {typeof record.amount === 'number' 
                        ? record.amount.toFixed(2)  // Format amount to 2 decimal places
                        : 'N/A'}                     
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Modal Popup for Adding New Record */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-lg font-bold mb-4">Add New Record</h2>
                
                {/* Form to input new record details */}
                <div className="mb-4">
                  <label className="block mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full border px-3 py-2"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block mb-2">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full border px-3 py-2"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block mb-2">Role</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full border px-3 py-2"
                  >
                    <option value="Cashier">Cashier</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block mb-2">Amount</label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    className="w-full border px-3 py-2"
                  />
                </div>

                {/* Modal Action Buttons (Cancel / Add) */}
                <div className="flex justify-end">
                  <button
                    className="bg-gray-300 py-2 px-4 rounded mr-2"
                    onClick={() => setIsModalOpen(false)} // Close modal on cancel
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                    onClick={handleSubmit} // Submit form and add new record
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Records;
