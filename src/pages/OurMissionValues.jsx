import Footer from "../components/footer/Footer";
import ourMissionValues from "../data/OurMissionValues";

function OurMissionValues() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-white text-[#092F2A]">

      <main>

        {/* ================================
            HERO
        ================================= */}

        <section className="mx-auto w-full max-w-[1440px] px-4 pt-5 sm:px-6 lg:px-8">

          <div className="overflow-hidden border border-[#E1EAE6] bg-[#F5FBF8]">

            {/* Breadcrumb */}
            <div className="px-7 pt-6 sm:px-9 lg:px-11">

              <p className="text-[11px] text-[#74827E] sm:text-[12px]">

                Home

                <span className="mx-2">›</span>

                {ourMissionValues.breadcrumb.section}

                <span className="mx-2">›</span>

                {ourMissionValues.breadcrumb.category}

                <span className="mx-2">›</span>

                <span className="text-[#3D8C71]">
                  {ourMissionValues.breadcrumb.current}
                </span>

              </p>

            </div>


            <div className="grid grid-cols-1 items-center lg:grid-cols-[53%_47%]">

              {/* LEFT HERO */}

              <div className="px-7 pb-12 pt-10 sm:px-9 lg:px-11 lg:pb-14">

                <div>

                  <p className="text-[12px] font-semibold tracking-[0.8px] text-[#43886F] sm:text-[13px]">
                    {ourMissionValues.label}
                  </p>

                  <div className="mt-3 h-[3px] w-[52px] rounded-full bg-[#3C9675]" />

                </div>


                <h1 className="mt-7 max-w-[720px] text-[34px] font-bold leading-[1.05] tracking-[-1.7px] text-[#082E38] sm:text-[41px] md:text-[47px] lg:text-[51px] xl:text-[46px]">

                  Building People.
                  <br />

                  Transforming Businesses.
                  <br />

                  <span className="text-[#29906D]">
                    Shaping the Future.
                  </span>

                </h1>


                <p className="mt-7 max-w-[650px] text-[13px] font-medium leading-[1.65] text-[#465650] sm:text-[14px] lg:text-[15px]">

                  {ourMissionValues.introduction}

                </p>


                <div className="mt-8 flex flex-wrap items-center gap-7">

                  <button
                    type="button"
                    className="rounded-[6px] bg-[#187A60] px-7 py-4 text-[12px] font-semibold text-white transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#08644E] hover:shadow-lg"
                  >

                    Our Journey

                    <span className="ml-3 text-[17px]">
                      →
                    </span>

                  </button>

                </div>

              </div>


              {/* RIGHT HERO */}

              <div className="group relative h-[380px] overflow-hidden sm:h-[450px] lg:h-[510px]">

                <img
                  src={ourMissionValues.heroImage}
                  alt="People and progress"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#F5FBF8]/90 via-[#F5FBF8]/20 to-transparent" />


                {/* Right text */}

                <div className="absolute right-9 top-12 hidden lg:block">

                  <p className="text-[13px] font-bold leading-[1.4] text-[#173B35]">

                    BETTER
                    <br />
                    PEOPLE
                    <br />
                    BRIGHTER
                    <br />
                    TOMORROWS

                  </p>

                  <div className="mt-4 h-[3px] w-[38px] bg-[#319675]" />

                </div>


                {/* Floating card */}

                <div className="absolute bottom-12 right-8 hidden rounded-xl border border-[#DDE9E4] bg-white/95 px-6 py-5 shadow-lg transition duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl sm:block">

                  <div className="flex items-center gap-3.5">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#DDF5EB] text-[20px] transition duration-300 hover:rotate-6">
                      👥
                    </div>

                    <p className="text-[12px] font-semibold leading-[1.45] text-[#27423C]">

                      Empowering
                      <br />
                      People. Enabling
                      <br />
                      Performance.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================================
            PURPOSE
        ================================= */}

        <section className="mx-auto mt-5 max-w-[1380px] px-4 sm:px-6 lg:px-8">

          <div className="group grid overflow-hidden rounded-2xl border border-[#DCEAE5] bg-[#F1FAF6] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg md:grid-cols-[60%_40%]">

            <div className="px-8 py-7 sm:px-10 sm:py-8">

              <div className="flex gap-5">

                <span className="text-[65px] font-bold leading-[0.55] text-[#369978] transition duration-300 group-hover:scale-105">
                  “
                </span>

                <div>

                  <h2 className="text-[18px] font-bold text-[#18372F] sm:text-[20px]">
                    {ourMissionValues.purpose.title}
                  </h2>

                  <p className="mt-3 max-w-[700px] text-[13px] font-semibold leading-[1.6] text-[#29453D] sm:text-[14px]">
                    {ourMissionValues.purpose.quote}
                  </p>

                  <p className="mt-3 max-w-[660px] text-[11px] leading-[1.6] text-[#64736E] sm:text-[12px]">
                    {ourMissionValues.purpose.description}
                  </p>

                </div>

              </div>

            </div>


            <div className="relative h-[190px]">

              <img
                src={ourMissionValues.purpose.image}
                alt="Team collaboration"
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#F1FAF6] via-transparent to-transparent" />

            </div>

          </div>

        </section>


        {/* ================================
            MISSION + VISION
        ================================= */}

        <section className="mx-auto mt-5 max-w-[1380px] px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

            {/* MISSION */}

            <div className="group relative min-h-[430px] overflow-hidden rounded-2xl bg-[#063C38] transition duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl">

              <img
                src={ourMissionValues.mission.image}
                alt="Our mission"
                className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-55"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#063C38] via-[#063C38]/90 to-[#063C38]/40" />


              <div className="relative z-10 px-7 py-8 sm:px-8">

                <div className="flex items-center gap-4">

                  <div className="flex h-13 w-13 items-center justify-center rounded-full bg-[#DDF7EC] text-[24px] text-[#218B6B] transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {ourMissionValues.mission.icon}
                  </div>

                  <h2 className="text-[20px] font-bold text-white">
                    {ourMissionValues.mission.title}
                  </h2>

                </div>


                <h3 className="mt-7 max-w-[430px] text-[14px] font-semibold leading-[1.5] text-[#6BCBA4] sm:text-[15px]">
                  {ourMissionValues.mission.heading}
                </h3>


                <p className="mt-4 max-w-[500px] text-[12px] leading-[1.65] text-[#DCECE7] sm:text-[13px]">
                  {ourMissionValues.mission.description}
                </p>


                <div className="mt-6 space-y-3.5">

                  {ourMissionValues.mission.points.map((point) => (

                    <div
                      key={point}
                      className="flex items-center gap-3 text-[12px] text-white transition duration-300 hover:translate-x-2 sm:text-[13px]"
                    >

                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#42B984] text-[11px] font-bold transition duration-300 hover:scale-110">
                        ✓
                      </span>

                      <span>
                        {point}
                      </span>

                    </div>

                  ))}

                </div>


                <button
                  type="button"
                  className="mt-7 rounded-[6px] bg-[#16815F] px-6 py-3.5 text-[11px] font-semibold text-white transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#299C78] hover:shadow-lg"
                >

                  {ourMissionValues.mission.button}

                  <span className="ml-2.5 text-[15px]">
                    →
                  </span>

                </button>

              </div>

            </div>


            {/* VISION */}

            <div className="group relative min-h-[430px] overflow-hidden rounded-2xl bg-[#F2F8F4] transition duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl">

              <img
                src={ourMissionValues.vision.image}
                alt="Our vision"
                className="absolute inset-0 h-full w-full object-cover opacity-[0.16] transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-[0.22]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#F7FCF9]/95 via-[#F7FCF9]/90 to-[#F7FCF9]/55" />


              <div className="relative z-10 px-7 py-8 sm:px-8">

                <div className="flex items-center gap-4">

                  <div className="flex h-13 w-13 items-center justify-center rounded-full bg-[#DDF7EC] text-[24px] text-[#218B6B] transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {ourMissionValues.vision.icon}
                  </div>

                  <h2 className="text-[20px] font-bold text-[#17352F]">
                    {ourMissionValues.vision.title}
                  </h2>

                </div>


                <h3 className="mt-7 max-w-[450px] text-[14px] font-bold leading-[1.5] text-[#238366] sm:text-[15px]">
                  {ourMissionValues.vision.heading}
                </h3>


                <p className="mt-4 max-w-[500px] text-[12px] leading-[1.65] text-[#53625D] sm:text-[13px]">
                  {ourMissionValues.vision.description}
                </p>


                <div className="mt-6 space-y-3">

                  {ourMissionValues.vision.points.map((point) => (

                    <div
                      key={point}
                      className="flex items-center gap-3 rounded-full border border-[#DDE8E2] bg-white/90 px-4 py-3 text-[10px] text-[#40534C] shadow-sm transition duration-300 hover:-translate-y-1 hover:translate-x-1 hover:shadow-md sm:text-[11px]"
                    >

                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#43A37F] text-[10px] font-bold text-[#27916D] transition duration-300 hover:scale-110">
                        ✓
                      </span>

                      <span>
                        {point}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================================
            CORE VALUES
        ================================= */}

        <section className="mx-auto mt-10 max-w-[1380px] px-4 sm:px-6 lg:px-8">

          {/* Heading */}

          <div className="text-center">

            <div className="flex items-center justify-center gap-4">

              <span className="h-[3px] w-9 bg-[#35896E]" />

              <h2 className="text-[26px] font-bold text-[#173C35] sm:text-[29px]">
                {ourMissionValues.coreValuesTitle}
              </h2>

              <span className="h-[3px] w-9 bg-[#35896E]" />

            </div>


            <p className="mt-2 text-[11px] text-[#65736F] sm:text-[12px]">
              {ourMissionValues.coreValuesSubtitle}
            </p>

          </div>


          {/* DESKTOP CORE VALUE DESIGN */}

          <div className="relative mx-auto mt-9 hidden h-[650px] max-w-[1200px] lg:block">

            {/* Outer circle */}

            <div className="absolute left-1/2 top-1/2 h-[425px] w-[425px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#CFE5DC]" />

            {/* Inner circle */}

            <div className="absolute left-1/2 top-1/2 h-[335px] w-[335px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#C9E3D9]" />


            {/* Center */}

            <div className="absolute left-1/2 top-1/2 flex h-[195px] w-[195px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#07836B] shadow-lg transition duration-500 ease-out hover:scale-105 hover:shadow-2xl">

              <div className="text-center text-white">

                <div className="mb-3 text-[32px] transition duration-300 hover:scale-110">
                  🍃
                </div>

                <p className="text-[21px] font-semibold leading-[1.08]">
                  People
                  <br />
                  Learning
                  <br />
                  Progress
                </p>

              </div>

            </div>


            {/* CARD 1 */}

            <CoreValueCard
              item={ourMissionValues.coreValues[0]}
              className="left-16 top-16"
            />


            {/* CARD 2 */}

            <CoreValueCard
              item={ourMissionValues.coreValues[1]}
              className="left-1/2 top-[-5px] -translate-x-1/2"
            />


            {/* CARD 3 */}

            <CoreValueCard
              item={ourMissionValues.coreValues[2]}
              className="right-16 top-16"
            />


            {/* CARD 4 */}

            <CoreValueCard
              item={ourMissionValues.coreValues[3]}
              className="left-16 top-[40%]"
            />


            {/* CARD 5 */}

            <CoreValueCard
              item={ourMissionValues.coreValues[4]}
              className="right-16 top-[40%]"
            />


            {/* CARD 6 */}

            <CoreValueCard
              item={ourMissionValues.coreValues[5]}
              className="bottom-16 left-16"
            />


            {/* CARD 7 */}

            <CoreValueCard
              item={ourMissionValues.coreValues[6]}
              className="bottom-16 right-16"
            />


            {/* CARD 8 */}

            <CoreValueCard
              item={ourMissionValues.coreValues[7]}
              className="bottom-[-5px] left-1/2 -translate-x-1/2"
            />

          </div>


          {/* MOBILE CORE VALUES */}

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:hidden">

            {ourMissionValues.coreValues.map((item) => (

              <div
                key={item.id}
                className="flex min-h-[105px] items-center gap-4 rounded-xl border border-[#DCE9E4] bg-white p-5 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:bg-[#F2FBF7] hover:shadow-lg"
              >

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#E0F7EE] text-[24px] transition duration-300 hover:scale-110 hover:rotate-3">
                  {item.icon}
                </div>

                <div>

                  <h3 className="text-[13px] font-bold leading-[1.3] text-[#17332F]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-[1.45] text-[#596863]">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* ================================
            PROMISE
        ================================= */}

        <section className="mx-auto mt-9 max-w-[1380px] px-4 sm:px-6 lg:px-8">

          <div className="group relative overflow-hidden rounded-2xl bg-[#073D38] transition duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl">

            <img
              src={ourMissionValues.promise.image}
              alt="Our promise"
              className="absolute inset-0 h-full w-full object-cover opacity-25 transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-35"
            />

            <div className="absolute inset-0 bg-[#073D38]/90" />


            <div className="relative z-10 grid grid-cols-1 gap-8 px-7 py-8 sm:px-9 lg:grid-cols-[43%_57%]">

              <div>

                <h2 className="text-[20px] font-bold text-white sm:text-[21px]">
                  {ourMissionValues.promise.title}
                </h2>

                <div className="mt-3 h-[3px] w-9 bg-[#48B98B]" />

                <p className="mt-4 max-w-[520px] text-[11px] leading-[1.65] text-[#E0EEEA] sm:text-[12px]">
                  {ourMissionValues.promise.description}
                </p>


                <button
                  type="button"
                  className="mt-6 rounded-[6px] bg-[#188461] px-6 py-3.5 text-[11px] font-semibold text-white transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#299C78] hover:shadow-lg"
                >

                  {ourMissionValues.promise.button}

                  <span className="ml-2.5 text-[15px]">
                    →
                  </span>

                </button>

              </div>


              <div className="space-y-4">

                {ourMissionValues.promise.points.map((point) => (

                  <div
                    key={point}
                    className="flex items-start gap-3 text-[11px] leading-[1.55] text-white transition duration-300 hover:translate-x-2 sm:text-[12px]"
                  >

                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#43BA83] text-[10px] font-bold transition duration-300 hover:scale-110">
                      ✓
                    </span>

                    <span>
                      {point}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* ================================
            BELIEF
        ================================= */}

        <section className="mx-auto mt-9 max-w-[1380px] px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">

            <div>

              <h2 className="text-[20px] font-bold text-[#18332E] sm:text-[21px]">
                {ourMissionValues.belief.title}
              </h2>

              <div className="mt-3 h-[3px] w-9 bg-[#35896E]" />

            </div>


            <div>

              <div className="flex gap-5">

                <span className="text-[58px] font-bold leading-[0.5] text-[#319B78]">
                  “
                </span>

                <p className="text-[13px] font-semibold leading-[1.5] text-[#3E524D] sm:text-[14px]">
                  {ourMissionValues.belief.quote}
                </p>

              </div>


              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">

                {ourMissionValues.belief.items.map((item, index) => (

                  <div
                    key={item.id}
                    className="group relative min-h-[150px] rounded-xl border border-[#DCEAE5] bg-[#F0FAF6] p-5 transition duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:bg-[#E8F7F1] hover:shadow-lg"
                  >

                    <div className="flex items-center justify-between">

                      <span className="text-[24px] font-bold text-[#218369] transition duration-300 group-hover:scale-110">
                        {item.id}
                      </span>

                      <span className="text-[26px] text-[#238B6D] transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                        {item.icon}
                      </span>

                    </div>


                    <h3 className="mt-5 text-[12px] font-bold text-[#213B36]">
                      {item.title}
                    </h3>


                    <p className="mt-2 text-[10px] leading-[1.5] text-[#65736E] sm:text-[11px]">
                      {item.description}
                    </p>


                    {index < 2 && (

                      <span className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-[27px] text-[#298F70] transition duration-300 group-hover:translate-x-1 sm:block">
                        ›
                      </span>

                    )}

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* ================================
            BOTTOM GREEN STATEMENT
        ================================= */}

        <section className="mx-auto mt-6 max-w-[1380px] px-4 pb-6 sm:px-6 lg:px-8">

          <div className="group relative overflow-hidden rounded-xl border border-[#D6EAE2] bg-[#EAF8F3] px-7 py-5 text-center transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">

            <div className="absolute left-2 top-0 opacity-30">

              <div className="grid grid-cols-5 gap-1 pt-2">

                {Array.from({ length: 30 }).map((_, index) => (

                  <span
                    key={index}
                    className="h-[3px] w-[3px] rounded-full bg-[#399777] transition duration-300 group-hover:scale-125"
                  />

                ))}

              </div>

            </div>


            <div className="absolute right-2 top-0 opacity-30">

              <div className="grid grid-cols-5 gap-1 pt-2">

                {Array.from({ length: 30 }).map((_, index) => (

                  <span
                    key={index}
                    className="h-[3px] w-[3px] rounded-full bg-[#399777] transition duration-300 group-hover:scale-125"
                  />

                ))}

              </div>

            </div>


            <p className="relative z-10 text-[11px] text-[#40534D]">
              That is our belief. That is why we do what we do.
            </p>


            <p className="relative z-10 mt-2 text-[12px] font-bold text-[#173D35] sm:text-[13px]">
              3rd EdHum – Empowering People. Empowering Performance. Creating Sustainable Success.
            </p>

          </div>

        </section>

      </main>


      {/* ================================
          FOOTER
      ================================= */}

      <Footer />

    </div>
  );
}


/* ==========================================
   CORE VALUE CARD
========================================== */

function CoreValueCard({ item, className }) {
  return (
    <div
      className={`group absolute flex h-[125px] w-[285px] items-center gap-5 rounded-2xl border border-[#DCE9E4] bg-white px-5 py-5 shadow-[0_7px_24px_rgba(30,90,75,0.10)] transition duration-400 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#F2FBF7] hover:shadow-xl ${className}`}
    >

      <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-[#E1F6EE] text-[25px] transition duration-300 group-hover:scale-110 group-hover:rotate-3">

        {item.icon}

      </div>


      <div className="min-w-0">

        <h3 className="text-[12px] font-bold leading-[1.3] text-[#17352F]">
          {item.title}
        </h3>

        <p className="mt-2 text-[10px] leading-[1.45] text-[#61706B]">
          {item.description}
        </p>

      </div>

    </div>
  );
}


export default OurMissionValues;
