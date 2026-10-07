import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { servicesData } from "../../../data/serviceData";
import FeatureCard from "../desktop/FeatureCard";

function MobileServiceMenu({
  initialServiceTitle,
  onBack,
  onClose,
}) {
  const [activeService, setActiveService] =
    useState(null);

  const navigate = useNavigate();

  const services = Object.values(
    servicesData
  ).flat();

  useEffect(() => {
    if (!initialServiceTitle) {
      setActiveService(null);
      return;
    }

    const requestedService = services.find(
      (service) =>
        service.title === initialServiceTitle
    );

    if (requestedService) {
      setActiveService(requestedService);
    }
  }, [initialServiceTitle]);

  const handlePdfOpen = (item) => {
    if (!item?.pdfId) return;

    const pdfUrl =
      `https://drive.google.com/file/d/${item.pdfId}/view`;

    window.open(
      pdfUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleServiceClick = (service) => {
    if (service.title === "YPD") {
      onClose();
      navigate("/ypd");
      return;
    }

    if (
      service.title.trim() ===
      "Executive Coaching"
    ) {
      onClose();
      navigate("/services/executive-coaching");
      return;
    }

    if (service.children?.length > 0) {
      setActiveService(service);
    }
  };

  const goBack = () => {
    setActiveService(null);
  };

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="flex items-center justify-between px-5 py-4 border-b flex-shrink-0">
        <button
          onClick={
            activeService
              ? goBack
              : onBack
          }
          className="flex items-center gap-2 text-gray-600 hover:text-[#3F9975] transition"
        >
          <FaArrowLeft className="text-sm" />

          <span className="text-sm font-medium">
            {activeService
              ? "Back to Services"
              : "Back"}
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

      <div className="overflow-y-auto flex-1 p-5">
        {!activeService ? (
          <>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Our Services
            </h2>

            <div className="space-y-1">
              {services.map((service) => {
                const Icon = service.icon;

                const isDirectPage =
                  service.title === "YPD" ||
                  service.title.trim() ===
                    "Executive Coaching";

                const hasChildren =
                  service.children?.length > 0;

                return (
                  <button
                    key={service.title}
                    onClick={() =>
                      handleServiceClick(service)
                    }
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

                    {(hasChildren ||
                      isDirectPage) && (
                      <FaChevronRight className="text-[10px] text-gray-300 group-hover:text-[#3F9975] transition" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-7">
              <FeatureCard />
            </div>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-gray-900 mb-5">
              {activeService.title}
            </h2>

            <div className="space-y-1">
              {activeService.children?.map(
                (item, index) => (
                  <button
                    key={
                      item.pdfId || index
                    }
                    onClick={() =>
                      handlePdfOpen(item)
                    }
                    disabled={
                      !item.pdfId ||
                      item.pdfId.startsWith(
                        "YOUR_"
                      )
                    }
                    className="group w-full flex items-center justify-between text-left px-3 py-3 rounded-lg border-b border-gray-100 hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="text-sm text-gray-600 group-hover:text-gray-900">
                      {item.title}
                    </span>

                    <FaChevronRight className="text-[10px] text-gray-300 group-hover:text-[#3F9975] transition" />
                  </button>
                )
              )}
            </div>

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