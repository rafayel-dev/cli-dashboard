import React from 'react';

const TransactionsPage = () => {
  const transactions = [
    { id: 'TRN001', type: 'Credit', amount: '500.00', date: '2023-07-25', description: 'Client Payment' },
    { id: 'TRN002', type: 'Debit', amount: '50.00', date: '2023-07-24', description: 'Software Subscription' },
    { id: 'TRN003', type: 'Credit', amount: '1200.00', date: '2023-07-23', description: 'Project Milestone' },
    { id: 'TRN004', type: 'Debit', amount: '75.00', date: '2023-07-22', description: 'Office Supplies' },
  ];

  return (
    <div className="p-4 bg-primary min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-text-primary">Transactions</h2>
      <div className="bg-secondary p-4 rounded-lg shadow-md">
        <table className="min-w-full bg-secondary text-text-primary">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-accent bg-secondary text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Transaction ID</th>
              <th className="py-2 px-4 border-b border-accent bg-secondary text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Type</th>
              <th className="py-2 px-4 border-b border-accent bg-secondary text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Amount</th>
              <th className="py-2 px-4 border-b border-accent bg-secondary text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Date</th>
              <th className="py-2 px-4 border-b border-accent bg-secondary text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={transaction.id} className={`${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'} hover:bg-accent`}>
                <td className="py-2 px-4 text-sm">{transaction.id}</td>
                <td className="py-2 px-4 text-sm">{transaction.type}</td>
                <td className="py-2 px-4 text-sm">${transaction.amount}</td>
                <td className="py-2 px-4 text-sm">{transaction.date}</td>
                <td className="py-2 px-4 text-sm">{transaction.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsPage;
