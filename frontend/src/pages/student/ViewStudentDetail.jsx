import React, { useEffect, useState } from "react";

const ViewDetails = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("user");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-5">User Details</h2>

      {userData ? (
        <div className="space-y-3">
          {Object.entries(userData)
            .filter(([key]) => key !== "_id") // Exclude _id
            .map(([key, value]) => (
              <div key={key} className="flex justify-between items-center p-3 bg-gray-100 rounded-lg">
                <span className="font-semibold text-gray-700 capitalize">
                  {key.replace(/_/g, " ")}:
                </span>
                <span className="text-gray-900">{value}</span>
              </div>
            ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 animate-pulse">Fetching details...</p>
      )}
    </div>
  );
};

export default ViewDetails;
