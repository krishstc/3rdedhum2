import insightsImage from "../assets/images/insight.png";
import insightsPromoImage from "../assets/images/insights2.png";

const insightsData = {
  intro: {
    title: "INSIGHTS",
    description: "Stay informed with the latest thinking, research, and trends in leadership and learning.",
    image: insightsImage,
  },

  columns: [
    {
      title: "THOUGHTS & RESEARCH",
      items: [
        { label: "Articles", icon: "▤" },
        { label: "Latest Trends", icon: "⌁" },
        { label: "Research & Reports", icon: "◫" },
        { label: "Global Forecast", icon: "◎" },
        { label: "Client Results & ROI", icon: "◉" },
      ],
    },

    {
      title: "MEDIA & RESOURCES",
      items: [
        { label: "Webinars", icon: "▣" },
        { label: "Podcasts", icon: "♟" },
        { label: "Videos", icon: "▶" },
        { label: "Whitepapers", icon: "▤" },
        { label: "Downloadable Resources", icon: "↓" },
      ],
    },

    {
      title: "EVENTS",
      items: [
        { label: "Upcoming Events", icon: "▦" },
        { label: "Past Events", icon: "↗" },
        { label: "Better Leaders Summit", icon: "♟" },
        { label: "Workshop & Roundtables", icon: "♧" },
      ],
    },
  ],

  promo: {
    icon: "💡",
    title: "Knowledge Drives, Better Leaders.",
    description: "Explore insights that inspire action and help you lead with confidence.",
    image: insightsPromoImage,
    button: "Explore All Insights",
  },
};

export default insightsData;