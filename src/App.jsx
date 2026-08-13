import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

import Navbar from "./components/navbar/desktop/Navbar";
import PdfAssistant from "./components/PdfAssistant/PdfAssistant";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#F3F4F6] min-h-screen">
        <Navbar />

        <main className="pt-[88px]">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/why-us/about-us" element={<AboutUs />} />
          </Routes>
        </main>

        <PdfAssistant />
      </div>
    </BrowserRouter>
  );
}

export default App;