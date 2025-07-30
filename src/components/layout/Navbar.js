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
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          {getPageTitle()}
        </div>
        <div className="flex items-center space-x-4 relative">
          <FaBell className="cursor-pointer text-xl" onClick={toggleNotifications} />
          {showNotifications && (
            <div className="absolute top-10 right-0 bg-white text-gray-800 rounded-md shadow-lg w-64 py-2 z-50">
              <div className="px-4 py-2 font-bold border-b border-gray-200">Notifications</div>
              <div className="px-4 py-2 border-b border-gray-200">New message from John Doe.</div>
              <div className="px-4 py-2 border-b border-gray-200">Your report is ready.</div>
              <div className="px-4 py-2">5 new users registered.</div>
            </div>
          )}
          <FaCog className="cursor-pointer text-xl" />
          <div className="relative">
            <FaUser className="cursor-pointer text-xl" onClick={toggleProfileMenu} />
            {showProfileMenu && (
              <div className="absolute top-10 right-0 bg-white text-gray-800 rounded-md shadow-lg w-48 py-2 z-50">
                <div className="px-4 py-2 font-bold border-b border-gray-200">John Doe</div>
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleProfileMenu}>Profile</Link>
                <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleProfileMenu}>Settings</Link>
                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
