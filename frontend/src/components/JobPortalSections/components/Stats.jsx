export const Stats = () => (
  <div className="flex flex-wrap justify-center items-center gap-6 mt-8 mb-10">
    <StatItem label="Countries" value="10+" />
    <StatItem label="Companies" value="100+" />
    <StatItem label="Active Employees" value="100K" />
  </div>
);

const StatItem = ({ label, value }) => (
  <div className="text-center">
    <p className="text-2xl font-bold">{value}</p>
    <p className="text-sm opacity-80">{label}</p>
  </div>
);
