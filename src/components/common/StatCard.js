import React from 'react';

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className={`bg-secondary p-6 rounded-lg shadow-lg flex items-center justify-between transform hover:scale-105 transition-transform duration-300`}>
      <div>
        <h3 className="text-lg font-semibold text-text-secondary">{title}</h3>
        <p className="text-3xl font-bold text-highlight mt-2">{value}</p>
      </div>
      <div className={`text-5xl ${color}`}>
        {icon}
      </div>
    </div>
  );
};

export default StatCard;
