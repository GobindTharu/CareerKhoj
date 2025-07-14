import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "../../../redux/jobSlice";

const filterData = [
  {
    filterType: "Position",
    array: [
      "Frontend developer",
      "Backend developer",
      "Java Developer",
      "Full Stack developer",
      "ui/ux designer",
      "Teacher",
      "Admission counselor",
      "Digital Marketing",
      "Accountant",
      "Manager",
      "Chef",
      "Waiter",
      "Kitchen helper",
      "Nurse",
      "Receptionist",
      "Cleaner",
    ],
  },
  {
    filterType: "Industry",
    array: [
      "IT",
      "Education",
      "Marketing",
      "Finance",
      "Restaurant",
      "Hospital",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42-1 lakh", "1 lakh to 5 lakh"],
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    console.log(selectedValue);
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);

  return (
    <aside className="w-full bg-white p-6 rounded-md shadow space-y-6">
      <h1 className="text-xl font-bold text-gray-800">Filter Jobs</h1>

      {filterData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-1">
            {section.filterType}
          </h2>

          <div className="space-y-2">
            {section.array.map((option, optionIndex) => {
              const id = `${section.filterType}-${optionIndex}`;
              return (
                <div key={id} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id={id}
                    name={section.filterType}
                    value={option}
                    checked={selectedValue === option}
                    onChange={changeHandler}
                    className="accent-blue-600 h-4 w-4"
                  />
                  <label
                    htmlFor={id}
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    {option}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </aside>
  );
};

export default FilterCard;
