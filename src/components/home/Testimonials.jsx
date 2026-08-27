import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  FaArrowLeft,
  FaArrowRight,
  FaQuoteRight,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

import nehaSharma from "../../assets/images/testimonials/neha-sharma.jpeg";
import rohitVerma from "../../assets/images/testimonials/rohit-verma.jpeg";
import ananyaSingh from "../../assets/images/testimonials/ananya-singh.jpeg";
import vikramDesai from "../../assets/images/testimonials/vikram-desai.jpeg";
import arjunMehta from "../../assets/images/testimonials/arjun-mehta.jpeg";

const testimonials = [
  {
    name: "Neha Sharma",
    role: "Team Lead",
    image: nehaSharma,
    review:
      "Practical, engaging and highly relevant. It made a real difference in my team.",
  },
  {
    name: "Rohit Verma",
    role: "Sales Head",
    image: rohitVerma,
    review:
      "3rdEdHum's coaching helped me think differently and achieve better results.",
  },
  {
    name: "Ananya Singh",
    role: "Director of Sales",
    image: ananyaSingh,
    review:
      "The custom frameworks aligned perfectly with our business goals. Highly recommended!",
  },
  {
    name: "Vikram Desai",
    role: "Operations Head",
    image: vikramDesai,
    review:
      "The transformation in our workforce capability was immediately apparent after the workshops.",
  },
  {
    name: "Arjun Mehta",
    role: "Senior Manager",
    image: arjunMehta,
    review:
      "The leadership program gave me tools I use every day to lead with confidence.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-18 bg-[#F7F9F8]">
      <div className="max-w-[1120px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#5AAE82] uppercase tracking-[3px] text-xs font-semibold">
            WHAT OUR LEARNERS SAY
          </span>

          <h2 className="mt-4 text-[30px] lg:text-[44px] font-bold text-[#072A23] leading-tight">
            Real experiences. Real growth.
            <br />
            Real impact.
          </h2>
        </div>

        {/* Slider */}
        <div className="relative">

          {/* Previous */}
          <button
            className="testimonial-prev absolute -left-5 top-1/2 -translate-y-1/2 hidden lg:flex z-20 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center hover:bg-[#3F9975] hover:text-white transition-all duration-300"
          >
            <FaArrowLeft size={14} />
          </button>

          {/* Next */}
          <button
            className="testimonial-next absolute -right-5 top-1/2 -translate-y-1/2 hidden lg:flex z-20 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center hover:bg-[#3F9975] hover:text-white transition-all duration-300"
          >
            <FaArrowRight size={14} />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            speed={800}
            spaceBetween={18}
            slidesPerGroup={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".testimonial-next",
              prevEl: ".testimonial-prev",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border border-gray-100 rounded-2xl p-5 h-full shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                  {/* Quote */}
                  <div className="flex justify-between items-center mb-5">
                    <div className="w-9 h-9 rounded-lg bg-[#EDF8F2] flex items-center justify-center">
                      <FaQuoteRight className="text-[#3F9975] text-sm" />
                    </div>

                    <div className="text-[#F7B500] text-xs tracking-wide">
                      ★★★★★
                    </div>
                  </div>

                  {/* Review */}
                  <p className="text-[14px] leading-7 text-gray-600 min-h-[110px]">
                    {item.review}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-gray-100 my-5"></div>

                  {/* Profile */}
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="w-11 h-11 rounded-full object-cover border-2 border-[#EDF8F2]"
                    />

                    <div>
                      <h4 className="text-[15px] font-semibold text-[#072A23]">
                        {item.name}
                      </h4>

                      <p className="text-[13px] text-gray-500 mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;