import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import UserForm from '../components/users/UserForm';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

const UserPage = () => {
  const { 
    users, loading, error, totalPages,
    page, setPage,
    limit, setLimit,
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
      <h2 className="text-2xl font-bold mb-4 text-text-primary">User Management</h2>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handleAddClick}
          className="px-4 py-2 bg-highlight text-white dark:text-gray-900 rounded-md hover:bg-opacity-80 transition-colors duration-200"
        >
          Add New User
        </button>
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 rounded-md bg-secondary text-text-primary border border-accent focus:outline-none focus:ring-2 focus:ring-highlight"
        />
      </div>

      {showForm && (
        <div className="mb-4">
          <UserForm user={editingUser} onSave={handleSaveUser} onCancel={handleCancelForm} isSubmitting={loading} />
        </div>
      )}

      <div className="bg-secondary p-4 rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-secondary text-text-primary">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-accent text-left text-xs font-semibold uppercase tracking-wider cursor-pointer" onClick={() => handleSort('id')}>
                  ID {getSortIcon('id')}
                </th>
                <th className="py-2 px-4 border-b border-accent text-left text-xs font-semibold uppercase tracking-wider cursor-pointer" onClick={() => handleSort('name')}>
                  Name {getSortIcon('name')}
                </th>
                <th className="py-2 px-4 border-b border-accent text-left text-xs font-semibold uppercase tracking-wider cursor-pointer" onClick={() => handleSort('email')}>
                  Email {getSortIcon('email')}
                </th>
                <th className="py-2 px-4 border-b border-accent text-left text-xs font-semibold uppercase tracking-wider cursor-pointer" onClick={() => handleSort('role')}>
                  Role {getSortIcon('role')}
                </th>
                <th className="py-2 px-4 border-b border-accent text-left text-xs font-semibold uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-accent hover:bg-primary">
                  <td className="py-2 px-4 text-sm text-text-primary">{user.id}</td>
                  <td className="py-2 px-4 text-sm text-text-primary">{user.name}</td>
                  <td className="py-2 px-4 text-sm text-text-primary">{user.email}</td>
                  <td className="py-2 px-4 text-sm text-text-primary">{user.role}</td>
                  <td className="py-2 px-4 text-sm">
                    <button
                      onClick={() => handleEditClick(user)}
                      className="mr-2 px-3 py-1 bg-blue-500 text-text-primary rounded-md hover:bg-blue-600 transition-colors duration-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(user.id)}
                      className="px-3 py-1 bg-red-500 text-text-primary rounded-md hover:bg-red-600 transition-colors duration-200"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-highlight text-white dark:text-gray-900 rounded-md hover:bg-opacity-80 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-text-primary">Page {page} of {totalPages}</span>
          <button
            onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-highlight text-white dark:text-gray-900 rounded-md hover:bg-opacity-80 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
