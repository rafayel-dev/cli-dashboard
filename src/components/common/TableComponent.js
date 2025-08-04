import React from 'react';
import Papa from 'papaparse';

const TableComponent = () => {
  const data = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor' },
    { id: 3, name: 'Peter Jones', email: 'peter.jones@example.com', role: 'Viewer' },
    { id: 4, name: 'Alice Brown', email: 'alice.brown@example.com', role: 'Admin' },
  ];

  const handleExport = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'user_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-secondary p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-highlight">User Data</h2>
        <button onClick={handleExport} className="px-4 py-2 text-sm font-medium rounded-md bg-highlight text-primary hover:bg-opacity-80">
          Export to CSV
        </button>
      </div>
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
