import React from 'react';

const TableComponent = () => {
  const data = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor' },
    { id: 3, name: 'Peter Jones', email: 'peter.jones@example.com', role: 'Viewer' },
    { id: 4, name: 'Alice Brown', email: 'alice.brown@example.com', role: 'Admin' },
  ];

  return (
    <div className="bg-secondary p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-highlight mb-4">User Data</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-secondary">
          <thead>
            <tr>
              <th className="py-3 px-6 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">ID</th>
              <th className="py-3 px-6 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Name</th>
              <th className="py-3 px-6 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Email</th>
              <th className="py-3 px-6 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Role</th>
            </tr>
          </thead>
          <tbody className="text-text-primary">
            {data.map((item, index) => (
              <tr key={item.id} className={`${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'} hover:bg-accent`}>
                <td className="py-3 px-6 whitespace-nowrap">{item.id}</td>
                <td className="py-3 px-6 whitespace-nowrap">{item.name}</td>
                <td className="py-3 px-6 whitespace-nowrap">{item.email}</td>
                <td className="py-3 px-6 whitespace-nowrap">{item.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
