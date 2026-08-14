import {
  BriefcaseBusiness,
  UsersRound,
  Brain,
  GraduationCap,
  UserRound,
} from "lucide-react";

const ourLeadershipTeam = {
  breadcrumb: {
    section: "Why 3rd EdHum",
    category: "About Us",
    current: "Our Leadership Team",
  },

  label: "OUR TEAM",

  title: "OUR LEADERSHIP TEAM.",

  introduction: [
    "Behind every successful engagement is a multidisciplinary team of professionals who are deeply committed to developing people and organisations. Our consultants bring together expertise that spans the full spectrum of business performance and human capability enabling us to address both strategic business challenges and the nuances of human behaviour simultaneously.",

    "This rare combination of business acumen and people science is what allows 3rd Edhum to create solutions that are not only intellectually rigorous, but also deeply practical, scalable, and sustainably embedded into the way organisations operate day-to-day.",
  ],

  areas: [
    {
      id: 1,
      icon: BriefcaseBusiness,
      title: "Business Strategies",
      items: [
        "Business Strategies",
        "Sales Transformation",
        "Change Management",
        "Organizational Psychology",
        "Human Performance",
      ],
    },

    {
      id: 2,
      icon: Brain,
      title: "People & Learning",
      items: [
        "Leadership Development",
        "Executive Coaching",
        "Behavioural Science",
        "AI Adoption",
        "Learning experience design",
      ],
    },
  ],

  closing: {
    icon: UsersRound,
    text: "Our multidisciplinary approach enables us to address both business challenges and human behaviour simultaneously creating solutions that are practical, scalable, and sustainable across every level of your organisation.",
  },
};

export default ourLeadershipTeam;