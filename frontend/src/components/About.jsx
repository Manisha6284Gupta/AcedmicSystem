import React from 'react';

function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-500 text-center mb-6">About the Platform</h1>
      <p className="text-lg text-gray-700 mb-4">
        This platform is designed to serve as a centralized hub for managing and recording student achievements throughout their academic journey.
      </p>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>Record academic performances, co-curricular, extracurricular, and sports achievements.</li>
        <li>Upload valid proof (certificate, mark sheet, screenshots, etc.) for each activity.</li>
        <li>Ensure transparency and easy validation for faculty and administrators.</li>
        <li>Integrated with the college result portal to fetch academic records automatically.</li>
      </ul>
      <p className="text-lg text-gray-700">
        The goal is to empower students to keep a digital portfolio of their growth and streamline the verification process for college administration.
      </p>
    </div>
  );
}

export default About;
