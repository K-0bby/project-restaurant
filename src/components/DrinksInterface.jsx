import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

const DrinksInterface = () => {
  const [selectedTab, setSelectedTab] = useState('Beer');
  const [currentPage, setCurrentPage] = useState(1);
  const [drinksData, setDrinksData] = useState([]);
  const itemsPerPage = 15;

  useEffect(() => {
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

  const drinks = Array.isArray(drinksData) 
    ? drinksData.filter(drink => drink.category === selectedTab) 
    : [];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDrinks = drinks.slice(indexOfFirstItem, indexOfLastItem);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setCurrentPage(1);
  };

  return (
    <div className="max-w-screen-7xl mx-auto mt-3 border-2">
      <Tabs value={selectedTab} onValueChange={handleTabChange}>
        <div className="relative top-0 bg-white z-10">
          <TabsList className="flex justify-start space-x-4">
            <TabsTrigger value="Beer" className='rounded-sm'>Beer</TabsTrigger>
            <TabsTrigger value="Wine & Spirits">Wine & Spirits</TabsTrigger>
            <TabsTrigger value="Tots">Tots</TabsTrigger>
            <TabsTrigger value="Soft Drinks">Soft Drinks</TabsTrigger>
            <TabsTrigger value="Other">Other</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value={selectedTab}>
          <div className="drink-container scrollbar overflow-x-auto max-h-[300px] overflow-y-auto">
            <div className="grid grid-cols-4 gap-4">
              {currentDrinks.map((drink, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={drink.img}
                    alt={drink.name}
                    className="w-24 h-24 rounded-full object-cover mb-2"
                  />
                  <p className="text-sm text-center">{drink.name}</p>
                  <p className="text-sm text-center text-gray-500">Qty: {drink.qty}</p>
                  <p className="text-sm text-center text-gray-500">{drink.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-end mt-5 space-x-2 px-3 pb-2">
            {[...Array(Math.ceil(drinks.length / itemsPerPage)).keys()].map(page => (
              <button
                key={page + 1}
                className={`px-4 w-10 h-10 border ${currentPage === page + 1 ? 'bg-blue-500 text-white' : 'border-gray-300'}`}
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
