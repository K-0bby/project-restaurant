import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { List, Grid } from 'lucide-react'; // Assuming these icons are available

const DrinksInterface = () => {
  const [selectedTab, setSelectedTab] = useState('Beer');
  const [currentPage, setCurrentPage] = useState(1);
  const [drinksData, setDrinksData] = useState([]);
  const [viewType, setViewType] = useState(''); // 'grid' or 'list'
  const itemsPerPage = 15;

  useEffect(() => {
    // Load view type and selected tab from local storage
    const savedViewType = localStorage.getItem('viewType');
    const savedTab = localStorage.getItem('selectedTab');

    // Set view type from local storage if it exists
    if (savedViewType) {
      setViewType(savedViewType);
    }

    // Set selected tab from local storage if it exists
    if (savedTab) {
      setSelectedTab(savedTab);
    }
 
    // Fetch drinks data
    fetch('/drinks.json')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setDrinksData(data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      })
      .catch((error) => console.error('Error fetching drinks data:', error));
  }, []);

  useEffect(() => {
    // Save view type to local storage whenever it changes
    localStorage.setItem('viewType', viewType);
  }, [viewType]);

  useEffect(() => {
    // Save selected tab to local storage whenever it changes
    localStorage.setItem('selectedTab', selectedTab);
  }, [selectedTab]);

  const drinks = Array.isArray(drinksData)
    ? drinksData.filter(drink => drink.category === selectedTab)
    : [];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDrinks = drinks.slice(indexOfFirstItem, indexOfLastItem);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setCurrentPage(1); // Reset to first page on tab change
  };

  const handleToggleView = () => {
    setViewType(prevType => (prevType === 'grid' ? 'list' : 'grid'));
  };

  return (
    <div className="max-w-screen-7xl mx-auto mt-3 border-2 rounded">
      <Tabs value={selectedTab} onValueChange={handleTabChange}>
        <div className="flex justify-between items-center mb-2">
          <TabsList className="flex justify-start space-x-4 flex-1">
            <TabsTrigger value="Beer" className='rounded-sm'>Beer</TabsTrigger>
            <TabsTrigger value="Wine & Spirits">Wine & Spirits</TabsTrigger>
            <TabsTrigger value="Tots">Tots</TabsTrigger>
            <TabsTrigger value="Soft Drinks">Soft Drinks</TabsTrigger>
            <TabsTrigger value="Other">Other</TabsTrigger>
          </TabsList>

          {/* Toggle View Button with Labels */}
          <div className="flex items-center">
            <button onClick={handleToggleView} className="p-2 flex items-center">
              {viewType === 'grid' ? <List size={24} /> : <Grid size={24} />}
              {/* Optional: display view type label */}
              {/* <span className="ml-1 text-sm">{viewType === 'grid' ? 'List View' : 'Grid View'}</span> */}
            </button>
          </div>
        </div>

        <TabsContent value={selectedTab}>
          <div className="drink-container scrollbar overflow-x-auto max-h-[300px] overflow-y-auto">
            {currentDrinks.length === 0 ? (
              <p className="text-center text-gray-500">No drinks available.</p>
            ) : (
              viewType === 'grid' ? (
                <div className="grid grid-cols-4 gap-4">
                  {currentDrinks.map((drink, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <img
                        src={drink.img}
                        alt={drink.name}
                        className="w-28 h-24 rounded-full object-cover mb-2"
                      />
                      <p className="text-sm text-center">{drink.name}</p>
                      <p className="text-sm text-center text-gray-500">Qty: {drink.qty}</p>
                      <p className="text-sm text-center text-gray-500">{drink.price}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <table className="min-w-full border-collapse border border-gray-200">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">Image</th>
                      <th className="border border-gray-300 px-4 py-2">Name</th>
                      <th className="border border-gray-300 px-4 py-2">Qty</th>
                      <th className="border border-gray-300 px-4 py-2">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentDrinks.map((drink, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="border border-gray-300 px-4 py-2">
                          <img
                            src={drink.img}
                            alt={drink.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{drink.name}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center text-gray-500">{drink.qty}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center text-gray-500">{drink.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-end mt-5 space-x-1 px-3 pb-2">
            {[...Array(Math.ceil(drinks.length / itemsPerPage)).keys()].map(page => (
              <button
                key={page + 1}
                className={`px-4 w-10 h-10 border rounded ${currentPage === page + 1 ? 'bg-blue-500 text-white' : 'border-gray-300'}`}
                onClick={() => setCurrentPage(page + 1)}
              >
                {page + 1}
              </button>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DrinksInterface;
