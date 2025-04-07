import React, { useState } from "react";
import axios from "axios";
import { CloudUpload, Trash2, Edit } from "lucide-react";

const UploadDocuments = () => {
  const [documents, setDocuments] = useState([]);
  const requiredDocs = ["Acedmics", "Co-curricular", "Extra-curricular", "Sports", "Other"];

  const handleFileChange = (e, docType) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setDocuments((prev) => [...prev.filter((doc) => doc.type !== docType), { type: docType, file }]);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleRemoveFile = (docType) => {
    setDocuments((prev) => prev.filter((doc) => doc.type !== docType));
  };

  const handleEditFile = (docType) => {
    document.getElementById(docType).click();
  };

  const handleUpload = async () => {
    if (documents.length < requiredDocs.length) {
      alert("Please upload all required documents.");
      return;
    }
    
    const formData = new FormData();
    formData.append("userId", localStorage.getItem("userId"));
    documents.forEach((doc) => {
      formData.append(doc.type, doc.file);
    });


  
  

    try {
      await axios.post("http://localhost:5000/api/auth/upload-documents", 
        
        formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Documents uploaded successfully!");
    } catch (error) {
      console.error("Error uploading documents:", error);
      alert("Failed to upload documents. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-200 mt-10">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Upload Activity Documents</h1>
      {requiredDocs.map((docType) => (
        <div key={docType} className="mb-4">
          <label className="block font-semibold  mb-1">{docType} (PDF)</label>
          <div className="flex items-center gap-4">
            <input id={docType} type="file" accept="application/pdf" onChange={(e) => handleFileChange(e, docType)} className="hidden" required />
            <button onClick={() => document.getElementById(docType).click()} className="border p-2 rounded w-full bg-gray-100  hover:bg-gray-200">
              {documents.some((doc) => doc.type === docType) ? "Replace File" : "Upload File"}
            </button>
            {documents.some((doc) => doc.type === docType) && (
              <>
                <button onClick={() => handleEditFile(docType)} className="bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600">
                  <Edit size={18} />
                </button>
                <button onClick={() => handleRemoveFile(docType)} className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600">
                  <Trash2 size={18} />
                </button>
              </>
            )}
          </div>
        </div>
      ))}
      <button
        onClick={handleUpload}
        className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition focus:outline-none"
      >
        <CloudUpload size={20} /> Upload All Documents
      </button>
    </div>
  );
};

export default UploadDocuments;
