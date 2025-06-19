import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axiosInstance from "../libs/axiosInstance";
import { setSingleCompany } from "../redux/companySlice";

const useGetCompanyById = (companyId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCompanyById = async () => {
      try {
        const res = await axiosInstance.get(`/company/get/${companyId}`, {
          withCredentials: true,
        });
        console.log(res.data?.company);
        if (res.data.success) {
          dispatch(setSingleCompany(res.data?.company));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCompanyById();
  }, [companyId, dispatch]);
};

export default useGetCompanyById;
