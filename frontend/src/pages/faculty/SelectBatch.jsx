






import React from "react";

function SelectBatch({ selectedBatch, setSelectedBatch }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg w-80">
      <label htmlFor="batch" className="block text-gray-800 font-medium mb-2">
        Enter Batch:
      </label>
      <input
        type="text"
        id="batch"
        value={selectedBatch}
        onChange={(e) => setSelectedBatch(e.target.value)}
        placeholder="e.g., 2023-2027"
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
      />
      <p className="text-xs text-gray-500 mt-2">
        Example: <span className="font-semibold">2023-2027</span>
      </p>
    </div>
  );
}

export default SelectBatch;
