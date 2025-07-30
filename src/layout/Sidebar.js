import React from 'react';
import {
  FaTachometerAlt, FaUsers, FaBox, FaCog, FaQuestionCircle,
  FaCalendarAlt, FaUsersCog, FaEnvelope, FaTicketAlt, FaExchangeAlt
} from 'react-icons/fa';
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: <FaTachometerAlt /> },
    { path: '/users', label: 'Users', icon: <FaUsers /> },
    { path: '/orders', label: 'Orders', icon: <FaBox /> },
    { path: '/settings', label: 'Settings', icon: <FaCog /> },
    { path: '/faq', label: 'FAQ Page', icon: <FaQuestionCircle /> },
    { path: '/calendar', label: 'Calendar', icon: <FaCalendarAlt /> },
    { path: '/team', label: 'Manage Team', icon: <FaUsersCog /> },
    { path: '/contact', label: 'Contact Information', icon: <FaEnvelope /> },
    { path: '/tickets', label: 'Support Tickets', icon: <FaTicketAlt /> },
    { path: '/transactions', label: 'Transactions', icon: <FaExchangeAlt /> },
  ];

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        {isCollapsed ? <FiMenu /> : <IoClose />}
      </div>

      {!isCollapsed && (
        <div className="profile">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Profile"
            className="profile-img"
          />
          <h3 className="profile-name">John Doe</h3>
          <p className="profile-title">Administrator</p>
        </div>
      )}

      <nav className="nav-menu">
        <ul>
          {menuItems.map(({ path, label, icon }) => (
            <li key={path}>
              <Link
                to={path}
                className={location.pathname === path ? 'active' : ''}
              >
                {icon}
                {!isCollapsed && <span>{label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
