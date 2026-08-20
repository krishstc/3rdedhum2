import {
  Factory,
  Landmark,
  HeartPulse,
  Monitor,
  UsersRound,
} from "lucide-react";

const industryExpertise = {
  breadcrumb: {
    section: "Why 3rd EdHum",
    category: "Our Reach",
    current: "Industry Expertise",
  },

  label: "OUR REACH",

  title: "Cross-Industry Expertise.",

  introduction:
    "Our cross-industry experience enables us to understand the unique business challenges of each sector while bringing proven best practices from multiple domains. This breadth allows us to design solutions that are simultaneously industry-specific in their language and context, yet globally relevant in their methodology and approach. We don't arrive with assumptions, we arrive with questions and a deep commitment to understanding what makes your organisation unique.",

  industries: [
    {
      id: 1,
      title: "Manufacturing & Engineering",
      icon: Factory,
      items: [
        "Manufacturing",
        "Automotive",
        "Engineering",
        "Logistics",
        "Infrastructure",
      ],
    },

    {
      id: 2,
      title: "Financial Services",
      icon: Landmark,
      items: [
        "BFSI",
        "Insurance",
        "Professional Services",
      ],
    },

    {
      id: 3,
      title: "Healthcare & Life Sciences",
      icon: HeartPulse,
      items: [
        "Healthcare",
        "Pharmaceuticals",
        "Consumer Good",
        "Healthtriv",
        "Voriure",
      ],
    },

    {
      id: 4,
      title: "Technology & Digital",
      icon: Monitor,
      items: [
        "Technology",
        "IT Services",
        "Start-ups",
      ],
    },

    {
      id: 5,
      title: "People & Society",
      icon: UsersRound,
      items: [
        "Education",
        "Retail Estate",
        "Hospitality",
        "Public Sector Enterprises",
      ],
    },
  ],

  closing:
    "This diversity of experience allows 3rd Edhum to create capability solutions that are both industry-sensitive and globally transferable bringing the best of cross-sector thinking directly to your organisation's challenges.",
};

export default industryExpertise;