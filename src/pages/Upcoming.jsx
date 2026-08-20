import Navbar from "../components/navbar/desktop/Navbar";
import Contact from "../components/home/Contact";
import Footer from "../components/footer/Footer";

function Upcoming() {
  return (
    <div className="min-h-screen bg-[#F6F7F9] text-[#0B2F2A]">
      <Navbar />

      <main className="pt-[88px]">

        {/* ================= UPCOMING HERO ================= */}

        <section className="min-h-[520px] flex items-center justify-center px-6 py-20">
          <div className="w-full max-w-[900px] text-center">

            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#D9F8EB]">
              <span className="text-[36px]">🚀</span>
            </div>

            <p className="text-[13px] sm:text-[14px] font-semibold uppercase tracking-[2px] text-[#3F9975]">
              COMING SOON
            </p>

            <h1 className="mt-5 text-[42px] sm:text-[52px] lg:text-[64px] leading-[1.05] font-bold tracking-[-1.5px] text-[#07372F]">
              Upcoming
              <span className="text-[#3C9A72]">.</span>
            </h1>

            <div className="mx-auto mt-5 h-[3px] w-[55px] rounded-full bg-[#4D997A]" />

            <p className="mx-auto mt-7 max-w-[650px] text-[15px] sm:text-[16px] lg:text-[18px] leading-7 text-[#5F6967]">
              This section is currently being prepared and will be available
              soon. We are working on bringing you valuable content and
              resources.
            </p>

            <p className="mx-auto mt-4 max-w-[600px] text-[14px] sm:text-[15px] leading-6 text-[#7B8582]">
              Stay connected with us. New content will be uploaded shortly.
            </p>

          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="m-8">
            <Contact />
        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <Footer />
    </div>
  );
}

export default Upcoming;