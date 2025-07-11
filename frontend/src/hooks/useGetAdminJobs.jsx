import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axiosInstance from "../libs/axiosInstance";


const useGetAllAdminJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllAdminJobs = async () => {
      try {
        const res = await axiosInstance.get("/jobs/get-all", {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setRecruiterJobs(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllAdminJobs();
  }, []);
};

export default useGetAllAdminJobs;
