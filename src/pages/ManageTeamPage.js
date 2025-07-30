import React from 'react';

const ManageTeamPage = () => {
  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'Project Manager', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', role: 'Lead Developer', email: 'jane.smith@example.com' },
    { id: 3, name: 'Peter Jones', role: 'UI/UX Designer', email: 'peter.jones@example.com' },
    { id: 4, name: 'Alice Brown', role: 'QA Engineer', email: 'alice.brown@example.com' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Team</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member) => (
              <tr key={member.id}>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{member.id}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{member.name}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{member.role}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{member.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTeamPage;