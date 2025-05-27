
export const JobCategories = () => {
    const categories = [
      "Website & Software",
      "Education & Training",
      "Graphic & UI/UX Design",
      "Accounting & Finance",
      "Restaurant & Food",
      "Health & Hospital"
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10 px-8">
        {categories.map((item) => (
          <CategoryCard key={item} title={item}  />
        ))}
      </div>
    );
  };
  
  const CategoryCard = ({ title }) => (
    <div
      className={`md:relative top-30 bg-gray-100 text-black text-center border rounded-lg p-9 shadow-sm `}
    >
      <div className="text-2xl mb-2">📁</div>
      <h3 className="font-semibold text-sm">{title}</h3>
      <p className="text-xs">143 Open position</p>
    </div>
  );