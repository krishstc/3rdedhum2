import mahindra from "../../assets/images/mahindra.png";
import deloitte from "../../assets/images/deloitte.png";
import accenture from "../../assets/images/accenture.png";
import adani from "../../assets/images/adani.png";
import hdfc from "../../assets/images/hdfc.png";
import tata from "../../assets/images/tata.png";
import marico from "../../assets/images/marico.png";

const companies = [
  {
    name: "Mahindra",
    logo: mahindra,
    size: "h-5 md:h-6",
  },
  {
    name: "Deloitte",
    logo: deloitte,
    size: "h-5 md:h-6",
  },
  {
    name: "Accenture",
    logo: accenture,
    size: "h-7 md:h-8",
  },
  {
    name: "Adani",
    logo: adani,
    size: "h-7 md:h-8",
  },
  {
    name: "HDFC BANK",
    logo: hdfc,
    size: "h-7 md:h-8",
  },
  {
    name: "TATA",
    logo: tata,
    size: "h-10 md:h-12",
  },
  {
    name: "Marico",
    logo: marico,
    size: "h-10 md:h-12",
  },
];

const TrustedCompanies = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <p className="text-center uppercase tracking-[3px] text-gray-500 text-sm mb-10">
          Trusted By 500+ Organizations Worldwide
        </p>

        <div className="overflow-hidden">
          <div className="company-slider">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-8 flex-shrink-0"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  loading="lazy"
                  draggable={false}
                  className={`${company.size} w-auto object-contain transition-transform duration-300 hover:scale-105`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;