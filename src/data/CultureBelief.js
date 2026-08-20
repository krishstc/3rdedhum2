import {
  UsersRound,
  Sparkles,
  ShieldCheck,
  Lightbulb,
  HeartHandshake,
  Target,
  GraduationCap,
} from "lucide-react";

const cultureBelief = {
  breadcrumb: {
    section: "Why 3rd EdHum",
    category: "About Us",
    current: "Culture & Beliefs",
  },

  label: "CULTURE",

  title: "CULTURE & BELIEFS.",

  introduction:
    "Culture is not what organisations write. Culture is what people experience every day. At 3rd Edhum, we believe organisations flourish when people feel trusted, challenged, supported, and inspired to grow. These beliefs are not aspirational statements; they are the principles that actively shape every client engagement, every solution we create, and every conversation we have.",

  beliefs: [
    {
      id: 1,
      title: "Learning is lifelong",
      description:
        "Growth doesn’t stop at any career stage. We foster curiosity at every level.",
      icon: GraduationCap,
    },

    {
      id: 2,
      title: "Leadership is influence, not position",
      description:
        "Great leadership is defined by impact, not by title or hierarchy.",
      icon: UsersRound,
    },

    {
      id: 3,
      title: "Trust accelerates performance",
      description:
        "Growth doesn’t stop at any career stage. We foster curiosity at every level.",
      icon: ShieldCheck,
    },

    {
      id: 4,
      title: "Technology should empower people",
      description:
        "AI and digital tools are amplifiers of human potential never replacements for it.",
      icon: Lightbulb,
    },
  ],

  principles: [
    {
      id: 1,
      title: "Curiosity drives innovation",
      description:
        "The best solutions come from asking better questions.",
      icon: Sparkles,
    },

    {
      id: 2,
      title: "Accountability creates excellence",
      description:
        "We hold ourselves and our clients to the highest standards.",
      icon: Target,
    },

    {
      id: 3,
      title: "Coaching unlocks potential",
      description:
        "Every individual can grow with the right support and challenge.",
      icon: HeartHandshake,
    },
  ],

  cta: {
    title: "Stronger Culture, Better Outcomes",
    description:
      "Our culture shapes how we work and the impact we create for every organization we partner with.",
    button: "Explore Our Culture",
  },
};

export default cultureBelief;