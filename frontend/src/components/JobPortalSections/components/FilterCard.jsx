import React from 'react';

const filterData = [
  {
    filterType: 'Position',
    array: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'],
  },
  {
    filterType: 'Industry',
    array: ['IT', 'Finance', 'Healthcare', 'Education', 'Marketing', 'Restaurant'],
  },
  {
    filterType: 'Salary',
    array: ['0-40k', '42-1 lakh', '1 lakh to 5 lakh'],
  },
];

const FilterCard = () => {
  return (
    <aside className="w-full bg-white p-6 rounded-sm shadow-lg space-y-5">
      <h1 className="text-2xl font-bold text-gray-800">Filter Jobs</h1>

      {filterData.map((item, index) => (
        <div key={index} className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-1">
            {item.filterType}
          </h2>

          <div className="space-y-2">
            {item.array.map((item, index) => {
              const id = `${item.filterType}-${index}`;
              return (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id={id}
                    name={item.filterType}
                    value={item}
                    className="accent-blue-600 h-4 w-4"
                  />
                  <label htmlFor={id} className="text-sm text-gray-600 cursor-pointer">
                    {item}
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
