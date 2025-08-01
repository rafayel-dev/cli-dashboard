import React from 'react';

const ManageTeamPage = () => {
  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'Project Manager', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', role: 'Lead Developer', email: 'jane.smith@example.com' },
    { id: 3, name: 'Peter Jones', role: 'UI/UX Designer', email: 'peter.jones@example.com' },
    { id: 4, name: 'Alice Brown', role: 'QA Engineer', email: 'alice.brown@example.com' },
  ];

  return (
    <div className="p-4 bg-primary min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-text-primary">Manage Team</h2>
      <div className="bg-secondary p-4 rounded-lg shadow-md">
        <table className="min-w-full bg-secondary text-text-primary">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-accent bg-secondary text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">ID</th>
              <th className="py-2 px-4 border-b border-accent bg-secondary text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Name</th>
              <th className="py-2 px-4 border-b border-accent bg-secondary text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Role</th>
              <th className="py-2 px-4 border-b border-accent bg-secondary text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Email</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member, index) => (
              <tr key={member.id} className={`${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'} hover:bg-accent`}>
                <td className="py-2 px-4 text-sm text-text-primary">{member.id}</td>
                <td className="py-2 px-4 text-sm text-text-primary">{member.name}</td>
                <td className="py-2 px-4 text-sm text-text-primary">{member.role}</td>
                <td className="py-2 px-4 text-sm text-text-primary">{member.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTeamPage;