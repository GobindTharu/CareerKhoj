import { useSelector } from "react-redux";
import NavBar from "../../components/JobPortalSections/components/NavBar";
import AllUserTables from "./ALlUsers";
import Sidebar from "./Sidebar";
import useGetAllUsers from "../../hooks/useGetAllUsers";

const AllUsers = () => {
  const allUser = useSelector((state) => state.user.allUser);
  console.log(allUser);
  useGetAllUsers();

  return (
    <>
      <NavBar />

      <div className="flex py-16">
        <Sidebar />
        <div className="flex-1 bg-gray-50 min-h-screen">
          {/* <AllUserTables {...allUser} /> */} All User Lists
        </div>
      </div>
    </>
  );
};

export default AllUsers;
