import executiveCoachingHero from "../assets/images/ExecutiveCoaching/executive-coaching-hero.jpg";
import executiveCoachingPerspective from "../assets/images/ExecutiveCoaching/executive-coaching-perspective.jpg";
import executiveCoachingApproach from "../assets/images/ExecutiveCoaching/executive-coaching-approach.jpg";
import executiveCoachingCta from "../assets/images/ExecutiveCoaching/executive-coaching-cta.jpg";

const executiveCoachingData = {
  hero: {
    eyebrow: "EXECUTIVE COACHING",
    title: "From New Roles to\nBigger Impact.",
    description:
      "Executive coaching at 3rdEdHum helps leaders pause, reflect and move forward with clarity. We enable you to make an impact.",
    image: executiveCoachingHero,
    imageAlt: "Leadership team collaborating together",
    buttons: [
      {
        label: "Explore Coaching",
        type: "primary",
      },
      {
        label: "Download Brochure",
        type: "secondary",
      },
    ],
    impactItems: [
      {
        icon: "users",
        title: "Individuals",
        subtitle: "Grow",
      },
      {
        icon: "usersRound",
        title: "Teams",
        subtitle: "Perform",
      },
      {
        icon: "chart",
        title: "Leaders",
        subtitle: "Evolve",
      },
      {
        icon: "building",
        title: "Organizations",
        subtitle: "Transform",
      },
    ],
  },

  perspective: {
    eyebrow: "OUR PERSPECTIVE",
    title:
      "Because Sometimes,\nYou Don’t Need Another Answer.\nYou Need a Better Perspective.",
    description:
      "Coaching creates a safe space to pause, think deeply and explore new possibilities, so you can lead with greater clarity and confidence.",
    image: executiveCoachingPerspective,
    imageAlt: "People discussing ideas",
    points: [
      {
        icon: "users",
        label: "PEOPLE",
      },
      {
        icon: "lightbulb",
        label: "IDEAS",
      },
      {
        icon: "eye",
        label: "PERSPECTIVES",
      },
      {
        icon: "chart",
        label: "PROGRESS",
      },
    ],
    caption: "Pause. Reflect. Reframe. Lead.",
  },

  whoWeCoach: {
    eyebrow: "WHO WE COACH",
    title: "Coaching for Every\nStage of Leadership",
    description:
      "From emerging leaders to CXOs, we support professionals at every stage to build self-awareness, confidence and a greater impact.",
    button: "Explore Our Programs →",
    cards: [
      {
        title: "Emerging\nLeaders",
        description:
          "Build confidence, clarity and stronger leadership skills.",
        icon: "users",
        color: "green",
      },
      {
        title: "Managers & Mid-\nLevel Leaders",
        description:
          "Navigate complexity and lead with clarity.",
        icon: "briefcase",
        color: "blue",
      },
      {
        title: "CXOs & Business\nLeaders",
        description:
          "Drive strategic growth and organizational impact.",
        icon: "barChart",
        color: "yellow",
      },
      {
        title: "Senior Leaders\n& Executives",
        description:
          "Lead with greater influence and create lasting impact.",
        icon: "crown",
        color: "purple",
      },
    ],
  },

  focusAreas: {
    eyebrow: "FOCUS AREAS",
    title: "Real Conversations\nAbout Real Challenges",
    description:
      "Our coaching can focus on the areas that matter most to you right now.",
    items: [
      {
        icon: "leadership",
        title: "Leadership\nPresence",
      },
      {
        icon: "decision",
        title: "Decision-Making",
      },
      {
        icon: "communication",
        title: "Communication",
      },
      {
        icon: "stakeholder",
        title: "Stakeholder\nManagement",
      },
      {
        icon: "conversation",
        title: "Difficult\nConversations",
      },
      {
        icon: "growth",
        title: "Career Growth",
      },
      {
        icon: "delegation",
        title: "Delegation",
      },
      {
        icon: "effectiveness",
        title: "Work-Life\nEffectiveness",
      },
    ],
  },

  approach: {
    eyebrow: "OUR APPROACH",
    title: "Awareness → Clarity → Choice → Action",
    description:
      "A simple but powerful progression that helps turn your insight into meaningful change.",
    steps: [
      {
        icon: "awareness",
        title: "Awareness",
        description: "See yourself and situations with greater clarity.",
      },
      {
        icon: "clarity",
        title: "Clarity",
        description: "Understand what truly matters.",
      },
      {
        icon: "choice",
        title: "Choice",
        description: "Explore your options.",
      },
      {
        icon: "action",
        title: "Action",
        description: "Take meaningful steps.",
      },
    ],
    image: executiveCoachingApproach,
    imageAlt: "Person moving toward a mountain",
    imageTitle: "TURNING\nINSIGHT\nINTO\nIMPACT",
  },

  difference: {
    eyebrow: "WHAT MAKES US DIFFERENT",
    title: "Human. Practical. Business-Focused.",
    description:
      "We listen before we advise. We work with your reality. We challenge with respect. We focus on behaviour and impact in view.",
    points: [
      {
        title: "Personalised\nApproach",
        icon: "person",
      },
      {
        title: "Real-World\nExperience",
        icon: "briefcase",
      },
      {
        title: "Partner in\nYour Growth",
        icon: "growth",
      },
    ],
  },

  impact: {
    eyebrow: "THE IMPACT",
    title: "Real People. Real Progress.",
    stats: [
      {
        value: "100+",
        label: "Leaders\nCoached",
      },
      {
        value: "85%",
        label: "Stronger Greater\nImpact",
      },
      {
        value: "90%",
        label: "Reported Learning\nAt Work",
      },
      {
        value: "4.8/5",
        label: "Participant\nSatisfaction",
      },
    ],
    quote:
      "Coaching helped me see challenges from a completely new perspective and lead with confidence.",
    author: "From a Participant",
  },

  cta: {
    eyebrow: "READY TO THINK DIFFERENTLY?",
    title: "A Conversation Can Be\nthe Beginning of Change.",
    description:
      "Whether you are an individual looking to grow or an organisation building stronger leadership, we’re here to help.",
    image: executiveCoachingCta,
    buttons: [
      "For Individuals →",
      "For Organisations →",
    ],
  },
};

export { executiveCoachingData };
export default executiveCoachingData;