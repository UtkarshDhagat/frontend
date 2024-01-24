import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import logo from '../src/assets/logo.png'; // Ensure this import matches the file name and location

const Sidebar = () => {
  const navigate = useNavigate();

  // Function to handle navigation to the FamilyPage
  const navigateToFamily = () => {
    navigate('/family'); // Update this to your family page route
  };

  // Function to handle navigation to the TimelinePage
  const navigateToTimeline = () => {
    navigate('/timeline'); // Update this to your timeline page route
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="sidebar-menu">
        <p className="menu-heading">MENU</p>
        <button className="menu-item dashboard" onClick={navigateToFamily}>Dashboard</button>
        <button className="menu-item records" onClick={navigateToTimeline}>Records</button>
        <button className="menu-item analytics">Analytics</button>
        <button className="menu-item appointments">Appointments</button>
      </div>
      <div className="sidebar-general">
        <p className="menu-heading">GENERAL</p>
        <button className="menu-item settings">Settings</button>
        <button className="menu-item support">Support</button>
      </div>
    </aside>
  );
};

export default Sidebar;
