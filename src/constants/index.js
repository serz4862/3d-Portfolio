import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  bizav,
  aptihealthApp,
  Bookmyjet,
  BadAndDesi,
  MyLocalForce,
  QuantumCapital,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack AI Engineer",
    icon: creator,
  },
  {
    title: "Agentic Systems & RAG",
    icon: web,
  },
  {
    title: "React, Next.js & TypeScript",
    icon: mobile,
  },
  {
    title: "Cloud Systems on AWS",
    icon: backend,
  },
  {
    title: "APIs & Distributed Systems",
    icon: backend,
  },
  {
    title: "0-to-1 Startup Engineering",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextJs,
  },
  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full-Stack AI Engineer",
    company_name: "Bluemoon Marketing",
    company_website: "https://kpi.bluemoonmarketing.com.au/",
    monogram: "BM",
    iconBg: "#38bdf8",
    date: "Sep 2025 – Present",
    location: "Remote, Australia",
    current: true,
    points: [
      "Building Performance KPI, a multi-tenant AI SaaS on Next.js and AWS that turns messy inputs into leadership briefings.",
      "Designing agentic systems, including a RAG support agent with conversation memory and confidence-based escalation into developer tooling.",
      "Owning architecture and deploys with Docker, Nginx, and EC2 for 0-to-1 startup delivery.",
      "Shipping applied AI that tightens HR performance-management workflows as the data layer scales.",
    ],
  },
  {
    title: "Full Stack Developer & Team Lead",
    company_name: "Fieldnerve",
    company_website: "https://fieldnerve.com/",
    monogram: "FN",
    iconBg: "#34d399",
    date: "Sep 2024 – Sep 2026",
    location: "Gurugram, India",
    points: [
      "Founding engineer owning architecture and technical decisions for cloud systems and mobile apps in React and Node.js.",
      "Turning ambiguous business requirements into documented, scalable systems inside Agile sprints.",
      "Owning end-to-end deployment and production reliability, and setting Git discipline for the team.",
      "Building a ground-up engineering culture around testing and code standards so the startup could grow fast.",
    ],
  },
  {
    title: "Full Stack Developer & Team Lead",
    company_name: "Bizav International",
    company_website: "https://www.bookmyjet.co/",
    icon: bizav,
    iconBg: "#E6DEDD",
    date: "Apr 2023 – Aug 2024",
    location: "New Delhi, India",
    points: [
      "Led a small engineering team building responsive products with React.js and distributed-systems architecture.",
      "Partnered with product and design to architect high-performance APIs and ship features on aggressive schedules.",
      "Drove code review standards and CI/CD-oriented Git workflows as headcount grew.",
      "Tuned MongoDB data infrastructure to improve response times for web and mobile users.",
    ],
  },
  {
    title: "Full Stack Developer & Team Lead",
    company_name: "My Local Force",
    company_website: "https://mylocalforce.com.au/",
    icon: MyLocalForce,
    iconBg: "#fbbf24",
    date: "Jan 2022 – Mar 2023",
    location: "Remote, Australia",
    points: [
      "Owned frontend architecture and backend APIs for a 0-to-1 platform using React.js and Node.js.",
      "Designed a recommendation algorithm for service matching and shipped it into production.",
      "Acted as sole remote technical lead, setting direction for a distributed team.",
      "Modeled PostgreSQL schemas that kept complex matching logic available and reliable.",
    ],
  },
];

const education = [
  {
    title: "B.Tech, Computer Science & Engineering",
    company_name: "SRM Institute of Science and Technology",
    monogram: "SRM",
    iconBg: "#c084fc",
    date: "Jan 2020 – Jan 2024",
    location: "Chennai, India",
    points: [
      "Blockchain specialization, GPA 9.33 / 10.",
      "The foundation under the startup work: systems, data, and shipping under real constraints.",
    ],
  },
];

const projects = [
  {
    name: "PerformanceKPI",
    description:
      "Multi-tenant performance workspace for Bluemoon Marketing. Daily KPI self-reviews, monthly manager ratings, and quarterly PMS with director sign-off, plus leave, attendance, and an audit trail. An LLM layer turns the scores into leadership briefings.",
    tags: [
      { name: "next.js", color: "blue-text-gradient" },
      { name: "aws", color: "green-text-gradient" },
      { name: "applied-ai", color: "pink-text-gradient" },
    ],
    cover: { kicker: "Live · Bluemoon", from: "#0284c7", to: "#0f172a" },
    hosted_link: "https://kpi.bluemoonmarketing.com.au/",
  },
  {
    name: "FieldNerve",
    description:
      "GenAI-native, offline-first infrastructure intelligence platform. Agentic automation across construction, rail, mining, and industrial sites — field activity, planning, and risk in one operational command surface.",
    tags: [
      { name: "agentic-ai", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "node.js", color: "pink-text-gradient" },
    ],
    cover: { kicker: "Live · FieldNerve", from: "#059669", to: "#042f2e" },
    hosted_link: "https://fieldnerve.com/",
  },
  {
    name: "Book My Jet",
    description:
      "THE PREMIER PLATFORM FOR AIR CHARTER SOURCING WORLDWIDE. Comprehensive aviation marketplace with React Native mobile app connecting clients with private jet services globally.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: Bookmyjet,
    hosted_link: "https://www.bookmyjet.co/",
  },
  {
    name: "My Local Force",
    description:
      "A comprehensive digital solutions platform for Australian businesses. Built with Next.js, featuring AI-powered solutions, cloud infrastructure, and modern web technologies.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: MyLocalForce,
    hosted_link: "https://mylocalforce.com.au/",
  },
  {
    name: "Bad and Desi",
    description:
      "A modern e-commerce web application showcasing innovative design and seamless user experience. Built with Next.js and React for exceptional performance and engagement.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: BadAndDesi,
    hosted_link: "https://www.badanddesi.com/",
  },
  {
    name: "Aptihealth App",
    description:
      "Access top-notch mental healthcare anytime, anywhere in New York State with our innovative app. Track your progress, schedule appointments, and connect with expert therapists for personalized care.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sendbird",
        color: "green-text-gradient",
      },
      {
        name: "twilio",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthApp,
    hosted_link: "https://apps.apple.com/us/app/aptihealth/id1477170874",
  },
  {
    name: "Quantum Capital",
    description:
      "Quantum Capital is a leading investment firm that provides capital to early-stage startups. It is a venture capital firm that invests in startups that are at the early stage of their growth.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "AI/ML",
        color: "pink-text-gradient",
      },
    ],
    image: QuantumCapital,
    hosted_link: "https://quantum-capital.vercel.app/",
  },
 
];

const personalInfo = {
  name: "Saurav Kumar",
  fullName: "Saurav Kumar",
  email: "sauravkumar4862@gmail.com",
  phone: "+91 6207531016",
  role: "Full-Stack AI Engineer",
  headlineBits: [
    "agentic systems",
    "RAG pipelines",
    "0-to-1 products",
    "cloud systems",
  ],
  about: `Full-Stack AI Engineer with 4+ years in startup engineering and production applied AI. I take ambiguous 0-to-1 problems and ship scalable cloud systems with Python, TypeScript, and React — agentic systems, robust APIs, and the unglamorous infrastructure that keeps them alive. Right now that means a multi-tenant AI SaaS and a RAG support agent that knows when to hand off to a human.`,
  projectsIntro: `A few products I have shipped or shaped: marketplaces, service platforms, and early-stage builds. Each one is a live surface, not a mock. They sit next to the day job — applied AI, agentic systems, and the cloud work that keeps startups moving.`,
};

const skillLanes = [
  {
    title: "AI & Agents",
    blurb: "Models that finish a job, and know when to hand it to a person.",
    items: [
      {
        name: "Agentic systems",
        percentage: 93,
        icon: "🤖",
        tools: ["LangGraph", "tool use", "memory", "handoff"],
      },
      {
        name: "RAG pipelines",
        percentage: 91,
        icon: "📚",
        tools: ["retrieval", "citations", "confidence"],
      },
      {
        name: "LLMs in production",
        percentage: 90,
        icon: "✨",
        tools: ["OpenAI", "Claude", "evals"],
      },
      {
        name: "Python for applied AI",
        percentage: 88,
        icon: "🐍",
        tools: ["Python", "data", "orchestration"],
      },
    ],
  },
  {
    title: "Product & Cloud",
    blurb: "The product and the infrastructure the agent actually runs on.",
    items: [
      {
        name: "React, Next.js & TypeScript",
        percentage: 95,
        icon: "⚛️",
        tools: ["Next.js", "React", "TypeScript"],
      },
      {
        name: "APIs",
        percentage: 92,
        icon: "🔌",
        tools: ["REST", "GraphQL", "Node.js"],
      },
      {
        name: "AWS & delivery",
        percentage: 88,
        icon: "☁️",
        tools: ["EC2", "Docker", "Nginx", "CI/CD"],
      },
      {
        name: "Data stores",
        percentage: 87,
        icon: "🗄️",
        tools: ["PostgreSQL", "MongoDB", "Redis"],
      },
    ],
  },
];

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1jx1KaGNw-IbcCYfGc7-QiYGW5PQNe-if/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/saurav-kumar-92bb521a8/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/serz4862",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  education,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
  skillLanes,
};
