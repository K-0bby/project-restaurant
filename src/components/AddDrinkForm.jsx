import React, { useState } from "react";

const AddDrinkForm = ({ onAddDrink }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [barcode, setBarcode] = useState("");
  const [available, setAvailable] = useState(true);
  const [stockCount, setStockCount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (name && price && barcode && stockCount) {
      const stockValue = parseFloat(price) * parseInt(stockCount);
      
      // Prepare drink object
      const newDrink = {
        name,
        available,
        stockCount: parseInt(stockCount),
        stockValue,
        barcode,
      };

      // Call the function passed from the parent to update the inventory
      onAddDrink(newDrink);

      // Optionally, you could also send this data to a backend
      /*
      try {
        const response = await fetch('/api/drinks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newDrink),
        });
        if (!response.ok) {
          throw new Error('Failed to add drink');
        }
        const addedDrink = await response.json();
        onAddDrink(addedDrink); // Update the local state with the added drink from the backend
      } catch (error) {
        console.error('Error adding drink:', error);
      }
      */

      // Reset form fields
      setName("");
      setPrice("");
      setBarcode("");
      setStockCount("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-white rounded border shadow-sm">
      <h2 className="text-lg font-bold mb-4">Add New Drink</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Drink Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Barcode</label>
          <input
            type="text"
            value={barcode}
            onChange={(e) => setBarcode(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Stock Count</label>
          <input
            type="number"
            value={stockCount}
            onChange={(e) => setStockCount(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Availability</label>
          <select
            value={available}
            onChange={(e) => setAvailable(e.target.value === 'true')}
            className="w-full p-2 border rounded"
          >
            <option value="true">Available</option>
            <option value="false">Unavailable</option>
          </select>
        </div>
      </div>
      <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Add Drink
      </button>
    </form>
  );
};

export default AddDrinkForm;
