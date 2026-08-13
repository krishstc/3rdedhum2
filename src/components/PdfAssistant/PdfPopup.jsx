import { FaTimes, FaUsers, FaBullseye, FaChartLine, FaLightbulb } from "react-icons/fa";

function PdfPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  const programs = [
    { id: 1, title: "Leadership Development", icon: FaUsers, pdf: "/pdf/UpcomingPrograms/Leadership Development.pdf" },
    { id: 2, title: "Team Effectiveness", icon: FaBullseye, pdf: "/pdf/UpcomingPrograms/Team Effectiveness.pdf" },
    { id: 3, title: "Sales Excellence", icon: FaChartLine, pdf: "/pdf/UpcomingPrograms/Sales Excellence.pdf" },
    { id: 4, title: "Innovation & Future Skills", icon: FaLightbulb, pdf: "/pdf/UpcomingPrograms/Innovation Future Skills.pdf" },
  ];

  const openPdf = (pdf) => {
    window.open(pdf, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-[99998] flex items-center justify-center px-3 sm:px-5">
      <div className="w-full max-w-[680px] max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-gray-200 shadow-2xl">

        <div className="flex items-center justify-between bg-gradient-to-r from-[#043329] to-[#28725c] px-4 py-4 sm:px-6 sm:py-5">
          <div>
            <p className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-[#4ae2c1]">Learning Resources</p>
            <h2 className="mt-1 text-lg sm:text-2xl font-semibold text-white">Upcoming Programs</h2>
          </div>

          <button type="button" onClick={onClose} aria-label="Close" className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full text-white hover:bg-white/10 transition">
            <FaTimes className="text-sm sm:text-base" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 bg-[#F8FAF9] p-3 sm:p-5">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <button type="button" key={program.id} onClick={() => openPdf(program.pdf)} className="group w-full text-left rounded-xl border border-gray-200 bg-white p-3 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#28725c]/40 hover:shadow-lg">
                <div className="flex items-center gap-2 sm:gap-3">

                  <div className="flex h-8 w-8 sm:h-11 sm:w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#E8F4EF] group-hover:bg-[#28725c] transition-all duration-300">
                    <Icon className="text-xs sm:text-base text-[#28725c] group-hover:text-white transition-colors" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-base font-semibold leading-4 sm:leading-5 text-gray-800 group-hover:text-[#28725c] transition-colors">
                      {program.title}
                    </h3>

                    <span className="mt-2 inline-block text-[9px] sm:text-xs font-medium text-[#28725c]">
                      Open program →
                    </span>
                  </div>

                </div>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default PdfPopup;