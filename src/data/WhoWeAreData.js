import {
  FaGraduationCap,
  FaUsers,
  FaBullseye,
  FaHandshake,
  FaLightbulb,
  FaChartLine,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";

import meetingImage from "../assets/images/AboutUs/meeting.png";

const whoWeAreData = {
  breadcrumb: [
    "Home",
    "Why 3rd EdHum",
    "Who We Are",
  ],

  hero: {
    label: "WHO WE ARE",
    title: "WHO WE ARE.",
    description:
      "We are a learning and capability development partner focused on creating practical, engaging, and outcome-driven learning experiences.",

    image: meetingImage,
  },

  focusAreas: [
    {
      icon: FaGraduationCap,
      title: "Learning Focused",
      description:
        "We design learning that creates real impact.",
    },

    {
      icon: FaUsers,
      title: "Practical Approach",
      description:
        "We keep it simple, relevant and effective.",
    },

    {
      icon: FaBullseye,
      title: "Outcome Driven",
      description:
        "We measure what matters and drive results.",
    },

    {
      icon: FaHandshake,
      title: "People First",
      description:
        "We believe in collaboration, respect and growth.",
    },
  ],

  definingUs: [
    {
      icon: FaUsers,
      title: "Learning Partner",
      description:
        "We partner with organizations to build capabilities that last.",
    },

    {
      icon: FaLightbulb,
      title: "Innovative Solutions",
      description:
        "We use innovative methods to make learning engaging and effective.",
    },

    {
      icon: FaChartLine,
      title: "Measurable Impact",
      description:
        "We focus on outcomes that drive performance and business growth.",
    },

    {
      icon: FaGlobe,
      title: "Global Mindset",
      description:
        "We embrace diverse perspectives and support a global learning culture.",
    },

    {
      icon: FaHeart,
      title: "Committed to People",
      description:
        "We empower individuals to grow, lead, and make a difference.",
    },
  ],

  cta: {
    title:
      "We Partner to Empower People and Drive Performance",

    description:
      "Together, we create learning experiences that inspire growth, build capability, and create lasting impact.",

    button:
      "Explore Our Differences",
  },
};

export default whoWeAreData;