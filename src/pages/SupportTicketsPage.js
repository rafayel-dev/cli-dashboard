import React from 'react';

const SupportTicketsPage = () => {
  const tickets = [
    { id: '#TKT001', subject: 'Login Issue', status: 'Open', date: '2023-07-25' },
    { id: '#TKT002', subject: 'Payment Error', status: 'Closed', date: '2023-07-24' },
    { id: '#TKT003', subject: 'Feature Request', status: 'Pending', date: '2023-07-23' },
    { id: '#TKT004', subject: 'Account Deactivation', status: 'Open', date: '2023-07-22' },
  ];

  return (
    <div className="p-4 bg-primary min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-text-primary">Support Tickets</h2>
      <div className="bg-secondary p-4 rounded-lg shadow-md">
        <table className="min-w-full bg-secondary text-text-primary">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-accent bg-secondary text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Ticket ID</th>
              <th className="py-2 px-4 border-b border-accent bg-secondary text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Subject</th>
              <th className="py-2 px-4 border-b border-accent bg-secondary text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Status</th>
              <th className="py-2 px-4 border-b border-accent bg-secondary text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={ticket.id} className={`${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'} hover:bg-accent`}>
                <td className="py-2 px-4 text-sm">{ticket.id}</td>
                <td className="py-2 px-4 text-sm">{ticket.subject}</td>
                <td className="py-2 px-4 text-sm">{ticket.status}</td>
                <td className="py-2 px-4 text-sm">{ticket.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupportTicketsPage;
