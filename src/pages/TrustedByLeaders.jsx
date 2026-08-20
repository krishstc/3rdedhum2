import React from "react";
import { Quote } from "lucide-react";
import Footer from "../components/footer/Footer";
import trustedByLeaders from "../data/TrustedByLeaders";

// LOCAL IMAGE
import heroImage from "../assets/images/OurReach/trusted-by-leaders.png";

function TrustedByLeaders() {
  return (
    <div className="min-h-screen bg-[#FFF7F7] text-[#0B2F2A]">
      <main>

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-[#E2F8EF]">

          <div className="max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 py-12 sm:py-14 lg:py-16">

            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-center">

              {/* LEFT CONTENT */}
              <div>

                <p className="text-[12px] sm:text-[13px] lg:text-[14px] text-[#7B8A86]">
                  Home <span className="mx-2">›</span>
                  {trustedByLeaders.breadcrumb.section}
                  <span className="mx-2">›</span>
                  {trustedByLeaders.breadcrumb.category}
                  <span className="mx-2">›</span>
                  <span className="text-[#4A8E76]">
                    {trustedByLeaders.breadcrumb.current}
                  </span>
                </p>

                <div className="mt-8">

                  <span className="text-[14px] sm:text-[15px] font-semibold tracking-[1.2px] text-[#548C78]">
                    {trustedByLeaders.label}
                  </span>

                  <div className="mt-3 h-[3px] w-[58px] rounded-full bg-[#4D997A]" />

                </div>

                <h1 className="mt-7 max-w-[700px] text-[42px] sm:text-[48px] md:text-[54px] lg:text-[58px] xl:text-[62px] leading-[1.08] font-bold tracking-[-2px] text-[#07372F]">

                  Trusted By Leaders at{" "}

                  <span className="text-[#3C9A72]">
                    Every Level.
                  </span>

                </h1>

                <p className="mt-7 max-w-[700px] text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.55] text-[#374D48]">

                  {trustedByLeaders.introduction}

                  <span className="font-semibold text-[#3C9A72]">
                    {trustedByLeaders.highlightedIntroduction}
                  </span>

                </p>

              </div>

              {/* HERO IMAGE */}
              <div className="flex justify-center lg:justify-end">

                <div className="relative w-full max-w-[600px]">

                  <img
                    src={heroImage}
                    alt="Trusted by leaders"
                    className="
                      w-full
                      h-auto
                      object-contain
                      drop-shadow-[0_18px_30px_rgba(0,86,65,0.15)]
                      transition-all
                      duration-500
                      ease-out
                      hover:scale-[1.04]
                      hover:-translate-y-2
                      hover:drop-shadow-[0_25px_40px_rgba(0,86,65,0.25)]
                      animate-[float_5s_ease-in-out_infinite]
                    "
                  />

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ================= BUSINESS + PARTNERS ================= */}
        <section className="max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 mt-16 sm:mt-20 lg:mt-24">

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10">

            {/* BUSINESS BEFORE LEARNING */}
            <div className="
              rounded-2xl
              bg-[#005641]
              px-7 sm:px-8 lg:px-9
              py-8 sm:py-9
              transition-all
              duration-300
              hover:bg-[#D9F8EB]
              hover:shadow-[0_15px_35px_rgba(0,86,65,0.18)]
              group
            ">

              <h2 className="
                text-[25px] sm:text-[27px] lg:text-[29px]
                font-bold
                text-white
                group-hover:text-[#005641]
              ">
                {trustedByLeaders.businessTitle}
              </h2>

              <div className="mt-3 h-[3px] w-[50px] bg-[#9BE8C9] group-hover:bg-[#005641]" />

              <div className="mt-7 space-y-5">

                {trustedByLeaders.businessAudience.map((person) => {

                  const Icon = person.icon;

                  return (
                    <div
                      key={person.id}
                      className="flex items-center gap-4"
                    >

                      <div className="
                        flex
                        h-12 w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#E2F8EF]
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      ">

                        <Icon
                          size={23}
                          strokeWidth={1.6}
                          className="text-[#4A9877]"
                        />

                      </div>

                      <span className="
                        text-[15px] sm:text-[16px] lg:text-[17px]
                        font-semibold
                        text-white
                        group-hover:text-[#07372F]
                      ">
                        {person.title}
                      </span>

                    </div>
                  );
                })}

              </div>

            </div>


            {/* PARTNERS */}
            <div>

              <h2 className="text-[27px] sm:text-[29px] lg:text-[31px] font-bold text-[#07372F]">
                {trustedByLeaders.partnersTitle}
              </h2>

              <div className="mt-3 h-[3px] w-[50px] bg-[#4D997A]" />

              <p className="mt-6 text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.55] text-[#4F5958]">
                {trustedByLeaders.partnersDescription}
              </p>


              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">

                {trustedByLeaders.alliances.map((alliance) => {

                  const Icon = alliance.icon;

                  return (
                    <div
                      key={alliance.id}
                      className="
                        min-h-[125px]
                        rounded-xl
                        bg-white
                        border
                        border-[#E8E8E8]
                        border-l-[5px]
                        border-l-[#4D997A]
                        shadow-[0_4px_10px_rgba(0,0,0,0.10)]
                        px-5
                        py-5
                        flex
                        items-center
                        gap-4
                        transition-all
                        duration-300
                        hover:bg-[#D9F8EB]
                        hover:border-l-[#005641]
                        hover:-translate-y-1
                        hover:shadow-[0_12px_25px_rgba(0,86,65,0.16)]
                      "
                    >

                      <div className="
                        flex
                        h-14 w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#D9F8EB]
                      ">

                        <Icon
                          size={29}
                          strokeWidth={1.5}
                          className="text-[#4A9877]"
                        />

                      </div>

                      <div>

                        <h3 className="text-[15px] sm:text-[16px] font-bold text-[#173D35]">
                          {alliance.title}
                        </h3>

                        <p className="mt-1 text-[14px] sm:text-[15px] leading-[1.4] text-[#4F5958]">
                          {alliance.description}
                        </p>

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </section>


        {/* ================= CLOSING ================= */}
        <section className="max-w-[1350px] mx-auto px-6 sm:px-10 lg:px-14 mt-16 sm:mt-20 lg:mt-24 pb-14 sm:pb-16 lg:pb-20">

          <div className="
            rounded-2xl
            bg-[#D9F8EB]
            px-7 sm:px-9 lg:px-10
            py-8 sm:py-9
            flex
            items-center
            gap-5 sm:gap-6
            transition-all
            duration-300
            hover:bg-[#005641]
            group
          ">

            <div className="
              flex
              h-14 w-14 sm:h-16 sm:w-16
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#005641]
              group-hover:bg-[#D9F8EB]
              transition-colors
              duration-300
            ">

              <Quote
                size={28}
                strokeWidth={1.8}
                className="text-white group-hover:text-[#005641]"
              />

            </div>

            <p className="
              text-[16px] sm:text-[17px] lg:text-[19px]
              font-semibold
              leading-[1.45]
              text-[#173D35]
              group-hover:text-white
            ">
              {trustedByLeaders.closing}
            </p>

          </div>

        </section>

      </main>

      <Footer />

      {/* IMAGE FLOAT ANIMATION */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>

    </div>
  );
}

export default TrustedByLeaders;