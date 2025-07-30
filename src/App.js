import './styles/App.css';
import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import DashboardPage from './pages/DashboardPage';

import UserPage from './pages/UserPage';
import OrdersPage from './pages/OrdersPage';
import SettingsPage from './pages/SettingsPage';
import FAQPage from './pages/FAQPage';
import CalendarPage from './pages/CalendarPage';
import ManageTeamPage from './pages/ManageTeamPage';
import ContactInfoPage from './pages/ContactInfoPage';
import ProfilePage from './pages/ProfilePage';
import SupportTicketsPage from './pages/SupportTicketsPage';
import TransactionsPage from './pages/TransactionsPage';
import LoginPage from './pages/LoginPage';

import PrivateRoute from './components/common/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

function App() {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(() => {
    const storedState = localStorage.getItem('sidebarCollapsed');
    return storedState ? JSON.parse(storedState) : false;
  });

  const toggleSidebar = () => {
    setSidebarCollapsed(prevState => {
      const newState = !prevState;
      localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <Router>
      <AppContent isSidebarCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
    </Router>
  );
}

function AppContent({ isSidebarCollapsed, toggleSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Save current path to localStorage on route change
    localStorage.setItem('lastVisitedPath', location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    // Restore last visited path on initial load
    const lastVisitedPath = localStorage.getItem('lastVisitedPath');
    if (lastVisitedPath && lastVisitedPath !== location.pathname && location.pathname === '/') {
      navigate(lastVisitedPath);
    }
  }, []); // Run only once on mount

  return (
    <AuthProvider>
      <div className="flex">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/*" 
            element={
              <PrivateRoute>
                <div className="flex w-full">
                  <Sidebar 
                    isCollapsed={isSidebarCollapsed} 
                    toggleSidebar={toggleSidebar} 
                  />
                  <div className={`flex-1 ${isSidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
                    <Navbar />
                    <Routes>
                      <Route path="/" element={<DashboardPage />} />
                      <Route path="/users" element={<UserPage />} />
                      <Route path="/orders" element={<OrdersPage />} />
                      <Route path="/settings" element={<SettingsPage />} />
                      <Route path="/faq" element={<FAQPage />} />
                      <Route path="/calendar" element={<CalendarPage />} />
                      <Route path="/team" element={<ManageTeamPage />} />
                      <Route path="/contact" element={<ContactInfoPage />} />
                      <Route path="/profile" element={<ProfilePage />} />
                      <Route path="/tickets" element={<SupportTicketsPage />} />
                      <Route path="/transactions" element={<TransactionsPage />} />
                    </Routes>
                  </div>
                </div>
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
