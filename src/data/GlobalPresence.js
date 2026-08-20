import {
  UsersRound,
  Monitor,
  Layers3,
  Sparkles,
} from "lucide-react";

const globalPresence = {
  breadcrumb: {
    section: "Why 3rd EdHum",
    category: "Our Reach",
    current: "Global Presence",
  },

  label: "OUR REACH",

  title: "Global Presence. Local Understanding.",

  introduction:
    "While proudly headquartered in India, our work extends well beyond geographical boundaries. We support organisations through a flexible, multi-modal delivery model that meets your people wherever they are in a boardroom in Mumbai, a virtual classroom spanning three continents, or a hybrid learning journey designed for a globally distributed workforce.",

  deliveryModes: [
    {
      id: 1,
      title: "Instructor-Led",
      description:
        "In-person workshops and facilitated sessions designed for maximum engagement and practical application.",
      icon: UsersRound,
    },

    {
      id: 2,
      title: "Virtual Learning",
      description:
        "High-impact virtual programmes that preserve the energy and interactivity of in-person learning.",
      icon: Monitor,
    },

    {
      id: 3,
      title: "Hybrid Journeys",
      description:
        "Blended learning architectures that combine multiple modalities for sustained behavioural change.",
      icon: Layers3,
    },

    {
      id: 4,
      title: "Digital & AI",
      description:
        "AI-enabled learning interventions and digital capability programmes for the modern workforce.",
      icon: Sparkles,
    },
  ],

  closing:
    "Our consultants have experience supporting multinational organisations, fast-growing enterprises, family-owned businesses, public sector organisations, and global teams. Wherever your people are, learning can happen.",
};

export default globalPresence;