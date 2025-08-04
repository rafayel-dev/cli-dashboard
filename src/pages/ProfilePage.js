import React from 'react';

const ProfilePage = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-text-primary">My Profile</h2>
      <div className="bg-secondary p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <img src="/Professioal Full Stack Website Developer.png" alt="Profile" className="w-24 h-24 rounded-full mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-text-primary">Mr Wick</h3>
            <p className="text-text-secondary">Administrator</p>
            <p className="text-text-secondary">john.doe@example.com</p>
          </div>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-text-primary">Personal Information</h4>
          <p className="text-text-primary"><strong>Full Name:</strong> Mr Wick</p>
          <p className="text-text-primary"><strong>Date of Birth:</strong> January 1, 1985</p>
          <p className="text-text-primary"><strong>Location:</strong> New York, USA</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-text-primary">Contact Information</h4>
          <p className="text-text-primary"><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p className="text-text-primary"><strong>Address:</strong> 123 Main St, Anytown, USA</p>
        </div>
        <button className="bg-highlight hover:opacity-80 text-primary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
