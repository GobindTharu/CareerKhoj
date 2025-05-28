export const Stats = () => (
  <div className="flex flex-wrap justify-center items-center gap-6 mt-4 mb-10">
    <StatItem label="Countries" value="10+" />
    <StatItem label="Companies" value="50+" />
    <StatItem label="Recruiters" value="100+" />
    <StatItem label="Jobs" value="50K+" />
    <StatItem label="Active Employees" value="1000K+" />
  </div>
);

const StatItem = ({ label, value }) => (
  <div className="text-center">
    <p className="text-2xl font-bold">{value}</p>
    <p className="text-sm opacity-80">{label}</p>
  </div>
);
