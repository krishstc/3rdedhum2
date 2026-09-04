import React from "react";
import { ArrowRight } from "lucide-react";
import Footer from "../components/footer/Footer";
import cultureBelief from "../data/CultureBelief";
import heroImage from "../assets/images/AboutUs/culture-beliefs-hero.png";
import learningImage from "../assets/images/AboutUs/learning-way-of-life.png";

function CultureBelief() {
  const {
    breadcrumb,
    hero,
    philosophy,
    learningCommitments,
    approach,
    relationships,
    cta,
  } = cultureBelief;

  return (
    <div className="min-h-screen bg-white text-[#0B2F2A]">
      <main className="overflow-hidden">

        {/* ================= BREADCRUMB ================= */}
        <section className="mx-auto max-w-[1400px] px-5 pt-6 sm:px-8 lg:px-12">
          <p className="text-[12px] text-[#8A9894] transition-colors duration-300 hover:text-[#28725C] sm:text-[13px]">
            {breadcrumb.items.map((item, index) => (
              <React.Fragment key={item}>
                {item}
                <span className="mx-2">›</span>
              </React.Fragment>
            ))}

            <span className="font-medium text-[#4A8E76]">
              {breadcrumb.current}
            </span>
          </p>
        </section>

        {/* ================= HERO ================= */}
        <section className="mx-auto max-w-[1400px] px-5 pb-14 pt-8 sm:px-8 lg:px-12 lg:pb-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

            <div className="animate-[fadeUp_.7s_ease-out_both]">

              <div className="inline-flex cursor-default flex-col items-start transition-transform duration-300 hover:translate-x-1">
                <span className="text-[15px] font-semibold tracking-[1.1px] text-[#548C78] transition-colors duration-300 hover:text-[#28725C] sm:text-[16px]">
                  {hero.label}
                </span>

                <span className="mt-2 h-[3px] w-[130px] rounded-full bg-[#4D997A] transition-all duration-300 hover:w-[160px]" />
              </div>

              <h1 className="mt-5 cursor-default text-[42px] font-bold leading-[1.04] tracking-[-2px] text-[#07372F] transition-transform duration-300 hover:translate-x-1 sm:text-[50px] md:text-[56px] lg:text-[60px] xl:text-[64px]">
                {hero.title.line1}
                <br />

                <span className="text-[#0B654F] transition-colors duration-300 hover:text-[#3C9A72]">
                  {hero.title.line2}
                </span>

                <br />

                <span className="text-[#102E38] transition-colors duration-300 hover:text-[#28725C]">
                  {hero.title.line3}
                </span>
              </h1>

              <div className="mt-5 h-[3px] w-[55px] rounded-full bg-[#4D997A] transition-all duration-300 hover:w-[80px]" />

              <div className="mt-6 max-w-[680px] space-y-5 text-[15px] leading-[1.65] text-[#4F5958] sm:text-[16px]">

                <p className="transition-colors duration-300 hover:text-[#28725C]">
                  {hero.paragraphs[0]}
                </p>

                <p className="transition-colors duration-300 hover:text-[#28725C]">
                  {hero.paragraphs[1]}
                  <span className="font-bold text-[#28725C]">
                    {" "}
                    {hero.purpose}
                  </span>{" "}
                  That purpose influences not only the solutions we deliver to
                  our clients but also how we work together as a team. It
                  reminds us that every interaction is an opportunity to make
                  someone more capable, more confident, and better prepared for
                  the future.
                </p>

                <p className="transition-colors duration-300 hover:text-[#28725C]">
                  {hero.paragraphs[2]}
                </p>

              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src={heroImage}
                alt="Culture and Beliefs"
                className="w-full max-w-[590px] object-contain animate-[heroImage_.9s_ease-out_both] transition-all duration-700 hover:-translate-y-2 hover:scale-[1.05]"
              />
            </div>

          </div>
        </section>

        {/* ================= OUR PHILOSOPHY ================= */}
        <section className="rounded-[22px] border border-[#DCE8E3] bg-white px-5 py-11 shadow-[0_3px_14px_rgba(23,61,53,0.05)] transition-all duration-300 hover:border-[#B9DACE] hover:shadow-[0_8px_24px_rgba(23,61,53,0.09)] sm:px-8 lg:px-12 lg:py-14">

          <SectionHeading title={philosophy.heading} />

          <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[290px_1fr]">

            {/* PHILOSOPHY IMAGE */}
            <div className="flex justify-center">
              <div className="group flex w-full max-w-[290px] cursor-pointer items-center justify-center transition-all duration-500 hover:-translate-y-3 hover:scale-[1.04]">
                <img
                  src={learningImage}
                  alt="Learning Is Our Way of Life"
                  className="h-auto w-full object-contain drop-shadow-[0_8px_18px_rgba(0,86,65,0.10)] transition-all duration-500 group-hover:drop-shadow-[0_14px_28px_rgba(0,86,65,0.16)]"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="group animate-[fadeUp_.7s_.15s_ease-out_both]">

              <h2 className="cursor-default text-[23px] font-bold text-[#17614E] transition-colors duration-300 group-hover:text-[#28725C] sm:text-[26px]">
                {philosophy.title}
              </h2>

              <div className="mt-3 h-[3px] w-[48px] rounded-full bg-[#4D997A] transition-all duration-300 group-hover:w-[75px]" />

              <div className="mt-5 space-y-4 text-[15px] leading-[1.7] text-[#414B48] sm:text-[16px]">

                {philosophy.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="transition-colors duration-300 hover:text-[#28725C]"
                  >
                    {paragraph}
                  </p>
                ))}

              </div>

            </div>
          </div>

          {/* ================= LEARNING COMMITMENTS ================= */}
          <div className="mx-auto mt-11 max-w-[1280px] rounded-[14px] border border-[#DCE8E3] bg-[#FCFEFD] px-6 py-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#A8D7C2] hover:shadow-[0_10px_25px_rgba(23,61,53,0.10)] sm:px-8">

            <div className="grid items-center gap-8 md:grid-cols-[200px_1fr]">

              <div className="border-b border-[#8BB9AA] pb-6 transition-colors duration-300 hover:border-[#28725C] md:border-b-0 md:border-r md:pb-0 md:pr-8">

                <h3 className="text-center text-[18px] font-bold leading-[1.35] text-[#17614E] transition-colors duration-300 hover:text-[#28725C] sm:text-[20px] md:text-left">
                  Our Learning
                  <br />
                  Commitments
                </h3>

              </div>

              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">

                {learningCommitments.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      style={{ animationDelay: `${index * 100}ms` }}
                      className="group cursor-pointer rounded-xl px-3 py-4 text-center animate-[fadeUp_.6s_ease-out_both] transition-all duration-300 hover:-translate-y-2 hover:bg-[#EAF7F1] hover:shadow-[0_8px_18px_rgba(0,86,65,0.10)]"
                    >

                      <div className="mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-[#28725C] bg-white text-[#28725C] shadow-[0_4px_10px_rgba(0,86,65,0.07)] transition-all duration-300 group-hover:scale-110 group-hover:border-[#17614E] group-hover:bg-[#DDF3E9] group-hover:rotate-3">

                        <Icon
                          size={36}
                          strokeWidth={1.5}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />

                      </div>

                      <h4 className="mt-5 text-[15px] font-bold leading-[1.3] text-[#173D35] transition-colors duration-300 group-hover:text-[#28725C] sm:text-[16px]">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-[13px] leading-[1.45] text-[#697370] transition-colors duration-300 group-hover:text-[#17614E] sm:text-[14px]">
                        {item.description}
                      </p>

                    </div>
                  );
                })}

              </div>
            </div>
          </div>

        </section>

        {/* ================= OUR APPROACH ================= */}
        <section className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">

          <SectionHeading title={approach.heading} />

          <div className="grid gap-9 lg:grid-cols-[1fr_1fr_0.9fr]">

            {/* PEOPLE */}
            <div className="group animate-[fadeUp_.6s_ease-out_both]">

              <h2 className="text-[22px] font-bold leading-[1.25] text-[#17614E] transition-colors duration-300 group-hover:text-[#28725C] sm:text-[25px]">
                {approach.people.title.split(" Before ")[0]}
                <br />
                Before {approach.people.title.split(" Before ")[1]}
              </h2>

              <div className="mt-3 h-[3px] w-[48px] rounded-full bg-[#4D997A] transition-all duration-300 group-hover:w-[75px]" />

              <p className="mt-5 max-w-[410px] text-[15px] leading-[1.7] text-[#414B48] transition-colors duration-300 group-hover:text-[#28725C]">
                {approach.people.description}
              </p>

            </div>

            {/* PHILOSOPHY CARD */}
            <div className="group cursor-pointer rounded-[14px] bg-[#EAF7F1] px-7 py-8 transition-all duration-300 hover:-translate-y-3 hover:bg-[#DDF3E9] hover:shadow-[0_16px_32px_rgba(0,86,65,0.15)]">

              <h2 className="text-[21px] font-bold leading-[1.25] text-[#17614E] transition-colors duration-300 group-hover:text-[#0B654F] sm:text-[24px]">
                The Philosophy
                <br />
                Behind Our Name
              </h2>

              <div className="mt-3 h-[3px] w-[48px] rounded-full bg-[#4D997A] transition-all duration-300 group-hover:w-[75px]" />

              {approach.philosophy.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="mt-5 text-[14px] leading-[1.7] text-[#414B48] transition-colors duration-300 group-hover:text-[#17614E] sm:text-[15px]"
                >
                  {paragraph}
                </p>
              ))}

            </div>

            {/* APPROACH POINTS */}
            <div className="flex flex-col justify-center gap-6">

              {approach.points.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    style={{ animationDelay: `${index * 120}ms` }}
                    className="group cursor-pointer rounded-xl p-4 animate-[fadeUp_.6s_ease-out_both] transition-all duration-300 hover:-translate-y-2 hover:bg-[#F0FAF6] hover:shadow-[0_7px_18px_rgba(0,86,65,0.07)]"
                  >

                    <div className="flex items-center gap-5">

                      <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border-2 border-[#B9DACE] bg-[#F0FAF6] text-[#28725C] shadow-[0_4px_10px_rgba(0,86,65,0.06)] transition-all duration-300 group-hover:scale-110 group-hover:border-[#28725C] group-hover:bg-[#DDF3E9] group-hover:rotate-3">

                        <Icon
                          size={34}
                          strokeWidth={1.5}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />

                      </div>

                      <div>

                        <h3 className="text-[16px] font-bold text-[#17614E] transition-colors duration-300 group-hover:text-[#28725C] sm:text-[18px]">
                          {item.title}
                        </h3>

                        <p className="mt-1.5 max-w-[250px] text-[13px] leading-[1.5] text-[#697370] transition-colors duration-300 group-hover:text-[#17614E] sm:text-[14px]">
                          {item.description}
                        </p>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>
        </section>

        {/* ================= RELATIONSHIPS ================= */}
        <section className="rounded-[22px] border border-[#DCE8E3] bg-white px-5 py-11 shadow-[0_3px_14px_rgba(23,61,53,0.05)] transition-all duration-300 hover:border-[#B9DACE] hover:shadow-[0_8px_24px_rgba(23,61,53,0.09)] sm:px-8 lg:px-12 lg:py-14">

          <SectionHeading title={relationships.heading} />

          <div className="mx-auto grid max-w-[1280px] gap-9 lg:grid-cols-[310px_1fr]">

            {/* LEFT */}
            <div className="group animate-[fadeUp_.6s_ease-out_both]">

              <h2 className="text-[21px] font-bold leading-[1.3] text-[#17614E] transition-colors duration-300 group-hover:text-[#28725C] sm:text-[24px]">
                Relationships Matter
                <br />
                More Than Transactions
              </h2>

              <div className="mt-3 h-[3px] w-[48px] rounded-full bg-[#4D997A] transition-all duration-300 group-hover:w-[75px]" />

              <p className="mt-5 text-[14px] leading-[1.7] text-[#414B48] transition-colors duration-300 group-hover:text-[#28725C] sm:text-[15px]">
                {relationships.introduction.description}
              </p>

            </div>

            {/* RELATIONSHIP CARDS */}
            <div className="grid gap-5 md:grid-cols-3">

              {relationships.cards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    style={{ animationDelay: `${index * 120}ms` }}
                    className="group min-h-[370px] cursor-pointer rounded-[13px] border border-[#E1EAE6] bg-[#FBFDFC] px-6 py-7 animate-[fadeUp_.6s_ease-out_both] transition-all duration-300 hover:-translate-y-3 hover:border-[#A8D7C2] hover:bg-[#E9F7F1] hover:shadow-[0_16px_32px_rgba(0,86,65,0.14)]"
                  >

                    <div className="flex justify-center">

                      <div className="flex h-[78px] w-[78px] items-center justify-center rounded-full border border-[#C6E3D6] bg-[#EAF7F1] text-[#28725C] shadow-[0_5px_12px_rgba(0,86,65,0.07)] transition-all duration-300 group-hover:scale-110 group-hover:border-[#28725C] group-hover:bg-white group-hover:rotate-3">

                        <Icon
                          size={40}
                          strokeWidth={1.5}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />

                      </div>

                    </div>

                    <h3 className="mt-6 text-center text-[17px] font-bold text-[#17614E] transition-colors duration-300 group-hover:text-[#0B654F] sm:text-[19px]">
                      {item.title}
                    </h3>

                    <div className="mx-auto mt-3 h-[3px] w-[42px] rounded-full bg-[#4D997A] transition-all duration-300 group-hover:w-[68px]" />

                    <p className="mt-5 text-[13px] leading-[1.7] text-[#596360] transition-colors duration-300 group-hover:text-[#17614E] sm:text-[14px]">
                      {item.description}
                    </p>

                  </div>
                );
              })}

            </div>
          </div>

          {/* ================= CTA ================= */}
          <div className="group mx-auto mt-10 flex max-w-[1280px] cursor-default flex-col items-center justify-between gap-6 rounded-[12px] bg-[#07634F] px-7 py-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,86,65,0.22)] sm:flex-row sm:px-9">

            <div className="flex items-center gap-5">

              <div className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full bg-[#E2F8EF] text-[#28725C] shadow-[0_5px_12px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">

                {React.createElement(cta.icon, {
                  size: 36,
                  strokeWidth: 1.5,
                })}

              </div>

              <div>

                <h3 className="text-[17px] font-bold text-white transition-transform duration-300 group-hover:translate-x-1 sm:text-[19px]">
                  {cta.title}
                </h3>

                <p className="mt-1.5 text-[13px] leading-[1.5] text-white/80 transition-colors duration-300 group-hover:text-white sm:text-[14px]">
                  {cta.description}
                </p>

              </div>

            </div>

            <button
              type="button"
              className="group/btn flex shrink-0 items-center gap-2 rounded-md border border-white/50 px-7 py-3.5 text-[13px] font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#005641]"
            >
              {cta.button}

              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </button>

          </div>

        </section>
      </main>

      {/* ================= GLOBAL FOOTER ================= */}
      <Footer />

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroImage {
          from {
            opacity: 0;
            transform: translateX(40px) scale(0.95);
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

/* ================= SECTION HEADING ================= */

function SectionHeading({ title }) {
  return (
    <div className="group mb-10 flex cursor-default items-center justify-center gap-3">

      <span className="text-[17px] tracking-[4px] text-[#7DB8A4] transition-transform duration-300 group-hover:-translate-x-2">
        •••
      </span>

      <h2 className="text-[13px] font-bold uppercase tracking-[2px] text-[#28725C] transition-all duration-300 group-hover:scale-105 group-hover:text-[#17614E] sm:text-[14px]">
        {title}
      </h2>

      <span className="text-[17px] tracking-[4px] text-[#7DB8A4] transition-transform duration-300 group-hover:translate-x-2">
        •••
      </span>

    </div>
  );
}

export default CultureBelief;