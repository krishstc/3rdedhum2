import {
  FaChevronRight,
  FaArrowRight,
  FaCompass,
  FaCalendarAlt,
  FaHeart,
  FaUsers,
} from "react-icons/fa";

import whoWeAreData from "../data/WhoWeAreData";
import Footer from "../components/footer/Footer";

function WhoWeAre() {
  return (
    <div className="w-full bg-white text-[#10252D] overflow-hidden">

      {/* BREADCRUMB */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-[84px] pt-5 pb-3 animate-[fadeIn_0.7s_ease-out]">
        <div className="flex items-center gap-2 text-[13px] sm:text-[14px] text-gray-500">
          {whoWeAreData.breadcrumb.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-2 transition-all duration-300 hover:text-[#174F45]"
            >
              <span
                className={
                  index === whoWeAreData.breadcrumb.length - 1
                    ? "font-semibold text-[#174C43]"
                    : ""
                }
              >
                {item}
              </span>

              {index < whoWeAreData.breadcrumb.length - 1 && (
                <FaChevronRight className="text-[9px] text-gray-400" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-[84px] pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.74fr_1.26fr] gap-8 lg:gap-6 items-start">

          {/* HERO LEFT */}
          <div className="pt-1 pr-2 animate-[fadeUp_0.8s_ease-out]">
            <div className="flex items-center gap-2 mb-3">
              <p className="text-[13px] font-bold tracking-[0.8px] text-[#347A68]">
                {whoWeAreData.hero.label}
              </p>

              <div className="w-[38px] h-[2px] bg-[#347A68] transition-all duration-300 hover:w-[55px]" />
            </div>

            <h1 className="text-[28px] sm:text-[33px] lg:text-[34px] font-bold leading-[1.08] tracking-[-1px] text-[#14243A]">
              More Than a
              <br />
              Learning Company,
              <br />
              A Partner in{" "}
              <span className="text-[#17604F] transition-colors duration-300 hover:text-[#287A62]">
                Human
              </span>
              <br />
              <span className="text-[#17604F] transition-colors duration-300 hover:text-[#287A62]">
                and Business Growth.
              </span>
            </h1>

            <p className="mt-4 max-w-[500px] text-[13px] sm:text-[14px] lg:text-[14px] leading-[1.65] text-[#303838]">
              {whoWeAreData.hero.description}
            </p>

            {/* BELIEF CARD */}
            <div className="mt-4 rounded-[12px] bg-[#F0F3F1] px-4 py-5 flex gap-3 transition-all duration-300 hover:bg-[#E7F2ED] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,63,58,0.10)]">
              <div className="w-[50px] h-[50px] rounded-[10px] bg-white flex items-center justify-center shrink-0 border border-[#D8E5E0] transition-transform duration-300 hover:scale-110">
                <FaUsers className="text-[24px] text-[#174F45]" />
              </div>

              <p className="text-[13px] sm:text-[14px] leading-[1.6] text-[#303838]">
                {whoWeAreData.hero.belief}
              </p>
            </div>

            <p className="mt-4 max-w-[510px] text-[13px] sm:text-[14px] leading-[1.65] text-[#303838]">
              {whoWeAreData.hero.paragraphOne}
            </p>

            <p className="mt-3 max-w-[510px] text-[13px] sm:text-[14px] leading-[1.65] text-[#303838]">
              {whoWeAreData.hero.paragraphTwo}
            </p>
          </div>

          {/* HERO RIGHT */}
          <div className="relative pt-0 lg:pr-2 animate-[fadeUp_0.9s_ease-out]">

            {/* HERO IMAGE */}
            <div className="relative z-10 w-[96%] ml-auto overflow-hidden rounded-[20px] bg-white group">
              <img
                src={whoWeAreData.hero.heroImage}
                alt="Learning, teamwork and professional growth illustration"
                className="w-full h-[360px] sm:h-[390px] lg:h-[405px] object-contain object-center transition-transform duration-700 group-hover:scale-[1.03]"
                loading="eager"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>

            {/* NORTH STAR */}
            <div className="relative z-30 -mt-1 mx-1 sm:mx-3">
              <div className="min-h-[190px] rounded-[14px] bg-[#003F3A] shadow-[0_10px_25px_rgba(0,50,40,0.22)] px-5 sm:px-7 py-6 sm:py-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,50,40,0.28)]">

                <div className="grid grid-cols-1 sm:grid-cols-[82px_1fr_105px] gap-5 sm:gap-5 items-center">

                  {/* COMPASS */}
                  <div className="flex justify-center sm:justify-start">
                    <div className="w-[64px] h-[64px] sm:w-[74px] sm:h-[74px] rounded-full border-2 border-white flex items-center justify-center transition-transform duration-500 hover:scale-110">
                      <FaCompass className="text-white text-[34px] sm:text-[39px]" />
                    </div>
                  </div>

                  {/* NORTH STAR TEXT */}
                  <div className="text-center sm:text-left">
                    <h2 className="text-[21px] sm:text-[23px] font-bold text-white">
                      {whoWeAreData.hero.northStarTitle}
                    </h2>

                    <p className="mt-2 text-[13px] sm:text-[14px] leading-[1.7] text-white/90">
                      {whoWeAreData.hero.northStarDescription}
                    </p>

                    <p className="mt-2 text-[16px] sm:text-[17px] font-medium text-[#43B58A]">
                      {whoWeAreData.hero.northStarHighlight}
                    </p>
                  </div>

                  {/* FOUNDED */}
                  <div className="border-t sm:border-t-0 sm:border-l border-white/30 pt-4 sm:pt-0 sm:pl-3 text-center transition-transform duration-300 hover:scale-105">
                    <FaCalendarAlt className="mx-auto text-white text-[22px]" />

                    <p className="mt-2 text-[10px] uppercase tracking-wide text-white/70">
                      Founded
                    </p>

                    <p className="mt-1 text-[20px] font-bold text-white">
                      {whoWeAreData.hero.founded}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MEANING BEHIND OUR NAME */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-[84px] pb-5 animate-[fadeUp_0.8s_ease-out]">
        <div className="relative rounded-[15px] border border-[#E1E6E3] bg-white px-5 sm:px-7 py-6 transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,63,58,0.08)]">

          <div className="flex items-center gap-2">
            <p className="text-[13px] sm:text-[14px] font-bold tracking-[0.8px] text-[#347A68]">
              {whoWeAreData.meaning.label}
            </p>

            <div className="w-[38px] h-[2px] bg-[#347A68]" />
          </div>

          <h2 className="mt-2 text-[26px] sm:text-[29px] font-bold text-[#14243A]">
            {whoWeAreData.meaning.title}
          </h2>

          <p className="mt-2 text-[13px] sm:text-[14px] leading-[1.6] text-gray-600">
            {whoWeAreData.meaning.description}
          </p>

          {/* THREE CARDS + STONES IMAGE */}
          <div className="mt-5 grid grid-cols-1 lg:grid-cols-[1fr_185px] gap-5 items-center">

            <div className="grid grid-cols-1 md:grid-cols-3 border border-[#E0E5E2] rounded-[11px] overflow-hidden bg-white">
              {whoWeAreData.meaning.cards.map((item, index) => (
                <div
                  key={item.short}
                  className={`px-4 sm:px-5 py-6 min-h-[210px] flex gap-3 transition-all duration-300 hover:bg-[#EFF8F4] hover:-translate-y-1 ${
                    index < whoWeAreData.meaning.cards.length - 1
                      ? "md:border-r border-b md:border-b-0 border-[#E0E5E2]"
                      : ""
                  }`}
                >
                  <div className="w-[44px] h-[44px] rounded-full bg-[#064D45] text-white flex items-center justify-center shrink-0 text-[13px] font-bold transition-transform duration-300 hover:scale-110">
                    {item.short}
                  </div>

                  <div>
                    <h3 className="text-[13px] sm:text-[14px] font-bold leading-[1.5] text-[#174F45]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[13px] sm:text-[14px] leading-[1.65] text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* STONES IMAGE */}
            <div className="hidden lg:flex justify-center items-center group">
              <img
                src={whoWeAreData.meaning.stonesImage}
                alt="Balance stones"
                className="w-[165px] h-[190px] object-cover rounded-[12px] transition-transform duration-500 group-hover:scale-105"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>

          </div>

          {/* PURPOSE BAR */}
          <div className="mt-4 rounded-[9px] bg-[#F0F3F1] px-4 py-3 flex items-center gap-3 transition-all duration-300 hover:bg-[#E7F2ED] hover:-translate-y-1">

            <div className="w-[38px] h-[38px] rounded-full bg-[#064D45] flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110">
              <FaHeart className="text-white text-[15px]" />
            </div>

            <p className="text-[13px] sm:text-[14px] leading-6 text-[#253535]">
              Together, our name reflects our purpose:{" "}
              <span className="font-bold">
                unlocking human potential through meaningful learning.
              </span>
            </p>

          </div>
        </div>
      </section>

      {/* WHY WE EXIST / LEARNING PRINCIPLES / HOW WE THINK */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-[84px] pb-5 animate-[fadeUp_0.9s_ease-out]">

        <div className="grid grid-cols-1 lg:grid-cols-[0.80fr_0.90fr_1.15fr] border border-[#E1E6E3] rounded-[15px] overflow-hidden items-stretch">

          {/* WHY WE EXIST */}
          <div className="p-6 sm:p-7 border-b lg:border-b-0 lg:border-r border-[#E1E6E3] flex flex-col h-full transition-all duration-300 hover:bg-[#FAFCFB]">

            <h2 className="text-[26px] sm:text-[29px] font-bold text-[#14243A]">
              {whoWeAreData.whyWeExist.title}
            </h2>

            <div className="mt-5 flex">
              <span className="text-[50px] leading-none font-bold text-[#17604F]">
                “
              </span>

              <p className="pt-3 text-[15px] sm:text-[22px] font-bold leading-[1.55] text-[#174F45]">
                {whoWeAreData.whyWeExist.quote}
              </p>
            </div>

            <p className="mt-6 text-[14px] sm:text-[15px] leading-[1.8] text-gray-600">
              {whoWeAreData.whyWeExist.description}
            </p>

          </div>

          {/* LEARNING PRINCIPLES */}
          <div className="p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-[#E1E6E3] flex flex-col h-full transition-all duration-300 hover:bg-[#FAFCFB]">

            <div className="flex flex-col justify-between flex-1 gap-7">

              {whoWeAreData.learningPrinciples.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 transition-all duration-300 hover:-translate-y-1"
                  >

                    <div className="w-[46px] h-[46px] rounded-full bg-[#F0F4F2] flex items-center justify-center shrink-0 transition-all duration-300 hover:bg-[#DDEFE8] hover:scale-110">
                      <Icon className="text-[#174F45] text-[20px]" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-[16px] sm:text-[17px] font-bold leading-8 text-[#174F45]">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-[13px] sm:text-[14px] leading-[1.6] text-gray-600">
                        {item.description}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>

            <p className="mt-7 pt-2 text-center text-[13px] font-semibold text-[#333]">
              {whoWeAreData.whyWeExist.closing}
            </p>

          </div>

          {/* HOW WE THINK */}
          <div className="p-6 sm:p-7 flex flex-col h-full transition-all duration-300 hover:bg-[#FAFCFB]">

            <h2 className="text-[26px] sm:text-[29px] font-bold text-[#14243A]">
              {whoWeAreData.howWeThink.title}
            </h2>

            <p className="mt-3 text-[13px] sm:text-[14px] leading-[1.65] text-gray-600">
              {whoWeAreData.howWeThink.description}
            </p>

            {/* CONNECTED CARDS */}
            <div className="mt-5 border border-[#E1E6E3] rounded-[10px] overflow-hidden bg-[#FAFBFA] flex-1">

              {whoWeAreData.howWeThink.points.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`flex gap-4 items-center px-4 sm:px-5 py-4 min-h-[78px] transition-all duration-300 hover:bg-[#EFF8F4] hover:pl-6 ${
                      index < whoWeAreData.howWeThink.points.length - 1
                        ? "border-b border-[#E1E6E3]"
                        : ""
                    }`}
                  >

                    <div className="w-[44px] h-[44px] rounded-full bg-[#F0F4F2] flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110">
                      <Icon className="text-[#174F45] text-[18px]" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-[13px] sm:text-[14px] font-bold leading-5 text-[#174F45]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[12px] sm:text-[13px] leading-[1.55] text-gray-600">
                        {item.description}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-[84px] animate-[fadeUp_0.8s_ease-out]">

        <div className="relative min-h-[160px] flex items-center justify-center">

          {/* LEFT BOOK IMAGE */}
          <div className="absolute left-0 bottom-0 hidden md:flex items-center justify-center group">
            <img
              src={whoWeAreData.whatWeDo.booksImage}
              alt="Books"
              className="w-[160px] h-[120px] object-contain object-center rounded-[8px] transition-transform duration-500 group-hover:scale-105"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>

          {/* CENTER */}
          <div className="max-w-[700px] text-center transition-transform duration-300 hover:-translate-y-1">

            <div className="flex items-center justify-center gap-2">

              <div className="w-[28px] h-[2px] bg-[#347A68]" />

              <p className="text-[13px] font-bold tracking-[1px] text-[#347A68]">
                {whoWeAreData.whatWeDo.label}
              </p>

              <div className="w-[28px] h-[2px] bg-[#347A68]" />

            </div>

            <h2 className="mt-2 text-[27px] sm:text-[30px] font-bold text-[#14243A]">
              {whoWeAreData.whatWeDo.title}
            </h2>

            <p className="mt-2 text-[13px] sm:text-[14px] leading-[1.7] text-[#17604F] font-medium">
              {whoWeAreData.whatWeDo.description}
            </p>

          </div>

          {/* RIGHT COFFEE IMAGE */}
          <div className="absolute right-0 bottom-0 hidden md:flex items-center justify-center group">
            <img
              src={whoWeAreData.whatWeDo.coffeeImage}
              alt="Coffee"
              className="w-[160px] h-[120px] object-contain object-center rounded-[8px] transition-transform duration-500 group-hover:scale-105"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1400px] mx-auto my-6 px-6 sm:px-8 lg:px-[84px] pb-3 animate-[fadeUp_0.8s_ease-out]">

        <div className="rounded-[10px] bg-[#003F3A] px-5 sm:px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,63,58,0.20)]">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            <div className="flex items-center gap-3">

              <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110">
                <FaUsers className="text-[#174F45] text-[21px]" />
              </div>

              <div>
                <h2 className="text-[18px] sm:text-[20px] font-bold text-white">
                  {whoWeAreData.cta.title}
                </h2>

                <p className="mt-1 text-[13px] sm:text-[14px] text-white/75">
                  {whoWeAreData.cta.description}
                </p>
              </div>

            </div>

            {/* FIXED WHATSAPP LINK */}
            <a
              href={`https://wa.me/${whoWeAreData.cta.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-[7px] border border-white/70 px-6 py-3 text-[13px] sm:text-[14px] font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#003F3A] hover:scale-105"
            >
              {whoWeAreData.cta.button}

              <FaArrowRight className="text-[11px] transition-transform duration-300 group-hover:translate-x-1" />
            </a>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default WhoWeAre;