import React, { useState, useContext } from 'react';
import { FaBell, FaCog, FaUser } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Dashboard';
      case '/users':
        return 'Users';
      case '/orders':
        return 'Orders';
      case '/settings':
        return 'Settings';
      case '/faq':
        return 'FAQ Page';
      case '/calendar':
        return 'Calendar';
      case '/team':
        return 'Manage Team';
      case '/contact':
        return 'Contact Information';
      case '/profile':
        return 'My Profile';
      case '/tickets':
        return 'Support Tickets';
      case '/transactions':
        return 'Transactions';
      default:
        return 'Dashboard';
    }
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowProfileMenu(false); // Close profile menu if open
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
    setShowNotifications(false); // Close notifications if open
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-50 p-4 text-white bg-gray-800">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-lg font-bold">
          {getPageTitle()}
        </div>
        <div className="relative flex items-center space-x-4">
          <FaBell className="text-xl cursor-pointer" onClick={toggleNotifications} />
          {showNotifications && (
            <div className="absolute right-0 z-50 w-64 py-2 text-gray-800 bg-white rounded-md shadow-lg top-10">
              <div className="px-4 py-2 font-bold border-b border-gray-200">Notifications</div>
              <div className="px-4 py-2 border-b border-gray-200">New message from John Doe.</div>
              <div className="px-4 py-2 border-b border-gray-200">Your report is ready.</div>
              <div className="px-4 py-2">5 new users registered.</div>
            </div>
          )}
          <FaCog className="text-xl cursor-pointer" />
          <div className="relative">
            <FaUser className="text-xl cursor-pointer" onClick={toggleProfileMenu} />
            {showProfileMenu && (
              <div className="absolute right-0 z-50 w-48 py-2 text-gray-800 bg-white rounded-md shadow-lg top-10">
                <div className="px-4 py-2 font-bold border-b border-gray-200">John Doe</div>
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleProfileMenu}>Profile</Link>
                <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleProfileMenu}>Settings</Link>
                <button onClick={handleLogout} className="block w-full px-4 py-2 text-left hover:bg-gray-100">Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
