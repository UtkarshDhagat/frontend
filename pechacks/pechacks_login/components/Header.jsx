import React from 'react';
import './Header.css'; // Importing the CSS file
import searchIcon from '../public/search.png'; // Importing the search icon
import messageIcon from '../public/1.png'; // Importing the message icon
import alertIcon from '../public/2.png'; // Importing the alert icon
import exitIcon from '../public/3.png'; // Importing the exit icon

const Header = ({ toggleSidebar }) => {
  const handleSearch = () => {
    // Logic to handle search functionality
    console.log("Search initiated");
  };

  // Function to format the current date
  const formatDate = () => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  };

  return (
    <header>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <button onClick={handleSearch} className="search-button">
          <img src={searchIcon} alt="Search" className="search-icon" />
        </button>
      </div>
      <div className="header-right">
        <span className="date-display">{formatDate()}</span>
        <button className="icon-button message-icon">
          <img src={messageIcon} alt="Message" />
        </button>
        <button className="icon-button alert-icon">
          <img src={alertIcon} alt="Alert" />
        </button>
        <button className="icon-button exit-icon">
          <img src={exitIcon} alt="Exit" />
        </button>
      </div>
    </header>
  );
};

export default Header;
