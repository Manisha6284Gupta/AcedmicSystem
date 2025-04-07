

import ViewDetails from "./ViewStudentDetail";
import  UploadDocuments from "./UploadDocuments";
import SubmitOtr from "./SubmitOtr";
import VisionMission from "./VisionMission"


import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userName, setUserName] = useState("");
  const [isControlPanelOpen, setIsControlPanelOpen] = useState(false);
  const [isObeDropdownOpen, setIsObeDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const controlPanelRef = useRef(null);
  const obeDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);



  useEffect(() => {
    const storedUserInfo = localStorage.getItem("user");
    // const storedUserInfo = JSON.pa
  
    if (!storedUserInfo) {
      console.warn("User info not found in localStorage, redirecting to login.");
      navigate("/login");
      return;
    }
  
    try {
      const user = JSON.parse(storedUserInfo);
  
      if (user && user.username) {
        setUserName(user.username);
      } else {
        console.warn("Invalid user data:", storedUserInfo);
        navigate("/login");
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      navigate("/login");
    }
  }, [navigate]);
  

  // Function to close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        controlPanelRef.current && !controlPanelRef.current.contains(event.target) &&
        obeDropdownRef.current && !obeDropdownRef.current.contains(event.target) &&
        userDropdownRef.current && !userDropdownRef.current.contains(event.target)
      ) {
        setIsControlPanelOpen(false);
        setIsObeDropdownOpen(false);
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner  */}
       <div className="w-full  bg-white shadow-md">
        <img src="/images/banner.jpg" alt="GNDEC Banner" className="w-full" />
      </div>

      {/* Navigation Bar */}
      <nav className="flex mt-3 justify-between items-center bg-green-800 p-4 shadow-md">
        <button onClick={()=> navigate("/")} className="text-black font-medium ">Home</button>

        {/* Control Panel Dropdown */}
        <div className="relative" ref={controlPanelRef}>
          <button
            onClick={() => setIsControlPanelOpen((prev) => !prev)}
            className="text-black font-medium bg-gray-200 px-4 py-2 rounded"
          >
            Control Panel ▼
          </button>
          {isControlPanelOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border shadow-lg rounded">
              <button onClick= {()=> navigate("/view-detail")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                View Profile Details
              </button>
              <button onClick={()=> navigate("/upload-documents")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Upload Documents
              </button>
              <button  onClick={()=> navigate("/upload-otr")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Inter-college Achienvements
              </button>
            </div>
          )}
        </div>

        {/* OBE Dropdown */}
        <div className="relative" ref={obeDropdownRef}>
          <button
            onClick={() => setIsObeDropdownOpen((prev) => !prev)}
            className="text-black font-medium bg-gray-200 px-4 py-2 rounded"
          >
             Info ▼
          </button>
          {isObeDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border shadow-lg rounded">
              <button onClick={()=>navigate("/vision-mission")}  className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Vision-Mission
              </button>
              <button onClick={()=>navigate("/faq")}   className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                FAQ
              </button>
            </div>
          )}
        </div>

        {/* User Dropdown */}
        <div className="relative" ref={userDropdownRef}>
          <button
            onClick={() => setIsUserDropdownOpen((prev) => !prev)}
            className="text-black font-medium bg-white px-4 py-2 rounded"
          >
            {userName} ▼
          </button>
          {isUserDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border shadow-lg rounded">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Content Section */}
      <div className="p-6 text-center text-gray-600">
        <h1 className="text-2xl font-bold">Welcome, {userName}!</h1>
      </div>
    </div>
  );
};

export default Profile;




