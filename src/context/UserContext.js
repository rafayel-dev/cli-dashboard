import React, { createContext, useState, useEffect, useCallback } from 'react';
import userService from '../services/userService';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5); // Items per page
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const { data, total } = await userService.getAllUsers(page, limit, sortBy, sortOrder, searchTerm);
      setUsers(data);
      setTotalPages(Math.ceil(total / limit));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [page, limit, sortBy, sortOrder, searchTerm]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const addUser = async (newUser) => {
    try {
      const user = await userService.createUser(newUser);
      // Re-fetch users to ensure sorting and pagination are correct
      fetchUsers(); 
      return user;
    } catch (err) {
      setError(err);
      throw err;
    }
  };

  const updateUser = async (id, updatedUser) => {
    try {
      const user = await userService.updateUser(id, updatedUser);
      // Re-fetch users to ensure sorting and pagination are correct
      fetchUsers();
      return user;
    } catch (err) {
      setError(err);
      throw err;
    }
  };

  const deleteUser = async (id) => {
    try {
      await userService.deleteUser(id);
      // Re-fetch users to ensure sorting and pagination are correct
      fetchUsers();
    } catch (err) {
      setError(err);
      throw err;
    }
  };

  return (
    <UserContext.Provider value={{
      users, loading, error, totalPages,
      page, setPage,
      limit, setLimit,
      sortBy, setSortBy,
      sortOrder, setSortOrder,
      searchTerm, setSearchTerm,
      addUser, updateUser, deleteUser, fetchUsers
    }}>
      {children}
    </UserContext.Provider>
  );
};
