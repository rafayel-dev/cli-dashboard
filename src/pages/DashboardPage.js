import React from 'react';
import StatCardsContainer from '../components/StatCardsContainer';
import ChartComponent from '../components/ChartComponent';
import TableComponent from '../components/TableComponent';

const DashboardPage = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
      <p>Welcome to your dashboard! Here you can see an overview of your data.</p>
      <StatCardsContainer />
      <ChartComponent />
      <TableComponent />
    </div>
  );
};

export default DashboardPage;
