import React from "react";

const ResumeFormWrapper = () => {
  const [submittedData, setSubmittedData] = React.useState(null);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (data) => {
    setSubmittedData(data);
    setSubmitted(true);
  };

  return submitted ? (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Your Resume Data</h2>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(submittedData, null, 2)}
      </pre>
      <button
        onClick={() => setSubmitted(false)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Edit
      </button>
    </div>
  ) : (
    <div className="max-w-3xl mx-auto mt-8">
      <ResumeForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ResumeFormWrapper;
