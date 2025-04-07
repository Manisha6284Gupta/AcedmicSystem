import React, { useState, useEffect } from "react";
import Tesseract from "tesseract.js";
import { CloudUpload, Loader2, Trash2, CheckCircle } from "lucide-react";
import OtrInput from "./OtrInput"; // Import OtrInput component

const SubmitOtr = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [otrNumber, setOtrNumber] = useState("");

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size exceeds 5MB. Please select a smaller image.");
        return;
      }
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      setUploadSuccess(false);
    } else {
      alert("Please select a valid image file.");
    }
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image first.");
      return;
    }
    setUploadLoading(true);
    try {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = async () => {
        try {
          const { data } = await Tesseract.recognize(reader.result, "eng");
          console.log("Extracted Text:", data.text);
          setUploadSuccess(true);
        } catch (error) {
          console.error("Error extracting text:", error);
          alert("Failed to extract text. Please try again.");
        } finally {
          setUploadLoading(false);
        }
      };
    } catch (error) {
      console.error("Error processing image:", error);
      alert("Failed to process image. Please try again.");
      setUploadLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!otrNumber) {
      alert("Please enter OTR number.");
      return;
    }
    setSubmitLoading(true);
    try {
      // Replace with your API call
      console.log("Submitting OTR:", otrNumber);
      alert("OTR submitted successfully.");
      setOtrNumber("");
    } catch (error) {
      console.error("Error submitting OTR:", error);
      alert("Failed to submit OTR. Please try again.");
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-10">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Upload Certificate</h1>
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 p-6 rounded-lg bg-gray-50">
        <CloudUpload size={50} className="text-blue-600 mb-3" />
        <label className="text-gray-700 font-semibold cursor-pointer">
          Click to select an image (Max: 5MB)
          <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
        </label>
        {imagePreview && (
          <div className="mt-4 w-40 h-40 relative">
            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-lg border" />
          </div>
        )}
      </div>
      {imagePreview && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => setImage(null)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center gap-2"
          >
            <Trash2 size={18} /> Remove
          </button>
        </div>
      )}
      <button
        onClick={handleUpload}
        className={`mt-2 w-6px flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition focus:outline-none ${
          uploadLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={uploadLoading}
      >
        {uploadLoading ? <Loader2 className="animate-spin" size={20} /> : <CloudUpload size={20} />}
        {uploadLoading ? "Processing..." : "Upload Image"}
      </button>
      {uploadSuccess && (
        <div className="mt-4 flex items-center text-green-600">
          <CheckCircle size={20} className="mr-2" /> Image uploaded successfully!
        </div>
      )}

      {/* OTR Input Field and Submit Button */}
      <OtrInput otrNumber={otrNumber} setOtrNumber={setOtrNumber} handleSubmit={handleSubmit} loading={submitLoading} />
    </div>
  );
};

export default SubmitOtr;
