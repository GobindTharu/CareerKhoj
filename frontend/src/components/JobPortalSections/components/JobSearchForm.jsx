
export const JobSearchForm = () => (
  <div className="mt-8 bg-gray-50 text-black rounded-lg shadow-md w-full max-w-4xl mx-auto p-4">
    <div className="flex flex-col md:flex-row gap-4 items-center py-12">
      <input
        type="text"
        placeholder="eg. Graphic, Web Developer"
        className="flex-1 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Category"
        className="flex-1 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Location"
        className="flex-1 p-2 border rounded"
      />
      <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
        Search
      </button>
    </div>
    <div className="flex justify-center mt-4 gap-4">
      <button className="border-1 border-gray-500  px-10 py-2 rounded-lg font-semibold hover:bg-gray-300 hover:text-blue-600 transition">
        Find a Job
      </button>
      <button className="text-sm font-semibold bg-blue-700 text-amber-50 px-4 py-1 rounded">
        Find a Candidate
      </button>
    </div>
  </div>
);
