let users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor' },
  { id: 3, name: 'Peter Jones', email: 'peter.jones@example.com', role: 'Viewer' },
];

let nextId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;

const userService = {
  getAllUsers: (page = 1, limit = 5, sortBy = 'id', sortOrder = 'asc', searchTerm = '') => {
    return new Promise(resolve => {
      setTimeout(() => {
        let filteredUsers = users.filter(user =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.role.toLowerCase().includes(searchTerm.toLowerCase())
        );

        filteredUsers.sort((a, b) => {
          const aValue = a[sortBy];
          const bValue = b[sortBy];

          if (aValue < bValue) {
            return sortOrder === 'asc' ? -1 : 1;
          }
          if (aValue > bValue) {
            return sortOrder === 'asc' ? 1 : -1;
          }
          return 0;
        });

        const total = filteredUsers.length;
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

        resolve({ data: paginatedUsers, total });
      }, 300);
    });
  },

  getUserById: (id) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const user = users.find(u => u.id === id);
        resolve(user);
      }, 300);
    });
  },

  createUser: (newUser) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const user = { id: nextId++, ...newUser };
        users.push(user);
        resolve(user);
      }, 300);
    });
  },

  updateUser: (id, updatedUser) => {
    return new Promise(resolve => {
      setTimeout(() => {
        users = users.map(user => (user.id === id ? { ...user, ...updatedUser } : user));
        resolve(users.find(u => u.id === id));
      }, 300);
    });
  },

  deleteUser: (id) => {
    return new Promise(resolve => {
      setTimeout(() => {
        users = users.filter(user => user.id !== id);
        resolve(true);
      }, 300);
    });
  },
};

export default userService;
