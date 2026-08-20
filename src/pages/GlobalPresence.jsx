import React from "react";
import { Globe2 } from "lucide-react";
import Footer from "../components/footer/Footer";
import globalPresence from "../data/GlobalPresence";

import heroImage from "../assets/images/OurReach/global-presence-hero.png";

function GlobalPresence() {
  return (
    <div className="min-h-screen bg-white text-[#0B2F2A]">
      <main>

        {/* ================= HERO ================= */}
        <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 pt-4">

          <div className="overflow-hidden rounded-2xl border border-[#E2E9E5] bg-gradient-to-r from-[#E9FFF6] to-[#F4FFFB]">

            {/* Breadcrumb */}
            <div className="px-6 sm:px-8 lg:px-10 pt-7">
              <p className="text-[11px] sm:text-[12px] text-[#8A9894]">
                Home
                <span className="mx-2">›</span>
                {globalPresence.breadcrumb.section}
                <span className="mx-2">›</span>
                {globalPresence.breadcrumb.category}
                <span className="mx-2">›</span>
                <span className="text-[#4A8E76]">
                  {globalPresence.breadcrumb.current}
                </span>
              </p>
            </div>

            {/* Hero Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-7 px-6 sm:px-8 lg:px-10 pt-6 pb-7">

              {/* LEFT CONTENT */}
              <div className="animate-[fadeUp_.7s_ease-out]">

                <div className="inline-flex flex-col items-start">

                  <span className="text-[14px] sm:text-[15px] font-semibold tracking-[1.1px] text-[#548C78]">
                    {globalPresence.label}
                  </span>

                  <span className="mt-2 h-[3px] w-[55px] rounded-full bg-[#4D997A]" />

                </div>

                <h1 className="mt-5 max-w-[700px] text-[42px] sm:text-[50px] md:text-[56px] lg:text-[60px] xl:text-[64px] font-bold leading-[1.06] tracking-[-2px] text-[#07372F]">
                  Global Presence.{" "}
                  <span className="text-[#3C9A72]">
                    Local Understanding.
                  </span>
                </h1>

                <p className="mt-6 max-w-[700px] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.55] text-[#4F5958]">
                  {globalPresence.introduction}
                </p>

              </div>


              {/* HERO IMAGE */}
              <div className="flex justify-center lg:justify-end">

                <img
                  src={heroImage}
                  alt="Global Presence"
                  className="
                    w-full
                    max-w-[520px]
                    object-contain
                    animate-[heroImage_.9s_ease-out]
                    transition-transform
                    duration-700
                    hover:scale-[1.04]
                  "
                />

              </div>

            </div>

          </div>

        </section>


        {/* ================= DELIVERY MODES ================= */}
        <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 mt-14 sm:mt-16">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">

            {globalPresence.deliveryModes.map((mode, index) => {

              const Icon = mode.icon;

              return (
                <div
                  key={mode.id}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="
                    animate-[fadeUp_.6s_ease-out_both]
                    group
                    min-h-[215px]
                    sm:min-h-[230px]
                    rounded-xl
                    border
                    border-[#E5E8E6]
                    bg-white
                    shadow-[0_4px_10px_rgba(0,0,0,0.10)]
                    px-6
                    sm:px-8
                    py-7
                    flex
                    items-center
                    gap-6
                    transition-all
                    duration-300

                    hover:bg-[#E2F8EF]
                    hover:-translate-y-1
                    hover:border-[#BFE6D4]
                    hover:shadow-[0_10px_22px_rgba(0,86,65,0.12)]
                  "
                >

                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-[105px]
                      w-[105px]
                      sm:h-[115px]
                      sm:w-[115px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#DFF9EE]
                      transition-all
                      duration-300
                      group-hover:bg-white
                      group-hover:scale-105
                    "
                  >
                    <Icon
                      size={42}
                      strokeWidth={1.5}
                      className="
                        text-[#4A9877]
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />
                  </div>


                  {/* CONTENT */}
                  <div>

                    <h2 className="text-[18px] sm:text-[19px] lg:text-[20px] font-bold leading-[1.3] text-[#101F1D]">
                      {mode.title}
                    </h2>

                    <div className="mt-2.5 h-[3px] w-[42px] rounded-full bg-[#4D997A]" />

                    <p className="mt-4 max-w-[370px] text-[14px] sm:text-[15px] leading-[1.55] text-[#4F5958]">
                      {mode.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </section>


        {/* ================= CLOSING CTA ================= */}
        <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 mt-16 sm:mt-20 pb-10">

          <div
            className="
              rounded-2xl
              bg-[#005641]
              px-6
              sm:px-8
              py-7
              transition-all
              duration-300
              hover:bg-[#004A38]
              hover:shadow-[0_10px_25px_rgba(0,86,65,0.18)]
            "
          >

            <div className="flex items-center gap-5">

              {/* ICON */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#E2F8EF]">

                <Globe2
                  size={29}
                  strokeWidth={1.7}
                  className="text-[#4A9877]"
                />

              </div>


              {/* TEXT */}
              <p className="text-[13px] sm:text-[14px] leading-[1.5] text-white">
                {globalPresence.closing}
              </p>

            </div>

          </div>

        </section>

      </main>


      <Footer />


      {/* ================= ANIMATIONS ================= */}
      <style>{`

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroImage {
          from {
            opacity: 0;
            transform: translateX(35px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

      `}</style>

    </div>
  );
}

export default GlobalPresence;