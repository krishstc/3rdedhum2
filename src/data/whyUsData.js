import whyUsImage from "../assets/images/whyus.png";
import whyUsPromoImage from "../assets/images/whyus2.png";

const whyUsData = {
  intro: {
    title: "WHY 3RD EDHUM",
    description: "Discover what makes us different and how we create measurable impact through meaningful learning experiences.",
    image: whyUsImage,
  },

  columns: [
    {
      title: "OUR DIFFERENCE",
      items: [
        { label: "What makes us different", icon: "◎" },
        { label: "The Impact of Learning", icon: "◉" },
        { label: "Our Client Results", icon: "▥" },
        { label: "Customer Success Stories", icon: "★" },
        { label: "Awards & Recognition", icon: "♕" },
      ],
    },

    {
      title: "ABOUT US",
      items: [
        { label: "Who We Are", icon: "♟" },
        { label: "Our Mission & Values", icon: "🚀" },
        { label: "Our Leadership Team", icon: "♙" },
        { label: "Our Journey", icon: "↝" },
        { label: "Culture & Beliefs", icon: "♧" },
      ],
    },

    {
      title: "OUR REACH",
      items: [
        { label: "Global Presence", icon: "◎" },
        { label: "Industry Expertise", icon: "▣" },
        { label: "Trusted By Leaders", icon: "◈" },
      ],
    },
  ],

  promo: {
    icon: "🎯",
    title: "Empower People, Elevate Potential.",
    description: "We partner with organizations to build capability, drive performance, and create lasting impact.",
    image: whyUsPromoImage,
    button: "Know Our Story",
  },
};

export default whyUsData;