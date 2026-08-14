import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import WhatMakesUsDifferent from "./pages/WhatMakesUsDifferent";
import ImpactLearning from "./pages/ImpactLearning";
import OurClientResult from "./pages/OurClientResult";
import CustomerSuccessStories from "./pages/CustomerSuccessStories";
import AwardRecognition from "./pages/AwardRecognition";

import Navbar from "./components/navbar/desktop/Navbar";
import PdfAssistant from "./components/PdfAssistant/PdfAssistant";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <div className="bg-[#F3F4F6] min-h-screen">

        <Navbar />

        <main className="pt-[88px]">

          <Routes>

            {/* HOME */}

            <Route
              path="/"
              element={<Home />}
            />


            {/* WHY 3RD EDHUM */}

            <Route
              path="/why3rdedhum/who-we-are"
              element={<WhoWeAre />}
            />

            <Route
              path="/why3rdedhum/our-differences/what-makes-us-different"
              element={<WhatMakesUsDifferent />}
            />

            <Route
              path="/why3rdedhum/our-differences/the-impact-of-learning"
              element={<ImpactLearning />}
            />

            <Route
              path="/why3rdedhum/our-differences/our-client-results"
              element={<OurClientResult />}
            />

            <Route
              path="/why3rdedhum/our-differences/customer-success-stories"
              element={<CustomerSuccessStories />}
            />

            <Route
              path="/why3rdedhum/our-differences/awards-recognition"
              element={<AwardRecognition />}
            />

          </Routes>

        </main>

        <PdfAssistant />

      </div>

    </BrowserRouter>
  );
}

export default App;