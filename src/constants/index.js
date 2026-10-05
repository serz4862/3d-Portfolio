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
  MyLocalForce,
  aptihealthApp,
  aigence,
  performancekpi,
  fieldnerve,
  bookmyjetLive,
  mylocalforceLive,
  badanddesiLive,
  quantumcapitalLive,
  linkedIn,
  github,
  brookfield,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  profiles: "profiles",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.profiles,
    title: "Profiles",
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
    title: "Agency Founder",
    company_name: "AiGenC",
    company_website: "https://aigence.in/",
    monogram: "AG",
    iconBg: "#7dd3fc",
    date: "Present",
    location: "Agency Operating System",
    current: true,
    points: [
      "Founding AiGenC, the operating system at aigence.in: lead discovery, outreach, CRM, and delivery in one product.",
      "Building the agent bot that turns a single ICP into platform-native queries, pulls live sources, and stages CRM-ready companies.",
      "Keeping a human gate on send so email, WhatsApp, and Telegram only go out after approval.",
    ],
  },
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
  {
    title: "Database Management & Analyst",
    company_name: "Brookfield Aviation International",
    company_website: "https://www.brookfieldav.com/",
    icon: brookfield,
    iconBg: "#ffffff",
    date: "6-month contract",
    location: "First professional role · Aviation",
    firstRole: true,
    points: [
      "Helped develop an aviation operations database spanning fleet, pilot, and administrator workflows.",
      "Built and maintained core fleet, pilot, and admin modules for distinct operational user roles.",
      "Analyzed operational data with Microsoft Excel and Power BI to support accurate, decision-ready reporting.",
      "Delivered dependable work against project deadlines in a specialist aviation environment.",
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
    name: "AiGenC",
    featured: true,
    role: "Agency Founder",
    description:
      "Agency operating system I am founding. One product from first signal to shipped work: lead intelligence across maps, directories, LinkedIn, and search, then outreach, CRM, and client delivery without a tool switch.",
    agent:
      "The agent bot sits in the middle of that loop. An operator describes who they want once. The bot refines a query per platform, retrieves live companies, and holds every email, WhatsApp, and Telegram draft behind a human approval gate.",
    tags: [
      { name: "agentic-ai", color: "blue-text-gradient" },
      { name: "next.js", color: "green-text-gradient" },
      { name: "rag", color: "pink-text-gradient" },
    ],
    image: aigence,
    hosted_link: "https://aigence.in/",
  },
  {
    name: "PerformanceKPI",
    role: "Full-Stack AI Engineer",
    description:
      "Multi-tenant performance workspace for Bluemoon Marketing. Daily KPI self-reviews, monthly manager ratings, and quarterly PMS with director sign-off, plus leave, attendance, and an audit trail.",
    agent:
      "An LLM layer turns those scores into leadership briefings, the same applied-AI habit as the support agent: synthesize the record, then hand a person something they can act on.",
    tags: [
      { name: "next.js", color: "blue-text-gradient" },
      { name: "aws", color: "green-text-gradient" },
      { name: "applied-ai", color: "pink-text-gradient" },
    ],
    image: performancekpi,
    hosted_link: "https://kpi.bluemoonmarketing.com.au/",
  },
  {
    name: "FieldNerve",
    role: "Founding Engineer",
    description:
      "GenAI-native, offline-first infrastructure platform. Construction, rail, mining, and industrial sites share one command surface for field activity, planning, and risk.",
    agent:
      "Agentic automation sits on the jobsite data: it anticipates delay and cost before they show up in a spreadsheet, and keeps the field record usable when the network drops.",
    tags: [
      { name: "agentic-ai", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "node.js", color: "pink-text-gradient" },
    ],
    image: fieldnerve,
    hosted_link: "https://fieldnerve.com/",
  },
  {
    name: "Book My Jet",
    role: "Team Lead",
    description:
      "Private jet charter marketplace. Operators, brokers, and passengers search a live fleet, compare quotes, and book without a monthly membership.",
    agent:
      "Built the web and mobile surfaces and the APIs behind real-time aircraft search, quotes, and booking for a distributed team.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "next.js", color: "green-text-gradient" },
      { name: "node.js", color: "pink-text-gradient" },
    ],
    image: bookmyjetLive,
    hosted_link: "https://www.bookmyjet.co/",
  },
  {
    name: "My Local Force",
    role: "Team Lead",
    description:
      "0-to-1 service platform for Australian businesses. Customers discover local services, book, pay, and manage requests on the web and in the mobile apps.",
    agent:
      "The matching layer recommends services from the live catalog, backed by PostgreSQL schemas that keep that logic available for a remote team.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
    ],
    image: mylocalforceLive,
    hosted_link: "https://mylocalforce.com.au/",
  },
  {
    name: "Bad and Desi",
    role: "Product build",
    description:
      "Global platform for South Asian creators. Verified creators post projects, emerging talent applies, and collaborations stay on one map.",
    agent:
      "Profiles, project posts, and the creator atlas sit in one Next.js app so a collab does not die in a spreadsheet.",
    tags: [
      { name: "next.js", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
    ],
    image: badanddesiLive,
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
    role: "Product build",
    image: aptihealthApp,
    hosted_link: "https://apps.apple.com/us/app/aptihealth/id1477170874",
  },
  {
    name: "Quantum Capital",
    role: "Product build",
    description:
      "Startup ecosystem for founders and investors. AI-generated sites and apps, automation, and funding connections in one platform.",
    agent:
      "The product walks a company from a first build to investor matching, with the same system of record on both sides of the table.",
    tags: [
      { name: "next.js", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "ai", color: "pink-text-gradient" },
    ],
    image: quantumcapitalLive,
    hosted_link: "https://quantum-capital.vercel.app/",
  },
 
];

const personalInfo = {
  name: "Saurav Kumar",
  fullName: "Saurav Kumar",
  email: "sauravkumar4862@gmail.com",
  phone: "+91 6207531016",
  role: "Full-Stack AI Engineer",
  availability: "Open to ambitious product and AI engineering opportunities",
  headlineBits: [
    "agentic systems",
    "RAG pipelines",
    "0-to-1 products",
    "cloud systems",
  ],
  about: `I am a full-stack AI engineer and the founder of AiGenC. I build useful, production-ready systems from the first product decision through architecture, interface, deployment, and iteration. My work spans agentic workflows, RAG, React and Next.js products, APIs, and AWS infrastructure — always with a strong bias toward clear user value and dependable delivery.`,
  projectsIntro: `AiGenC is the priority: the agency operating system I founded, and the agent bot inside it. The rest are products I have shipped — performance software, infrastructure intelligence, and earlier platforms.`,
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
    "https://drive.google.com/file/d/1oU0kDS9doLNf8QxSPugLvnyyNrvEcQpc/view?usp=sharing",
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
