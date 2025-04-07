import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const StudentLogin = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "username" && !/^\d*$/.test(value)) {
      setError("Username should contain only numbers.");
      return;
    }

    setFormData({ ...formData, [name]: value });

    // Clear messages on input change
    setError("");
    setMessage("");
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setError("Please enter both username and password.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData);

      if (response.data.user) {
        setMessage("Login successful!");
        // setError(""); // Clear error message if login is successful

        if (onLogin) {
          onLogin(response.data.token, response.data.user);
          localStorage.setItem("token", response.data.token); // Save token
          localStorage.setItem("user", JSON.stringify(response.data.user)); 
        }

        // setTimeout(() => {
        //   window.open(`${window.location.origin}/profile`, "_blank");
        // }, 100);
        

        // <button onClick={() => window.open('/profile', '_blank')}>Open Profile</button>


//         <a href="/profile" target="_blank" rel="noopener noreferrer">
//   Open Profile
// </a>

        
        // window.location.href="StudentProfile.jsx"
        //  window.open("/profile", "_blank");
           navigate("/profile");
        // window.open(window.location.origin + "/profile", "_blank");
        // document.getElementById("openProfile").addEventListener("click", function () {
        //   window.open(window.location.origin + "/profile", "_blank");
        // });


      } else {
        setError(response.data.error || "Invalid username or password.");
        setMessage(""); 
      }
    } catch (err) {
      console.log("error: ",err)
      setError(err.response?.data?.error || "Invalid username or password.");
      setMessage(""); 
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-gray-300 p-8 rounded-lg shadow-lg w-96 text-center">
        <div className="flex justify-center mb-4">
          <img src="/images/logo.png" alt="Logo" className="h-16 w-16" />
        </div>

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Student Login</h2>

        {/* Display error or success message */}
        {error ? (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        ) : message ? (
          <p className="text-green-500 text-sm text-center mb-4">{message}</p>
        ) : null}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Username (Numbers Only)</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300 outline-none"
              placeholder="Enter your student ID"
            />
          </div>

          <div className="relative">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300 outline-none pr-10"
              placeholder="Enter your password"
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-9 text-gray-600 hover:text-gray-800"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded font-semibold transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;