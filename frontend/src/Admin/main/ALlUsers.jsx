import { useSelector } from "react-redux";
import useGetAllUsers from "../../hooks/useGetAllUsers";

const TableView = () => {
  const allUser = useSelector((state) => state?.user?.allUser);
  console.log(allUser);
  useGetAllUsers();

  return (
    <div>
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
          {allUser.map((u) => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
