import {
  UsersRound,
  BriefcaseBusiness,
  CircleUserRound,
  UserRound,
  Star,
  Handshake,
  Code2,
  BrainCircuit,
  Bot,
  UsersRound as UsersIcon,
  BarChart3,
} from "lucide-react";

const trustedByLeaders = {
  breadcrumb: {
    section: "Why 3rd EdHum",
    category: "Our Difference",
    current: "Trusted By Leaders",
  },

  label: "OUR DIFFERENCE",

  title: "Trusted By Leaders at Every Level.",

  introduction:
    "Executives choose 3rd Edhum because we understand business. HR leaders choose us because we understand people. Employees choose us because learning becomes practical, engaging, and immediately useful. Across every level of every organisation we serve, our objective remains constant: ",

  highlightedIntroduction:
    "enable people to perform at their highest potential.",

  businessTitle: "Business Before Learning",

  businessAudience: [
    { id: 1, title: "Boards & CEOs", icon: UsersRound },
    { id: 2, title: "Founders & Business Owners", icon: BriefcaseBusiness },
    { id: 3, title: "CHROs & CXOs", icon: CircleUserRound },
    { id: 4, title: "Functional Heads", icon: UserRound },
    { id: 5, title: "Senior & Middle Leaders", icon: UsersRound },
    { id: 6, title: "Emerging Leaders", icon: Star },
    { id: 7, title: "Sales & Customer Teams", icon: Handshake },
    { id: 8, title: "Technical Professionals", icon: Code2 },
  ],

  partnersTitle: "Partners & Alliances",

  partnersDescription:
    "Creating meaningful organisational transformation requires deep collaboration. We work with a network of coaches, consultants, behavioural specialists, technology providers, AI experts, assessment partners, universities, and industry practitioners to deliver comprehensive capability solutions that no single organisation could provide alone.",

  alliances: [
    {
      id: 1,
      title: "Leadership Assessments",
      description: "& Behavioural Diagnostics",
      icon: BrainCircuit,
    },
    {
      id: 2,
      title: "AI Productivity Platforms",
      description: "& Digital Learning Technologies",
      icon: Bot,
    },
    {
      id: 3,
      title: "Organisational Development",
      description: "& Change Management",
      icon: UsersIcon,
    },
    {
      id: 4,
      title: "Learning Analytics &",
      description: "Talent Development Frameworks",
      icon: BarChart3,
    },
  ],

  closing:
    "Together, we don't just develop people — we build organisations that are ready for tomorrow.",
};

export default trustedByLeaders;