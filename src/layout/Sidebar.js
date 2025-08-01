import React from 'react';
import {
  FaTachometerAlt, FaUsers, FaBox, FaCog, FaQuestionCircle,
  FaCalendarAlt, FaUsersCog, FaEnvelope, FaTicketAlt, FaExchangeAlt
} from 'react-icons/fa';
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';

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
    <div className={`bg-secondary text-text-primary transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex items-center justify-between p-4">
        <h1 className={`text-2xl font-bold ${isCollapsed ? 'hidden' : 'block'}`}>Admin</h1>
        <button onClick={toggleSidebar} className="text-2xl">
          {isCollapsed ? <FiMenu /> : <IoClose />}
        </button>
      </div>

      <div className="flex flex-col items-center mt-8">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Profile"
          className={`object-cover rounded-full transition-all duration-300 ${isCollapsed ? 'w-12 h-12' : 'w-24 h-24'}`}
        />
        {!isCollapsed && (
          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-sm text-text-secondary">Administrator</p>
          </div>
        )}
      </div>

      <nav className="mt-8">
        <ul>
          {menuItems.map(({ path, label, icon }) => (
            <li key={path}>
              <Link
                to={path}
                className={`flex items-center p-4 transition-colors duration-200 ${location.pathname === path ? 'bg-accent text-highlight' : 'hover:bg-accent'} ${isCollapsed ? 'justify-center text-2xl' : 'text-lg'}`}>
                <span className={`${isCollapsed ? '' : 'mr-4'}`}>{icon}</span>
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
