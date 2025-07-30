import React from 'react';

const UserPage = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor' },
    { id: 3, name: 'Peter Jones', email: 'peter.jones@example.com', role: 'Viewer' },
    { id: 4, name: 'Alice Brown', email: 'alice.brown@example.com', role: 'Admin' },
    { id: 5, name: 'Bob White', email: 'bob.white@example.com', role: 'Editor' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
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
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{user.id}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{user.name}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{user.email}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPage;
