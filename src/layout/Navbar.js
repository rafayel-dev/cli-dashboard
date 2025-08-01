import React, { useState, useContext } from 'react';
import { FaBell, FaCog, FaUser, FaSun, FaMoon } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

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
    <nav className="sticky top-0 z-50 p-4 bg-secondary text-text-primary">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-2xl font-bold font-serif">
          {getPageTitle()}
        </div>
        <div className="relative flex items-center space-x-6">
          <button onClick={toggleTheme} className="text-2xl cursor-pointer hover:text-highlight transition-colors duration-200">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <div className="relative">
            <FaBell className="text-2xl cursor-pointer hover:text-highlight transition-colors duration-200" onClick={toggleNotifications} />
            {showNotifications && (
              <div className="absolute right-0 z-50 w-64 py-2 mt-2 rounded-md shadow-lg bg-primary text-text-primary">
                <div className="px-4 py-2 font-bold border-b border-accent">Notifications</div>
                <div className="px-4 py-2 border-b border-accent hover:bg-accent">New message from John Doe.</div>
                <div className="px-4 py-2 border-b border-accent hover:bg-accent">Your report is ready.</div>
                <div className="px-4 py-2 hover:bg-accent">5 new users registered.</div>
              </div>
            )}
          </div>
          <FaCog className="text-2xl cursor-pointer hover:text-highlight transition-colors duration-200" />
          <div className="relative">
            <FaUser className="text-2xl cursor-pointer hover:text-highlight transition-colors duration-200" onClick={toggleProfileMenu} />
            {showProfileMenu && (
              <div className="absolute right-0 z-50 w-48 py-2 mt-2 rounded-md shadow-lg bg-primary text-text-primary">
                <div className="px-4 py-2 font-bold border-b border-accent">John Doe</div>
                <Link to="/profile" className="block px-4 py-2 hover:bg-accent" onClick={toggleProfileMenu}>Profile</Link>
                <Link to="/settings" className="block px-4 py-2 hover:bg-accent" onClick={toggleProfileMenu}>Settings</Link>
                <button onClick={handleLogout} className="block w-full px-4 py-2 text-left hover:bg-accent">Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
