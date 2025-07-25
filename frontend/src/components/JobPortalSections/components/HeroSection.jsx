import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ADD THIS

const HeroSection = () => {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!keyword.trim()) {
      setError("Please enter a keyword to search.");
      return;
    }
    setError("");
    navigate(`/all-jobs?keyword=${encodeURIComponent(keyword)}`);
  };

  return (
    <section className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12 py-10">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h1 className="flex flex-col text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Search, <span className="text-blue-600">Apply & Get</span>
            <span>Your Dream Job First</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg mb-6">
            Fast, user-friendly and engaging – streamline your daily operations
            and explore career opportunities effortlessly.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="flex w-full max-w-md mb-6">
            <input
              type="text"
              placeholder="e.g. Web Developer, Graphic Designer"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="flex-grow px-4 py-3 rounded-l-md border border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <button
              type="submit"
              className="px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-r-md transition"
            >
              Search
            </button>
          </form>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Stats Section */}
          <div className="flex flex-wrap gap-8 mt-8 text-left">
            <div>
              <p className="text-2xl font-bold text-gray-900">75.2%</p>
              <p className="text-gray-500 text-sm">Average daily activity</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">~20k</p>
              <p className="text-gray-500 text-sm">Average daily users</p>
            </div>
          </div>

          <div className="flex items-center gap-2 py-4">
            <span className="text-yellow-500 text-xl">★★★★★</span>
            <p className="text-gray-600 text-sm">4.5 Average user rating</p>
          </div>
        </div>
        {/* Right Image */}
        <div className="flex w-full h-screen justify-center md:justify-end">
          <img
            src="/heroImage.png"
            alt="Hero Graphic"
            className="max-w-2xl h-screen  object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
