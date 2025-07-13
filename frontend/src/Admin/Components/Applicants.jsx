import { useSelector } from "react-redux";
import NavBar from "../../components/JobPortalSections/components/NavBar";
import { useGetApplicantsById } from "../../hooks/useGetApplicatById";
import ApplicantsTable from "./ApplicantsTable";

const Applicants = () => {
  const applicants = useSelector((state) => state.application.applicants || {});

  useGetApplicantsById();

  return (
    <div className="py-32">
      <NavBar />
      <div className="max-w-7xl mx-auto ">
        <h1 className="font-bold text-xl my-5">
          Applicants {"("} {applicants?.length || 0} {")"}
        </h1>
        <ApplicantsTable />
      </div>
    </div>
  );
};

export default Applicants;
