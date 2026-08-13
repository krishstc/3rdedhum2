import { useEffect, useRef, useState } from "react";
import {
  TrendingUp,
  Users,
  ChartNoAxesColumn,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: <TrendingUp size={42} strokeWidth={1.6} />,
    number: 2.4,
    suffix: "x",
    title1: "Increase in leadership",
    title2: "Pipeline Strength",
  },
  {
    icon: <Users size={42} strokeWidth={1.6} />,
    number: 35,
    suffix: "%",
    title1: "Improvement in Team",
    title2: "Effectiveness",
  },
  {
    icon: <ChartNoAxesColumn size={42} strokeWidth={1.6} />,
    number: 20,
    suffix: "%",
    title1: "Increase in Sales",
    title2: "Performance",
  },
  {
    icon: <Star size={42} strokeWidth={1.6} />,
    number: 90,
    suffix: "%",
    title1: "Client Satisfaction",
    title2: "Rate",
  },
];

const Counter = ({ target, suffix, animationKey }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    // Always start from 0
    setCount(0);

    const duration = 1800;

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out effect
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = target * easedProgress;

      if (target % 1 !== 0) {
        setCount(Number(currentValue.toFixed(1)));
      } else {
        setCount(Math.floor(currentValue));
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [target, animationKey]);

  return (
    <h2 className="text-[42px] sm:text-[52px] lg:text-[64px] font-semibold leading-none text-[#0B2C25]">
      {count}
      {suffix}
    </h2>
  );
};

const Results = () => {
  const sectionRef = useRef(null);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Restart animation every time section enters viewport
          setAnimationKey((prev) => prev + 1);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F6FCF9] py-20 sm:py-24"
    >
      <div className="max-w-[1350px] mx-auto px-6 sm:px-8">

        {/* Heading */}
        <p className="text-center uppercase tracking-[2px] sm:tracking-[3px] text-[#3A9C72] text-sm sm:text-lg font-medium mb-14 sm:mb-20">
          REAL IMPACT. LASTING RESULTS.
        </p>

        {/* Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 sm:gap-16">

          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >

              {/* Icon */}
              <div className="text-[#0B2C25] mb-6 sm:mb-8">
                {item.icon}
              </div>

              {/* Number */}
              <Counter
                target={item.number}
                suffix={item.suffix}
                animationKey={animationKey}
              />

              {/* Description */}
              <p className="mt-5 sm:mt-6 text-[14px] sm:text-[18px] leading-7 sm:leading-8 text-[#5D6A6E]">
                {item.title1}
                <br />
                {item.title2}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Results;