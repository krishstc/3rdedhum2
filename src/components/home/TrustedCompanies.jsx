import React from "react";

// Company Logos
import adityaBirla from "../../assets/images/logo/AdityaBirla.png";
import aira from "../../assets/images/logo/Aira.png";
import asset from "../../assets/images/logo/Asset.png";
import bvc from "../../assets/images/logo/BVC.png";
import cac from "../../assets/images/logo/CAC.png";
import cerner from "../../assets/images/logo/Cerner.png";
import chandak from "../../assets/images/logo/Chandak.png";
import dixon from "../../assets/images/logo/Dixon.png";
import fosroc from "../../assets/images/logo/Fosroc.png";
import honeywell from "../../assets/images/logo/Honeywell.png";
import jcb from "../../assets/images/logo/JCB.png";
import jpinfra from "../../assets/images/logo/JPInfra.png";
import kale from "../../assets/images/logo/Kale.png";
import kotak from "../../assets/images/logo/Kotak.png";
import omniActive from "../../assets/images/logo/OmniActive.png";
import omron from "../../assets/images/logo/Omron.png";
import rossari from "../../assets/images/logo/Rossari.png";
import synergy from "../../assets/images/logo/Synergy.png";
import union from "../../assets/images/logo/Union.png";
import women from "../../assets/images/logo/Women.png";

// Trusted Companies
const companies = [
  {
    name: "AdityaBirla",
    logo: adityaBirla,
    size: "h-24 md:h-26",
  },
  {
    name: "Aira",
    logo: aira,
    size: "h-24 md:h-26",
  },
  {
    name: "Asset",
    logo: asset,
    size: "h-20 md:h-26",
  },
  {
    name: "BVC",
    logo: bvc,
    size: "h-24 md:h-26",
  },
  {
    name: "CAC",
    logo: cac,
    size: "h-24 md:h-26",
  },
  {
    name: "Cerner",
    logo: cerner,
    size: "h-24 md:h-26",
  },
  {
    name: "Chandak",
    logo: chandak,
    size: "h-24 md:h-26",
  },
  {
    name: "Dixon",
    logo: dixon,
    size: "h-24 md:h-26",
  },
  {
    name: "Fosroc",
    logo: fosroc,
    size: "h-24 md:h-26",
  },
  {
    name: "Honeywell",
    logo: honeywell,
    size: "h-24 md:h-26",
  },
  {
    name: "JCB",
    logo: jcb,
    size: "h-24 md:h-26",
  },
  {
    name: "JPInfra",
    logo: jpinfra,
    size: "h-24 md:h-26",
  },
  {
    name: "Kale",
    logo: kale,
    size: "h-24 md:h-26",
  },
  {
    name: "Kotak",
    logo: kotak,
    size: "h-24 md:h-26",
  },
  {
    name: "OmniActive",
    logo: omniActive,
    size: "h-24 md:h-26",
  },
  {
    name: "Omron",
    logo: omron,
    size: "h-24 md:h-26",
  },
  {
    name: "Rossari",
    logo: rossari,
    size: "h-24 md:h-26",
  },
  {
    name: "Synergy",
    logo: synergy,
    size: "h-24 md:h-26",
  },
  {
    name: "Union",
    logo: union,
    size: "h-24 md:h-26",
  },
  {
    name: "Women",
    logo: women,
    size: "h-24 md:h-26",
  },
];

const TrustedCompanies = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <p className="text-center uppercase tracking-[3px] text-gray-500 text-sm mb-10">
          Trusted By 500+ Organizations Worldwide
        </p>

        {/* Company Slider */}
        <div className="overflow-hidden">
          <div
            className="flex w-max"
            style={{
              animation: "companyScroll 45s linear infinite",
            }}
          >
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

      {/* Animation */}
      <style>
        {`
          @keyframes companyScroll {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default TrustedCompanies;