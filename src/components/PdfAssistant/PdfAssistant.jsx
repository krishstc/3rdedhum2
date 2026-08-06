import { useState } from "react";
import FloatingButton from "./FloatingButton";
import PdfPopup from "./PdfPopup";

function PdfAssistant() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <FloatingButton
        onClick={() => setOpen(true)}
      />

      <PdfPopup
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default PdfAssistant;