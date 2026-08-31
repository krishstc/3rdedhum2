import {
  FaUsers,
  FaLightbulb,
  FaBullseye,
  FaHandshake,
  FaPencilAlt,
} from "react-icons/fa";

import heroWhoWeAre from "../assets/images/AboutUs/hero-who-we-are.jpg";
import meaningStones from "../assets/images/AboutUs/meaning-stones.png";
import whatWeDoBooks from "../assets/images/AboutUs/what-we-do-books.png";
import whatWeDoCoffee from "../assets/images/AboutUs/what-we-do-coffee.png";

const whoWeAreData = {
  breadcrumb: ["Home", "Why 3rd EdHum", "Who We Are"],

  hero: {
    label: "WHO WE ARE",

    title:
      "More Than a Learning Company, A Partner in Human and Business Growth.",

    description:
      "Every organization has a story. Some are built around innovation. Some around technology. Others around products or services. 3rd EdHum was built around people.",

    belief:
      "We believe that the greatest competitive advantage any organization will ever have is not its technology, infrastructure, or processes. It is people. When individuals discover their potential, teams become stronger. When teams become stronger, businesses achieve success.",

    paragraphOne:
      "That simple belief has guided us since our inception in 2019, and it continues to shape every conversation, every partnership, and every solution we create.",

    paragraphTwo:
      "At 3rd EdHum, we don't see learning as an event that ends when participants leave a classroom. We see it as a journey that changes the way people think, communicate, lead, collaborate, and make decisions. Because when learning becomes part of everyday work, organizations don't just improve - they evolve.",

    northStarTitle: "Our North Star",

    northStarDescription:
      "The greatest competitive advantage any organization will ever have is not its technology, infrastructure, or processes.",

    northStarHighlight: "It is its people.",

    founded: "2019",

    heroImage: heroWhoWeAre,
  },

  meaning: {
    label: "OUR NAME, OUR PURPOSE",

    title: "The Meaning Behind Our Name",

    description:
      "People often ask what 3rd EdHum means. For us, it's much more than a name. It's the story of why we exist.",

    cards: [
      {
        short: "3rd",
        title: "From the Third Force of Psychology",

        description:
          "Humanistic Theory introduced by Carl Rogers and Abraham Maslow. This school of thought shifted focus from what is wrong with people to what is possible for them.",
      },

      {
        short: "Ed",
        title: "Stands for Education",

        description:
          "Stands for Education not education as information, but education as transformation. True learning changes behaviour, broadens perspectives, and builds confidence that lasts.",
      },

      {
        short: "Hum",
        title: "Stands for Human",

        description:
          "Stands for Humans because no matter how advanced technology becomes, organizations will always be powered by people. Human relationships, emotional intelligence, and collaboration remain at the heart of success.",
      },
    ],

    purpose:
      "Together, our name reflects our purpose: unlocking human potential through meaningful learning.",

    stonesImage: meaningStones,
  },

  whyWeExist: {
    title: "Why We Exist",

    quote:
      "What if learning could become one of the most powerful drivers of business success?",

    description:
      "For too long, learning was viewed as a calendar activity - something employees attended before returning to work exactly as they were. We believed organizations deserved something better.",

    closing: "That belief continues to define who we are today.",
  },

  learningPrinciples: [
    {
      icon: FaLightbulb,
      title: "Inspire New Thinking",

      description:
        "Learning should inspire people to think differently and approach challenges with fresh eyes and renewed confidence.",
    },

    {
      icon: FaUsers,
      title: "Build Leadership Courage",

      description:
        "It should give leaders the confidence to lead through uncertainty, navigating complexity without losing sight of their people.",
    },

    {
      icon: FaBullseye,
      title: "Create Lasting Results",

      description:
        "Most importantly, it should create results that are visible long after the workshop ends, visible in behaviour, in culture, and in performance.",
    },
  ],

  howWeThink: {
    title: "How We Think",

    description:
      "We don't believe in delivering one-size-fits-all solutions. Every organization has its own story, culture, ambitions, and challenges. That's why we begin by listening.",

    points: [
      {
        icon: FaUsers,
        title: "Listen Deeply",
        description:
          "Understand people, culture, aspirations and context.",
      },

      {
        icon: FaHandshake,
        title: "Partner Fully",
        description:
          "Walk alongside through delivery.",
      },

      {
        icon: FaPencilAlt,
        title: "Design Intentionally",
        description:
          "Create tailored, practical solutions.",
      },

      {
        icon: FaUsers,
        title: "Partnership, Not Transaction",
        description:
          "For us, every engagement is a partnership built on genuine care for the client's success, not a transactional exchange of services or fees.",
      },

      {
        icon: FaBullseye,
        title: "Context-Driven Design",
        description:
          "We tailor every solution to the unique culture, ambitions, and realities of the organization we are working with because context shapes impact.",
      },
    ],
  },

  whatWeDo: {
    label: "OUR WORK",

    title: "What We Do",

    description:
      "Our work is never really about programs. It is about helping organizations become stronger by helping people become better. Every engagement, every solution, every conversation begins and ends with that singular commitment.",

    booksImage: whatWeDoBooks,

    coffeeImage: whatWeDoCoffee,
  },

  cta: {
    title: "Helping Others Through Learning.",

    description:
      "It has always been our purpose. It will always be our promise.",

    button: "Join Our Journey",

    whatsappNumber: "919967399069",
  },
};

export default whoWeAreData;