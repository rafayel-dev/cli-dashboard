import React from 'react';

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md flex items-center justify-between ${color}`}>
      <div>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
      </div>
      <div className="text-5xl text-gray-400">
        {icon}
      </div>
    </div>
  );
};

export default StatCard;
