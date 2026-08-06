const FeatureCard = () => {
  return (
    <div className="w-[300px] bg-[#1E293B] rounded-2xl px-6 py-4 m-4 text-white">

      <span className="bg-yellow-500 text-black px-4 py-1 m-2 rounded-full text-xs font-semibold">
        FEATURED
      </span>

      <h2 className="text-2xl font-bold leading-tight p-3 mt-4">
        Customized Solutions Drive Performance
      </h2>

      <p className="text-gray-300 text-sm mb-4 p-2 leading-relaxed">
        Discover how our tailored training programs
        can transform your team's capability and build
        future-ready leaders.
      </p>

      <button className="mt-auto text-sm p-2 text-yellow-400 font-semibold">
        Explore Custom Programs →
      </button>

    </div>
  );
};

export default FeatureCard;