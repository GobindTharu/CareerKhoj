import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axiosInstance from "../libs/axiosInstance";
import { setAllRecruiterJobs } from "../redux/jobSlice";

const useGetAllRecruiterJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllRecruiterJobs = async () => {
      try {
        const res = await axiosInstance.get(`/job/recruiter/list`, {
          timeout: 5000,
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setAllRecruiterJobs(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllRecruiterJobs();
  }, []);
};

export default useGetAllRecruiterJobs;
