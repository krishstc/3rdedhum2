import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative mt-16">

      {/* Top Wave */}
      <div className="absolute -top-12 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-12"
          preserveAspectRatio="none"
        >
          <path
            fill="#389167"
            d="M0,120 C320,10 1120,10 1440,120 L1440,120 L0,120 Z"
          />
        </svg>
      </div>

      {/* CTA */}
      <div className="bg-[#389167] pt-16 pb-16">

        <div className="max-w-[1280px] mx-auto px-8">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Left */}

            <div className="max-w-[750px]">

              <h2 className="text-white text-3xl lg:text-[38px] font-semibold leading-tight">
                Let's Build A Stronger, Future-Ready<br />
                Organizations
                Together.
              </h2>

              <p className="mt-3 text-white/90 text-[16px] leading-6">
                Connect with our experts and discover the right solution for your business.
              </p>

            </div>

            {/* Right */}

            <button className="bg-[#062D23] hover:bg-[#08382C] transition px-7 py-3 rounded-xl text-white font-medium flex items-center gap-2">
              Get in Touch
              <ArrowRight size={17} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;