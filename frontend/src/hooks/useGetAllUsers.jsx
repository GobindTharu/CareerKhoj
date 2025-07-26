import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axiosInstance from "../libs/axiosInstance";
import { setAllUser } from "../redux/userSlice";

const useGetAllUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axiosInstance.get("/admin/all-user", {
          withCredentials: true,
        });

        if (res.data.success) {
          dispatch(setAllUser(res.data.user));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUsers();
  }, [dispatch]);
};

export default useGetAllUsers;
