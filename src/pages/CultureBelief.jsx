import React from "react";
import { ArrowRight, UsersRound } from "lucide-react";
import Footer from "../components/footer/Footer";
import cultureBelief from "../data/CultureBelief";
import heroImage from "../assets/images/AboutUs/culture-beliefs-hero.png";

function CultureBelief() {
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
                {cultureBelief.breadcrumb.section}
                <span className="mx-2">›</span>
                {cultureBelief.breadcrumb.category}
                <span className="mx-2">›</span>
                <span className="text-[#4A8E76]">
                  {cultureBelief.breadcrumb.current}
                </span>
              </p>
            </div>

            {/* Hero */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-7 px-6 sm:px-8 lg:px-10 pt-6 pb-7">

              {/* LEFT */}
              <div className="animate-[fadeUp_.7s_ease-out]">

                <div className="inline-flex flex-col items-start">
                  <span className="text-[14px] sm:text-[15px] font-semibold tracking-[1.1px] text-[#548C78]">
                    {cultureBelief.label}
                  </span>

                  <span className="mt-2 h-[3px] w-[55px] rounded-full bg-[#4D997A]" />
                </div>

                <h1 className="mt-5 text-[42px] sm:text-[50px] md:text-[56px] lg:text-[60px] xl:text-[64px] font-bold leading-[1.05] tracking-[-2px] text-[#07372F]">
                  CULTURE &{" "}
                  <span className="text-[#3C9A72]">
                    BELIEFS.
                  </span>
                </h1>

                <p className="mt-6 max-w-[680px] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.55] text-[#4F5958]">
                  {cultureBelief.introduction}
                </p>

              </div>

              {/* HERO IMAGE */}
              <div className="flex justify-center lg:justify-end animate-[fadeIn_.9s_ease-out]">

                <img
                  src={heroImage}
                  alt="Culture and Beliefs"
                  className="
                    w-full
                    max-w-[500px]
                    object-contain
                    transition-transform
                    duration-700
                    hover:scale-[1.04]
                  "
                />

              </div>

            </div>

          </div>

        </section>


        {/* ================= BELIEFS ================= */}
        <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 mt-14 sm:mt-16">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">

            {cultureBelief.beliefs.map((belief, index) => {

              const Icon = belief.icon;

              return (
                <div
                  key={belief.id}
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

                    /* LIGHT GREEN HOVER */
                    hover:bg-[#E2F8EF]
                    hover:-translate-y-1
                    hover:border-[#BFE6D4]
                    hover:shadow-[0_10px_22px_rgba(0,86,65,0.10)]
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
                      rounded-md
                      bg-[#DFF9EE]
                      transition-all
                      duration-300
                      group-hover:bg-white
                      group-hover:scale-105
                    "
                  >
                    <Icon
                      size={40}
                      strokeWidth={1.5}
                      className="
                        text-[#4A9877]
                        transition-colors
                        duration-300
                      "
                    />
                  </div>

                  {/* CONTENT */}
                  <div>

                    <h2
                      className="
                        text-[18px]
                        sm:text-[19px]
                        lg:text-[20px]
                        font-bold
                        leading-[1.3]
                        text-[#101F1D]
                        transition-colors
                        duration-300
                      "
                    >
                      {belief.title}
                    </h2>

                    <div className="mt-2.5 h-[3px] w-[42px] rounded-full bg-[#4D997A]" />

                    <p
                      className="
                        mt-4
                        max-w-[370px]
                        text-[14px]
                        sm:text-[15px]
                        leading-[1.55]
                        text-[#4F5958]
                        transition-colors
                        duration-300
                      "
                    >
                      {belief.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </section>


        {/* ================= PRINCIPLES ================= */}
        <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 mt-16 sm:mt-20">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">

            {cultureBelief.principles.map((principle, index) => {

              const Icon = principle.icon;

              return (
                <div
                  key={principle.id}
                  style={{ animationDelay: `${index * 120}ms` }}
                  className="
                    animate-[fadeUp_.6s_ease-out_both]
                    group
                    min-h-[220px]
                    sm:min-h-[235px]
                    rounded-xl
                    bg-[#E2F8EF]
                    px-6
                    sm:px-7
                    py-8
                    flex
                    flex-col
                    items-center
                    text-center

                    transition-all
                    duration-300

                    /* DARK GREEN HOVER */
                    hover:-translate-y-1
                    hover:bg-[#005641]
                    hover:shadow-[0_12px_25px_rgba(0,86,65,0.18)]
                  "
                >

                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      transition-all
                      duration-300
                      group-hover:bg-[#E2F8EF]
                      group-hover:scale-110
                    "
                  >
                    <Icon
                      size={28}
                      strokeWidth={1.7}
                      className="
                        text-[#4A9877]
                        transition-colors
                        duration-300
                        group-hover:text-[#005641]
                      "
                    />
                  </div>

                  {/* TITLE */}
                  <h2
                    className="
                      mt-6
                      max-w-[280px]
                      text-[18px]
                      sm:text-[19px]
                      font-bold
                      leading-[1.25]
                      text-[#101F1D]
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  >
                    {principle.title}
                  </h2>

                  {/* UNDERLINE */}
                  <div
                    className="
                      mt-2.5
                      h-[3px]
                      w-[42px]
                      rounded-full
                      bg-[#4D997A]
                      transition-colors
                      duration-300
                      group-hover:bg-[#BDEFD9]
                    "
                  />

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-4
                      max-w-[270px]
                      text-[14px]
                      sm:text-[15px]
                      leading-[1.5]
                      text-[#4F5958]
                      transition-colors
                      duration-300
                      group-hover:text-white/85
                    "
                  >
                    {principle.description}
                  </p>

                </div>
              );
            })}

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 mt-16 sm:mt-20 pb-10">

          <div className="rounded-2xl bg-[#005641] px-6 sm:px-8 py-7">

            <div className="flex flex-col sm:flex-row sm:items-center gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#E2F8EF]">

                <UsersRound
                  size={28}
                  strokeWidth={1.7}
                  className="text-[#4A9877]"
                />

              </div>

              <div className="flex-1">

                <h2 className="text-[17px] sm:text-[18px] font-semibold text-white">
                  {cultureBelief.cta.title}
                </h2>

                <p className="mt-2 text-[13px] sm:text-[14px] leading-[1.5] text-white/80">
                  {cultureBelief.cta.description}
                </p>

              </div>

              <button
                type="button"
                className="
                  flex
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-md
                  border
                  border-white/50
                  px-5
                  py-3
                  text-[12px]
                  sm:text-[13px]
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-[#005641]
                  hover:scale-105
                "
              >
                {cultureBelief.cta.button}
                <ArrowRight size={16} />
              </button>

            </div>

          </div>

        </section>

      </main>

      <Footer />

      {/* Animations */}
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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }
      `}</style>

    </div>
  );
}

export default CultureBelief;