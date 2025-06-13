import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axiosInstance from "../libs/axiosInstance";
import { setUser } from "../redux/userSlice";

const useGetUserProfile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axiosInstance.get("/user/profile", {
          withCredentials: true,
        });
console.log(res.data.user)
        if (res.data.success) {
          dispatch(setUser(res.data.user));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [dispatch]);
};

export default useGetUserProfile;
