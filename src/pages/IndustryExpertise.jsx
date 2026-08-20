import React from "react";
import { Globe2 } from "lucide-react";
import Footer from "../components/footer/Footer";
import industryExpertise from "../data/IndustryExpertise";

import heroImage from "../assets/images/OurReach/industry-expertise-hero.png";

function IndustryExpertise() {
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
                {industryExpertise.breadcrumb.section}
                <span className="mx-2">›</span>
                {industryExpertise.breadcrumb.category}
                <span className="mx-2">›</span>
                <span className="text-[#4A8E76]">
                  {industryExpertise.breadcrumb.current}
                </span>
              </p>
            </div>

            {/* Hero */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 px-6 sm:px-8 lg:px-10 pt-6 pb-7">

              {/* LEFT CONTENT */}
              <div className="animate-[fadeUp_.7s_ease-out]">

                <div className="inline-flex flex-col items-start">

                  <span className="text-[14px] sm:text-[15px] font-semibold tracking-[1.1px] text-[#548C78]">
                    {industryExpertise.label}
                  </span>

                  <span className="mt-2 h-[3px] w-[55px] rounded-full bg-[#4D997A]" />

                </div>

                <h1 className="mt-5 max-w-[720px] text-[42px] sm:text-[50px] md:text-[56px] lg:text-[60px] xl:text-[64px] font-bold leading-[1.06] tracking-[-2px] text-[#07372F]">
                  Cross-Industry{" "}
                  <span className="text-[#3C9A72]">
                    Expertise.
                  </span>
                </h1>

                <p className="mt-6 max-w-[700px] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.55] text-[#4F5958]">
                  {industryExpertise.introduction}
                </p>

              </div>


              {/* HERO IMAGE */}
              <div className="flex justify-center lg:justify-end">

                <img
                  src={heroImage}
                  alt="Cross-Industry Expertise"
                  className="
                    w-full
                    max-w-[540px]
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


        {/* ================= INDUSTRY CARDS ================= */}
        <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 mt-14 sm:mt-16">

          {/* FIRST ROW - 3 CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">

            {industryExpertise.industries.slice(0, 3).map(
              (industry, index) => {

                const Icon = industry.icon;

                return (
                  <IndustryCard
                    key={industry.id}
                    industry={industry}
                    Icon={Icon}
                    index={index}
                  />
                );
              }
            )}

          </div>


          {/* SECOND ROW - 2 CENTERED CARDS */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:max-w-[920px] md:mx-auto">

            {industryExpertise.industries.slice(3, 5).map(
              (industry, index) => {

                const Icon = industry.icon;

                return (
                  <IndustryCard
                    key={industry.id}
                    industry={industry}
                    Icon={Icon}
                    index={index + 3}
                  />
                );
              }
            )}

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 mt-16 sm:mt-20 pb-10">

          <div
            className="
              group
              rounded-2xl
              bg-[#D9F8EB]
              px-6
              sm:px-8
              lg:px-10
              py-7
              sm:py-8
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#C8F2E0]
              hover:shadow-[0_10px_25px_rgba(0,86,65,0.12)]
            "
          >

            <div className="flex items-center gap-5 sm:gap-6">

              {/* ICON */}
              <div
                className="
                  flex
                  h-14
                  w-14
                  sm:h-16
                  sm:w-16
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#005641]
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >

                <Globe2
                  size={29}
                  strokeWidth={1.7}
                  className="text-white"
                />

              </div>


              {/* TEXT */}
              <p className="max-w-[1100px] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.5] font-medium text-[#173D35]">
                {industryExpertise.closing}
              </p>

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <Footer />


      {/* ================= ANIMATIONS ================= */}
      <style>{`

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
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


/* ================= INDUSTRY CARD ================= */

function IndustryCard({ industry, Icon, index }) {
  return (
    <div
      style={{ animationDelay: `${index * 100}ms` }}
      className="
        group
        animate-[fadeUp_.6s_ease-out_both]

        min-h-[300px]
        sm:min-h-[310px]

        rounded-xl
        border
        border-[#E5E8E6]
        bg-white

        px-6
        sm:px-7
        lg:px-8
        py-7
        sm:py-8

        shadow-[0_4px_10px_rgba(0,0,0,0.10)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:bg-[#E2F8EF]
        hover:border-[#BFE6D4]
        hover:shadow-[0_12px_25px_rgba(0,86,65,0.13)]
      "
    >

      {/* ICON */}
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-[#D9F8EB]

          transition-all
          duration-300

          group-hover:bg-white
          group-hover:scale-110
        "
      >

        <Icon
          size={32}
          strokeWidth={1.5}
          className="
            text-[#4A9877]
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />

      </div>


      {/* TITLE */}
      <h2
        className="
          mt-7
          text-[18px]
          sm:text-[19px]
          lg:text-[20px]
          font-bold
          leading-[1.3]
          text-[#101F1D]
        "
      >
        {industry.title}
      </h2>


      {/* UNDERLINE */}
      <div className="mt-3 h-[3px] w-[42px] rounded-full bg-[#4D997A]" />


      {/* ITEMS */}
      <ul
        className="
          mt-6
          space-y-2
          text-[14px]
          sm:text-[15px]
          leading-[1.4]
          text-[#4F5958]
        "
      >

        {industry.items.map((item) => (

          <li
            key={item}
            className="flex items-start gap-2"
          >

            <span
              className="
                mt-[7px]
                h-[5px]
                w-[5px]
                shrink-0
                rounded-full
                bg-[#4A9877]
                transition-transform
                duration-300
                group-hover:scale-125
              "
            />

            <span>
              {item}
            </span>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default IndustryExpertise;