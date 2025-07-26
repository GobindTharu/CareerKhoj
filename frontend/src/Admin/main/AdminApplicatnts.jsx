import { useEffect, useState } from "react";

const AdminApplicants = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/applicants")
      .then((res) => res.json())
      .then(setApplicants);
  }, []);

  return (
    <div>
      <h2>All Applicants</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>User</th>
            <th>Job</th>
            <th>Applied At</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((a) => (
            <tr key={a._id}>
              <td>{a.user?.name}</td>
              <td>{a.job?.title}</td>
              <td>{new Date(a.appliedAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminApplicants;
