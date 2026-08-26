import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/navbar/desktop/Navbar";
import PdfAssistant from "./components/PdfAssistant/PdfAssistant";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const WhatMakesUsDifferent = lazy(() => import("./pages/WhatMakesUsDifferent"));
const ImpactLearning = lazy(() => import("./pages/ImpactLearning"));
const OurClientResult = lazy(() => import("./pages/OurClientResult"));
const CustomerSuccessStories = lazy(() => import("./pages/CustomerSuccessStories"));
const AwardRecognition = lazy(() => import("./pages/AwardRecognition"));
const WhoWeAre = lazy(() => import("./pages/WhoWeAre"));
const OurMissionValues = lazy(() => import("./pages/OurMissionValues"));
const OurLeadershipTeam = lazy(() => import("./pages/OurLeadershipTeam"));
const OurJourney = lazy(() => import("./pages/OurJourney"));
const CultureBelief = lazy(() => import("./pages/CultureBelief"));
const GlobalPresence = lazy(() => import("./pages/GlobalPresence"));
const IndustryExpertise = lazy(() => import("./pages/IndustryExpertise"));
const TrustedByLeaders = lazy(() => import("./pages/TrustedByLeaders"));
const YPD = lazy(() => import("./pages/YPD"));
const Upcoming = lazy(() => import("./pages/Upcoming"));
const ManagerialLeadership = lazy(() => import("./pages/ManagerialLeadership"));

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#28725c] border-t-transparent" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen bg-[#F3F4F6]">
        <Navbar />

        <main className="pt-[88px]">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* HOME */}
              <Route path="/" element={<Home />} />

              {/* OLD ABOUT US URL → NEW WHO WE ARE PAGE */}
              <Route
                path="/about-us"
                element={
                  <Navigate
                    to="/why3rdedhum/who-we-are"
                    replace
                  />
                }
              />

              <Route
                path="/about-us/"
                element={
                  <Navigate
                    to="/why3rdedhum/who-we-are"
                    replace
                  />
                }
              />

              {/* OLD OUR PROCESS URL → PROGRAMS SECTION */}
              <Route
                path="/our-process"
                element={<Navigate to="/#programs" replace />}
              />

              <Route
                path="/our-process/"
                element={<Navigate to="/#programs" replace />}
              />

              {/* WHY 3RD EDHUM */}
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

              {/* WHO WE ARE */}
              <Route
                path="/why3rdedhum/who-we-are"
                element={<WhoWeAre />}
              />

              <Route
                path="/why3rdedhum/about-us/our-missions-values"
                element={<OurMissionValues />}
              />

              <Route
                path="/why3rdedhum/about-us/our-leadership-team"
                element={<OurLeadershipTeam />}
              />

              <Route
                path="/why3rdedhum/about-us/our-journey"
                element={<OurJourney />}
              />

              <Route
                path="/why3rdedhum/about-us/culture-beliefs"
                element={<CultureBelief />}
              />

              {/* OUR REACH */}
              <Route
                path="/why3rdedhum/our-reach/global-presence"
                element={<GlobalPresence />}
              />

              <Route
                path="/why3rdedhum/our-reach/industry-expertise"
                element={<IndustryExpertise />}
              />

              <Route
                path="/why3rdedhum/our-reach/trusted-by-leaders"
                element={<TrustedByLeaders />}
              />

              {/* OTHER PAGES */}
              <Route path="/upcoming" element={<Upcoming />} />

              <Route path="/ypd" element={<YPD />} />

              <Route
                path="/managerial-leadership"
                element={<ManagerialLeadership />}
              />
            </Routes>
          </Suspense>
        </main>

        <PdfAssistant />
      </div>
    </BrowserRouter>
  );
}

export default App;