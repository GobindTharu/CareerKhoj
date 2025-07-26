import { useEffect, useState } from "react";

const AdminCompany = () => {
  const [companies, setCompanies] = useState([]);
  

  useEffect(() => {
   
    fetch("http://localhost:5000/api/companies")
      .then((res) => res.json())
      .then(setCompanies);
   
  }, []);

  return (
    <div>
      

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

      
    </div>
  );
};

export default AdminCompany;
