// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function StudentDetails({ selectedCourses, selectedBatch }) {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (selectedCourses.length === 0 || !selectedBatch) {
//       setStudents([]);
//       return;
//     }

//     const fetchStudents = async () => {
//       setLoading(true);
//       setError("");
//       try {
//         const res = await axios.post("http://localhost:5000/api/students/studentsDetail", {
//           courses: selectedCourses,
//           batch: selectedBatch,
//         });
//         setStudents(res.data);
//         console.log(res.data.length);
//       } catch (err) {

//         console.error("Error fetching students:", err);
//         setError("Failed to fetch students.");
//       }
//       setLoading(false);
//     };

//     fetchStudents();
//   }, [selectedCourses, selectedBatch]);
//   console.log("Loading Student Details...");
//   return (
//     <div className="p-4 bg-white shadow-md rounded-lg w-full">
//       {loading ? (
//         <p className="text-gray-500">Loading students...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : students.length === 0 ? (
//         <p className="text-gray-500 text-lg">No students found.</p>
//       ) : (
//          students.length && <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="py-2 px-4 border-b">Name</th>
//                 <th className="py-2 px-4 border-b">Course</th>
//                 <th className="py-2 px-4 border-b">Batch</th>
//                 <th className="py-2 px-4 border-b">Details</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map((student, index) => (
//                 <tr key={index} className="hover:bg-gray-100">
//                   <td className="py-2 px-4 border-b">{student.name}</td>
//                   <td className="py-2 px-4 border-b">{student.course}</td>
//                   <td className="py-2 px-4 border-b">{student.batch}</td>
//                   <td className="py-2 px-4 border-b">{student.details}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default StudentDetails;





import React, { useEffect, useState } from "react";
import axios from "axios";

function StudentDetails({ selectedCourses, selectedBatch }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!selectedBatch || selectedCourses.length === 0) {
      setStudents([]);
      return;
    }

    const fetchStudents = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await axios.post("http://localhost:5000/api/students/studentsDetail", {
          courses: selectedCourses,
          batch: selectedBatch,
        });

        if (response.data.length === 0) {
          setError("No students found for the selected batch and courses.");
        }

        setStudents(response.data);
      } catch (err) {
        console.error("Error fetching students:", err);
        setError(err.response?.data?.message || "Failed to fetch students.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [selectedCourses, selectedBatch]);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg w-full">
      {loading ? (
        <p className="text-gray-500">Loading students...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : students.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b text-left">Name</th>
                <th className="py-2 px-4 border-b text-left">Course</th>
                <th className="py-2 px-4 border-b text-left">Batch</th>
                <th className="py-2 px-4 border-b text-left">Document Submittion</th>
                <th className="py-2 px-4 border-b text-left">Contect No.</th>
                {/* <th className="py-2 px-4 border-b text-left">OTR Submittion</th> */}
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student._id || index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{student.name}</td>
                  <td className="py-2 px-4 border-b">{student.course}</td>
                  <td className="py-2 px-4 border-b">{student.batch}</td>
                  <td className="py-2 px-4 border-b">{student.document}</td>
                  <td className="py-2 px-4 border-b">{student.contactNo}</td>
                  {/* <td className="py-2 px-4 border-b">{student.details || "N/A"}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 text-lg">No students found.</p>
      )}
    </div>
  );
}

export default StudentDetails;

