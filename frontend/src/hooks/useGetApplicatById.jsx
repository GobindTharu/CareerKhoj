import { useEffect } from "react";
import axiosInstance from "../libs/axiosInstance";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAllApplicants } from "../redux/applicationSlice";

export const useGetApplicantsById = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await axiosInstance.get(
          `application/${params.id}/applicants`,
          { withCredentials: true }
        );
        dispatch(setAllApplicants(res.data.job.application));
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllApplicants();
  }, [dispatch]);
};
