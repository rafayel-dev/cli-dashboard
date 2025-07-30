import React from 'react';

const TableComponent = () => {
  const data = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor' },
    { id: 3, name: 'Peter Jones', email: 'peter.jones@example.com', role: 'Viewer' },
    { id: 4, name: 'Alice Brown', email: 'alice.brown@example.com', role: 'Admin' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md m-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">User Data</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{item.id}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{item.name}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{item.email}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{item.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
