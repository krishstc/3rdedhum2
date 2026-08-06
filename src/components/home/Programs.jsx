import {
  ChevronRight,
  UserRound,
  Users,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import ceoImg from "../../assets/images/ceo.jpg";

const programs = [
  {
    title: "For Leaders",
    desc: "Build the leadership mindset, skills, and behaviors to lead with impact.",
    icon: <UserRound size={24} />,
  },
  {
    title: "For Teams",
    desc: "Strengthen team dynamics and drive collective performance.",
    icon: <Users size={24} />,
  },
  {
    title: "For Managers",
    desc: "Equip managers to lead people, projects and performance.",
    icon: <Briefcase size={24} />,
  },
  {
    title: "For Individual",
    desc: "Accelerate personal growth with practical learning journeys.",
    icon: <GraduationCap size={24} />,
  },
];

const Programs = () => {
  return (
    <section className="py-24 bg-[#F4F5F4]">
      <div className="max-w-[1350px] mx-auto px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* LEFT */}
          <div className="max-w-[560px]">
            <p className="uppercase tracking-[2px] text-[#1A8D61] text-sm font-semibold mb-3">
              PROGRAMS FOR EVERY LEVEL
            </p>
            <h2 className="text-[42px] leading-[50px] font-semibold text-[#062B23]">
              Targeted Solutions
              <br />
              Measurable Impact
            </h2>

            <div className="mt-4 space-y-3">

              {programs.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-[24px] border border-gray-200 px-6 py-6 flex items-center justify-between hover:shadow-xl transition-all duration-300 cursor-pointer"
                >

                  <div className="flex items-center gap-5">

                    <div className="w-14 h-14 rounded-full bg-[#EEF7F3] flex items-center justify-center text-[#299768]">
                      {item.icon}
                    </div>

                    <div>

                      <h3 className="text-[18px] font-semibold text-[#062B23]">
                        {item.title}
                      </h3>

                      <p className="text-[14px] text-gray-500 leading-5 mt-2 max-w-[320px]">
                        {item.desc}
                      </p>

                    </div>

                  </div>

                  <ChevronRight
                    size={24}
                    className="text-[#76BD98] group-hover:translate-x-1 transition"
                  />

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative h-[700px]">

            {/* Image */}
            <div className="absolute inset-0 rounded-[30px] overflow-hidden">
              <img
                src={ceoImg}
                alt="CEO"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quote Card */}
            <div className="absolute bottom-0 right-0 translate-y-10 w-[390px] bg-[#043329] rounded-[24px] px-10 py-4 shadow-[0_20px_45px_rgba(0,0,0,0.25)]">

              <div className="text-[#63E2B2] text-7xl leading-none">
                ❝
              </div>

              <p className="mt-5 text-white text-[18px] leading-6 font-medium">
                At 3rdEdHum, we believe change happens when leaders focus on their people.
              </p>

              <div className="mt-10">
                <h4 className="text-white text-[18px] font-bold">
                  – Manmeet Singh
                </h4>

                <p className="text-[#C7D3CF] text-sm mt-1">
                  Founder & CEO
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Programs;