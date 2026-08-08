const FeatureCard = () => {
  return (
    <div className="w-full max-w-[270px] bg-[#1E293B] rounded-2xl px-4 py-4 text-white h-fit">
      <span className="bg-yellow-500 text-black px-6 py-1 m-2 rounded-full text-xs font-semibold">
        FEATURED
      </span>

      <h2 className="text-xl font-bold leading-tight p-4 mt-0">
        Customized <br/> Solutions Drive <br/> Performance
      </h2>

      <p className="text-gray-300 text-xs mb-1 p-4">
        Discover how our tailored training programs
        can transform your team's capability and build
        future-ready leaders.
      </p>

      <button className="px-4 py-2 mt-1 text-sm text-yellow-400 font-semibold">
        Explore Custom Programs →
      </button>

    </div>
  );
};

export default FeatureCard;