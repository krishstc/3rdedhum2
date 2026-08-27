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
    if (!program?.pdfId) {
      console.error("PDF ID is missing for:", program?.title);
      return;
    }

    const googleDriveUrl = `https://drive.google.com/file/d/${program.pdfId}/view`;

    window.open(
      googleDriveUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#F7FAF8] text-[#082F28]">
      {/* ================= HERO ================= */}

      <section className="relative bg-[#F7FAF8] pt-12 pb-14 sm:pt-16 sm:pb-16 lg:pt-16 lg:pb-20">
        <div className="pointer-events-none absolute -right-28 -top-28 h-[360px] w-[360px] rounded-full bg-[#DDF6EA] opacity-70" />
        <div className="pointer-events-none absolute -left-32 top-40 h-[280px] w-[280px] rounded-full bg-[#EAF7F0] opacity-60" />

        <div className="relative mx-auto max-w-[1250px] px-6 sm:px-8 lg:px-10">
          {/* Breadcrumb */}

          <div className="mb-10 animate-[fadeUp_.6s_ease-out_both] sm:mb-8">
            <p className="text-[11px] tracking-wide text-[#7B8A86] sm:text-[12px]">
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

          <div className="relative z-10 max-w-[900px] animate-[fadeUp_.7s_ease-out_both]">
            <div className="inline-flex flex-col items-start">
              <span className="text-[12px] font-semibold tracking-[1.5px] text-[#548C78] sm:text-[13px]">
                LEADERSHIP & MANAGEMENT
              </span>

              <span className="mt-1 h-[3px] w-[58px] rounded-full bg-[#4D997A]" />
            </div>

            <h1 className="mt-2 text-[38px] font-bold leading-[1.06] tracking-[-2px] text-[#07372F] sm:text-[48px] md:text-[56px] lg:text-[62px]">
              Managerial &{" "}
              <span className="text-[#3C9A72]">
                Leadership Programs.
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* ================= PROGRAMS ================= */}

      <section className="bg-white py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-[1250px] px-6 sm:px-8 lg:px-10">
          {programs.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-[15px] text-gray-500">
                No programs available.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {programs.map((program, index) => {
                const Icon = programIcons[index] || FaUserTie;
                const iconBackground =
                  iconBackgrounds[index] || "bg-[#EAF7F0]";
                const iconColor =
                  iconColors[index] || "text-[#3F9975]";

                return (
                  <button
                    key={program.pdfId || program.title}
                    type="button"
                    onClick={() => handleProgramClick(program)}
                    style={{ animationDelay: `${index * 80}ms` }}
                    className="group w-full animate-[fadeUp_.6s_ease-out_both] rounded-2xl border border-[#E7ECEA] bg-white p-6 text-left shadow-[0_5px_20px_rgba(20,75,55,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#CDEBDD] hover:shadow-[0_18px_40px_rgba(20,95,65,0.10)] sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${iconBackground} ${iconColor} transition-transform duration-300 group-hover:scale-105`}
                      >
                        <Icon size={23} />
                      </div>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5F8F6] text-[#A0AEA9] transition-all duration-300 group-hover:bg-[#E2F8EF] group-hover:text-[#3F9975]">
                        <span className="text-[15px]">→</span>
                      </span>
                    </div>

                    <h3 className="mt-6 text-[18px] font-semibold leading-[1.3] text-[#092F28] transition-colors duration-300 group-hover:text-[#3F9975] sm:text-[19px]">
                      {program.title}
                    </h3>

                    <div className="mt-4 h-[2px] w-[38px] rounded-full bg-[#BDE8D2] transition-all duration-300 group-hover:w-[52px] group-hover:bg-[#4D997A]" />

                    <p className="mt-4 text-[13px] leading-[1.55] text-[#717C79] sm:text-[14px]">
                      Practical learning designed to strengthen managerial and leadership capability.
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-[13px] font-semibold text-[#4A9877]">
                      View Program
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="bg-[#F7FAF8] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1250px] px-6 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-2xl bg-[#005641] px-7 py-9 animate-[fadeUp_.7s_ease-out_both] sm:px-10 sm:py-11 lg:px-14">
            <div className="pointer-events-none absolute -right-16 -top-20 h-[220px] w-[220px] rounded-full bg-white/5" />

            <div className="pointer-events-none absolute -bottom-28 -right-10 h-[190px] w-[190px] rounded-full bg-[#63D7AA]/10" />

            <div className="relative z-10 max-w-[850px]">
              <p className="text-[12px] font-semibold tracking-[1.5px] text-[#9DE4C5]">
                LEADERSHIP DEVELOPMENT
              </p>

              <h2 className="mt-4 text-[26px] font-bold leading-[1.2] text-white sm:text-[32px] lg:text-[38px]">
                Ready to develop your next generation of leaders?
              </h2>

              <p className="mt-4 max-w-[720px] text-[13px] leading-[1.65] text-white/75 sm:text-[14px] lg:text-[15px]">
                Explore practical programs designed to help managers and leaders perform with confidence, clarity and impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <Footer />

      {/* ================= ANIMATION ================= */}

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
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

export default ManagerialLeadership;