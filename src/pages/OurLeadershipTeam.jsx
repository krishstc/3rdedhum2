import React from "react";
import { Quote, Send } from "lucide-react";
import Footer from "../components/footer/Footer";
import ourLeadershipTeam from "../data/OurLeadershipTeam";

function OurLeadershipTeam() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#173D35]">
      <main>
        {/* ================= BREADCRUMB ================= */}
        <section className="mx-auto max-w-[1280px] px-6 pt-7 sm:px-8 lg:px-10">
          <p className="text-[12px] text-[#899691]">
            Home <span className="mx-2">›</span>
            {ourLeadershipTeam.breadcrumb.section}
            <span className="mx-2">›</span>
            {ourLeadershipTeam.breadcrumb.category}
            <span className="mx-2">›</span>
            <span className="text-[#57957D]">{ourLeadershipTeam.breadcrumb.current}</span>
          </p>
        </section>

        {/* ================= HERO ================= */}
        <section className="relative mx-auto mt-4 max-w-[1280px] overflow-hidden rounded-md bg-[#ECF8F3] px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#D7F0E5] opacity-70" />

          <div className="absolute right-8 top-8 hidden grid-cols-5 gap-[6px] opacity-40 md:grid">
            {Array.from({ length: 35 }).map((_, i) => (
              <span key={i} className="h-[4px] w-[4px] rounded-full bg-[#4A997B]" />
            ))}
          </div>

          <div className="relative grid items-center gap-8 md:grid-cols-[1.08fr_.92fr]">
            <div className="animate-[fadeUp_.7s_ease-out_both]">
              <p className="text-[12px] font-semibold tracking-[1.5px] text-[#4D9278]">
                {ourLeadershipTeam.hero.eyebrow}
              </p>

              <div className="mt-2 h-[3px] w-12 rounded-full bg-[#439875]" />

              <h1 className="mt-5 max-w-[700px] text-[42px] font-bold leading-[1.08] tracking-[-1px] text-[#07372F] sm:text-[48px] lg:text-[54px]">
                {ourLeadershipTeam.hero.titleStart}{" "}
                <span className="text-[#439875]">{ourLeadershipTeam.hero.titleHighlight}</span>
              </h1>

              <div className="mt-6 max-w-[690px] space-y-4">
                {ourLeadershipTeam.hero.paragraphs.map((text, index) => (
                  <p key={index} className="text-[15px] leading-[1.35] text-[#56615D] sm:text-[16px]">
                    {text}
                  </p>
                ))}
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="relative flex h-full items-center justify-center animate-[fadeUp_.9s_ease-out_.15s_both]">
              <img src={ourLeadershipTeam.hero.image} alt="Leadership Team" fetchPriority="high" loading="eager" decoding="async" className="relative z-10 h-[320px] w-full object-contain object-center transition-transform duration-700 hover:scale-[1.03] sm:h-[480px]" />
            </div>
          </div>
        </section>

        {/* ================= CEO / FOUNDER ================= */}
        <section className="mx-auto mt-12 max-w-[1280px] px-6 sm:px-8 lg:px-10">
          <div className="relative">
            <div className="absolute -left-5 -top-6 hidden grid-cols-7 gap-[7px] opacity-50 lg:grid">
              {Array.from({ length: 49 }).map((_, i) => (
                <span key={i} className="h-[5px] w-[5px] rounded-full bg-[#65A88E]" />
              ))}
            </div>

            <div className="absolute -bottom-5 -right-3 hidden grid-cols-6 gap-[7px] opacity-40 lg:grid">
              {Array.from({ length: 36 }).map((_, i) => (
                <span key={i} className="h-[5px] w-[5px] rounded-full bg-[#65A88E]" />
              ))}
            </div>

            <div className="group relative grid overflow-hidden rounded-xl bg-[#F2F8F5] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg md:grid-cols-[250px_290px_1fr]">
              {/* FOUNDER IMAGE */}
              <div className="relative flex min-h-[340px] items-end justify-center overflow-hidden">
                <div className="absolute left-5 top-16 h-16 w-16 rounded-full border border-[#B7E3D4] transition-transform duration-500 group-hover:scale-110" />

                <img src={ourLeadershipTeam.founder.image} alt={ourLeadershipTeam.founder.name} loading="lazy" decoding="async" className="relative z-10 h-[330px] w-[225px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>

              {/* QUOTE */}
              <div className="relative z-10 m-5 flex flex-col justify-between rounded-lg bg-[#006149] p-7 text-white transition-all duration-500 group-hover:bg-[#005A45] group-hover:shadow-lg">
                <Quote size={30} fill="currentColor" strokeWidth={0} className="text-[#CFE9DE]" />

                <p className="py-4 text-[16px] leading-[1.6] transition-transform duration-500 group-hover:translate-x-1">
                  {ourLeadershipTeam.founder.quote}
                </p>

                <Quote size={30} fill="currentColor" strokeWidth={0} className="ml-auto rotate-180 text-[#CFE9DE]" />
              </div>

              {/* FOUNDER DETAILS */}
              <div className="relative z-10 px-7 py-8 transition-transform duration-500 group-hover:translate-x-1">
                <p className="text-[11px] font-semibold tracking-[1.3px] text-[#57957D]">
                  {ourLeadershipTeam.founder.eyebrow}
                </p>

                <h2 className="mt-2 text-[25px] font-bold text-[#083A31] transition-colors duration-300 group-hover:text-[#006149]">
                  {ourLeadershipTeam.founder.name}
                </h2>

                <div className="mt-3 h-[3px] w-10 rounded-full bg-[#459579] transition-all duration-300 group-hover:w-16" />

                <p className="mt-5 text-[11px] font-semibold tracking-[1.2px] text-[#57957D]">
                  {ourLeadershipTeam.founder.promiseTitle}
                </p>

                <div className="mt-4 space-y-3">
                  {ourLeadershipTeam.founder.paragraphs.map((text, index) => (
                    <p key={index} className="text-[15px] leading-[1.55] text-[#596662]">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PHILOSOPHY ================= */}
        <section className="mx-auto mt-16 max-w-[1280px] px-6 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-[11px] font-semibold tracking-[1.3px] text-[#57957D]">
              {ourLeadershipTeam.philosophy.eyebrow}
            </p>

            <h2 className="mt-2 text-[28px] font-bold text-[#103F35]">
              {ourLeadershipTeam.philosophy.title}
            </h2>

            <p className="mx-auto mt-4 max-w-[850px] text-[14px] leading-[1.6] text-[#68736F]">
              {ourLeadershipTeam.philosophy.description}
            </p>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ourLeadershipTeam.philosophy.cards.map((card) => {
              const Icon = card.icon;

              return (
                <div key={card.id} className="group flex min-h-[210px] flex-col items-center justify-center rounded-lg border border-[#E0E5E2] bg-white px-5 py-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#C6E7DA] hover:bg-[#E8F6F0] hover:shadow-lg">
                  <Icon size={50} strokeWidth={1.3} className="text-[#287E68] transition duration-300 group-hover:scale-110" />

                  <h3 className="mt-5 text-[17px] font-bold text-[#286353]">
                    {card.title}
                  </h3>

                  <div className="mt-2 h-[3px] w-9 rounded-full bg-[#4B997D]" />

                  <p className="mt-4 text-[13px] leading-[1.5] text-[#6C7773]">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= OUR TEAM ================= */}
        <section className="mx-auto mt-16 max-w-[1280px] px-6 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-[11px] font-semibold tracking-[1.3px] text-[#57957D]">
              {ourLeadershipTeam.team.eyebrow}
            </p>

            <h2 className="mt-2 text-[28px] font-bold text-[#103F35]">
              {ourLeadershipTeam.team.title}
            </h2>

            <div className="mx-auto mt-3 h-[3px] w-10 rounded-full bg-[#4A9779]" />

            <p className="mx-auto mt-4 max-w-[760px] text-[14px] leading-[1.6] text-[#68736F]">
              {ourLeadershipTeam.team.description}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ourLeadershipTeam.team.members.map((member) => (
              <div key={member.id} className="group flex min-h-[315px] flex-col items-center rounded-xl border border-[#E2E6E4] bg-[#F5F6F5] px-5 py-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#CBE6D9] hover:bg-[#E8F6F0] hover:shadow-lg">
                <div className="relative">
                  <div className="absolute inset-[-7px] rounded-full border border-[#D4E4DE] transition duration-300 group-hover:scale-105 group-hover:border-[#429777]" />

                  <div className="relative h-[128px] w-[128px] overflow-hidden rounded-full border-[5px] border-white bg-white shadow-md">
                    <img src={member.image} alt={member.name} loading="lazy" decoding="async" className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-110" />
                  </div>
                </div>

                <h3 className="mt-7 text-[17px] font-bold text-[#173F37] transition group-hover:text-[#006149]">
                  {member.name}
                </h3>

                <div className="mt-2 h-[3px] w-9 rounded-full bg-[#4A9779] transition-all duration-300 group-hover:w-14" />

                <p className="mt-2 text-[13px] font-semibold text-[#51927A]">
                  {member.role}
                </p>

                <p className="mt-3 text-[12px] leading-[1.55] text-[#747E7A]">
                  {member.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-[850px] text-center text-[13px] text-[#68736F]">
            {ourLeadershipTeam.team.closingText}
          </p>
        </section>

        {/* ================= COMMITMENT ================= */}
        <section className="mx-auto mt-16 max-w-[1280px] px-6 sm:px-8 lg:px-10">
          <div className="grid overflow-hidden rounded-xl bg-[#F0F7F4] md:grid-cols-[.9fr_1.1fr]">
            {/* LEFT CONTENT */}
            <div className="relative px-5 py-7 sm:px-7 sm:py-8">
              <div className="absolute bottom-6 left-6 hidden grid-cols-5 gap-[5px] opacity-50 sm:grid">
                {Array.from({ length: 35 }).map((_, i) => (
                  <span key={i} className="h-[4px] w-[4px] rounded-full bg-[#579F84]" />
                ))}
              </div>

              <div className="relative">
                <p className="text-[12px] font-semibold tracking-[1.3px] text-[#57957D]">
                  {ourLeadershipTeam.commitment.eyebrow}
                </p>

                {/* MOBILE: STACKED | DESKTOP: IMAGE + TEXT */}
                <div className="mt-5 flex flex-col gap-5 sm:mt-6 sm:flex-row sm:items-start sm:gap-4">
                  <img src={ourLeadershipTeam.commitment.image} alt="Teamwork" loading="lazy" decoding="async" className="h-[210px] w-full rounded-xl object-cover sm:h-[215px] sm:w-[230px] lg:w-[245px]" />

                  <div className="flex-1">
                    <h2 className="text-[20px] font-bold leading-[1.3] text-[#0B382F] sm:mt-1 sm:text-[18px]">
                      {ourLeadershipTeam.commitment.title}
                    </h2>

                    <p className="mt-3 text-[13px] leading-[1.45] text-[#66716D] sm:mt-4 sm:text-[14px]">
                      {ourLeadershipTeam.commitment.description}
                    </p>

                    <p className="mt-3 text-[13px] leading-[1.45] text-[#66716D] sm:text-[14px]">
                      {ourLeadershipTeam.commitment.secondDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT POINTS */}
            <div className="flex items-center px-5 py-6 sm:px-6 sm:py-7">
              <div className="w-full space-y-3">
                {ourLeadershipTeam.commitment.points.map((point) => {
                  const Icon = point.icon;

                  return (
                    <div key={point.id} className="group flex items-center gap-3 rounded-lg bg-white px-3 py-3 transition-all duration-300 hover:translate-x-1 hover:bg-[#E8F6F0] hover:shadow-md sm:gap-4 sm:px-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#006149] text-white transition duration-300 group-hover:scale-105">
                        <Icon size={18} strokeWidth={1.6} />
                      </div>

                      <p className="text-[12px] font-medium leading-[1.45] text-[#475650] sm:text-[13px]">
                        {point.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ================= JOIN OUR TEAM ================= */}
        <section className="mx-auto mt-14 max-w-[1280px] px-6 pb-14 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-2xl border border-gray-300 bg-[#006149]">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#167B62] opacity-40" />
            <div className="absolute -bottom-20 right-32 h-40 w-40 rounded-full bg-[#0A7259] opacity-40" />

            <div className="absolute inset-y-0 left-0 hidden w-[30%] overflow-hidden md:block">
              <div className="absolute -left-24 -top-6 h-[380px] w-[340px] rounded-full bg-white" />

              <div className="absolute left-20 top-16 h-24 w-24 rounded-full bg-[#E8F6F0]" />

              <div className="absolute bottom-8 left-16 grid grid-cols-5 gap-[5px] opacity-60">
                {Array.from({ length: 25 }).map((_, i) => (
                  <span key={i} className="h-[4px] w-[4px] rounded-full bg-[#4A997B]" />
                ))}
              </div>

              <div className="absolute right-44 top-1/2 -translate-y-1/2">
                <Send size={120} strokeWidth={1.5} className="-rotate-[18deg] text-[#328F73]" />
              </div>
            </div>

            <div className="relative z-10 px-6 py-9 sm:px-7 sm:py-10 md:ml-[20%] md:px-10">
              <p className="text-[12px] font-semibold tracking-[1.5px] text-[#B9E7D7]">
                {ourLeadershipTeam.joinTeam.eyebrow}
              </p>

              <div className="mt-2 h-[3px] w-10 rounded-full bg-[#B9E7D7]" />

              <h2 className="mt-4 max-w-[800px] text-[22px] font-bold leading-[1.4] text-white sm:text-[27px]">
                {ourLeadershipTeam.joinTeam.title}
              </h2>

              <p className="mt-4 max-w-[800px] text-[13px] leading-[1.6] text-[#D7EBE4]">
                {ourLeadershipTeam.joinTeam.description}
              </p>

              <div className="mt-5 flex items-center gap-3">
                <p className="text-[13px] font-medium text-white">
                  {ourLeadershipTeam.joinTeam.closing}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />

      {/* ================= FADE UP ANIMATION ================= */}
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
      `}</style>
    </div>
  );
}

export default OurLeadershipTeam;