import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axiosInstance from "../libs/axiosInstance";
import { setAllAppliedJobs } from "../redux/jobSlice";

const useGetAppliedJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const res = await axiosInstance.get(`/application/get`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setAllAppliedJobs(res.data.application));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAppliedJobs();
  }, []);
};
export default useGetAppliedJobs;
