import React from "react";

import customerSuccessStories from "../data/CustomerSuccessStories";

import Footer from "../components/footer/Footer";

function CustomerSuccessStories() {
  const timelineStories = customerSuccessStories.slice(0, -2);
  const finalStories = customerSuccessStories.slice(-2);

  return (
    <div className="min-h-screen bg-[#FFF7F7] text-[#0B2F2A]">

      {/* ================= MAIN ================= */}

      <main>

        {/* ================= BREADCRUMB ================= */}

        <section className="max-w-[1250px] mx-auto px-8 lg:px-10 pt-10 lg:pt-12">

          <p className="text-[13px] lg:text-[14px] text-[#7B8A86] tracking-wide">

            <span>Home</span>

            <span className="mx-2">
              ›
            </span>

            <span>
              Why 3rd EdHum
            </span>

            <span className="mx-2">
              ›
            </span>

            <span>
              Customer Success Stories
            </span>

          </p>

        </section>


        {/* ================= HERO ================= */}

        <section className="relative max-w-[1250px] mx-auto px-8 lg:px-10 pt-10 lg:pt-12">

          {/* Background circle */}

          <div className="absolute -right-[130px] top-0 w-[360px] h-[360px] rounded-full bg-[#E8FAF3] opacity-70 pointer-events-none" />


          <div className="relative z-10 max-w-[1000px]">

            {/* LABEL */}

            <div className="inline-flex flex-col items-start">

              <span className="text-[14px] lg:text-[15px] font-semibold tracking-[1.2px] text-[#548C78]">

                Client Success Stories

              </span>

              <span className="mt-2 h-[3px] w-[48px] rounded-full bg-[#4D997A]" />

            </div>


            {/* HEADING */}

            <h1 className="mt-6 text-[44px] sm:text-[50px] md:text-[56px] lg:text-[60px] leading-[1.08] font-bold tracking-[-1.8px] text-[#07372F]">

              Every Success Story Starts With a{" "}

              <span className="text-[#3C9A72]">

                Business Challenge.

              </span>

            </h1>


            {/* DESCRIPTION */}

            <p className="mt-5 max-w-[950px] text-[15px] lg:text-[16px] leading-[1.55] text-[#4F5958]">

              No two organisations are the same. Some need stronger leaders.
              Some need higher sales performance. Others need culture
              transformation, AI readiness, or organisational alignment.
              Our role is to understand these challenges deeply and build
              practical solutions that deliver measurable, lasting results.
              What follows represents the breadth and depth of our
              partnerships across sectors.

            </p>

          </div>

        </section>


        {/* ================= SUCCESS STORIES TIMELINE ================= */}

        <section className="max-w-[1250px] mx-auto px-8 lg:px-10 mt-12 lg:mt-14 pb-8">

          <div className="relative">

            {/* ================= CENTER LINE ================= */}

            <div className="absolute left-1/2 top-0 bottom-0 hidden w-[2px] -translate-x-1/2 bg-[#D9E8E2] md:block" />


            <div className="space-y-7 md:space-y-6">

              {timelineStories.map((story) => {

                const Icon = story.icon;

                const isLeft = story.side === "left";

                return (

                  <div
                    key={story.id}
                    className="relative grid grid-cols-1 md:grid-cols-2 md:gap-7"
                  >

                    {/* ================= LEFT SIDE ================= */}

                    <div
                      className={`${
                        isLeft
                          ? "md:pr-4"
                          : "md:col-start-1 md:row-start-1"
                      }`}
                    >

                      {isLeft ? (

                        <StoryCard
                          story={story}
                          Icon={Icon}
                        />

                      ) : null}

                    </div>


                    {/* ================= RIGHT SIDE ================= */}

                    <div
                      className={`${
                        !isLeft
                          ? "md:pl-4"
                          : "md:col-start-2 md:row-start-1"
                      }`}
                    >

                      {!isLeft ? (

                        <StoryCard
                          story={story}
                          Icon={Icon}
                        />

                      ) : null}

                    </div>


                    {/* ================= CENTER DOT ================= */}

                    <div className="absolute left-1/2 top-1/2 hidden h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#FFF7F7] bg-[#006247] md:block" />

                  </div>

                );

              })}

            </div>

          </div>


          {/* ================= LAST TWO STORIES ================= */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-7">

            {finalStories.map((story) => {

              const Icon = story.icon;

              return (

                <StoryCard
                  key={story.id}
                  story={story}
                  Icon={Icon}
                />

              );

            })}

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
}


/* =========================================================
   STORY CARD
========================================================= */

function StoryCard({ story, Icon }) {

  return (

    <div
      className={`
        group
        min-h-[145px]
        rounded-lg
        border
        border-[#DCEBE5]
        px-6
        py-6
        shadow-[0_3px_8px_rgba(0,0,0,0.12)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        ${
          story.featured
            ? "bg-[#005641] text-white border-[#005641]"
            : "bg-[#E2F8EF]"
        }
      `}
    >

      <div className="flex items-start gap-4">

        {/* ================= ICON ================= */}

        <div
          className={`
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-white
            text-[#4A9877]
          `}
        >

          <Icon
            size={24}
            strokeWidth={1.7}
          />

        </div>


        {/* ================= CONTENT ================= */}

        <div className="min-w-0 flex-1">

          <h2
            className={`
              text-[21px]
              lg:text-[22px]
              font-bold
              leading-[1.2]
              ${
                story.featured
                  ? "text-white"
                  : "text-[#063B3D]"
              }
            `}
          >

            {story.title}

          </h2>


          {/* Small underline */}

          <div
            className={`
              mt-2
              h-[2px]
              w-[34px]
              rounded-full
              ${
                story.featured
                  ? "bg-white"
                  : "bg-[#4A9877]"
              }
            `}
          />


          {/* DESCRIPTION */}

          <p
            className={`
              mt-3
              text-[13px]
              sm:text-[14px]
              lg:text-[14px]
              leading-[1.55]
              ${
                story.featured
                  ? "text-white/80"
                  : "text-[#4F5958]"
              }
            `}
          >

            {story.description}

          </p>

        </div>

      </div>

    </div>

  );
}


export default CustomerSuccessStories;