import React from 'react';
import StatCardsContainer from '../components/common/StatCardsContainer';
import ChartComponent from '../components/common/ChartComponent';
import TableComponent from '../components/common/TableComponent';

const DashboardPage = () => {
  return (
    <div className="p-8 bg-primary min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCardsContainer />
      </div>
      <div className="mt-8">
        <ChartComponent />
      </div>
      <div className="mt-8">
        <TableComponent />
      </div>
    </div>
  );
};

export default DashboardPage;
