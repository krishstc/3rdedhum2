import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import customerSuccessStories from "../data/CustomerSuccessStories";
import Footer from "../components/footer/Footer";
import heroImage from "../assets/images/OurDifference/customer-success-stories-hero.png";

function CustomerSuccessStories() {
  const timelineStories = customerSuccessStories.slice(0, -2);
  const finalStories = customerSuccessStories.slice(-2);

  return (
    <div className="min-h-screen bg-white text-[#07372F] overflow-hidden">
      <main>

        {/* ================= HERO ================= */}

        <section className="relative bg-gradient-to-r from-[#E8FFF5] via-[#F1FFF9] to-[#E5FAF2] border-b border-[#D7EEE5]">
          <div className="max-w-[1400px] mx-auto px-7 sm:px-10 lg:px-14 xl:px-16 pt-7 pb-8 lg:pt-8 lg:pb-9">

            {/* Breadcrumb */}

            <div className="flex items-center flex-wrap gap-2 text-[11px] lg:text-[12px] text-[#849590] mb-6">
              <span>Home</span>
              <span>›</span>
              <span>Why 3rd EdHum</span>
              <span>›</span>
              <span>Why 3rd EdHum</span>
              <span>›</span>
              <span className="text-[#3E9271] font-medium">Customer Success Stories</span>
            </div>

            {/* Hero Content */}

            <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] items-center gap-8 lg:gap-10">

              {/* LEFT CONTENT */}

              <div className="max-w-[700px] animate-[fadeUp_.7s_ease-out]">
                <div className="inline-flex flex-col items-start">
                  <span className="text-[12px] lg:text-[13px] uppercase tracking-[1.8px] font-bold text-[#4B9676]">Client Results</span>
                  <span className="mt-2 w-[42px] h-[3px] rounded-full bg-[#4B9676]" />
                </div>

                <h1 className="mt-5 text-[36px] sm:text-[43px] md:text-[48px] lg:text-[52px] xl:text-[56px] leading-[1.04] tracking-[-1.8px] font-extrabold text-[#063A35]">
                  Every Success Story Starts With a{" "}
                  <span className="text-[#3D9872]">Business Challenge.</span>
                </h1>

                <p className="mt-5 max-w-[680px] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.55] text-[#52615D]">
                  No two organisations are the same. Some need stronger leaders.
                  Some need higher sales performance. Others need culture
                  transformation, AI readiness, or organisational alignment.
                  Our role is to understand these challenges deeply and build
                  practical solutions that deliver measurable, lasting results.
                  What follows represents the breadth and depth of our
                  partnerships across sectors.
                </p>
              </div>

              {/* RIGHT IMAGE */}

              <div className="relative flex justify-end animate-[heroImage_.9s_ease-out]">
                <div className="relative w-full max-w-[620px] overflow-hidden rounded-[4px]">
                  <img src={heroImage} alt="Customer Success Stories" className="w-full h-[320px] sm:h-[250px] lg:h-[370px] object-cover transition-transform duration-700 hover:scale-[1.04]" />
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ================= SUCCESS STORIES TIMELINE ================= */}

        <section className="bg-white px-6 sm:px-8 lg:px-12 xl:px-16 py-8 lg:py-10">
          <div className="max-w-[1250px] mx-auto">

            <div className="relative">

              {/* CENTER LINE */}

              <div className="absolute left-1/2 top-0 bottom-0 hidden md:block w-[2px] -translate-x-1/2 bg-[#D5E7DF]" />

              <div className="space-y-5 lg:space-y-6">

                {timelineStories.map((story) => {
                  const isLeft = story.side === "left";

                  return (
                    <div key={story.id} className="relative grid grid-cols-1 md:grid-cols-2 md:gap-7 min-h-[128px]">

                      {/* LEFT CARD */}

                      <div className={isLeft ? "md:pr-4" : "md:col-start-1 md:row-start-1"}>
                        {isLeft && <TimelineCard story={story} />}
                      </div>

                      {/* RIGHT CARD */}

                      <div className={!isLeft ? "md:pl-4" : "md:col-start-2 md:row-start-1"}>
                        {!isLeft && <TimelineCard story={story} />}
                      </div>

                      {/* CENTER DOT */}

                      <div className="absolute left-1/2 top-1/2 hidden md:flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                        <div className="w-[11px] h-[11px] rounded-full bg-[#00624D] border-[2px] border-white shadow-[0_0_0_2px_#D8EAE3] z-10" />
                      </div>

                      {/* LEFT CONNECTOR */}

                      {isLeft && (
                        <div className="absolute right-[50%] top-1/2 hidden md:flex items-center w-[28px] translate-y-[-50%] translate-x-[-1px]">
                          <div className="w-full h-[1px] bg-[#BFD9D0]" />
                          <ArrowRight size={12} className="absolute right-[-2px] text-[#4C9677]" />
                        </div>
                      )}

                      {/* RIGHT CONNECTOR */}

                      {!isLeft && (
                        <div className="absolute left-[50%] top-1/2 hidden md:flex items-center w-[28px] translate-y-[-50%] translate-x-[-1px]">
                          <ArrowRight size={12} className="absolute left-[-2px] rotate-180 text-[#4C9677]" />
                          <div className="ml-auto w-full h-[1px] bg-[#BFD9D0]" />
                        </div>
                      )}

                    </div>
                  );
                })}

              </div>
            </div>


            {/* ================= FINAL TWO CARDS ================= */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
              {finalStories.map((story) => (
                <TimelineCard key={story.id} story={story} />
              ))}
            </div>

          </div>
        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <Footer />


      {/* ================= ANIMATIONS ================= */}

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes heroImage { from { opacity: 0; transform: translateX(35px) scale(0.96); } to { opacity: 1; transform: translateX(0) scale(1); } }
      `}</style>

    </div>
  );
}


/* =============================================================
   TIMELINE CARD
============================================================= */

function TimelineCard({ story }) {
  const Icon = story.icon;

  return (
    <div className={`group relative min-h-[128px] lg:min-h-[135px] rounded-[8px] border px-5 sm:px-6 lg:px-7 py-5 shadow-[0_4px_12px_rgba(0,70,55,0.10)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_12px_28px_rgba(0,91,73,0.16)] ${story.featured ? "bg-[#005B49] border-[#005B49] text-white hover:bg-[#006952]" : "bg-[#E4F8EF] border-[#D2ECE1] hover:bg-[#D7F5E8]"}`}>

      {/* Subtle hover glow */}

      <div className={`absolute inset-0 rounded-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${story.featured ? "bg-gradient-to-r from-transparent via-[#2AA27E]/10 to-transparent" : "bg-gradient-to-r from-transparent via-[#B9EFD8]/35 to-transparent"}`} />

      <div className="relative z-10 flex items-start gap-4">

        {/* ICON */}

        <div className={`flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 ${story.featured ? "bg-[#E0F8ED] text-[#08765E]" : "bg-white text-[#4A9877]"}`}>
          <Icon size={21} strokeWidth={1.8} />
        </div>


        {/* CONTENT */}

        <div className="min-w-0 flex-1">

          <div className="flex items-center justify-between gap-3">
            <h2 className={`text-[19px] sm:text-[20px] lg:text-[21px] font-bold leading-[1.15] transition-colors duration-300 ${story.featured ? "text-white" : "text-[#073A35] group-hover:text-[#005B49]"}`}>
              {story.title}
            </h2>
          </div>


          {/* UNDERLINE */}

          <div className={`mt-2 h-[2px] w-[32px] rounded-full transition-all duration-300 group-hover:w-[52px] ${story.featured ? "bg-[#BCEFD9]" : "bg-[#4A9877]"}`} />


          {/* DESCRIPTION */}

          <p className={`mt-3 text-[12px] sm:text-[13px] lg:text-[13px] leading-[1.45] ${story.featured ? "text-[#E1F6EE]" : "text-[#50605B]"}`}>
            {story.description}
          </p>

        </div>

      </div>
    </div>
  );
}

export default CustomerSuccessStories;