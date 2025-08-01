import React from 'react';

const OrdersPage = () => {
  const orders = [
    { id: '#ORD001', customer: 'John Doe', date: '2023-07-20', total: '120.00', status: 'Completed' },
    { id: '#ORD002', customer: 'Jane Smith', date: '2023-07-21', total: '85.50', status: 'Pending' },
    { id: '#ORD003', customer: 'Peter Jones', date: '2023-07-22', total: '210.75', status: 'Shipped' },
    { id: '#ORD004', customer: 'Alice Brown', date: '2023-07-23', total: '50.00', status: 'Completed' },
    { id: '#ORD005', customer: 'Bob White', date: '2023-07-24', total: '300.20', status: 'Processing' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-text-primary">Order Management</h2>
      <div className="bg-secondary p-4 rounded-lg shadow-md">
        <table className="min-w-full bg-secondary text-text-primary">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-accent text-left text-xs font-semibold uppercase tracking-wider">Order ID</th>
              <th className="py-2 px-4 border-b border-accent text-left text-xs font-semibold uppercase tracking-wider">Customer</th>
              <th className="py-2 px-4 border-b border-accent text-left text-xs font-semibold uppercase tracking-wider">Date</th>
              <th className="py-2 px-4 border-b border-accent text-left text-xs font-semibold uppercase tracking-wider">Total</th>
              <th className="py-2 px-4 border-b border-accent text-left text-xs font-semibold uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id} className={`${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'} hover:bg-accent`}>
                <td className="py-2 px-4 text-sm">{order.id}</td>
                <td className="py-2 px-4 text-sm">{order.customer}</td>
                <td className="py-2 px-4 text-sm">{order.date}</td>
                <td className="py-2 px-4 text-sm">${order.total}</td>
                <td className="py-2 px-4 text-sm">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;
