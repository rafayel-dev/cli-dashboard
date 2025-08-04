import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import UserForm from '../components/users/UserForm';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

const UserPage = () => {
  const { 
    users, loading, error, totalPages,
    page, setPage,
    limit,
    sortBy, setSortBy,
    sortOrder, setSortOrder,
    searchTerm, setSearchTerm,
    addUser, updateUser, deleteUser, fetchUsers
  } = useContext(UserContext);

  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, [page, limit, sortBy, sortOrder, searchTerm, fetchUsers]);

  const handleAddClick = () => {
    setEditingUser(null);
    setShowForm(true);
  };

  const handleEditClick = (user) => {
    setEditingUser(user);
    setShowForm(true);
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      await deleteUser(id);
    }
  };

  const handleSaveUser = async (userData) => {
    try {
      if (editingUser) {
        await updateUser(editingUser.id, userData);
      } else {
        await addUser(userData);
      }
      setShowForm(false);
    } catch (error) {
      console.error("Error saving user:", error);
      // Optionally, show an error message to the user
    }
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingUser(null);
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const getSortIcon = (field) => {
    if (sortBy === field) {
      return sortOrder === 'asc' ? <FaSortUp /> : <FaSortDown />;
    }
    return <FaSort />;
  };

  if (loading) {
    return <div className="p-4 text-text-primary">Loading users...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold text-text-primary">User Management</h2>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handleAddClick}
          className="px-4 py-2 text-white transition-colors duration-200 rounded-md bg-highlight dark:text-gray-900 hover:bg-opacity-80"
        >
          Add New User
        </button>
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-md bg-secondary text-text-primary border-accent focus:outline-none focus:ring-2 focus:ring-highlight"
        />
      </div>

      {showForm && (
        <div className="mb-4">
          <UserForm user={editingUser} onSave={handleSaveUser} onCancel={handleCancelForm} isSubmitting={loading} />
        </div>
      )}

      <div className="p-4 rounded-lg shadow-md bg-secondary">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-secondary text-text-primary">
            <thead>
              <tr>
                <th className="px-4 py-2 text-xs font-semibold tracking-wider text-left uppercase border-b cursor-pointer border-accent" onClick={() => handleSort('id')}>
                  ID {getSortIcon('id')}
                </th>
                <th className="px-4 py-2 text-xs font-semibold tracking-wider text-left uppercase border-b cursor-pointer border-accent" onClick={() => handleSort('name')}>
                  Name {getSortIcon('name')}
                </th>
                <th className="px-4 py-2 text-xs font-semibold tracking-wider text-left uppercase border-b cursor-pointer border-accent" onClick={() => handleSort('email')}>
                  Email {getSortIcon('email')}
                </th>
                <th className="px-4 py-2 text-xs font-semibold tracking-wider text-left uppercase border-b cursor-pointer border-accent" onClick={() => handleSort('role')}>
                  Role {getSortIcon('role')}
                </th>
                <th className="px-4 py-2 text-xs font-semibold tracking-wider text-left uppercase border-b border-accent">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-accent hover:bg-primary">
                  <td className="px-4 py-2 text-sm text-text-primary">{user.id}</td>
                  <td className="px-4 py-2 text-sm text-text-primary">{user.name}</td>
                  <td className="px-4 py-2 text-sm text-text-primary">{user.email}</td>
                  <td className="px-4 py-2 text-sm text-text-primary">{user.role}</td>
                  <td className="px-4 py-2 text-sm">
                    <button
                      onClick={() => handleEditClick(user)}
                      className="px-3 py-1 mr-2 text-white transition-colors duration-200 bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(user.id)}
                      className="px-3 py-1 text-white transition-colors duration-200 bg-red-500 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 text-white transition-colors duration-200 rounded-md bg-highlight dark:text-gray-900 hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-text-primary">Page {page} of {totalPages}</span>
          <button
            onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 text-white transition-colors duration-200 rounded-md bg-highlight dark:text-gray-900 hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
