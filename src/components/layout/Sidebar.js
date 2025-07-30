import React from 'react';
import { FaTachometerAlt, FaUsers, FaBox, FaCog, FaQuestionCircle, FaCalendarAlt, FaUsersCog, FaEnvelope, FaChevronLeft, FaChevronRight, FaTicketAlt, FaExchangeAlt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const location = useLocation();

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
      </div>
      {!isCollapsed && (
        <div className="profile">
          <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile" className="profile-img" />
          <h3 className="profile-name">John Doe</h3>
          <p className="profile-title">Administrator</p>
        </div>
      )}
      <nav className="nav-menu">
        <ul>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}><FaTachometerAlt /><span>{!isCollapsed && 'Dashboard'}</span></Link></li>
          <li><Link to="/users" className={location.pathname === '/users' ? 'active' : ''}><FaUsers /><span>{!isCollapsed && 'Users'}</span></Link></li>
          <li><Link to="/orders" className={location.pathname === '/orders' ? 'active' : ''}><FaBox /><span>{!isCollapsed && 'Orders'}</span></Link></li>
          <li><Link to="/settings" className={location.pathname === '/settings' ? 'active' : ''}><FaCog /><span>{!isCollapsed && 'Settings'}</span></Link></li>
          <li><Link to="/faq" className={location.pathname === '/faq' ? 'active' : ''}><FaQuestionCircle /><span>{!isCollapsed && 'FAQ Page'}</span></Link></li>
          <li><Link to="/calendar" className={location.pathname === '/calendar' ? 'active' : ''}><FaCalendarAlt /><span>{!isCollapsed && 'Calendar'}</span></Link></li>
          <li><Link to="/team" className={location.pathname === '/team' ? 'active' : ''}><FaUsersCog /><span>{!isCollapsed && 'Manage Team'}</span></Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}><FaEnvelope /><span>{!isCollapsed && 'Contact Information'}</span></Link></li>
          <li><Link to="/tickets" className={location.pathname === '/tickets' ? 'active' : ''}><FaTicketAlt /><span>{!isCollapsed && 'Support Tickets'}</span></Link></li>
          <li><Link to="/transactions" className={location.pathname === '/transactions' ? 'active' : ''}><FaExchangeAlt /><span>{!isCollapsed && 'Transactions'}</span></Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
