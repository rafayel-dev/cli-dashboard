import React from 'react';

const ContactInfoPage = () => {
  return (
    <div className="p-4 bg-primary min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-text-primary">Contact Information</h2>
      <div className="bg-secondary p-6 rounded-lg shadow-md">
        <p className="text-text-primary mb-2"><strong>Support Email:</strong> support@example.com</p>
        <p className="text-text-primary mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p className="text-text-primary mb-2"><strong>Address:</strong> 123 Dashboard Ave, Suite 100, Anytown, USA 12345</p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2 text-text-primary">Send us a message:</h3>
          <div className="mb-4">
            <label htmlFor="name" className="block text-text-secondary text-sm font-bold mb-2">Name:</label>
            <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 bg-primary text-text-primary leading-tight focus:outline-none focus:shadow-outline border-accent focus:ring-2 focus:ring-highlight" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-text-secondary text-sm font-bold mb-2">Email:</label>
            <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 bg-primary text-text-primary leading-tight focus:outline-none focus:shadow-outline border-accent focus:ring-2 focus:ring-highlight" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-text-secondary text-sm font-bold mb-2">Message:</label>
            <textarea id="message" rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 bg-primary text-text-primary leading-tight focus:outline-none focus:shadow-outline border-accent focus:ring-2 focus:ring-highlight"></textarea>
          </div>
          <button className="bg-highlight hover:bg-opacity-80 text-white dark:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoPage;
