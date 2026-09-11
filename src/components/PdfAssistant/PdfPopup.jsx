import { useEffect, useState } from "react";
import {
  FaTimes,
  FaUsers,
  FaBullseye,
  FaChartLine,
  FaLightbulb,
  FaFilePdf,
  FaCreditCard,
} from "react-icons/fa";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function PdfPopup({ isOpen, onClose }) {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const icons = [
    FaUsers,
    FaBullseye,
    FaChartLine,
    FaLightbulb,
  ];

  useEffect(() => {
    if (!isOpen) return;

    const fetchPrograms = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_BASE_URL}/api/programs`
        );

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.message || "Failed to fetch programs"
          );
        }

        setPrograms(data.programs || []);
      } catch (error) {
        console.error(
          "Fetch programs error:",
          error
        );

        setError(
          "Unable to load upcoming programs."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, [isOpen]);

  if (!isOpen) return null;

  const openPdf = (pdfPath) => {
    if (!pdfPath) return;

    const pdfUrl = `${API_BASE_URL}${pdfPath}`;

    window.open(
      pdfUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const openPayment = (paymentUrl) => {
    if (!paymentUrl) return;

    window.open(
      paymentUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="fixed inset-0 z-[99998] flex items-center justify-center px-3 sm:px-5">

      <div className="w-full max-w-[680px] max-h-[90vh] overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-2xl">

        {/* HEADER */}

        <div className="flex items-center justify-between bg-gradient-to-r from-[#043329] to-[#28725c] px-4 py-4 sm:px-6 sm:py-5">

          <div>

            <p className="text-[10px] font-medium uppercase tracking-wider text-[#4ae2c1] sm:text-xs">
              Learning Resources
            </p>

            <h2 className="mt-1 text-lg font-semibold text-white sm:text-2xl">
              Upcoming Programs
            </h2>

          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white transition hover:bg-white/10 sm:h-9 sm:w-9"
          >
            <FaTimes className="text-sm sm:text-base" />
          </button>

        </div>

        {/* CONTENT */}

        <div className="bg-[#F8FAF9] p-3 sm:p-5">

          {/* LOADING */}

          {loading && (
            <div className="py-10 text-center">

              <p className="text-sm font-medium text-[#28725c]">
                Loading upcoming programs...
              </p>

            </div>
          )}

          {/* ERROR */}

          {!loading && error && (
            <div className="py-10 text-center">

              <p className="text-sm font-medium text-red-500">
                {error}
              </p>

            </div>
          )}

          {/* EMPTY STATE */}

          {!loading &&
            !error &&
            programs.length === 0 && (
              <div className="py-10 text-center">

                <FaFilePdf className="mx-auto mb-3 text-3xl text-[#28725c]" />

                <p className="text-sm font-medium text-gray-600">
                  No upcoming programs available.
                </p>

              </div>
            )}

          {/* PROGRAMS */}

          {!loading &&
            !error &&
            programs.length > 0 && (
              <div className="grid grid-cols-2 gap-3 sm:gap-4">

                {programs.map((program, index) => {

                  const Icon =
                    icons[index % icons.length];

                  return (
                    <div
                      key={program.id}
                      className="group w-full rounded-xl border border-gray-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#28725c]/40 hover:shadow-lg sm:p-5"
                    >

                      {/* PROGRAM DETAILS */}

                      <div className="flex items-start gap-2 sm:gap-3">

                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#E8F4EF] transition-all duration-300 group-hover:bg-[#28725c] sm:h-11 sm:w-11">

                          <Icon className="text-xs text-[#28725c] transition-colors group-hover:text-white sm:text-base" />

                        </div>

                        <div className="min-w-0">

                          <h3 className="text-xs font-semibold leading-4 text-gray-800 transition-colors group-hover:text-[#28725c] sm:text-base sm:leading-5">
                            {program.title}
                          </h3>

                        </div>

                      </div>

                      {/* BUTTONS */}

                      <div className="mt-4 flex flex-col gap-2">

                        <button
                          type="button"
                          onClick={() =>
                            openPdf(
                              program.pdf_path
                            )
                          }
                          className="flex w-full items-center justify-center gap-1 rounded-lg bg-[#28725c] px-2 py-2 text-[10px] font-medium text-white transition hover:bg-[#1d5b48] sm:text-xs"
                        >
                          <FaFilePdf />
                          Open Program
                        </button>

                        {program.payment_url && (
                          <button
                            type="button"
                            onClick={() =>
                              openPayment(
                                program.payment_url
                              )
                            }
                            className="flex w-full items-center justify-center gap-1 rounded-lg border border-[#28725c] px-2 py-2 text-[10px] font-medium text-[#28725c] transition hover:bg-[#28725c] hover:text-white sm:text-xs"
                          >
                            <FaCreditCard />
                            Register / Pay
                          </button>
                        )}

                      </div>

                    </div>
                  );
                })}

              </div>
            )}

        </div>

      </div>

    </div>
  );
}

export default PdfPopup;