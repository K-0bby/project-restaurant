import React from 'react';
import { Mail, Bell, Flag, User } from 'lucide-react';
import { useHistory } from 'react-router-dom'; // If using React Router

const HeaderButtons = () => {
  const history = useHistory(); // Using React Router for navigation

  // Function to handle Mail button click
  const handleMailClick = () => {
    // Example: Redirect to a mail page or open mail client
    window.location.href = "mailto:example@example.com"; // Opens the user's mail client
  };

  // Function to handle Notifications button click
  const handleNotificationClick = () => {
    // Example: Navigate to the notifications page
    history.push('/notifications'); // Redirects to the notifications page
  };

  // Function to handle Report button click
  const handleFlagClick = () => {
    // Example: Open a report modal or redirect to a report page
    alert("Report an issue!"); // This can be replaced with a modal trigger
  };

  // Function to handle User button click
  const handleUserClick = () => {
    // Example: Navigate to the user profile page
    history.push('/profile'); // Redirects to the user profile page
  };

  return (
    <div className="flex justify-end space-x-6 mb-6">
      <button className="text-black" onClick={handleMailClick}>
        <Mail className="w-5 h-5" />
      </button>
      <button className="text-black" onClick={handleNotificationClick}>
        <Bell className="w-5 h-5" />
      </button>
      <button className="text-black" onClick={handleFlagClick}>
        <Flag className="w-5 h-5" />
      </button>
      <button className="text-black" onClick={handleUserClick}>
        <User className="w-5 h-5" />
      </button>
    </div>
  );
};

export default HeaderButtons;
