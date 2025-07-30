import React, { useState } from 'react';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    appName: 'My Dashboard App',
    language: 'English',
    timeZone: 'UTC-5 (Eastern Time)',
    emailNotifications: true,
    pushNotifications: false,
    theme: 'Light',
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setSettings(prevSettings => ({
      ...prevSettings,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = () => {
    alert('Settings saved!');
    console.log('Saved Settings:', settings);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="appName" className="block text-gray-700 text-sm font-bold mb-2">App Name:</label>
          <input type="text" id="appName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={settings.appName} onChange={handleChange} placeholder="My Dashboard App" />
        </div>

        <div className="mb-4">
          <label htmlFor="language" className="block text-gray-700 text-sm font-bold mb-2">Language:</label>
          <select id="language" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={settings.language} onChange={handleChange}>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="timeZone" className="block text-gray-700 text-sm font-bold mb-2">Time Zone:</label>
          <select id="timeZone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={settings.timeZone} onChange={handleChange}>
            <option>UTC-5 (Eastern Time)</option>
            <option>UTC-8 (Pacific Time)</option>
            <option>UTC+0 (Greenwich Mean Time)</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Notification Preferences:</label>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="emailNotifications" className="mr-2 leading-tight" checked={settings.emailNotifications} onChange={handleChange} />
            <span className="text-sm">Email Notifications</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="pushNotifications" className="mr-2 leading-tight" checked={settings.pushNotifications} onChange={handleChange} />
            <span className="text-sm">Push Notifications</span>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="theme" className="block text-gray-700 text-sm font-bold mb-2">Theme:</label>
          <select id="theme" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={settings.theme} onChange={handleChange}>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>

        <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
