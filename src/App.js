import './styles/App.css';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
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

import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <Router>
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
    </Router>
  );
}

export default App;
