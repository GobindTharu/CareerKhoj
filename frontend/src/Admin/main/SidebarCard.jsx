const StatCard = ({ title, value, change }) => {
  return (
    <div className="bg-white shadow rounded-xl p-4 flex flex-col gap-2">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
      <span
        className={`text-sm ${change >= 0 ? "text-green-500" : "text-red-500"}`}
      >
        {change >= 0 ? `+${change}%` : `${change}%`}
      </span>
    </div>
  );
};

export default StatCard;
