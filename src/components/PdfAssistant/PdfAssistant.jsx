import { useState } from "react";
import FloatingButton from "./FloatingButton";
import PdfPopup from "./PdfPopup";

function PdfAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FloatingButton
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <PdfPopup
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default PdfAssistant;