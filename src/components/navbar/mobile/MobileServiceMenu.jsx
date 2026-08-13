import { useState } from "react";
import { FaArrowLeft, FaChevronRight } from "react-icons/fa";
import { servicesData } from "../../../data/serviceData";
import FeatureCard from "../desktop/FeatureCard";

function MobileServiceMenu({ onBack, onClose }) {
  const [activeService, setActiveService] = useState(null);

  const services = Object.values(servicesData).flat();

  const handlePdfOpen = (title) => {
    if (!activeService) return;

    const pdfPath = `/pdf/${activeService.folder}/${title}.pdf`;
    window.open(pdfPath, "_blank");
  };

  const goBack = () => {
    setActiveService(null);
  };

  return (
    <div className="h-full flex flex-col bg-white">

      {/* HEADER */}
      <div className="flex items-center justify-between px-5 py-4 border-b flex-shrink-0">

        <button
          onClick={activeService ? goBack : onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-[#3F9975] transition"
        >
          <FaArrowLeft className="text-sm" />
          <span className="text-sm font-medium">
            {activeService ? "Back to Services" : "Back"}
          </span>
        </button>

        <button
          onClick={onClose}
          className="text-gray-600 hover:text-black transition"
          aria-label="Close menu"
        >
          ✕
        </button>

      </div>

      {/* CONTENT */}
      <div className="overflow-y-auto flex-1 p-5">

        {!activeService ? (
          <>
            {/* SERVICES LIST */}
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Our Services
            </h2>

            <div className="space-y-1">

              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <button
                    key={service.title}
                    onClick={() => {
                      if (service.children?.length) {
                        setActiveService(service);
                      }
                    }}
                    className="group w-full flex items-center justify-between text-left px-3 py-3 rounded-lg border-b border-gray-100 hover:bg-[#F6FCF9] transition"
                  >

                    <div className="flex items-center gap-3">

                      {Icon && (
                        <div className="w-8 h-8 rounded-md bg-[#EAF7F0] flex items-center justify-center shrink-0">
                          <Icon className="text-[#4BA77A] text-sm" />
                        </div>
                      )}

                      <span className="text-sm text-gray-700 group-hover:text-[#3F9975] transition">
                        {service.title}
                      </span>

                    </div>

                    {service.children?.length && (
                      <FaChevronRight className="text-[10px] text-gray-300 group-hover:text-[#3F9975] transition" />
                    )}

                  </button>
                );
              })}

            </div>

            {/* SERVICES FEATURE CARD */}
            <div className="mt-7">
              <FeatureCard />
            </div>
          </>
        ) : (
          <>
            {/* ACTIVE SERVICE */}
            <h2 className="text-xl font-semibold text-gray-900 mb-5">
              {activeService.title}
            </h2>

            {/* PDF ITEMS */}
            <div className="space-y-1">

              {activeService.children.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handlePdfOpen(item)}
                  className="group w-full flex items-center justify-between text-left px-3 py-3 rounded-lg border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <span className="text-sm text-gray-600 group-hover:text-gray-900">
                    {item}
                  </span>

                  <FaChevronRight className="text-[10px] text-gray-300 group-hover:text-[#3F9975] transition" />
                </button>
              ))}

            </div>

            {/* FEATURE CARD ALWAYS PRESENT */}
            <div className="mt-7">
              <FeatureCard />
            </div>
          </>
        )}

      </div>

    </div>
  );
}

export default MobileServiceMenu;