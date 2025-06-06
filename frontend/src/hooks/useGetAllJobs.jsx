import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAllJobs } from "../redux/jobSlice";
import axiosInstance from "../libs/axiosInstance";

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axiosInstance.get("/job/jobseeker/list", {
          withCredentials: true,
        });

        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllJobs();
  }, [dispatch]);
};

export default useGetAllJobs;
