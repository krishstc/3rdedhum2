import insightsData from "../data/insightsData";

function Insights() {
  return (
    <div className="bg-white min-h-screen">

      {/* ================= HERO ================= */}
      <section className="py-16 px-6">
        <div className="max-w-[1350px] mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>
              <p className="text-sm font-semibold tracking-[3px] text-[#3F9975] mb-4">
                {insightsData.intro.title}
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-[#0B2C25] leading-tight">
                Insights That Inspire
                <br />
                Better Leadership
              </h1>

              <p className="mt-6 text-lg leading-8 text-[#5D6A6E] max-w-xl">
                {insightsData.intro.description}
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="rounded-3xl overflow-hidden bg-[#F3F7F5]">
              <img
                src={insightsData.intro.image}
                alt="Insights"
                className="w-full h-[350px] object-cover"
              />
            </div>

          </div>

        </div>
      </section>


      {/* ================= INSIGHTS CATEGORIES ================= */}
      <section className="bg-[#F6FCF9] py-16 px-6">
        <div className="max-w-[1350px] mx-auto">

          <div className="text-center mb-10">

            <p className="text-sm font-semibold tracking-[3px] text-[#3F9975]">
              EXPLORE OUR INSIGHTS
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B2C25]">
              Knowledge That Drives Action
            </h2>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {insightsData.columns.map((column) => (
              <div
                key={column.title}
                className="bg-white rounded-2xl p-7 shadow-sm"
              >

                {/* COLUMN TITLE */}
                <h2 className="text-lg font-semibold tracking-wide text-[#0B2C25] mb-6">
                  {column.title}
                </h2>

                {/* ITEMS */}
                <div className="space-y-3">

                  {column.items.map((item) => (
                    <button
                      key={item.label}
                      className="
                        w-full
                        flex
                        items-center
                        gap-4
                        text-left
                        px-4
                        py-4
                        rounded-xl
                        border
                        border-gray-100
                        hover:border-[#3F9975]
                        hover:bg-[#F6FCF9]
                        transition-all
                        duration-300
                      "
                    >

                      <span
                        className="
                          w-9
                          h-9
                          rounded-lg
                          bg-[#EAF7F0]
                          flex
                          items-center
                          justify-center
                          text-[#3F9975]
                          shrink-0
                        "
                      >
                        {item.icon}
                      </span>

                      <span className="text-sm font-medium text-gray-700">
                        {item.label}
                      </span>

                    </button>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= PROMO ================= */}
      <section className="py-16 px-6">
        <div className="max-w-[1350px] mx-auto">

          <div className="bg-[#004C42] rounded-3xl overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* TEXT */}
              <div className="p-8 md:p-12 flex flex-col justify-center">

                <div className="text-4xl mb-5">
                  {insightsData.promo.icon}
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {insightsData.promo.title}
                </h2>

                <p className="mt-5 text-white/80 leading-7 max-w-xl">
                  {insightsData.promo.description}
                </p>

                <button
                  className="
                    mt-7
                    w-fit
                    px-6
                    py-3
                    rounded-lg
                    bg-white
                    text-[#004C42]
                    font-medium
                    hover:bg-gray-100
                    transition
                  "
                >
                  {insightsData.promo.button}
                </button>

              </div>

              {/* IMAGE */}
              <div className="min-h-[300px]">

                <img
                  src={insightsData.promo.image}
                  alt={insightsData.promo.title}
                  className="w-full h-full min-h-[300px] object-cover"
                />

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Insights;