import {
  FaUsers,
  FaUserTie,
  FaChartLine,
  FaBullseye,
  FaLeaf,
  FaRocket,
  FaUserFriends,
  FaHandsHelping,
  FaPlay,
  FaTrophy,
} from "react-icons/fa";

export const ourClientResultData = {
  breadcrumb: [
    "Home",
    "Why 3rd EdHum",
    "Our Client Results",
  ],

  hero: {
    label: "Client Results",
    title: "Success Measured by",
    highlightedTitle: "Outcomes.",

    description:
      "Our clients don't partner with us to conduct workshops. They partner with us to improve business performance. Across industries, organisations have experienced measurable improvements that translate directly into competitive advantage, stronger cultures, and stronger growth. Every engagement includes robust mechanisms to evaluate learning effectiveness and genuine business impact because accountability matters as much to us as it does to you.",
  },

  results: [
    {
      title: "Leadership",

      leftIcon: FaUsers,

      rightIcon: FaChartLine,

      points: [
        "Higher leadership confidence",
        "Better strategic thinking",
        "Improved coaching capability",
        "Stronger accountability",
        "Better people management",
      ],
    },

    {
      title: "Sales",

      leftIcon: FaUserTie,

      rightIcon: FaBullseye,

      points: [
        "Improved customer engagement",
        "Better conversion rates",
        "Stronger consultative selling",
        "Enhanced negotiation skills",
        "Increased customer retention",
      ],
    },

    {
      title: "Teams",

      leftIcon: FaUsers,

      rightIcon: FaUserFriends,

      points: [
        "Improved collaboration",
        "Better communication",
        "Greater ownership",
        "Higher productivity",
        "Reduced conflict",
      ],
    },

    {
      title: "Culture",

      leftIcon: FaLeaf,

      rightIcon: FaHandsHelping,

      points: [
        "Increased employee engagement",
        "Stronger learning culture",
        "Greater psychological safety",
        "Increased innovation",
      ],
    },

    {
      title: "Future Readiness",

      leftIcon: FaRocket,

      rightIcon: FaPlay,

      points: [
        "AI adoption",
        "Digital confidence",
        "Change agility",
        "Leadership readiness",
        "Workforce capability",
      ],
    },
  ],

  bottomMessage: {
    icon: FaTrophy,

    title: "Real outcomes. Measurable impact. Lasting change.",

    description:
      "We are committed to driving meaningful results that create value for your people and your business.",

    button: "See How We Drive Results",
  },
};

export default ourClientResultData;