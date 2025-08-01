import React, { useState, useEffect } from 'react';

const UserForm = ({ user, onSave, onCancel, isSubmitting }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    } else {
      setFormData({ name: '', email: '', role: '' });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 rounded-lg shadow-md bg-primary">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-secondary">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="block w-full mt-1 rounded-md shadow-sm border-accent bg-secondary text-text-primary focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-secondary">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="block w-full mt-1 rounded-md shadow-sm border-accent bg-secondary text-text-primary focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-text-secondary">Role</label>
        <input
          type="text"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="block w-full mt-1 rounded-md shadow-sm border-accent bg-secondary text-text-primary focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50"
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-text-secondary bg-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-white border border-transparent rounded-md shadow-sm dark:text-gray-900 bg-highlight hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : (user ? 'Update User' : 'Add User')}
        </button>
      </div>
    </form>
  );
};

export default UserForm;
