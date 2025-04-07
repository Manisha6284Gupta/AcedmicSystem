import React from "react";
import { Loader2 } from "lucide-react";

const OtrInput = ({ otrNumber, setOtrNumber, handleSubmit, loading }) => {
  return (
    <div className="mt-6 flex items-center gap-4">
      <input
        type="text"
        placeholder="Enter certificate Number"
        value={otrNumber}
        onChange={(e) => setOtrNumber(e.target.value)}
        className="flex-1 border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleSubmit}
        className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition flex items-center gap-2"
        disabled={loading}
      >
        {loading ? <Loader2 className="animate-spin" size={20} /> : "Submit"}
      </button>
    </div>
  );
};

export default OtrInput;
