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
  branddy,
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
    title: "React & Next.js Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Node.js Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
  },
  {
    title: "AI & ML Engineer",
    icon: creator,
  },
  {
    title: "Cloud Infrastructure",
    icon: backend,
  },
  {
    title: "Docker and Kubernetes",
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
    title: "Full Stack Developer & Team Lead",
    company_name: "My Local Force ",
    company_website: "https://mylocalforce.com.au/",
    icon: bizav,
    iconBg: "#E6DEDD",
    date: "May 2025 - Nov 2025",
    points: [
      "Developed comprehensive digital solutions platform using React.js, Next.js, and Node.js for Australian businesses",
      "Built scalable web applications and mobile applications with modern tech stack including TypeScript, MongoDB,React Native and cloud infrastructure",
      "Delivered full-stack solutions with responsive design and optimal performance, achieving 40% faster load times",
    ],
  },
  {
    title: "Software Engineer & Team Lead",
    company_name: "BookMyJet (Full-time)",
    company_website: "https://www.bookmyjet.co/",
    icon: bizav,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - NOV 2025",
    points: [
      "Leading development of premier aviation marketplace platform using React.js, React Native, Next.js and Node.js",
      "Built and scaled mobile applications serving thousands of users with real-time booking and charter services",
      "Architected microservices backend with Node.js and MongoDB, handling high-traffic aviation data",
      "Mentoring team of 5+ developers, conducting code reviews, and driving adoption of best practices and modern tech stack",
    ],
  },
  {
    title: "Senior Full Stack Developer",
    company_name: "Nebulixus ",
    company_website: "https://nebulixus.com",
    icon: branddy,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - May 2024",
    points: [
      "Developed enterprise web and mobile applications using React.js, React Native, Next.js, and TypeScript",
      "Built scalable SaaS platforms with Node.js, Express, and MongoDB serving 10,000+ active users",
      "Implemented cloud infrastructure on AWS with CI/CD pipelines, reducing deployment time by 60%",
      "Led mobile app development projects using React Native, delivering cross-platform solutions for iOS and Android",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Branddy (Contract)",
    company_website: "https://branddy.net/",
    icon: branddy,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - May 2023",
    points: [
      "Developed groundbreaking CRM software for Spain-based firm using React.js, Next.js, and Node.js",
      "Built SaaS platform with MERN stack to manage sales data for multiple clients",
      "Optimized frontend performance achieving 20% reduction in page load time with Next.js optimization techniques",
      "Created transaction report generator with Node.js, reducing report generation time by 50%",
    ],
  },
];

const projects = [
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
    hosted_link: "https://bad-desi.vercel.app/",
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
  role: "Software Developer & Freelancer",
  about: `I'm a Full Stack Developer, Team Lead, and Freelancer with extensive experience in modern web and mobile application development. Expert in React.js, Next.js, React Native, Node.js, and TypeScript. I specialize in building scalable enterprise applications, mobile apps, and have strong expertise in Artificial Intelligence, Blockchain technologies, Cloud Infrastructure (AWS/Azure), and Web3 development. I've successfully led development teams and delivered innovative solutions for aviation, healthcare, e-commerce, and enterprise sectors worldwide. As a freelancer, I collaborate closely with clients to transform their vision into high-performance, user-centric applications. Let's work together to bring your ideas to life!`,
  projectsIntro: `Following projects showcase my expertise in web and mobile application development through
  real-world examples. Each project features modern technologies like Next.js, React Native, and cloud solutions
  with live demos. These projects reflect my ability to solve complex problems, build scalable applications, 
  and deliver world-class solutions as both a team lead and freelancer.`,
};

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
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
