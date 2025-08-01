import React from 'react';
import StatCard from './StatCard';
import { FaUsers, FaShoppingCart, FaDollarSign, FaChartLine } from 'react-icons/fa';

const StatCardsContainer = () => {
  return (
    <>
      <StatCard 
        title="Total Users" 
        value="2,450" 
        icon={<FaUsers />} 
        color="text-yellow-500"
      />
      <StatCard 
        title="Total Orders" 
        value="1,234" 
        icon={<FaShoppingCart />} 
        color="text-blue-500"
      />
      <StatCard 
        title="Total Revenue" 
        value="$56,789" 
        icon={<FaDollarSign />} 
        color="text-green-500"
      />
      <StatCard 
        title="Growth Rate" 
        value="+12.5%" 
        icon={<FaChartLine />} 
        color="text-red-500"
      />
    </>
  );
};

export default StatCardsContainer;
