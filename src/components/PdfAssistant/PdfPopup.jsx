import { FaTimes, FaFilePdf } from "react-icons/fa";

function PdfPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-28 right-6 z-50 w-[320px] rounded-lg bg-white shadow-2xl border overflow-hidden">

      {/* Header */}
      <div className="flex justify-between items-center bg-[#137254] text-white px-4 py-3">

        <h2 className=" text-lg">
          Learning Documents
        </h2>

        <button onClick={onClose}>
          <FaTimes />
        </button>

      </div>

      {/* Body */}

      <div className="p-4">

        <div className="flex items-center gap-3 mb-4">

          <FaFilePdf className="text-red-500 text-3xl" />

          <div>

            <h3 className="font-semibold">
              Business Communication
            </h3>

            <p className="text-sm text-gray-500">
              Sample document description.
            </p>

          </div>

        </div>

        <button
          className="w-full bg-[#137254] text-white py-2 rounded-lg"
        >
          View PDF
        </button>

      </div>

    </div>
  );
}

export default PdfPopup;