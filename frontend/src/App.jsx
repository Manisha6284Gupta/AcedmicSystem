





import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";

import FacultyLogin from "./pages/faculty/FacultyLogin.jsx";
import StudentLogin from "./pages/student/StudentLogin.jsx";
import Profile from "./pages/student/StudentProfile.jsx";
import ViewDetails from "./pages/student/ViewStudentDetail.jsx";
import FacultyProfile from "./pages/faculty/FacultyProfile.jsx";
import SubmitOtr from "./pages/student/SubmitOtr.jsx";
import UploadDocument from "./pages/student/UploadDocuments.jsx";
import VisionMission from "./pages/student/VisionMission.jsx";
import FAQ from "./pages/student/FAQ.jsx";
import About from "./components/About.jsx";
import ContactUs from "./components/ContactUs.jsx";

const App = () => {
  const location = useLocation(); // Add this to get the current location
  const hideHeaderRoutes = ["/profile", "/facultyProfile"]; // Routes where header should be hidden
  const hideNavbarRoutes = ["/profile"];
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  
  // Test backend connection
  useEffect(() => {
    axios
      .get("/api/auth") // Update this if using a different backend URL
      .then((response) => console.log("Backend Response:", response.data))
      .catch((error) => console.error("Error connecting to backend:", error));
  }, []);

  // Handle Login
  const handleLogin = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setIsAuthenticated(true);
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Only render the Header component if not on a route that should hide it */}
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      
      {/* Keep the navbar logic the same */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />}

      <div className="flex-grow">
        <Routes> 
          <Route path="/" element={<MainContent />} />
          <Route path="/facultyProfile" element={isAuthenticated ? <FacultyProfile /> : <Navigate to="/faculty-login" />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/faculty-login" element={<FacultyLogin onLogin={handleLogin} />} />
          <Route path="/login" element={<StudentLogin onLogin={handleLogin} />} />
          <Route path="/view-detail" element={<ViewDetails />} />
          <Route path="/upload-documents" element={<UploadDocument />} />
          <Route path="/upload-otr" element={<SubmitOtr />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<ContactUs/>} />
          

        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;




