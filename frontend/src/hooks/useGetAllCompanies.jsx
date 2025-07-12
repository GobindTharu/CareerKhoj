import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axiosInstance from "../libs/axiosInstance";
import { setAllCompany } from "../redux/companySlice";

const useGetAllCompanies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllCompanies = async () => {
      try {
        const res = await axiosInstance.get(`/company/get`, {
          withCredentials: true,
        });
        console.log(res.data);
        if (res.data.success) {
          dispatch(setAllCompany(res.data.companies));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllCompanies();
  }, []);
};

export default useGetAllCompanies;
