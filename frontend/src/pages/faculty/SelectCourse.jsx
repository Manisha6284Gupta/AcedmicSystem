import React, { useCallback } from "react";

const courses = ["Mechanical Engineering", "Computer Science & Engineering", "Civil Engineering", "Electronics & Communication Engineering","Electrical Engineering", "Producion Engineering", "Bachelar of Computer ALppicato","Master of Computer Applicatin","Infomation Technology"];

function SelectCourse({ selectedCourses, setSelectedCourses }) {
  const handleCourseChange = useCallback((e) => {
    const selectedOptions = [...e.target.selectedOptions].map(option => option.value);
    setSelectedCourses(selectedOptions);
  }, [setSelectedCourses]);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg w-72">
      <label htmlFor="course" className="block text-gray-800 font-medium mb-2">
        Select Course(s):
      </label>
      <select
        id="course"
        multiple
        value={selectedCourses}
        onChange={handleCourseChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
        aria-label="Select one or more courses"
      >
        {courses.map(course => (
          <option key={course} value={course} className="p-2">
            {course}
          </option>
        ))}
      </select>
      <p className="text-xs text-gray-500 mt-2">
        Hold <span className="font-bold">Ctrl</span> (Cmd on Mac) to select multiple.
      </p>
    </div>
  );
}

export default SelectCourse;
