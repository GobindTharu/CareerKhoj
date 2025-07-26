import { useEffect, useState } from "react";

const AdminJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/admin/jobs")
      .then((res) => res.json())
      .then(setJobs);
  }, []);

  return (
    <div>
      <h2>All Jobs</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job._id}>
              <td>{job.title}</td>
              <td>{job.company?.name}</td>
              <td>{job.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminJobs;
