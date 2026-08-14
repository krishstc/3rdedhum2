import {
  UserRoundCog,
  Factory,
  Landmark,
  Stethoscope,
  Cpu,
  Building2,
  Truck,
  GraduationCap,
  Handshake,
} from "lucide-react";

const customerSuccessStories = [
  {
    id: 1,
    icon: Factory,
    title: "Manufacturing",
    description:
      "Supporting operational leaders in developing ownership, accountability, communication, and people leadership to improve operational excellence.",
    side: "left",
  },

  {
    id: 2,
    icon: Landmark,
    title: "Financial Services",
    description:
      "Helping leaders navigate rapid business change by strengthening leadership capability, customer engagement, coaching skills, and strategic thinking.",
    side: "right",
  },

  {
    id: 3,
    icon: Stethoscope,
    title: "Healthcare & Pharmaceuticals",
    description:
      "Developing future-ready professionals capable of balancing technical excellence with empathy, collaboration, and customer-centricity.",
    side: "left",
  },

  {
    id: 4,
    icon: Cpu,
    title: "Technology",
    description:
      "Building leaders capable of managing distributed teams, leading innovation, improving collaboration, and navigating rapid transformation.",
    side: "right",
  },

  {
    id: 5,
    icon: Building2,
    title: "Real Estate",
    description:
      "Helping sales and customer-facing teams improve communication, negotiation, customer experience, and relationship management.",
    side: "left",
  },

  {
    id: 6,
    icon: Truck,
    title: "Logistics & Supply Chain",
    description:
      "Developing managers capable of leading high-performance teams while improving operational efficiency and service quality.",
    side: "right",
  },

  {
    id: 7,
    icon: GraduationCap,
    title: "Education",
    description:
      "Partnering with institutions to develop future-ready educators, leaders, and students through capability-building initiatives that prepare communities for tomorrow's demands.",
    side: "left",
  },

  {
    id: 8,
    icon: Handshake,
    title: "Long-Term Partnerships",
    description:
      "Many of our clients continue working with us over multiple years because we become an extension of their capability development strategy not just another training vendor. We are invested in your long-term success.",
    side: "right",
    featured: true,
  },
];

export default customerSuccessStories;