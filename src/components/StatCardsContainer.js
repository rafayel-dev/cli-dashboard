import React from 'react';
import StatCard from './StatCard';
import { FaUsers, FaShoppingCart, FaDollarSign, FaChartLine } from 'react-icons/fa';

const StatCardsContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard 
        title="Total Users" 
        value="2,450" 
        icon={<FaUsers />} 
        color="border-b-4 border-yellow-500"
      />
      <StatCard 
        title="Total Orders" 
        value="1,234" 
        icon={<FaShoppingCart />} 
        color="border-b-4 border-blue-500"
      />
      <StatCard 
        title="Total Revenue" 
        value="$56,789" 
        icon={<FaDollarSign />} 
        color="border-b-4 border-green-500"
      />
      <StatCard 
        title="Growth Rate" 
        value="+12.5%" 
        icon={<FaChartLine />} 
        color="border-b-4 border-red-500"
      />
    </div>
  );
};

export default StatCardsContainer;
