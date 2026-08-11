import { FaTimes, FaFilePdf } from "react-icons/fa";

function PdfPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        z-50
        right-3
        sm:right-4
        md:right-5
        lg:right-8
        bottom-20
        sm:bottom-24
        md:bottom-28
        w-[calc(100vw-1.5rem)]
        sm:w-[calc(100vw-2rem)]
        max-w-[320px]
        rounded-lg
        bg-white
        shadow-2xl
        border
        overflow-hidden
      "
    >
      <div className="flex justify-between items-center bg-[#137254] text-white px-4 py-3">
        <h2 className="text-base sm:text-lg">
          Learning Documents
        </h2>

        <button onClick={onClose} aria-label="Close">
          <FaTimes />
        </button>
      </div>

      <div className="p-4">

        <div className="flex items-center gap-3 mb-4">

          <FaFilePdf className="text-red-500 text-3xl flex-shrink-0" />

          <div className="min-w-0">
            <h3 className="font-semibold break-words">
              Business Communication
            </h3>

            <p className="text-sm text-gray-500 break-words">
              Sample document description.
            </p>
          </div>

        </div>

        <button className="w-full bg-[#137254] text-white py-2 rounded-lg">
          View PDF
        </button>

      </div>
    </div>
  );
}

export default PdfPopup;