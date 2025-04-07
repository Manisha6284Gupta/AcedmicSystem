





import React, { useState } from "react";
import SelectCourse from "./SelectCourse.jsx";
import SelectBatch from "./SelectBatch.jsx";
import StudentDetails from "./StudentDetails.jsx";

const FacultyProfile = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState("");
  const [filterApplied, setFilterApplied] = useState(false); // Track if filtering is applied




  // tessting part
  //  useEffect(() => {
  //     const storedUserInfo = localStorage.getItem("user");
  //     // const storedUserInfo = JSON.pa
    
  //     if (!storedUserInfo) {
  //       console.warn("User info not found in localStorage, redirecting to login.");
  //       navigate("/loginfaculty");
  //       return;
  //     }
    
  //     try {
  //       const user = JSON.parse(storedUserInfo);
    
  //       if (user && user.username) {
  //         setUserName(user.username);
  //       } else {
  //         console.warn("Invalid user data:", storedUserInfo);
  //         navigate("/loginfaculty");
  //       }
  //     } catch (error) {
  //       console.error("Error parsing user data:", error);
  //       navigate("/loginfaculty");
  //     }
  //   }, [navigate]);
    

// testing part


  const handleSubmit = () => {
    setFilterApplied(true); // Trigger filtering when submit is clicked
  };
  console.log("Loading Faculty Profile Page..");
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 shadow-md rounded-lg w-full max-w-lg">
        {/* Selection Section */}
        <div className="flex flex-col items-center space-y-4">
          {/* Course Selection */}
          <div className="w-full">
            <SelectCourse selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} />
          </div>

          {/* Batch Selection */}
          <div className="w-full">
            <SelectBatch selectedBatch={selectedBatch} setSelectedBatch={setSelectedBatch} />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Student Details Section */}
      {filterApplied && (
        <div className="mt-6 max-h-[400px] w-full max-w-2xl">
          <StudentDetails selectedCourses={selectedCourses} selectedBatch={selectedBatch} />
        </div>
      )}
    </div>
  );
};

export default FacultyProfile;



















// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; 
// import SelectCourse from "./SelectCourse.jsx";
// import SelectBatch from "./SelectBatch.jsx";
// import StudentDetails from "./StudentDetails.jsx";

// const FacultyProfile = () => {
//   const [selectedCourses, setSelectedCourses] = useState([]);
//   const [selectedBatch, setSelectedBatch] = useState("");
//   const [filterApplied, setFilterApplied] = useState(false);
//   const [userName, setUserName] = useState("");
//   const navigate = useNavigate(); // For redirection

//   // Redirect unauthorized users to faculty login
//   useEffect(() => {
//     const storedUserInfo = localStorage.getItem("user");

//     if (!storedUserInfo) {
//       console.warn("User info not found, redirecting to login.");
//       navigate("/faculty-login");
//       return;
//     }

//     try {
//       const user = JSON.parse(storedUserInfo);
//       if (user?.username) {
//         setUserName(user.username);
//       } else {
//         console.warn("Invalid user data:", storedUserInfo);
//         navigate("/faculty-login");
//       }
//     } catch (error) {
//       console.error("Error parsing user data:", error);
//       navigate("/faculty-login");
//     }
//   }, [navigate]);

//   const handleSubmit = () => {
//     setFilterApplied(true);
//   };

//   console.log("Loading Faculty Profile Page...");

//   return (
//     <div className="font-sans min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
//       <div className="bg-white p-6 shadow-md rounded-lg w-full max-w-lg">
//         <h2 className="text-center text-xl font-semibold mb-4">Welcome, {userName}</h2>

//         {/* Selection Section */}
//         <div className="flex flex-col items-center space-y-4">
//           {/* Course Selection */}
//           <div className="w-full">
//             <SelectCourse selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} />
//           </div>

//           {/* Batch Selection */}
//           <div className="w-full">
//             <SelectBatch selectedBatch={selectedBatch} setSelectedBatch={setSelectedBatch} />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-center mt-6">
//           <button
//             onClick={handleSubmit}
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
//           >
//             Submit
//           </button>
//         </div>
//       </div>

//       {/* Student Details Section */}
//       {filterApplied && (
//         <div className="mt-6 max-h-[400px] w-full max-w-2xl">
//           <StudentDetails selectedCourses={selectedCourses} selectedBatch={selectedBatch} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default FacultyProfile;
