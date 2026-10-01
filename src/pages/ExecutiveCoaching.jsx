import {
  ArrowRight,
  Users,
  Lightbulb,
  Eye,
  BarChart3,
  Target,
  MessageSquare,
  UserRound,
  Scale,
  BriefcaseBusiness,
  Sparkles,
  Search,
  Handshake,
  Footprints,
  TrendingUp,
  Building2,
  UserCheck,
} from "lucide-react";

import Footer from "../components/footer/Footer";
import executiveCoachingData from "../data/executiveCoachingData";

const iconMap = {
  users: Users,
  usersRound: Users,
  lightbulb: Lightbulb,
  eye: Eye,
  chart: BarChart3,
  target: Target,
  communication: MessageSquare,
  stakeholder: Handshake,
  conversation: MessageSquare,
  growth: TrendingUp,
  delegation: UserCheck,
  effectiveness: Scale,
  person: UserRound,
  briefcase: BriefcaseBusiness,
  barChart: BarChart3,
  crown: Sparkles,
  leadership: Users,
  decision: Target,
  awareness: Lightbulb,
  clarity: Search,
  choice: Sparkles,
  action: Footprints,
};

const focusIcons = [
  Users,
  Target,
  MessageSquare,
  Handshake,
  MessageSquare,
  TrendingUp,
  UserCheck,
  Scale,
];

const coachIcons = [
  UserRound,
  Users,
  Building2,
  Sparkles,
];

const stepIcons = [
  Lightbulb,
  Search,
  Sparkles,
  Footprints,
];

const perspectiveIcons = [
  Users,
  Lightbulb,
  Eye,
  BarChart3,
];

const differenceIcons = [
  UserRound,
  BriefcaseBusiness,
  Handshake,
];

const MountainArtwork = ({ color }) => (
  <svg
    viewBox="0 0 500 260"
    preserveAspectRatio="none"
    className="absolute bottom-0 left-0 h-[130px] w-full transition-transform duration-700 group-hover:scale-105 sm:h-[155px]"
    aria-hidden="true"
  >
    <path
      d="M0 230 L70 155 L112 195 L178 92 L245 190 L300 125 L365 205 L425 145 L500 225 V260 H0 Z"
      fill={color}
      opacity="0.09"
    />

    <path
      d="M0 250 L82 185 L128 220 L205 130 L272 215 L330 155 L395 220 L455 175 L500 215 V260 H0 Z"
      fill={color}
      opacity="0.15"
    />

    <path
      d="M0 260 L100 210 L150 238 L230 165 L300 235 L365 190 L430 240 L500 200 V260 H0 Z"
      fill={color}
      opacity="0.23"
    />

    <path
      d="M178 92 L154 128 L178 118 L193 135 L214 120 Z"
      fill="white"
      opacity="0.55"
    />

    <path
      d="M300 125 L278 158 L300 148 L316 164 L337 151 Z"
      fill="white"
      opacity="0.48"
    />

    <path
      d="M425 145 L403 176 L425 166 L442 181 L461 169 Z"
      fill="white"
      opacity="0.42"
    />
  </svg>
);

const ExecutiveCoaching = () => {
  const {
    hero,
    perspective,
    whoWeCoach,
    focusAreas,
    approach,
    difference,
    impact,
    cta,
  } = executiveCoachingData;

  return (
    <div className="w-full overflow-x-hidden bg-white text-[#062D50]">

      {/* HERO */}
      <section className="bg-[#EFFBF7] px-4 py-10 sm:px-6 sm:py-14 lg:px-[5%]">
        <div className="mx-auto grid max-w-[1180px] items-stretch gap-8 lg:grid-cols-[47%_53%] lg:gap-10">

          {/* HERO CONTENT */}
          <div className="flex min-w-0 flex-col justify-center animate-[fadeUp_.7s_ease-out]">

            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#28725C] sm:text-sm">
              {hero.eyebrow}
            </p>

            <h1 className="text-[34px] font-extrabold leading-[1.08] transition-transform duration-500 hover:translate-x-1 sm:text-[46px] lg:text-[58px]">
              {hero.title.split("\n").map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {index === hero.title.split("\n").length - 1 ? (
                    <span className="text-[#16796D]">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            <p className="mt-5 max-w-[540px] text-[15px] leading-6 text-[#52616A] sm:mt-6 sm:text-[16px] sm:leading-7">
              {hero.description}
            </p>

            {/* DOWNLOAD BROCHURE */}
            <div className="mt-6">
              <button className="flex w-full items-center justify-center gap-2 rounded-md border border-[#28725C] bg-white px-5 py-3.5 text-[14px] font-semibold text-[#28725C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E8F8F2] hover:shadow-lg sm:w-fit sm:px-6 sm:text-[15px]">
                <BriefcaseBusiness size={17} />
                Download Brochure
              </button>
            </div>

            {/* FOUR OPTIONS */}
            <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-4 border-t border-[#CDEBE2] pt-5 sm:mt-9 sm:grid-cols-4 sm:gap-2 sm:pt-6">
              {hero.impactItems.map((item) => {
                const Icon = iconMap[item.icon] || Users;

                return (
                  <div
                    key={item.title}
                    className="group flex min-w-0 items-center gap-2 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon
                      size={25}
                      className="shrink-0 text-[#28725C] transition-transform duration-300 group-hover:scale-125 sm:size-[26px]"
                    />

                    <span className="text-[11px] font-bold leading-4 sm:whitespace-nowrap sm:text-[13px]">
                      {item.title}
                      <br />
                      {item.subtitle}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="group relative min-h-[330px] sm:min-h-[430px] lg:min-h-[520px]">
            <img
              src={hero.image}
              alt={hero.imageAlt}
              className="h-full min-h-[330px] w-full rounded-[18px] object-cover shadow-sm transition-all duration-700 group-hover:scale-[1.015] group-hover:shadow-xl sm:min-h-[430px] sm:rounded-[22px] lg:min-h-[520px]"
            />

            <div className="absolute left-3 top-3 rounded-lg bg-white px-2.5 py-2 text-[9px] font-extrabold leading-[1.25] text-[#28725C] shadow sm:left-4 sm:top-4 sm:rounded-xl sm:px-3 sm:py-2.5 sm:text-[11px]">
              CLARITY
              <br />
              TODAY
              <br />
              STRONGER
              <br />
              TOMORROW
            </div>

            <div className="absolute right-3 top-3 text-right text-[11px] font-semibold italic leading-tight text-[#062D50] transition-transform duration-300 group-hover:-translate-y-1 sm:right-4 sm:top-4 sm:text-[15px]">
              A higher
              <br />
              perspective
              <br />
              awaits.
            </div>
          </div>
        </div>
      </section>

      {/* OUR PERSPECTIVE */}
      <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-[5%] lg:py-18">
        <div className="mx-auto grid max-w-[1160px] items-center gap-8 lg:grid-cols-[51%_49%] lg:gap-10">

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-[#28725C] sm:text-sm">
              {perspective.eyebrow}
            </p>

            <h2 className="mt-3 text-[29px] font-extrabold leading-[1.08] transition-colors duration-300 hover:text-[#16796D] sm:text-[36px] lg:text-[40px]">
              {perspective.title.split("\n").map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>

            <p className="mt-5 max-w-[520px] text-[15px] leading-6 text-[#5C6870] sm:mt-6 sm:text-[16px] sm:leading-7">
              {perspective.description}
            </p>
          </div>

          <div className="group rounded-[17px] bg-[#F4F8F6] p-2.5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:rounded-[20px] sm:p-3">
            <div className="relative overflow-hidden rounded-[11px] sm:rounded-[13px]">
              <img
                src={perspective.image}
                alt={perspective.imageAlt}
                className="h-[230px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[250px]"
              />

              <div className="absolute left-3 top-3 space-y-2 sm:left-4 sm:top-4 sm:space-y-3">
                {perspective.points.map((point, index) => {
                  const Icon = perspectiveIcons[index] || Users;

                  return (
                    <div
                      key={point.label}
                      className="flex items-center gap-1.5 text-[11px] font-extrabold transition-transform duration-300 hover:translate-x-2 sm:gap-2 sm:text-[13px]"
                    >
                      <Icon
                        size={22}
                        className="rounded-full bg-white/90 p-1 text-[#28725C] sm:size-[25px]"
                      />
                      {point.label}
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="pt-2 text-right text-[10px] font-bold sm:text-xs">
              {perspective.caption}
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE COACH */}
      <section className="bg-[#EFFBF7] px-4 py-10 sm:px-6 sm:py-14 lg:px-[5%]">
        <div className="mx-auto grid max-w-[1160px] items-center gap-8 lg:grid-cols-[33%_67%] lg:gap-9">

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-[#28725C] sm:text-sm">
              {whoWeCoach.eyebrow}
            </p>

            <h2 className="mt-3 text-[29px] font-extrabold leading-[1.08] sm:text-[35px] lg:text-[38px]">
              {whoWeCoach.title.split("\n").map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>

            <p className="mt-4 max-w-[330px] text-[15px] leading-6 text-[#5C6870] sm:mt-5 sm:text-[16px] sm:leading-7">
              {whoWeCoach.description}
            </p>

            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-[#28725C] px-5 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1D5D4A] hover:shadow-lg sm:mt-6 sm:w-fit sm:px-6 sm:text-[15px]">
              {whoWeCoach.button}
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3 min-[430px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
            {whoWeCoach.cards.map((card, index) => {
              const Icon = coachIcons[index] || Users;

              const colors = [
                ["#28725C", "#E8F8F2", "#C8EBDD"],
                ["#3787BF", "#EDF5FF", "#D6E8FA"],
                ["#D09A20", "#FFF8E8", "#F5E4B6"],
                ["#914DC5", "#F7EEFF", "#E6D2F7"],
              ];

              const [color, background, iconBackground] =
                colors[index] || colors[0];

              return (
                <div
                  key={card.title}
                  style={{
                    backgroundColor: background,
                    borderColor: color,
                  }}
                  className="group relative flex min-h-[225px] overflow-hidden rounded-[10px] border-l-[6px] p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:h-[260px]"
                >
                  <MountainArtwork color={color} />

                  <div className="relative z-10 flex w-full flex-col">
                    <div
                      style={{
                        backgroundColor: iconBackground,
                        color,
                      }}
                      className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 sm:h-12 sm:w-12"
                    >
                      <Icon size={24} />
                    </div>

                    <h3 className="whitespace-pre-line text-[14px] font-extrabold leading-5 sm:text-[15px]">
                      {card.title}
                    </h3>

                    <p className="mt-2 max-w-[190px] text-[11px] leading-5 text-[#65717A] sm:mt-3 sm:text-[12px]">
                      {card.description}
                    </p>

                    <div
                      style={{ backgroundColor: color }}
                      className="mt-auto h-1.5 w-full rounded-full transition-all duration-300 group-hover:h-2"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-[5%]">
        <div className="mx-auto grid max-w-[1160px] items-center gap-8 lg:grid-cols-[35%_65%] lg:gap-9">

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-[#28725C] sm:text-sm">
              {focusAreas.eyebrow}
            </p>

            <h2 className="mt-3 text-[29px] font-extrabold leading-[1.08] sm:text-[35px] lg:text-[38px]">
              {focusAreas.title.split("\n").map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>

            <p className="mt-4 max-w-[330px] text-[15px] leading-6 text-[#65717A] sm:mt-5 sm:text-[16px] sm:leading-7">
              {focusAreas.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
            {focusAreas.items.map((item, index) => {
              const Icon = focusIcons[index] || Target;

              return (
                <div
                  key={item.title}
                  className="group flex min-h-[95px] cursor-pointer flex-col items-center justify-center rounded-xl border border-[#DCE6E2] bg-white px-2 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#28725C] hover:shadow-lg sm:h-[100px]"
                >
                  <Icon
                    size={25}
                    className="mb-2 text-[#28725C] transition-transform duration-300 group-hover:scale-125 sm:size-[27px]"
                  />

                  <span className="whitespace-pre-line text-[11px] font-bold leading-4 sm:text-[12px]">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[#EFFBF7] px-4 py-10 sm:px-6 sm:py-14 lg:px-[5%]">
        <div className="mx-auto max-w-[1160px]">

          <p className="text-xs font-bold uppercase tracking-wide text-[#28725C] sm:text-sm">
            {approach.eyebrow}
          </p>

          <h2 className="mt-3 text-[29px] font-extrabold sm:text-[35px] lg:text-[38px]">
            {approach.title}
          </h2>

          <p className="mt-3 max-w-[850px] text-[15px] leading-6 text-[#65717A] sm:text-[16px]">
            {approach.description}
          </p>

          <div className="mt-8 grid items-center gap-8 lg:mt-10 lg:grid-cols-[1fr_190px] lg:gap-9">

            {/* STEPS */}
            <div className="flex flex-col items-center lg:flex-row lg:items-start">
              {approach.steps.map((step, index) => {
                const Icon = stepIcons[index] || Lightbulb;

                const colors = [
                  "#43A96D",
                  "#2587C7",
                  "#E8A928",
                  "#A34AD0",
                ];

                return (
                  <div
                    key={step.title}
                    className="flex w-full flex-col items-center lg:flex-1 lg:flex-row lg:items-start"
                  >
                    <div className="w-full text-center">
                      <div
                        style={{
                          backgroundColor: colors[index],
                        }}
                        className="mx-auto flex h-[68px] w-[68px] items-center justify-center rounded-full text-white shadow-md transition-all duration-300 hover:scale-110 hover:shadow-xl sm:h-[74px] sm:w-[74px]"
                      >
                        <Icon size={30} />
                      </div>

                      <h3 className="mt-3 text-[14px] font-extrabold sm:text-[15px]">
                        {step.title}
                      </h3>

                      <p className="mx-auto mt-1 max-w-[190px] whitespace-pre-line text-[11px] leading-4 text-[#65717A]">
                        {step.description}
                      </p>
                    </div>

                    {index < approach.steps.length - 1 && (
                      <ArrowRight
                        size={30}
                        className="my-3 rotate-90 shrink-0 text-[#28725C] lg:mx-2 lg:my-5 lg:rotate-0"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* APPROACH IMAGE */}
            <div className="group relative mx-auto w-full max-w-[320px] overflow-hidden rounded-[14px] lg:max-w-none">
              <img
                src={approach.image}
                alt={approach.imageAlt}
                className="h-[190px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-[#00483F]/35">
                <p className="px-4 text-center text-[18px] font-extrabold leading-5 text-white sm:text-[19px]">
                  {approach.imageTitle.split("\n").map((line, index) => (
                    <span key={line}>
                      {index > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENCE + IMPACT */}
      <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-[5%]">
        <div className="mx-auto grid max-w-[1160px] gap-5 md:grid-cols-2">

          {/* DIFFERENCE */}
          <div className="group rounded-xl border border-[#E2E8E6] border-l-[6px] border-l-[#28725C] p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6">

            <p className="text-xs font-bold uppercase text-[#28725C] sm:text-sm">
              {difference.eyebrow}
            </p>

            <h2 className="mt-2 text-[20px] font-extrabold sm:text-[22px]">
              {difference.title}
            </h2>

            <p className="mt-2 text-[13px] leading-6 text-[#65717A] sm:text-[14px]">
              {difference.description}
            </p>

            <div className="mt-6 grid grid-cols-3">
              {difference.points.map((point, index) => {
                const Icon = differenceIcons[index] || UserRound;

                return (
                  <div
                    key={point.title}
                    className="border-r border-[#E6ECEA] px-1 text-center last:border-0"
                  >
                    <Icon
                      size={27}
                      className="mx-auto text-[#28725C] transition-transform duration-300 hover:scale-125 sm:size-[30px]"
                    />

                    <p className="mt-2 whitespace-pre-line text-[10px] font-bold leading-4 sm:text-[11px]">
                      {point.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* IMPACT */}
          <div className="group rounded-xl border border-[#E2E8E6] border-l-[6px] border-l-[#318EB4] p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6">

            <p className="text-xs font-bold uppercase text-[#28725C] sm:text-sm">
              {impact.eyebrow}
            </p>

            <h2 className="mt-2 text-[20px] font-extrabold sm:text-[22px]">
              {impact.title}
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-3">
              {impact.stats.map((stat) => (
                <div
                  key={stat.value}
                  className="transition-transform duration-300 hover:-translate-y-1"
                >
                  <strong className="text-[21px] font-extrabold text-[#28725C] sm:text-[23px]">
                    {stat.value}
                  </strong>

                  <p className="mt-1 whitespace-pre-line text-[10px] leading-4 text-[#65717A]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-lg bg-[#EFF7FC] p-3.5 text-[11px] leading-5 italic text-[#53626A] transition-colors hover:bg-[#E5F3FA] sm:mt-6 sm:p-4 sm:text-[12px]">
              “{impact.quote}”
            </div>
          </div>
        </div>
      </section>

      {/* READY TO THINK DIFFERENTLY */}
      <section
        className="relative bg-cover bg-center px-4 py-12 sm:px-6 sm:py-16 lg:px-[5%]"
        style={{
          backgroundImage: `url(${cta.image})`,
        }}
      >
        <div className="absolute inset-0 bg-[#00443D]/85" />

        <div className="relative mx-auto flex max-w-[1160px] flex-col gap-7 text-white lg:flex-row lg:items-center lg:justify-between lg:gap-8">

          {/* CTA CONTENT */}
          <div className="max-w-[650px]">
            <p className="text-xs font-bold uppercase tracking-wide sm:text-sm">
              {cta.eyebrow}
            </p>

            <h2 className="mt-3 text-[29px] font-extrabold leading-[1.08] sm:text-[38px] lg:text-[42px]">
              {cta.title.split("\n").map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>

            <p className="mt-4 max-w-[620px] text-[14px] leading-6 text-white/80 sm:text-[16px]">
              {cta.description}
            </p>
          </div>

          {/* WHATSAPP BUTTONS */}
          <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row lg:w-auto">
            <a
              href="https://wa.me/919967399069"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center whitespace-nowrap rounded-md bg-white px-5 py-3.5 text-[14px] font-semibold text-[#28725C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E8F8F2] hover:shadow-xl sm:w-auto sm:px-6 sm:text-[15px]"
            >
              {cta.buttons[0]}
            </a>

            <a
              href="https://wa.me/919967399069"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center whitespace-nowrap rounded-md bg-[#28725C] px-5 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1D5D4A] hover:shadow-xl sm:w-auto sm:px-6 sm:text-[15px]"
            >
              {cta.buttons[1]}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExecutiveCoaching;