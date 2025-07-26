import { useEffect, useState } from "react";

const AllData = () => {
  const [jobs, setJobs] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [users, setUsers] = useState([]);
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then((res) => res.json())
      .then(setJobs);
    fetch("http://localhost:5000/api/companies")
      .then((res) => res.json())
      .then(setCompanies);
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then(setUsers);
    fetch("http://localhost:5000/api/applicants")
      .then((res) => res.json())
      .then(setApplicants);
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

      <h2>All Companies</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((c) => (
            <tr key={c._id}>
              <td>{c.name}</td>
              <td>{c.description}</td>
              <td>{c.location}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>All Users</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

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

export default AllData;
