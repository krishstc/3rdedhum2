import { useMemo } from "react";
import {
  FaUserTie,
  FaUsers,
  FaBullseye,
  FaChalkboardTeacher,
  FaUserCheck,
  FaUserFriends,
  FaExchangeAlt,
  FaTasks,
  FaChartBar,
  FaClipboardCheck,
  FaComments,
  FaCrown,
  FaPeopleArrows,
  FaRoute,
  FaStar,
  FaHandsHelping,
  FaRegLightbulb,
} from "react-icons/fa";

import { servicesData } from "../data/serviceData";
import Footer from "../components/footer/Footer";

const programIcons = [
  FaUserTie,
  FaUsers,
  FaBullseye,
  FaChalkboardTeacher,
  FaUserCheck,
  FaUserFriends,
  FaExchangeAlt,
  FaTasks,
  FaChartBar,
  FaClipboardCheck,
  FaComments,
  FaCrown,
  FaPeopleArrows,
  FaRoute,
  FaStar,
  FaHandsHelping,
  FaRegLightbulb,
];

const iconBackgrounds = [
  "bg-[#EAF7F0]",
  "bg-[#EEF4FF]",
  "bg-[#FFF4E8]",
  "bg-[#F3EDFF]",
  "bg-[#EAF8F7]",
  "bg-[#FFF0F2]",
  "bg-[#EDF7FF]",
  "bg-[#F3F8E9]",
  "bg-[#FFF5E6]",
  "bg-[#EAF7F0]",
  "bg-[#F0F3FF]",
  "bg-[#FFF0F0]",
  "bg-[#EAF8F4]",
  "bg-[#F5F0FF]",
  "bg-[#FFF5E8]",
  "bg-[#EAF7F0]",
  "bg-[#EEF5FF]",
];

const iconColors = [
  "text-[#3F9975]",
  "text-[#5078C7]",
  "text-[#D9822B]",
  "text-[#7956B8]",
  "text-[#319A91]",
  "text-[#D85A6A]",
  "text-[#3B82B8]",
  "text-[#729B35]",
  "text-[#D18428]",
  "text-[#3F9975]",
  "text-[#596FC4]",
  "text-[#C95D5D]",
  "text-[#319A78]",
  "text-[#7858B8]",
  "text-[#D48632]",
  "text-[#3F9975]",
  "text-[#4D78B7]",
];

function ManagerialLeadership() {
  const programs = useMemo(() => {
    const managerialProgram = servicesData.column1.find(
      (item) => item.folder === "ManagerialSkills"
    );

    return managerialProgram?.children || [];
  }, []);

  const handleProgramClick = (program) => {
    const pdfPath = `/pdf/ManagerialSkills/${program}.pdf`;
    window.open(pdfPath, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[#F7FAF8] text-[#082F28] overflow-hidden">

      {/* ================= HERO ================= */}

      <section className="relative bg-[#F7FAF8] pt-12 sm:pt-16 lg:pt-16 pb-14 sm:pb-16 lg:pb-20">

        <div className="absolute -top-28 -right-28 w-[360px] h-[360px] rounded-full bg-[#DDF6EA] opacity-70 pointer-events-none" />

        <div className="absolute top-40 -left-32 w-[280px] h-[280px] rounded-full bg-[#EAF7F0] opacity-60 pointer-events-none" />

        <div className="relative max-w-[1250px] mx-auto px-6 sm:px-8 lg:px-10">

          {/* Breadcrumb */}

          <div className="mb-10 sm:mb-8">

            <p className="text-[11px] sm:text-[12px] text-[#7B8A86] tracking-wide">
              <span>Home</span>
              <span className="mx-2">›</span>
              <span>Services</span>
              <span className="mx-2">›</span>
              <span className="text-[#4A8E76]">
                Managerial & Leadership Programs
              </span>
            </p>

          </div>

          {/* Hero Content */}

          <div className="max-w-[900px] relative z-10">

            <div className="inline-flex flex-col items-start">

              <span className="text-[12px] sm:text-[13px] font-semibold tracking-[1.5px] text-[#548C78]">
                LEADERSHIP & MANAGEMENT
              </span>

              <span className="mt-1 h-[3px] w-[58px] rounded-full bg-[#4D997A]" />

            </div>

            <h1 className="mt-2 text-[38px] sm:text-[48px] md:text-[56px] lg:text-[62px] leading-[1.06] font-bold tracking-[-2px] text-[#07372F]">
              Managerial &{" "}
              <span className="text-[#3C9A72]">
                Leadership Programs.
              </span>
            </h1>

          </div>

        </div>

      </section>

      {/* ================= PROGRAMS ================= */}

      <section className="bg-white py-14 sm:py-18 lg:py-2">

        <div className="max-w-[1250px] mx-auto px-6 sm:px-8 lg:px-10">

          {/* Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">

            {programs.map((program, index) => {

              const Icon = programIcons[index] || FaUserTie;

              const iconBackground =
                iconBackgrounds[index] || "bg-[#EAF7F0]";

              const iconColor =
                iconColors[index] || "text-[#3F9975]";

              return (

                <button
                  key={program}
                  type="button"
                  onClick={() => handleProgramClick(program)}
                  className="group w-full text-left rounded-2xl border border-[#E7ECEA] bg-white p-6 sm:p-7 shadow-[0_5px_20px_rgba(20,75,55,0.04)] hover:-translate-y-1.5 hover:border-[#CDEBDD] hover:shadow-[0_18px_40px_rgba(20,95,65,0.10)] transition-all duration-300"
                >

                  <div className="flex items-start justify-between gap-4">

                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${iconBackground} ${iconColor} group-hover:scale-105 transition-transform duration-300`}>
                      <Icon size={23} />
                    </div>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5F8F6] text-[#A0AEA9] group-hover:bg-[#E2F8EF] group-hover:text-[#3F9975] transition-all duration-300">
                      <span className="text-[15px]">→</span>
                    </span>

                  </div>

                  <h3 className="mt-6 text-[18px] sm:text-[19px] font-semibold leading-[1.3] text-[#092F28] group-hover:text-[#3F9975] transition-colors duration-300">
                    {program}
                  </h3>

                  <div className="mt-4 h-[2px] w-[38px] rounded-full bg-[#BDE8D2] group-hover:w-[52px] group-hover:bg-[#4D997A] transition-all duration-300" />

                  <p className="mt-4 text-[13px] sm:text-[14px] leading-[1.55] text-[#717C79]">
                    Practical learning designed to strengthen managerial and
                    leadership capability.
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[13px] font-semibold text-[#4A9877]">
                    View Program
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </div>

                </button>

              );

            })}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="bg-[#F7FAF8] py-14 sm:py-16 lg:py-20">

        <div className="max-w-[1250px] mx-auto px-6 sm:px-8 lg:px-10">

          <div className="relative overflow-hidden rounded-2xl bg-[#005641] px-7 sm:px-10 lg:px-14 py-9 sm:py-11">

            <div className="absolute -right-16 -top-20 w-[220px] h-[220px] rounded-full bg-white/5 pointer-events-none" />

            <div className="absolute -right-10 -bottom-28 w-[190px] h-[190px] rounded-full bg-[#63D7AA]/10 pointer-events-none" />

            <div className="relative z-10 max-w-[850px]">

              <p className="text-[12px] font-semibold tracking-[1.5px] text-[#9DE4C5]">
                LEADERSHIP DEVELOPMENT
              </p>

              <h2 className="mt-4 text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.2] font-bold text-white">
                Ready to develop your next generation of leaders?
              </h2>

              <p className="mt-4 text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.65] text-white/75 max-w-[720px]">
                Explore practical programs designed to help managers and
                leaders perform with confidence, clarity and impact.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
}

export default ManagerialLeadership;