import { useState } from "react";
import MenuColumns from "../components/navbar/desktop/MenuColumns";
import ServiceContent from "../components/navbar/desktop/ServiceContent";

function Services() {
  const [activeMenu, setActiveMenu] = useState(null);

  const goBack = () => {
    setActiveMenu(null);
  };

  return (
    <div className="bg-white min-h-screen">

      {/* ================= SERVICES HEADER ================= */}
      <section className="pt-12 pb-10 px-6">
        <div className="max-w-[1350px] mx-auto">

          <p className="text-sm font-semibold tracking-[3px] text-[#3F9975] mb-4">
            SERVICES
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#0B2C25]">
            Learning & Development Solutions
          </h1>

          <p className="mt-5 text-lg leading-8 text-[#5D6A6E] max-w-3xl">
            Explore our range of learning, leadership, behavioural,
            workplace and organisational development programs.
          </p>

        </div>
      </section>


      {/* ================= SERVICES MENU ================= */}
      <section className="bg-[#F6FCF9] py-12 px-6">
        <div className="max-w-[1350px] mx-auto">

          {!activeMenu ? (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-[#0B2C25]">
                  Our Services
                </h2>

                <p className="mt-2 text-gray-500">
                  Select a service category to explore available programs.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <MenuColumns setActiveMenu={setActiveMenu} />
              </div>
            </>
          ) : (
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">

              <ServiceContent
                menu={activeMenu}
                goBack={goBack}
              />

            </div>
          )}

        </div>
      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="py-16 px-6">
        <div className="max-w-[1350px] mx-auto">

          <div className="bg-[#004C42] rounded-3xl px-6 md:px-12 py-10 text-center">

            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Looking for a customised learning solution?
            </h2>

            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              We work with organisations to design learning experiences
              aligned with their people and business goals.
            </p>

            <button
              className="
                mt-7
                px-7
                py-3
                rounded-lg
                bg-white
                text-[#004C42]
                font-medium
                hover:bg-gray-100
                transition
              "
            >
              Let's Connect
            </button>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Services;