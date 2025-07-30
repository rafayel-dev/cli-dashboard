import React from 'react';

const ProfilePage = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile" className="w-24 h-24 rounded-full mr-4" />
          <div>
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">Administrator</p>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Personal Information</h4>
          <p><strong>Full Name:</strong> John Doe</p>
          <p><strong>Date of Birth:</strong> January 1, 1985</p>
          <p><strong>Location:</strong> New York, USA</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Contact Information</h4>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p><strong>Address:</strong> 123 Main St, Anytown, USA</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
