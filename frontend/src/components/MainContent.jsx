// import { useState, useEffect } from "react";
// import carouselImage1 from "/images/carousel1.jpg";
// import carouselImage2 from "/images/carousel2.jpg";

// const MainContent = () => {
//   const [currentImage, setCurrentImage] = useState(carouselImage1);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => 
//         prevImage === carouselImage1 ? carouselImage2 : carouselImage1
//       );
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="max-w-screen-xl mx-auto px-4 py-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//         {/* Contact Faculty - Left */}
//         <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-start min-h-[420px] border-l-4 border-blue-500 pl-4 text-center sm:text-left">
//           <h2 className="font-bold text-xl mb-2 text-blue-700">Contact Faculty for Scholarships</h2>
//           <p className="text-lg text-gray-700">
//             <strong>Scholarship Coordinator:</strong> Dr. A. Sharma <br />
//             <strong>Office Hours:</strong> Monday - Friday (10 AM - 4 PM) <br />
//             <strong>Contact No.:</strong> +91 9876543210 <br />
//             <strong>Email:</strong> scholarship@college.edu <br />
//             <strong>Location:</strong> Admin Block, Room No. 102
//           </p>

//           <h3 className="font-bold text-lg mt-4 text-blue-600">Available Scholarship Programs:</h3>
//           <ul className="list-disc pl-5 text-gray-700 text-lg">
//             <li>Merit-Based Scholarships</li>
//             <li>Need-Based Financial Aid</li>
//             <li>Sports Scholarships</li>
//             <li>Government Scholarships</li>
//             <li>Alumni-Sponsored Grants</li>
//           </ul>

//           <h3 className="font-bold text-lg mt-4 text-blue-600">Important Deadlines:</h3>
//           <ul className="list-disc pl-5 text-gray-700 text-lg">
//             <li><span className="text-red-600 font-bold animate-blink">NEW</span> Application Submission: March 30</li>
//             <li>Document Verification: April 10</li>
//             <li>Final Approval & Disbursement: May 5</li>
//           </ul>

//           <h3 className="font-bold text-lg mt-4 text-blue-600">How to Apply?</h3>
//           <p className="text-lg text-gray-700">
//             Visit the <a href="/scholarship-portal" className="text-blue-500 underline hover:text-blue-700">Scholarship Portal</a>, fill out the application form, and upload required documents.
//           </p>
//         </div>

//         {/* Carousel - Center */}
//         <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden relative flex flex-col">
//           <div className="w-full h-[280px] flex items-center justify-center">
//             <img 
//               src={currentImage} 
//               alt="Scholarship Carousel" 
//               className="w-full h-full object-cover transition-all duration-500 ease-in-out rounded-lg"
//             />
//           </div>

//           {/* New Scholarship Information Container */}
//           <div className="bg-white p-4 shadow-md rounded-lg mt-4">
//             <h3 className="text-xl font-bold text-green-700">Scholarship System Overview</h3>
//             <p className="text-gray-700 text-lg mt-2">
//               Our scholarship system offers financial aid to students based on merit, need, and special categories. 
//               Eligible students can apply through the online portal and must ensure timely submission of documents.
//             </p>
//             <ul className="list-disc pl-5 text-gray-700 text-lg mt-2">
//               <li>Merit-based and Need-based scholarships available.</li>
//               <li>Easy online application process.</li>
//               <li>Dedicated support for document verification.</li>
//               <li>Regular updates on application status.</li>
//             </ul>
//           </div>
//         </div>

//         {/* Notice Board - Right */}
//         <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-start min-h-[420px] border-l-4 border-green-500 pl-4 text-center sm:text-left">
//           <h2 className="font-bold text-xl mb-2 text-green-700">Notice Board</h2>
//           <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
//             <li>
//               <span className="text-red-600 font-bold animate-blink">NEW</span> Scholarship Application Deadline Extended to March 30.
//             </li>
//             <li>
//               <span className="text-red-600 font-bold animate-blink">NEW</span> Submit your OTR documents before April 10.
//             </li>
//             <li>Mid-term exams start from April 15.</li>
//             <li>Final year students must complete project submission by May 5.</li>
//             <li>Hostel fee payment last date: March 20.</li>
//             <li>Internship opportunity at XYZ Company – Apply before April 5.</li>
//             <li>Annual Tech Fest registrations open now!</li>
//           </ul>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default MainContent;





import { useState, useEffect } from "react";
import carouselImage1 from "/images/carousel1.jpg";
import carouselImage2 from "/images/carousel2.jpg";

const MainContent = () => {
  const [currentImage, setCurrentImage] = useState(carouselImage1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === carouselImage1 ? carouselImage2 : carouselImage1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Upload Activity - Left */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-start min-h-[420px] border-l-4 border-indigo-500 pl-4 text-center sm:text-left">
          <h2 className="font-bold text-xl mb-2 text-indigo-700">Upload Your Achievements</h2>
          <p className="text-lg text-gray-700 mb-4">
            Students can submit records of their achievements with proof:
          </p>
          <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
            <li>Academic Performance (CGPA, Results)</li>
            <li>Co-Curricular Activities (Clubs, Workshops)</li>
            <li>Extra-Curricular Activities (Fests, Debates, Art)</li>
            <li>Sports & Fitness Achievements</li>
            <li>Other Certifications or Awards</li>
          </ul>
          <p className="text-lg text-gray-700 mt-4">
            <span className="font-semibold text-indigo-600">Note:</span> Each submission must include proper documentation like certificates or event participation proofs.
          </p>
          <a href="/upload-activity" className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Upload Activity
          </a>
        </div>

        {/* Carousel & Info - Center */}
        <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden relative flex flex-col">
          <div className="w-full h-[280px] flex items-center justify-center">
            <img
              src={currentImage}
              alt="Student Activities"
              className="w-full h-full object-cover transition-all duration-500 ease-in-out rounded-lg"
            />
          </div>

          <div className="bg-white p-4 shadow-md rounded-lg mt-4">
            <h3 className="text-xl font-bold text-indigo-700">Student Activity Tracker</h3>
            <p className="text-gray-700 text-lg mt-2">
              This platform enables holistic development tracking of each student. 
              All uploaded activities are verified and reviewed by respective faculty members.
            </p>
            <ul className="list-disc pl-5 text-gray-700 text-lg mt-2">
              <li>Automated academic data via result portal integration.</li>
              <li>Real-time status on activity verification.</li>
              <li>Faculty evaluation and score assignment.</li>
              <li>One-click export of student profiles for internships or scholarships.</li>
            </ul>
          </div>
        </div>

        {/* Notice Board - Right */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-start min-h-[420px] border-l-4 border-green-500 pl-4 text-center sm:text-left">
          <h2 className="font-bold text-xl mb-2 text-green-700">Notice Board</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
            <li><span className="text-red-600 font-bold animate-blink">NEW</span> Activity upload deadline: April 20</li>
            <li>Annual Achievement Report generation starts May 1</li>
            <li>Integrated CGPA sync from result portal on April 10</li>
            <li>Faculty review cycle: April 15 – April 30</li>
            <li>New badge system for verified achievements coming soon!</li>
            <li>Join SkillUP Bootcamp – Registrations open!</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default MainContent;
