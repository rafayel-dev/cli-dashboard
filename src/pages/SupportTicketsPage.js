import React from 'react';

const SupportTicketsPage = () => {
  const tickets = [
    { id: '#TKT001', subject: 'Login Issue', status: 'Open', date: '2023-07-25' },
    { id: '#TKT002', subject: 'Payment Error', status: 'Closed', date: '2023-07-24' },
    { id: '#TKT003', subject: 'Feature Request', status: 'Pending', date: '2023-07-23' },
    { id: '#TKT004', subject: 'Account Deactivation', status: 'Open', date: '2023-07-22' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Support Tickets</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Ticket ID</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Subject</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{ticket.id}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{ticket.subject}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{ticket.status}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{ticket.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupportTicketsPage;
