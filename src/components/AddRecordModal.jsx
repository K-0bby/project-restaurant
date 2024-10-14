
// AddRecordModal.js
import React from 'react';

const AddRecordModal = ({ isOpen, onClose, onSubmit, formData, handleInputChange }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-bold mb-4">Add New Record</h2>

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

        <div className="flex justify-end">
          <button
            className="bg-gray-300 py-2 px-4 rounded mr-2"
            onClick={onClose} // Close modal on cancel
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={onSubmit} // Submit form and add new record
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRecordModal;
