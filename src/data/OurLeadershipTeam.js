import {
  Brain,
  GraduationCap,
  HeartHandshake,
  TrendingUp,
  UserRound,
  UsersRound,
  BarChart3,
  ShieldCheck,
  Rocket,
} from "lucide-react";

import leadershipHero from "../assets/images/OurLeadershipTeam/leadership-hero.png";
import founderManmeet from "../assets/images/OurLeadershipTeam/founder-manmeet.png";
import teamSheekha from "../assets/images/OurLeadershipTeam/team-sheekha.jpeg";
import teamJuhi from "../assets/images/OurLeadershipTeam/team-juhi.jpeg";
import teamRohan from "../assets/images/OurLeadershipTeam/team-rohan.webp";
import teamElena from "../assets/images/OurLeadershipTeam/team-elena.webp";
import commitmentTeamwork from "../assets/images/OurLeadershipTeam/commitment-teamwork.png";

const ourLeadershipTeam = {
  breadcrumb: {
    section: "Why 3rd EdHum",
    category: "About Us",
    current: "Our Leadership Team",
  },

  hero: {
    eyebrow: "LEADERSHIP & OUR TEAM",
    titleStart: "The People Behind Meaningful",
    titleHighlight: "Transformation.",
    paragraphs: [
      "At 3rd EdHum, we believe that exceptional organisations are built by exceptional people. Behind every learning journey, consulting engagement, coaching conversation, and transformation initiative is a team of passionate professionals dedicated to helping individuals, teams, and organizations realize their highest potential.",
      "Our leadership combines decades of experience across business consulting, leadership development, executive coaching, organisational development, behavioural science, sales transformation, and Artificial Intelligence. Together, we bring a unique blend of strategic thinking, practical business expertise, and a deep understanding of human behaviour.",
      "We are more than facilitators we are consultants, coaches, learning architects, strategists, and partners in transformation.",
    ],
    image: leadershipHero,
  },

  founder: {
    eyebrow: "MEET OUR FOUNDER",
    name: "Manmeet Singh",
    promiseTitle: "OUR PROMISE",
    quote: "Organisations don't transform because they conduct more training. They transform because their people begin to think differently, lead differently, and perform differently",
    image: founderManmeet,
    paragraphs: [
      "Manmeet Singh founded 3rd EdHum with a clear vision to redefine corporate learning by making it directly relevant to business performance.",
      "Having worked extensively with organisations across diverse industries, he recognised that traditional training often focused on knowledge transfer rather than capability building. This insight became the foundation of 3rd EdHum's philosophy: learning must create measurable business outcomes.",
      "Today, Manmeet leads the organisation's consulting, leadership development, executive coaching, and innovation initiatives, partnering with organisations to develop leaders who can navigate complexity, inspire people, and build future-ready businesses.",
    ],
  },

  philosophy: {
    eyebrow: "OUR LEADERSHIP PHILOSOPHY",
    title: "How We Create Extraordinary Impact",
    description: "Manmeet believes that every leader has the potential to create extraordinary impact when equipped with the right mindset, skills, and support. His approach blends behavioural science, coaching, business strategy, and experiential learning to help leaders grow with authenticity, empathy, and accountability.",

    cards: [
      {
        id: 1,
        icon: Brain,
        title: "Behavioural Science",
        description: "Understand human behaviour",
      },
      {
        id: 2,
        icon: Rocket,
        title: "Coaching",
        description: "Personalized growth support",
      },
      {
        id: 3,
        icon: TrendingUp,
        title: "Business Strategy",
        description: "Connect to outcomes",
      },
      {
        id: 4,
        icon: GraduationCap,
        title: "Experiential Learning",
        description: "Learning through doing",
      },
    ],
  },

  team: {
    eyebrow: "OUR TEAM",
    title: "A Diverse Team. A Shared Purpose",
    description: "Behind every successful client engagement is a dedicated team committed to delivering excellence.",

    members: [
      {
        id: 1,
        name: "Sheekha",
        role: "City Lead Banglore",
        description: "\"At 3rdEdhum, we believe change happens when leaders focus on their people.\"",
        image: teamSheekha,
      },
      {
        id: 2,
        name: "Juhi",
        role: "City Lead Mumbai",
        description: "\"Specialises in leadership development, behavioural science, and creating impactful learning experiences.\"",
        image: teamJuhi,
      },
      {
        id: 3,
        name: "Krishna",
        role: "Technical Leader",
        description: "\"Expert in business strategy, change management, and driving operational excellence across industries.\"",
        image: teamRohan,
      },
      {
        id: 4,
        name: "Elena Petrova",
        role: "Innovation",
        description: "\"Drives innovation, digital adoption, and scalable growth through data driven solutions.\"",
        image: teamElena,
      },
    ],

    closingText: "Together, we bring diverse expertise and a shared passion for creating meaningful transformation.",
  },

  commitment: {
    eyebrow: "OUR COMMITMENT",
    title: "At 3rd EdHum, leadership is more than expertise it is about service, integrity, and creating lasting value.",
    image: commitmentTeamwork,
    description: "Every member of our team shares a common purpose.",
    secondDescription: "Together, we are committed to building workplaces where people thrive, leaders inspire, and businesses grow.",

    points: [
      {
        id: 1,
        icon: GraduationCap,
        text: "To inspire continuous learning.",
      },
      {
        id: 2,
        icon: UserRound,
        text: "To help leaders unlock their potential.",
      },
      {
        id: 3,
        icon: UsersRound,
        text: "To strengthen teams and organisational culture.",
      },
      {
        id: 4,
        icon: BarChart3,
        text: "To enable businesses to achieve sustainable success.",
      },
      {
        id: 5,
        icon: ShieldCheck,
        text: "To prepare organisations for the future of work.",
      },
    ],
  },

  joinTeam: {
    eyebrow: "JOIN OUR TEAM",
    title: "We are always looking for passionate professionals who believe in the power of learning, leadership, and human potential.",
    description: "Whether you are an experienced consultant, facilitator, coach, instructional designer, AI specialist, or corporate trainer, we invite you to be part of our mission to build better leaders and stronger organisations.",
    closing: "If you are passionate about creating meaningful impact, we'd love to hear from you.",
  },
};

export default ourLeadershipTeam;