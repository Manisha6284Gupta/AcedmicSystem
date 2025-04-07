import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'What kind of student activities can be recorded on the platform?',
      answer:
        'You can record academic performance, extracurricular and co-curricular participation, sports achievements, and any other notable achievements.',
    },
    {
      question: 'How do I upload proof for my activity?',
      answer:
        'After logging in, go to your dashboard, select the activity type, fill in the details, and upload a valid document or image as proof.',
    },
    {
      question: 'Is it mandatory to upload proof for every activity?',
      answer:
        'Yes, uploading proof is mandatory to validate each activity. Without proof, the entry will not be considered for verification or points.',
    },
    {
      question: 'Can I edit or delete an activity after submission?',
      answer:
        'Yes, you can edit or delete any activity until it is verified by a faculty or admin. After verification, changes will require special permission.',
    },
    {
      question: 'Will this platform reflect my academic results from the college portal?',
      answer:
        'Yes, the platform is integrated with the college result portal. Your academic results will be automatically fetched and displayed in your profile.',
    },
    {
      question: 'Who can view the activities I submit?',
      answer:
        'Only authorized faculty members, administrators, and yourself can view your submitted activities and proofs. Privacy is maintained strictly.',
    },
    {
      question: 'How will my activities be verified?',
      answer:
        'Each submission will be reviewed by designated faculty members or department heads. You will receive a notification once it is verified or if further action is needed.',
    },
    {
      question: 'Can I download a report of all my recorded activities?',
      answer:
        'Yes, you can generate and download a detailed report of your recorded activities and proofs from your dashboard.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-4">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-200"
          >
            <button
              className="flex items-center justify-between w-full px-5 py-4 text-left text-lg font-medium text-gray-800 hover:text-blue-600 focus:outline-none"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              {faq.question}
              <span className="ml-4 text-blue-500">
                {openIndex === index ? '▲' : '▼'}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-5 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
