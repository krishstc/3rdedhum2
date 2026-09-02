import React from "react";
import {
  Target,
  UsersRound,
  Handshake,
  BarChart3,
  Rocket,
  Globe2,
  Heart,
  UserRound,
  ArrowRight,
  Send,
  Eye,
  TrendingUp,
  Sprout,
} from "lucide-react";

import Footer from "../components/footer/Footer";
import ourJourney from "../data/OurJourney";

import heroImage from "../assets/images/AboutUs/our-journey-hero.png";
import foundationImage from "../assets/images/AboutUs/journey-foundation.png";
import expansionImage from "../assets/images/AboutUs/journey-expansion.png";
import innovationImage from "../assets/images/AboutUs/meaning-stones.png";
import todayImage from "../assets/images/AboutUs/whyus2.png";

const timelineIcons = [
  Send,
  UsersRound,
  BarChart3,
  Handshake,
  Target,
  Rocket,
  Sprout,
  Globe2,
];

function OurJourney() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-white text-[#10252D]">
      <main>
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-5">
          {/* Breadcrumb */}
          <div className="mb-5 px-1 animate-[fadeUp_.6s_ease-out_both]">
            <p className="text-[13px] text-[#89938F]">
              Home
              <span className="mx-2">›</span>
              {ourJourney.breadcrumb.section}
              <span className="mx-2">›</span>
              {ourJourney.breadcrumb.category}
              <span className="mx-2">›</span>
              <span className="font-semibold text-[#2D705E]">
                {ourJourney.breadcrumb.current}
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] items-center gap-3">
            {/* =====================================================
                HERO LEFT
            ===================================================== */}
            <div className="pr-0 lg:pr-4 animate-[fadeUp_.8s_ease-out_both]">
              <div>
                <p className="text-[13px] font-bold tracking-[1px] text-[#286D5B]">
                  {ourJourney.label}
                </p>

                <div className="mt-1 h-[2px] w-[48px] rounded-full bg-[#4D997A]" />
              </div>

              <h1 className="mt-4 max-w-[450px] text-[35px] sm:text-[40px] lg:text-[44px] font-bold leading-[1.12] tracking-[-1.2px] text-[#101E2D]">
                Every Great Journey
                <br />
                Begins With a{" "}
                <span className="text-[#26725D]">Purpose.</span>
              </h1>

              {/* HERO BULLETS */}
              <div className="mt-5 space-y-2.5">
                {ourJourney.heroPoints.map((point, index) => (
                  <div
                    key={point}
                    style={{ animationDelay: `${index * 100 + 300}ms` }}
                    className="flex items-center gap-3 animate-[fadeUp_.6s_ease-out_both]"
                  >
                    <div className="flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full bg-[#07584A] text-white transition-transform duration-300 hover:scale-125">
                      <span className="text-[9px] font-bold">✓</span>
                    </div>

                    <p className="text-[13px] sm:text-[14px] font-medium text-[#303C3A]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[13px] font-medium text-[#3D4946]">
                Our story began with a simple yet powerful belief:
              </p>

              {/* HERO QUOTE */}
              <div className="mt-3 flex items-center gap-3 rounded-xl bg-[#F0F3F2] px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110">
                  <UsersRound
                    size={32}
                    strokeWidth={1.5}
                    className="text-[#185C4E]"
                  />
                </div>

                <p className="text-[17px] sm:text-[19px] font-bold leading-[1.3] text-[#24463E]">
                  {ourJourney.heroQuote}
                </p>
              </div>

              <p className="mt-5 text-[13px] sm:text-[14px] leading-[1.6] text-[#46524F]">
                {ourJourney.heroDescription}
              </p>

              <p className="mt-2.5 text-[13px] sm:text-[14px] leading-[1.6] text-[#46524F]">
                {ourJourney.heroDescriptionTwo}
              </p>
            </div>

            {/* =====================================================
                HERO IMAGE
            ===================================================== */}
            <div className="relative flex items-center justify-center lg:justify-end animate-[heroImage_.9s_ease-out_both]">
              <img
                src={heroImage}
                alt="Every Great Journey Begins With a Purpose"
                className="block h-auto w-full max-w-[720px] object-contain transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            OUR PURPOSE DARK STRIP
        ========================================================= */}
        <section className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 mt-5 animate-[fadeUp_.7s_ease-out_both]">
          <div className="grid grid-cols-1 md:grid-cols-[30%_36%_34%] items-center overflow-hidden rounded-2xl bg-[#004B40] text-white shadow-[0_5px_18px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(0,75,64,0.20)]">
            {/* LEFT */}
            <div className="flex items-center gap-4 px-5 sm:px-6 py-6 md:border-r border-white/20">
              <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-white transition-transform duration-300 hover:scale-110">
                <Target
                  size={36}
                  strokeWidth={1.7}
                  className="text-[#075548]"
                />
              </div>

              <div>
                <h2 className="mt-1 text-[15px] font-semibold">
                  This isn't simply our tagline.
                </h2>

                <p className="mt-1 text-[13px] text-white/80">
                  It is our reason for existing.
                </p>
              </div>
            </div>

            {/* MIDDLE */}
            <div className="px-5 sm:px-7 py-6 md:border-r border-white/20">
              <p className="text-[13px] text-white/80">
                Every engagement asks one important question:
              </p>

              <div className="mt-3 rounded-lg bg-white px-4 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[14px] sm:text-[15px] font-bold leading-[1.45] text-[#173D36]">
                  {ourJourney.purposeQuestion}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4 px-5 sm:px-6 py-6">
              <p className="flex-1 text-[13px] sm:text-[14px] leading-[1.6] text-white/85">
                {ourJourney.purposeDescription}
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            OUR PURPOSE + IMAGES
        ========================================================= */}
        <section className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 mt-3 animate-[fadeUp_.7s_ease-out_both]">
          <div className="grid grid-cols-1 lg:grid-cols-[34%_33%_33%] overflow-hidden rounded-2xl border border-[#DDE7E3] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            {/* PURPOSE TEXT */}
            <div className="p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-[#DDE7E3] transition-colors duration-300 hover:bg-[#FBFEFC]">
              <div className="flex items-start gap-3">
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#F0F5F3] transition-transform duration-300 hover:scale-110">
                  <UsersRound size={29} className="text-[#145B4D]" />
                </div>

                <div>
                  <h2 className="text-[17px] font-bold text-[#1A3D37]">
                    {ourJourney.ourPurpose.title}
                  </h2>

                  <p className="mt-2 text-[13px] sm:text-[14px] leading-[1.6] text-[#46514F]">
                    {ourJourney.ourPurpose.description}
                  </p>
                </div>
              </div>

              {/* PURPOSE STEPS */}
              <div className="mt-6 grid grid-cols-4 gap-2">
                {ourJourney.ourPurpose.steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="relative flex flex-col items-center text-center"
                  >
                    <div className="flex h-[45px] w-[45px] items-center justify-center rounded-full border border-[#DDE8E3] bg-[#FAFCFB] transition-all duration-300 hover:-translate-y-1 hover:border-[#73AA95] hover:shadow-md">
                      {index === 0 && (
                        <UserRound size={20} className="text-[#155C4D]" />
                      )}

                      {index === 1 && (
                        <TrendingUp size={20} className="text-[#155C4D]" />
                      )}

                      {index === 2 && (
                        <Heart size={20} className="text-[#155C4D]" />
                      )}

                      {index === 3 && (
                        <Target size={20} className="text-[#155C4D]" />
                      )}
                    </div>

                    <p className="mt-2 text-[12px] font-semibold leading-[1.25] text-[#35413F]">
                      {step.title}
                    </p>

                    {index !== 3 && (
                      <span className="absolute right-[-7px] top-[19px] text-[12px] text-[#9AA8A3]">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE 1 */}
            <div className="group flex min-h-[290px] items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-[#DDE7E3] bg-[#F8FBFA] p-3">
              <img
                src={foundationImage}
                alt="Our Purpose"
                className="h-full max-h-[310px] w-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>

            {/* IMAGE 2 */}
            <div className="group flex min-h-[290px] items-center justify-center overflow-hidden bg-[#F8FBFA] p-3">
              <img
                src={expansionImage}
                alt="Learning and Growth"
                className="h-full max-h-[310px] w-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            OUR STORY
        ========================================================= */}
        <section className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 mt-12 animate-[fadeUp_.7s_ease-out_both]">
          {/* OUR STORY HEADING */}
          <div className="text-center">
            <p className="text-[13px] font-bold tracking-[1px] text-[#286D5B]">
              OUR STORY
            </p>

            <div className="mx-auto mt-1 h-[2px] w-[48px] bg-[#4D997A]" />

            <p className="mt-2 text-[13px] text-[#4D5855]">
              Our journey of learning, unlearning and growing together.
            </p>
          </div>

          {/* =======================================================
              WAVE TIMELINE
          ======================================================= */}
          <div className="relative mt-8">
            {/* HORIZONTAL WAVE - DESKTOP ONLY */}
            <div className="pointer-events-none absolute left-[3%] right-[3%] top-0 hidden md:block">
              <svg
                viewBox="0 0 1000 100"
                preserveAspectRatio="none"
                className="h-[65px] w-full overflow-visible"
              >
                <path
                  className="journey-wave"
                  d="M 0 48
                     C 45 91, 95 91, 140 48
                     S 235 5, 280 48
                     S 375 91, 420 48
                     S 515 5, 560 48
                     S 655 91, 700 48
                     S 795 5, 840 48
                     S 935 91, 1000 48"
                  fill="none"
                  stroke="#B7CEC5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* =====================================================
                TIMELINE ITEMS
            ===================================================== */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 md:gap-5">
              {ourJourney.timeline.map((item, index) => {
                const Icon = timelineIcons[index];

                return (
                  <div
                    key={item.year}
                    style={{ animationDelay: `${index * 100}ms` }}
                    className="relative flex flex-col items-center text-center animate-[fadeUp_.6s_ease-out_both]"
                  >
                    {/* YEAR CIRCLE */}
                    <div
                      className={`group relative z-10 flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full border-[4px] border-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:scale-110 hover:shadow-[0_10px_22px_rgba(0,86,65,0.22)] ${
                        index % 2 === 0
                          ? "bg-[#075548]"
                          : "bg-[#0C6656]"
                      }`}
                    >
                      <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-white/40 transition-transform duration-500 group-hover:rotate-6">
                        <Icon
                          size={24}
                          strokeWidth={1.6}
                          className="text-white"
                        />
                      </div>
                    </div>

                    {/* YEAR */}
                    <h3 className="mt-3 text-[17px] font-bold text-[#173E36] transition-colors duration-300 hover:text-[#2D8068]">
                      {item.year}
                    </h3>

                    {/* TITLE */}
                    <h4 className="mt-1 min-h-[38px] max-w-[160px] text-[13px] font-bold leading-[1.35] text-[#1F6151]">
                      {item.title}
                    </h4>

                    {/* DESCRIPTION */}
                    <p className="mt-2 max-w-[175px] text-[12px] sm:text-[11px] leading-[1.35] text-[#4C5754]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            GROWTH / CLIENT / LOOKING AHEAD
            MATCHED TO PROVIDED REFERENCE IMAGE
        ========================================================= */}
        <section className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 mt-14 animate-[fadeUp_.7s_ease-out_both]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">

            {/* =====================================================
                OUR GROWTH STORY
            ===================================================== */}
            <div className="group relative min-h-[430px] overflow-hidden rounded-[14px] border border-[#D9E1DE] bg-[#F3F5F4] px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

              {/* CONTENT */}
              <div className="relative z-10 pl-[58px]">

                {/* ICON */}
                <div className="absolute left-[-2px] top-0 flex h-[46px] w-[46px] items-center justify-center">
                  <TrendingUp
                    size={38}
                    strokeWidth={1.8}
                    className="text-[#075548]"
                  />
                </div>

                {/* TITLE */}
                <h2 className="text-[16px] font-bold leading-[1.2] text-[#204F43]">
                  {ourJourney.growthStory.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-3 text-[12px] leading-[1.55] text-[#4C5754]">
                  {ourJourney.growthStory.description}
                </p>

                <p className="mt-3 text-[12px] font-medium text-[#374541]">
                  Every year has brought:
                </p>

                {/* POINTS */}
                <div className="mt-2.5 space-y-[3px]">
                  {ourJourney.growthStory.points.map((point) => (
                    <div
                      key={point}
                      className="flex min-h-[34px] items-center gap-2 rounded-[3px] bg-[#E5F0EC] px-2.5 py-1.5"
                    >
                      <span className="flex h-[11px] w-[11px] shrink-0 items-center justify-center rounded-full border-[2px] border-[#075548]">
                        <span className="h-[3px] w-[3px] rounded-full bg-[#075548]" />
                      </span>

                      <p className="text-[11px] font-semibold leading-[1.3] text-[#35413F]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* EXISTING IMAGE ONLY */}
              <img
                src={foundationImage}
                alt="Our Growth Story"
                className="absolute bottom-[55px] left-[12px] h-[145px] w-[105px] object-contain opacity-95 transition-transform duration-500 group-hover:scale-105"
              />

              {/* CLOSING TEXT */}
              <p className="absolute bottom-5 left-5 right-5 text-[11px] leading-[1.5] text-[#46524F]">
                With every engagement, our community continues
                <br className="hidden xl:block" />
                to grow one organization, one team, and one
                <br className="hidden xl:block" />
                professional at a time.
              </p>
            </div>

            {/* =====================================================
                GROWING WITH EVERY CLIENT
            ===================================================== */}
            <div className="group relative min-h-[430px] overflow-hidden rounded-[14px] border border-[#D9E1DE] bg-[#F3F5F4] px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="relative z-10 pl-[58px]">

                {/* ICON */}
                <div className="absolute left-[-2px] top-0 flex h-[46px] w-[46px] items-center justify-center">
                  <UsersRound
                    size={39}
                    strokeWidth={1.6}
                    className="text-[#075548]"
                  />
                </div>

                {/* TITLE */}
                <h2 className="text-[16px] font-bold leading-[1.2] text-[#204F43]">
                  {ourJourney.growingWithClient.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-3 text-[12px] leading-[1.55] text-[#4C5754]">
                  {ourJourney.growingWithClient.description}
                </p>

                {/* POINTS */}
                <div className="mt-5 space-y-4">
                  {ourJourney.growingWithClient.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-[1px] flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full bg-[#075548] text-[9px] font-bold text-white">
                        ✓
                      </span>

                      <p className="text-[11px] font-medium leading-[1.45] text-[#374541]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* MILESTONE TEXT */}
                <p className="mt-5 text-[11px] leading-[1.45] text-[#46524F]">
                  These are the milestones that matter most to us.
                </p>

                <p className="mt-4 max-w-[260px] text-[11px] leading-[1.5] text-[#46524F]">
                  As new names join our client family every day,
                  our purpose continues to grow stronger.
                </p>
              </div>

              {/* EXISTING IMAGE ONLY */}
              <img
                src={innovationImage}
                alt="Growing With Every Client"
                className="absolute bottom-[-8px] right-[-4px] h-[115px] w-[145px] object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* =====================================================
                LOOKING AHEAD
            ===================================================== */}
            <div className="group relative min-h-[430px] overflow-hidden rounded-[14px] border border-[#D9E1DE] bg-[#F3F5F4] px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="relative z-10 pl-[58px]">

                {/* ICON */}
                <div className="absolute left-[-2px] top-0 flex h-[46px] w-[46px] items-center justify-center">
                  <Eye
                    size={39}
                    strokeWidth={1.6}
                    className="text-[#075548]"
                  />
                </div>

                {/* TITLE */}
                <h2 className="text-[16px] font-bold leading-[1.2] text-[#204F43]">
                  {ourJourney.lookingAhead.title}
                </h2>

                {/* INTRO CONTENT */}
                <div className="mt-3 space-y-2">
                  <p className="text-[12px] leading-[1.45] text-[#4C5754]">
                    The future of work will continue to evolve.
                  </p>

                  <p className="text-[12px] leading-[1.45] text-[#4C5754]">
                    Technology will continue to change.
                  </p>

                  <p className="text-[12px] leading-[1.45] text-[#4C5754]">
                    Artificial Intelligence will continue to reshape industries.
                  </p>

                  <p className="pt-1 text-[12px] leading-[1.45] text-[#4C5754]">
                    Yet one truth will remain constant:
                  </p>
                </div>

                {/* HIGHLIGHTED TRUTH */}
                <div className="mt-3 border-l-[3px] border-[#075548] bg-[#E5F0EC] px-4 py-4">
                  <p className="text-[15px] font-bold leading-[1.35] text-[#173E36]">
                    Organizations will always succeed
                    <br />
                    because of people.
                  </p>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-4 text-[11px] leading-[1.55] text-[#46524F]">
                  That is why 3rd EdHum will continue to invest in
                  helping individuals become better learners, stronger
                  leaders, more capable professionals, and more
                  compassionate human beings.
                </p>

                <p className="mt-3 text-[11px] leading-[1.5] text-[#46524F]">
                  Our journey is far from complete.
                </p>

                <p className="mt-2 text-[11px] leading-[1.5] text-[#46524F]">
                  In many ways, it is only just beginning.
                </p>
              </div>

              {/* EXISTING IMAGE ONLY */}
              <img
                src={todayImage}
                alt="Looking Ahead"
                className="absolute bottom-[-10px] right-[-10px] h-[165px] w-[190px] object-contain opacity-95 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 mt-12 mb-10 animate-[fadeUp_.7s_ease-out_both]">
          <div className="group flex items-center gap-4 rounded-xl bg-[#004B40] px-5 sm:px-6 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#00584B] hover:shadow-[0_10px_25px_rgba(0,75,64,0.18)]">
            <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:scale-110">
              <UsersRound size={25} className="text-[#075548]" />
            </div>

            <div className="flex-1">
              <h2 className="text-[16px] font-semibold">
                Helping Others Through Learning.
              </h2>

              <p className="mt-1 text-[13px] text-white/80">
                It has always been our purpose. It will always be our promise.
              </p>
            </div>

            <a
              href="https://wa.me/919967399069?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%203rd%20EdHum%27s%20programs."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 rounded-md border border-white/70 px-5 py-2.5 text-[13px] font-medium transition-all duration-300 hover:bg-white hover:text-[#075548] hover:gap-3"
            >
              Join Our Journey
              <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <Footer />

      {/* =========================================================
          ANIMATIONS
      ========================================================= */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroImage {
          from {
            opacity: 0;
            transform: translateX(45px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .journey-wave {
          stroke-dasharray: 1500;
          stroke-dashoffset: 1500;
          animation: drawWave 2.8s ease-out forwards;
        }

        .journey-arrow {
          opacity: 0;
          transform-origin: 1000px 48px;
          animation: showArrow 0.5s ease-out 2.5s forwards;
        }

        @keyframes drawWave {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes showArrow {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default OurJourney;