import React from "react";
import Footer from "../components/footer/Footer";
import Contact from "../components/home/Contact";

import {
  GraduationCap,
  Users,
  Radio,
  BookOpen,
  Target,
  TrendingUp,
  UsersRound,
  Award,
  MessageSquare,
  Cpu,
  BadgeCheck,
  Phone,
  ArrowRight,
  Plus,
  ShieldCheck,
  Clock,
  Headphones,
  PlayCircle,
  BriefcaseBusiness,
  Quote,
} from "lucide-react";

import ypdData from "../data/ypd";

const iconMap = {
  GraduationCap,
  Users,
  Radio,
  BookOpen,
  Target,
  TrendingUp,
  UsersRound,
  Award,
  MessageSquare,
  Cpu,
  BadgeCheck,
  Phone,
  ArrowRight,
  Plus,
  ShieldCheck,
  Clock,
  Headphones,
  PlayCircle,
  BriefcaseBusiness,
  Quote,
};

const getImage = (image) => image || "";

const Eyebrow = ({ children, pink = false }) => (
  <div className="mb-3 flex w-full items-center justify-center gap-3">
    <span className={`h-[2px] w-10 ${pink ? "bg-[#D9367A]" : "bg-[#0B783C]"}`} />
    <span className={`whitespace-nowrap text-[13px] font-bold uppercase tracking-[0.16em] ${pink ? "text-[#D9367A]" : "text-[#0B783C]"}`}>
      {children}
    </span>
    <span className={`h-[2px] w-10 ${pink ? "bg-[#D9367A]" : "bg-[#0B783C]"}`} />
  </div>
);

function YPD() {
  const {
    images = {},
    heroFeatures = [],
    benefits = [],
    solutions = [],
    programs = [],
    testimonials = [],
    trustFeatures = [],
    logos = [],
  } = ypdData || {};

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#171717]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative border-t-2 border-[#0B783C] bg-white">

        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 pb-[165px] pt-10 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-12 lg:pb-[165px] lg:pt-12">

          {/* LEFT CONTENT */}

          <div className="relative z-10">

            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.16em] text-[#C94A7B] sm:text-[14px]">
              Empowering Peoplebuilding Features
            </p>

            <div className="mb-7 h-[2px] w-20 bg-[#0B783C]" />

            <h1 className="max-w-[700px] text-[40px] font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-[48px] lg:text-[56px]">
              Transform Skills into{" "}
              <span className="text-[#D9367A]">
                Professional Excellence
              </span>
            </h1>

            <p className="mt-6 max-w-[650px] text-[15px] leading-[1.7] text-[#777777] sm:text-[17px]">
              3RD EDHUM empowers learners with industry-focused programs in
              AI, digital technologies, leadership, and career development,
              helping individuals and organizations build future-ready skills.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md bg-[#0B783C] px-6 py-3.5 text-[14px] font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#075B2C] hover:shadow-lg"
              >
                Explore Programs
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md border border-[#0B783C] px-6 py-3.5 text-[14px] font-bold text-[#0B783C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B783C] hover:text-white"
              >
                Talk to an Expert
                <ArrowRight size={16} />
              </button>

            </div>

          </div>

          {/* RIGHT HERO IMAGE */}

          <div className="relative mx-auto h-[490px] w-full max-w-[640px]">

            <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[10px] border-[#0B783C] border-r-[#D9367A] border-t-[#F6C515]" />

            <div className="absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[8px] border-white bg-white shadow-xl">

              <img
                src={getImage(images.hero)}
                alt="Students learning online"
                className="h-full w-full object-cover"
                fetchPriority="high"
              />

            </div>

            {/* COURSE CARD */}

            <div className="absolute left-0 top-[55px] z-20 flex items-center gap-3 rounded-lg border border-[#eeeeee] bg-white px-4 py-3 shadow-lg">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B783C] text-white">
                <GraduationCap size={19} />
              </div>

              <div>
                <p className="text-[17px] font-extrabold">
                  50+
                </p>

                <p className="text-[12px] text-[#777777]">
                  Online Courses
                </p>
              </div>

            </div>

            {/* STUDENT CARD */}

            <div className="absolute right-0 top-[95px] z-20 flex items-center gap-3 rounded-lg border border-[#eeeeee] bg-white px-4 py-3 shadow-lg">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D9367A] text-white">
                <Users size={19} />
              </div>

              <div>
                <p className="text-[17px] font-extrabold">
                  10k+
                </p>

                <p className="text-[12px] text-[#777777]">
                  Online Students
                </p>
              </div>

            </div>

            {/* LIVE CARD */}

            <div className="absolute bottom-[5px] left-0 z-20 rounded-lg border border-[#eeeeee] bg-white p-4 shadow-lg">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B783C] text-white">
                  <Radio size={18} />
                </div>

                <div>
                  <p className="text-[13px] font-bold">
                    Live Expert Classes
                  </p>

                  <p className="text-[12px] text-[#777777]">
                    Learn & Grow
                  </p>
                </div>

              </div>

              <button
                type="button"
                className="mt-3 w-full rounded-md bg-[#0B783C] py-2 text-[12px] font-bold text-white"
              >
                Join Now
              </button>

            </div>

            <Plus className="absolute right-8 top-1 h-6 w-6 text-[#0B783C]" />

            <Plus className="absolute bottom-8 right-0 h-6 w-6 text-[#D9367A]" />

          </div>

        </div>

        {/* GREEN STRIP */}

        <div className="absolute bottom-0 left-0 h-[90px] w-full bg-[#087A3B]" />

        {/* HERO FEATURES */}

        <div className="absolute bottom-[14px] left-0 right-0 z-30 px-5 sm:px-8 lg:px-14">

          <div className="mx-auto grid max-w-[1350px] gap-14 sm:grid-cols-2 lg:grid-cols-4">

            {heroFeatures.map((item, index) => {

              const Icon = iconMap[item?.icon] || GraduationCap;

              return (
                <div
                  key={item?.title || index}
                  className="group flex min-h-[95px] items-center gap-4 rounded-lg border border-[#eeeeee] bg-white px-5 py-4 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E8F5ED] text-[#0B783C] transition-all duration-300 group-hover:bg-[#0B783C] group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <div>
                    <p className="text-[14px] font-bold">
                      {item?.title}
                    </p>

                    <p className="mt-1 text-[11px] leading-[1.45] text-[#777777]">
                      {item?.text}
                    </p>
                  </div>

                </div>
              );

            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          BENEFITS
      ========================================================= */}

      <section className="mx-auto grid max-w-[1350px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-12">

        {/* ONE COMBINED BENEFITS IMAGE */}

        <div className="mx-auto w-full max-w-[560px] rounded-[40px] border-[2px] border-dashed border-[#D9367A]/70 p-3">

          <div className="overflow-hidden rounded-[32px]">

            <img
              src={getImage(images.benefit1)}
              alt="Benefits of online learning"
              loading="lazy"
              decoding="async"
              className="h-auto max-h-[500px] w-full object-cover transition duration-500 hover:scale-105"
            />

          </div>

        </div>

        {/* BENEFITS CONTENT */}

        <div>

          <h2 className="max-w-[600px] text-[35px] font-extrabold leading-[1.12] sm:text-[44px]">
            <span className="text-[#D9367A]">
              Benefits
            </span>{" "}
            From Our Online Learning
          </h2>

          <div className="mt-8 space-y-5">

            {benefits.map((item, index) => {

              const Icon = iconMap[item?.icon] || BookOpen;

              return (
                <div
                  key={item?.title || index}
                  className="group flex gap-4 rounded-xl p-2 transition-all duration-300 hover:bg-[#FAFCF8]"
                >

                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white shadow-sm transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: item?.color || "#0B783C",
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <div>

                    <h3 className="text-[18px] font-bold">
                      {item?.title}
                    </h3>

                    <p className="mt-1 text-[14px] leading-[1.6] text-[#777777]">
                      {item?.text}
                    </p>

                  </div>

                </div>
              );

            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          SOLUTIONS
      ========================================================= */}

      <section className="bg-[#FAFCF8] px-5 py-20 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-[1350px]">

          <div className="mx-auto flex w-full max-w-[900px] flex-col items-center text-center">

            <Eyebrow>
              What We Offer
            </Eyebrow>

            <h2 className="w-full text-[35px] font-extrabold leading-tight sm:text-[44px] lg:text-[48px]">
              Solutions for{" "}
              <span className="text-[#0B783C]">
                Every
              </span>{" "}
              Learning Need
            </h2>

            <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-[1.7] text-[#777777]">
              Our comprehensive range of services covers a wide spectrum of
              learning and development needs.
            </p>

          </div>

          {/* SOLUTION CARDS */}

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {solutions.map((item, index) => {

              const Icon = iconMap[item?.icon] || BookOpen;

              return (
                <div
                  key={item?.number || index}
                  className="group overflow-hidden rounded-xl border border-[#eeeeee] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="relative h-[180px] overflow-hidden">

                    <img
                      src={getImage(images[item?.image])}
                      alt={item?.title || "Learning solution"}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-md bg-[#0B783C] px-5 py-2 text-[14px] font-bold text-white">
                      {item?.number}
                    </span>

                  </div>

                  <div className="flex min-h-[300px] flex-col items-center px-6 py-7 text-center">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF6EE] text-[#0B783C] transition-all duration-300 group-hover:bg-[#0B783C] group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-4 text-[18px] font-bold">
                      {item?.title}
                    </h3>

                    <p className="mt-3 flex-1 text-[13px] leading-[1.7] text-[#777777]">
                      {item?.text}
                    </p>

                    <button
                      type="button"
                      className="mt-5 inline-flex items-center gap-2 text-[14px] font-bold text-[#0B783C] transition-all hover:gap-3 hover:text-[#D9367A]"
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </button>

                  </div>

                </div>
              );

            })}

          </div>

          {/* TRUST FEATURES */}

          <div className="mx-auto mt-10 grid max-w-[1100px] overflow-hidden rounded-2xl border border-[#eeeeee] bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-4">

            {trustFeatures.map((item, index) => {

              const Icon = iconMap[item?.icon] || ShieldCheck;

              return (
                <div
                  key={item?.title || index}
                  className="flex items-center gap-3 border-b border-[#eeeeee] px-5 py-5 transition hover:bg-[#EAF6EE] lg:border-b-0 lg:border-r last:border-r-0"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF6EE] text-[#0B783C]">
                    <Icon size={18} />
                  </div>

                  <div>

                    <p className="text-[13px] font-bold">
                      {item?.title}
                    </p>

                    <p className="mt-1 text-[11px] text-[#999999]">
                      {item?.text}
                    </p>

                  </div>

                </div>
              );

            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          LOGOS
      ========================================================= */}

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-[1200px]">

          <div className="flex flex-col items-center">

            <h2 className="text-center text-[30px] font-extrabold sm:text-[38px]">
              <span className="text-[#D9367A]">
                Transformation
              </span>{" "}
              Through Our Facilitation
            </h2>

            <div className="mt-4 h-[3px] w-12 bg-[#D9367A]" />

          </div>

          <div className="mt-10 grid overflow-hidden rounded-xl border border-[#eeeeee] sm:grid-cols-2 lg:grid-cols-4">

            {logos.map((item, index) => (

              <div
                key={item?.name || index}
                className="flex h-[115px] items-center justify-center border-b border-r border-[#eeeeee] px-5 text-center transition hover:bg-[#FAFCF8]"
              >

                <span
                  className={`text-[21px] font-extrabold ${item?.className || ""}`}
                >
                  {item?.name}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          PROGRAMS
      ========================================================= */}

      <section className="bg-white px-5 pb-20 pt-8 sm:px-8 lg:px-12">

        <div className="mx-auto grid max-w-[1300px] items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]">

          {/* PROGRAM IMAGES */}

          <div className="grid grid-cols-2 gap-4">

            <div className="row-span-2 overflow-hidden rounded-[28px]">

              <img
                src={getImage(images.program1)}
                alt="Professional training"
                loading="lazy"
                decoding="async"
                className="h-full min-h-[390px] w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

            <div className="overflow-hidden rounded-[40px]">

              <img
                src={getImage(images.program2)}
                alt="Corporate training"
                loading="lazy"
                decoding="async"
                className="h-[175px] w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

            <div className="overflow-hidden rounded-[25px]">

              <img
                src={getImage(images.program3)}
                alt="Training session"
                loading="lazy"
                decoding="async"
                className="h-[175px] w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

            <div className="col-span-2 flex items-center gap-4 rounded-[20px] bg-[#48A66B] px-6 py-5 text-white">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#0B783C]">
                <GraduationCap size={23} />
              </div>

              <div>

                <p className="text-[15px] font-bold">
                  Quality Training
                </p>

                <p className="text-[13px]">
                  for Every Goal
                </p>

              </div>

            </div>

          </div>

          {/* PROGRAM CONTENT */}

          <div>

            <Eyebrow>
              Explore Our Programs
            </Eyebrow>

            <h2 className="max-w-[750px] text-[34px] font-extrabold leading-[1.12] sm:text-[42px]">
              Quality Training Programs for{" "}
              <span className="text-[#0B783C]">
                Every Goal
              </span>
            </h2>

            <p className="mt-4 max-w-[700px] text-[14px] leading-[1.7] text-[#777777]">
              From professional growth to personal development, we offer a
              wide range of programs designed to empower individuals and
              organizations.
            </p>

            <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1fr_165px]">

              {/* FIRST THREE */}

              <div className="space-y-5">

                {programs.slice(0, 3).map((item, index) => {

                  const Icon = iconMap[item?.icon] || BookOpen;

                  return (
                    <div
                      key={item?.title || index}
                      className="flex gap-3 rounded-lg p-2 transition hover:bg-[#FAFCF8]"
                    >

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E7F4EB] text-[#0B783C]">
                        <Icon size={18} />
                      </div>

                      <div>

                        <h3 className="text-[14px] font-bold">
                          {item?.title}
                        </h3>

                        <p className="mt-1 text-[11px] leading-[1.55] text-[#777777]">
                          {item?.text}
                        </p>

                      </div>

                    </div>
                  );

                })}

              </div>

              {/* SECOND THREE */}

              <div className="space-y-5">

                {programs.slice(3, 6).map((item, index) => {

                  const Icon = iconMap[item?.icon] || BookOpen;

                  return (
                    <div
                      key={item?.title || index}
                      className="flex gap-3 rounded-lg p-2 transition hover:bg-[#FAFCF8]"
                    >

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E7F4EB] text-[#0B783C]">
                        <Icon size={18} />
                      </div>

                      <div>

                        <h3 className="text-[14px] font-bold">
                          {item?.title}
                        </h3>

                        <p className="mt-1 text-[11px] leading-[1.55] text-[#777777]">
                          {item?.text}
                        </p>

                      </div>

                    </div>
                  );

                })}

              </div>

              {/* QUOTE CARD */}

              <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[18px] bg-[#E9F5EC] px-5 py-6">

                <div>

                  <Quote
                    size={36}
                    className="text-[#0B783C]"
                    fill="currentColor"
                  />

                  <p className="mt-4 text-[14px] font-medium leading-[1.65] text-[#4D4D4D]">
                    Our programs are designed to help you achieve your goals
                    and create a lasting impact.
                  </p>

                </div>

                <div>

                  <div className="mb-3 h-[2px] w-10 bg-[#0B783C]" />

                  <span className="text-[48px] font-extrabold leading-none text-[#0B783C]">
                    99
                  </span>

                </div>

              </div>

            </div>

            {/* CTA */}

            <div className="mt-8 flex flex-wrap items-center gap-6">

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-[#0B783C] px-7 py-3 text-[13px] font-bold text-white transition hover:bg-[#075B2C]"
              >
                Discover More
                <ArrowRight size={16} />
              </button>

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E7F4EB] text-[#0B783C]">
                  <Phone size={17} />
                </div>

                <div>

                  <p className="text-[11px] text-[#777777]">
                    Call Now
                  </p>

                  <p className="text-[14px] font-bold">
                    +91 9967399069
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          TESTIMONIALS
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#087A3B] px-5 py-16 sm:px-8 lg:px-12">

        <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-[#F6C515]" />
        <div className="absolute -bottom-8 left-[34%] h-16 w-16 rounded-full bg-[#F6C515]" />
        <div className="absolute -bottom-8 right-[31%] h-20 w-20 rounded-full bg-[#F6C515]" />
        <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-[#F6C515]" />

        <div className="relative mx-auto grid max-w-[1200px] gap-6 md:grid-cols-3">

          {testimonials.map((item, index) => (

            <div
              key={item?.name || index}
              className="rounded-xl bg-white px-7 py-7 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="mb-2 text-[42px] leading-none text-[#D9367A]">
                “
              </div>

              <p className="min-h-[90px] text-[14px] leading-[1.65] text-[#444444]">
                {item?.text}
              </p>

              <div className="mt-6 flex items-center gap-3">

                <img
                  src={getImage(images[item?.image])}
                  alt={item?.name || "Student"}
                  loading="lazy"
                  decoding="async"
                  className="h-11 w-11 rounded-full object-cover"
                />

                <div>

                  <p className="text-[14px] font-bold text-[#0B783C]">
                    –{item?.name}
                  </p>

                  <p className="mt-1 text-[11px] text-[#777777]">
                    {item?.role}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}

      <section className="px-5 py-12 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-[1350px]">
          <Contact />
        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <Footer />

    </main>
  );
}

export default YPD;