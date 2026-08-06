import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-[1240px] mx-auto px-8">

        <div className="grid lg:grid-cols-[360px_260px_1fr] gap-16 items-start">

          {/* LEFT MAP */}

          <div>

            <p className="uppercase tracking-[2px] text-[#4BA77A] text-xs font-semibold mb-6">
              FIND US HERE
            </p>

            <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] shadow-sm">

              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Thane,Maharashtra&output=embed"
                loading="lazy"
                className="w-full h-[295px]"
              />

            </div>

          </div>

          {/* CENTER DETAILS */}

          <div className="pt-1">

            <h2 className="text-[22px] font-bold text-[#052C23] mb-12">
              GET IN TOUCH
            </h2>

            <div className="space-y-10">

              {/* Phone */}

              <div className="flex items-center gap-4">

                <Phone
                  size={20}
                  className="text-[#49A978]"
                />

                <span className="text-[16px] font-medium text-[#052C23]">
                  +91 91234 56789
                </span>

              </div>

              {/* Email */}

              <div className="flex items-center gap-4">

                <Mail
                  size={20}
                  className="text-[#49A978]"
                />

                <span className="text-[16px] font-medium text-[#052C23]">
                  info@3rdedhum.com
                </span>

              </div>

              {/* Address */}

              <div className="flex items-start gap-4">

                <MapPin
                  size={20}
                  className="text-[#49A978] mt-1"
                />

                <span className="text-[16px] font-medium text-[#052C23] leading-7">
                  Thane, Maharashtra, India
                </span>

              </div>

            </div>

          </div>

          {/* RIGHT FORM */}

          <div>

            <form>

              <div className="grid grid-cols-2 gap-5 mb-5">

                <input
                  type="text"
                  placeholder="Name"
                  className="h-12 rounded-xl border border-[#E5E7EB] px-5 text-[15px] outline-none placeholder:text-gray-400 focus:border-[#4BA77A]"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="h-12 rounded-xl border border-[#E5E7EB] px-5 text-[15px] outline-none placeholder:text-gray-400 focus:border-[#4BA77A]"
                />

              </div>

              <div className="grid grid-cols-2 gap-5 mb-5">

                <input
                  type="text"
                  placeholder="Phone"
                  className="h-12 rounded-xl border border-[#E5E7EB] px-5 text-[15px] outline-none placeholder:text-gray-400 focus:border-[#4BA77A]"
                />

                <input
                  type="text"
                  placeholder="Organization"
                  className="h-12 rounded-xl border border-[#E5E7EB] px-5 text-[15px] outline-none placeholder:text-gray-400 focus:border-[#4BA77A]"
                />

              </div>

              <textarea
                rows={5}
                placeholder="Your message"
                className="w-full h-[112px] rounded-xl border border-[#E5E7EB] p-5 text-[15px] outline-none resize-none placeholder:text-gray-400 focus:border-[#4BA77A]"
              />
                            <button
                type="submit"
                className="mt-6 bg-[#062C24] hover:bg-[#0A4538] transition-all duration-300 text-white px-7 py-3 rounded-lg font-medium flex items-center gap-2"
              >
                Send Message
                <ArrowRight size={16} />
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;