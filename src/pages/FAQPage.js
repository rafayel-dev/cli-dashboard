import React, { useState } from 'react';

const FAQPage = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: 'What is the purpose of this dashboard?',
      answer: 'This dashboard provides a centralized view of key metrics and functionalities for managing various aspects of your application.',
    },
    {
      question: 'How do I navigate between pages?',
      answer: 'You can navigate using the sidebar on the left. Simply click on the desired section to view its content.',
    },
    {
      question: 'Can I customize the dashboard layout?',
      answer: 'Currently, layout customization is limited, but future updates may include more personalization options.',
    },
    {
      question: 'How do I report a bug or provide feedback?',
      answer: 'Please use the contact information page to reach out to our support team with any issues or suggestions.',
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b pb-4 last:border-b-0 last:pb-0">
            <button
              className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-800 focus:outline-none"
              onClick={() => toggleQuestion(index)}
            >
              {faq.question}
              <span className="text-gray-500">
                {openQuestion === index ? '-' : '+'}
              </span>
            </button>
            {openQuestion === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;