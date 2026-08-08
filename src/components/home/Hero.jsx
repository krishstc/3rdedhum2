import heroImg from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="w-full bg-white pt-2 pb-8 lg:pt-2 lg:pb-12">
        <div className="max-w-[1350px] mx-full px-6">
        <div className="relative rounded-[32px] overflow-hidden shadow-2xl min-h-[620px]"
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

          <div className="relative z-20 flex flex-col lg:flex-row items-center min-h-[620px]">

            {/* LEFT */}
            <div className="w-full lg:w-2/3 px-8 md:px-14 lg:px-20 py-14 lg:py-20">

              <p className="uppercase tracking-wider text-xs sm:text-sm font-semibold text-white/80 mb-5">
                Transforming People. Elevating Performance
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-white leading-[1.1] mb-8 max-w-[660px]">
                Build the Capability,
                <br />
                Inspire the{" "}
                <span className="text-[#10e7b1]">
                  Change.
                </span>
              </h1>

              <p className="text-white/80 text-lg leading-7 tracking-tight max-w-[500px]">
                End-to-end learning solutions that help
                <br />
                organizations build leadership bench strength, drive
                <br />
                performance, and achieve lasting impact.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-[#1a8d61] hover:bg-[#47b977] transition-all duration-300 text-white text-sm font-medium px-6 py-3 rounded-lg">
                Explore Solutions
              </button>

              <button className="border border-white text-white hover:bg-white hover:text-[#0D4D42] transition-all duration-300 text-sm font-medium px-6 py-3 rounded-lg">
                Talk To Expert
              </button>

              </div>

              {/* Scrolling Update */}
              <div className="mt-10 border-l-4 border-white pl-4 overflow-hidden">

                <div className="ticker">

                  <span className="text-[#D4A017] text-sm font-medium">
                    Update : 13th August Live Workshop, Grab Tickets
                  </span>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative z-10 w-full lg:w-1/2 flex justify-center items-end self-stretch">

            <img
              src={heroImg}
              alt="Hero"
              className="absolute bottom-0 right-[-10px] h-full w-auto max-w-none object-contain"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;