import { useEffect, useState, useRef } from "react";

const stats = [
  {
    number: 100,
    suffix: "+",
    title1: "Organizations",
    title2: "Partners",
  },
  {
    number: 10000,
    suffix: "+",
    title1: "Leaders",
    title2: "Developed",
  },
  {
    number: 100,
    suffix: "+",
    title1: "Expert",
    title2: "Facilitators",
  },
  {
    number: 10,
    suffix: "+",
    title1: "Years of",
    title2: "Experience",
  },
  {
    number: 50,
    suffix: "+",
    title1: "Client",
    title2: "Retention Rate",
  },
];

const Stats = () => {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Entering section → start animation
          setStartCounting(false);

          // Small delay so counter resets to 0 first
          setTimeout(() => {
            setStartCounting(true);
          }, 50);
        } else {
          // Leaving section → reset
          setStartCounting(false);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef}>

      {/* Top Wave */}
      <div className="max-w-[13500px] mx-auto overflow-hidden rounded-t-[3px]">
        <svg
          viewBox="0 0 1440 160"
          className="w-full h-20"
          preserveAspectRatio="none"
        >
          <path
            fill="#043329"
            d="M0,160 C320,20 1120,20 1440,160 L1440,160 L0,160 Z"
          />
        </svg>
      </div>

      {/* Green Section */}
      <div className="bg-[#043329] rounded-[6px] pt-14 pb-14">

        <div className="max-w-[1200px] mx-auto px-4">

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

            {stats.map((item, index) => (
              <div
                key={index}
                className={`text-center py-6 px-3 ${
                  index !== stats.length - 1
                    ? "border-b border-white/20 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <CountUp
                  end={item.number}
                  suffix={item.suffix}
                  start={startCounting}
                />

                <h3 className="mt-3 text-base font-semibold text-white leading-6">
                  {item.title1}
                  <br />
                  {item.title2}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </div>

    </section>
  );
};


// Count Animation
const CountUp = ({ end, suffix, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Reset to 0 whenever animation stops
    if (!start) {
      setCount(0);
      return;
    }

    let current = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  }, [start, end]);

  return (
    <h2 className="text-4xl lg:text-4xl font-semibold text-[#4ae2c1]">
      {count.toLocaleString()}
      {suffix}
    </h2>
  );
};

export default Stats;