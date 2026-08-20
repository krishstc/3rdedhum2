import React from "react";
import { UsersRound } from "lucide-react";
import Footer from "../components/footer/Footer";
import ourJourney from "../data/OurJourney";

import heroImage from "../assets/images/AboutUs/our-journey-hero.png";
import foundationImage from "../assets/images/AboutUs/journey-foundation.png";
import expansionImage from "../assets/images/AboutUs/journey-expansion.png";
import innovationImage from "../assets/images/AboutUs/journey-innovation.png";
import todayImage from "../assets/images/AboutUs/journey-today.png";

const journeyImages = [
  foundationImage,
  expansionImage,
  innovationImage,
  todayImage,
];

function OurJourney() {
  return (
    <div className="min-h-screen bg-white text-[#0B2F2A]">
      <main>

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-4">

          <div className="overflow-hidden rounded-2xl border border-[#E2E9E5] bg-gradient-to-r from-[#E9FFF6] to-[#F4FFFB]">

            {/* Breadcrumb */}
            <div className="px-7 sm:px-9 lg:px-12 pt-7">
              <p className="text-[11px] sm:text-[12px] leading-none text-[#8A9894]">
                Home
                <span className="mx-2">›</span>
                {ourJourney.breadcrumb.section}
                <span className="mx-2">›</span>
                {ourJourney.breadcrumb.category}
                <span className="mx-2">›</span>
                <span className="text-[#4A8E76]">
                  {ourJourney.breadcrumb.current}
                </span>
              </p>
            </div>

            {/* Hero Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 px-7 sm:px-9 lg:px-12 pt-7 pb-7">

              {/* LEFT */}
              <div className="min-w-0">

                <div className="inline-flex flex-col items-start">

                  <span className="text-[13px] font-semibold tracking-[1px] text-[#548C78]">
                    {ourJourney.label}
                  </span>

                  <span className="mt-2 h-[3px] w-[50px] rounded-full bg-[#4D997A]" />

                </div>

                <h1 className="mt-5 max-w-[700px] text-[38px] sm:text-[46px] md:text-[52px] lg:text-[54px] font-bold leading-[1.08] tracking-[-1.8px] text-[#07372F]">
                  From Training Provider to{" "}
                  <span className="text-[#3C9A72]">
                    Transformation Partner.
                  </span>
                </h1>

                {/* Quote */}
                <div className="mt-6 flex max-w-[700px] items-start gap-4">

                  <div className="h-[62px] w-[4px] shrink-0 rounded-full bg-[#4D997A]" />

                  <div>
                    <p className="text-[14px] sm:text-[15px] font-semibold leading-[1.45] text-[#303A38]">
                      {ourJourney.quote}
                    </p>

                    <p className="mt-1.5 text-[13px] leading-[1.45] text-[#303A38]">
                      {ourJourney.quoteDescription}
                    </p>
                  </div>

                </div>

                {/* Introduction */}
                <p className="mt-6 max-w-[720px] text-[13px] sm:text-[14px] leading-[1.55] text-[#4F5958]">
                  {ourJourney.introduction}
                </p>

              </div>

              {/* HERO IMAGE */}
              <div className="flex items-center justify-center lg:justify-end">

                <img
                  src={heroImage}
                  alt="Our Journey"
                  className="block h-auto w-full max-w-[500px] object-contain"
                />

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            JOURNEY TIMELINE
        ===================================================== */}
        <section className="mx-auto w-full max-w-[1350px] px-5 sm:px-8 lg:px-12 mt-14 pb-12">

          <div className="relative">

            {/* CENTER LINE */}
            <div
              className="
                absolute
                left-1/2
                top-0
                bottom-0
                hidden
                w-[3px]
                -translate-x-1/2
                bg-[#DDE9E4]
                sm:block
              "
            />

            <div className="space-y-8 sm:space-y-2">

              {ourJourney.journey.map((item, index) => {

                const isLeft = index % 2 === 0;
                const Icon = item.icon;

                return (

                  <div
                    key={item.id}
                    className="
                      relative
                      grid
                      grid-cols-1
                      sm:grid-cols-2
                      items-center
                      sm:min-h-[300px]
                    "
                  >

                    {/* =================================================
                        CARD
                    ================================================= */}
                    <div
                      className={
                        isLeft
                          ? "sm:pr-[100px]"
                          : "sm:col-start-2 sm:pl-[100px]"
                      }
                    >

                      <div
                        className="
                          group
                          w-full
                          overflow-hidden
                          rounded-2xl
                          border
                          border-[#E1E8E4]
                          bg-white
                          shadow-[0_2px_10px_rgba(0,0,0,0.05)]
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-[#C8EBDD]
                          hover:shadow-lg
                        "
                      >

                        {/* =================================================
                            IMAGE
                            LIGHT GREEN BACKGROUND
                            COMPLETE IMAGE VISIBLE
                        ================================================= */}
                        <div
                          className="
                            flex
                            h-[235px]
                            sm:h-[240px]
                            w-full
                            items-center
                            justify-center
                            overflow-hidden
                            bg-[#F0FBF6]
                            px-4
                            py-3
                          "
                        >

                          <img
                            src={journeyImages[index]}
                            alt={item.title}
                            className="
                              block
                              h-full
                              w-full
                              object-contain
                              object-center
                              transition-transform
                              duration-500
                              group-hover:scale-[1.02]
                            "
                          />

                        </div>


                        {/* =================================================
                            CARD CONTENT
                        ================================================= */}
                        <div className="flex gap-4 bg-white px-5 py-5">

                          {/* ICON */}
                          <div
                            className="
                              flex
                              h-[46px]
                              w-[46px]
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-[#E2F8EF]
                            "
                          >

                            <Icon
                              size={23}
                              strokeWidth={1.7}
                              className="text-[#4A9877]"
                            />

                          </div>


                          {/* TEXT */}
                          <div className="min-w-0">

                            <h2 className="text-[18px] sm:text-[19px] font-bold leading-tight text-[#101F1D]">
                              {item.title}
                            </h2>

                            <div className="mt-2 h-[3px] w-[42px] rounded-full bg-[#4D997A]" />

                            <p className="mt-2.5 text-[12px] sm:text-[13px] leading-[1.5] text-[#4F5958]">
                              {item.description}
                            </p>

                          </div>

                        </div>

                      </div>

                    </div>


                    {/* =================================================
                        CENTER NUMBER
                    ================================================= */}
                    <div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        z-20
                        hidden
                        -translate-x-1/2
                        -translate-y-1/2
                        sm:flex
                      "
                    >

                      <div
                        className="
                          flex
                          h-[34px]
                          w-[34px]
                          items-center
                          justify-center
                          rounded-full
                          border-[4px]
                          border-white
                          bg-[#3F9975]
                          text-[12px]
                          font-bold
                          text-white
                          shadow-sm
                        "
                      >
                        {item.id}
                      </div>

                    </div>

                  </div>

                );

              })}

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}
        <section className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 pb-10">

          <div
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              bg-[#005641]
              px-6
              sm:px-8
              py-6
            "
          >

            <div
              className="
                flex
                h-[50px]
                w-[50px]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#E2F8EF]
              "
            >

              <UsersRound
                size={25}
                strokeWidth={1.7}
                className="text-[#4A9877]"
              />

            </div>

            <p className="text-[12px] sm:text-[13px] leading-[1.5] text-white">
              {ourJourney.closing}
            </p>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default OurJourney;