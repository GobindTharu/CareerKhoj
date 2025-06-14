import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/JobPortalSections/components/NavBar";
import axiosInstance from "../../libs/axiosInstance";
import { setSingleCompany } from "../../redux/companySlice";

const CompanyCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState();

  const registerNewCompany = async () => {
    try {
      const res = await axiosInstance.post(
        "/company/register",
        { companyName },
        {
          header: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(res.data);
      if (res?.data?.success) {
        dispatch(setSingleCompany(res?.data?.company));
        toast.success(res.data.success);
        const companyId = res?.data?.company._id;
        navigate(`/recruiter/company-update/${companyId}`);
      }
    } catch (error) {
      console.log(error.response?.data?.message);
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <>
      <NavBar />
      <div className="max-w-5xl mx-auto py-32">
        <div className=" flex flex-col ">
          <h1 className="font-bold text-3xl">Your Company Name</h1>
          <p className="text-gray-500 py-2">
            Would You like to give your company name, You Can change it letter.
          </p>
          <div className="mt-10">
            <label className="font-medium text-xl ">Company Name : </label>
            <input
              type="text"
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="CareerKoj, Microsoft.... etc"
              className="my-2 border-1 rounded-md p-2 w-full"
            />
          </div>
          <div className="flex items-center justify-between py-10">
            <button
              onClick={() => {
                navigate("/recruiter/companies");
              }}
              className="bg-gray-300 hover:bg-gray-400 px-7 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={registerNewCompany}
              className="bg-gray-800 hover:bg-gray-950 text-white  px-7 py-2  rounded-md"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyCreate;
