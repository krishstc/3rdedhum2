import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/images/hero.png";

const Hero = () => {
  const navigate = useNavigate();

  const handleExploreSolutions = () => {
    const solutionsSection = document.getElementById("solutions");

    if (solutionsSection) {
      solutionsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleTalkToExpert = () => {
    navigate("/why3rdedhum/about-us/our-leadership-team");
  };

  return (
    <section className="w-full bg-white pt-2 pb-8 lg:pt-2 lg:pb-12">
      <div className="mx-auto w-full max-w-[1350px] px-4 sm:px-6">
        <div
          className="relative min-h-[620px] overflow-hidden rounded-[32px] shadow-2xl"
          style={{
            background: `linear-gradient(
              90deg,
              #0e4937 0%,
              #0e4937 25%,
              #0e4937 40%,
              #115843 60%,
              #137254 80%,
              #14805f 100%
            )`,
          }}
        >
          <div className="relative z-20 flex min-h-[620px] flex-col items-center lg:flex-row">

            {/* ================= LEFT ================= */}

            <div className="w-full px-8 py-14 md:px-14 lg:w-2/3 lg:px-20 lg:py-20">

              <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-white/80 sm:text-sm">
                Transforming People. Elevating Performance
              </p>

              <h1 className="mb-8 max-w-[660px] text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[56px]">
                Build the Capability,
                <br />
                Inspire the{" "}
                <span className="text-[#10e7b1]">
                  Change.
                </span>
              </h1>

              <p className="max-w-[500px] text-lg leading-7 tracking-tight text-white/80">
                End-to-end learning solutions that help
                <br className="hidden sm:block" />
                organizations build leadership bench strength, drive
                <br className="hidden sm:block" />
                performance, and achieve lasting impact.
              </p>

              {/* ================= BUTTONS ================= */}

              <div className="mt-10 flex flex-wrap gap-5">

                {/* EXPLORE SOLUTIONS */}

                <button
                  type="button"
                  onClick={handleExploreSolutions}
                  className="rounded-lg bg-[#1a8d61] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#47b977]"
                >
                  Explore Solutions
                </button>

                {/* TALK TO EXPERT */}

                <button
                  type="button"
                  onClick={handleTalkToExpert}
                  className="rounded-lg border border-white px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#0D4D42]"
                >
                  Talk To Expert
                </button>

              </div>

              {/* ================= SCROLLING UPDATE ================= */}

              <div className="mt-10 overflow-hidden border-l-4 border-white pl-4">

                <div className="ticker">

                  <span className="text-lg font-semibold font-medium text-[#ebf837]">
                    Update : 13th August Live Workshop, Grab Tickets
                  </span>

                </div>

              </div>

            </div>

            {/* ================= RIGHT ================= */}

            <div className="relative z-10 flex w-full items-end justify-center self-stretch lg:w-1/3">

              <img
                src={heroImg}
                alt="Hero"
                className="relative h-auto w-full max-w-full object-contain lg:absolute lg:bottom-0 lg:right-[-10px] lg:h-full lg:w-auto lg:max-w-none"
              />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;