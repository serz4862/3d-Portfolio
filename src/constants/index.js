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
  // nickelfox,
  bizav,
  branddy,
  brookfield,
  smartknower,
  aptihealthWeb,
  aptihealthApp,
  Bookmyjet,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
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
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
    icon: creator,
  },
  {
    title: "BlockChain Developer",
    icon: creator,
  },
  {
    title: "Artificial Intelligence",
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
    name: "Next JS",
    icon: nextJs,
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
    name: "Node JS",
    icon: nodejs,
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
    title: "Software Engineer & Team Lead",
    company_name: "Bizav International (full-time)",
    company_website: "https://bizaviation.net/",
    icon: bizav,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Present",
    points: [
      "Leading the design, development, and maintenance of web and mobile applications using React.js, React Native, and related technologies",
      "Collaborating with cross-functional teams, including designers, product managers, and developers, to deliver high-quality, innovative products",
      "Driving the implementation of responsive design principles and ensuring cross-browser compatibility across all projects",
      "Conducting code reviews, mentoring team members, and providing valuable feedback to enhance overall code quality and team performance",
    ],
  },

  {
    title: "Software Developer",
    company_name: "Branddy (Contract)",
    company_website: "www.branddy.net ",
    icon: branddy,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - May 2024",
    points: [
      "Developed a groundbreaking CRM software for a Spain-based firm, improved efficient management.",
      "Contributed on a SaaS project to store user’s sales data by working on both frontend and backend using MERN stack.",
      "Optimized frontend performance by achieving 20% reduction in page loading time and make it responsive.",
      "Created a transaction report generator, reducing report generation time by 50% and enhancing data analysis.",
    ],
  },
  {
    title: "Database Management and Analyst",
    company_name: "BROOKFIELD AVIATION INTERNATIONAL (contract)",
    company_website: "https://www.brookfieldav.com/",
    icon: brookfield,
    iconBg: "#E6DEDD",
    date: "May 2023 - Dec 2023",
    points: [
      "Contributed to the development of a database , empowering fleet and aviation to create and conduct operation seamlessly.",
      "Built three essential modules: fleet, pilot, and Admin, ensuring comprehensive functionality for all user roles.",
      "The data analyzed on MS Excel and power BI with 95% accuracy helped the company to generate revenue.",
      "Demonstrated strong problem-solving skills, consistently delivering high-quality code and meeting project deadlines.",
    ],
  },
  {
    title: "AI Developer",
    company_name: "internship",
    company_website: "http://www.smartknower.com",
    icon: smartknower,
    iconBg: "#E6DEDD",
    date: "Oct 2022- Mar 2023",
    points: [
      "Entity recognition using the Python libraries like pandas, NumPy, TensorFlow, OpenCV, Django, Flask,CherryPy..",
      "Created application on the entity and its specification detection with 83% accuracy.",
      "Curated and designed challenging coding problems for college competitions.",
    ],
  },
];

const projects = [
  {
    name: "Book My Jet",
    description:
      "THE PREMIER PLATFORM FOR AIR CHARTER SOURCING WORLDWIDE.Find Aircraft & Sell Trips with Ease",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
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
    name: "Zeal Web",
    description:
      "The Zeal website elevates the experience of enjoying activities with trusted friends, fostering connections and making every interaction exciting.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://getzeal.co/",
  },
  {
    name: "Zeal App",
    description:
      "Discover a world of activities with friends through Zeal, an engaging platform. Create events, post updates, chat, and enjoy in-person activities hassle-free. Boost your social life with Zeal!",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sendgrid",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp,
    hosted_link:
      "https://apps.apple.com/us/app/zeal-activities-with-friends/id6446917140",
  },
  {
    name: "Roll Web",
    description:
      "The Roll website is the gateway to the future of decentralized communities and digital assets. It allows users to seamlessly earn, redeem, send, and trade social tokens.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "formik",
        color: "pink-text-gradient",
      },
    ],
    image: rollWeb,
    hosted_link: "https://app.tryroll.com/",
  },
  {
    name: "Roll App",
    description:
      "Join the future of decentralized communities and digital assets with Roll. Earn, redeem, send, and trade social tokens on this innovative platform. Experience transparent transactions and captivating UI design.",
    tags: [
      {
        name: "react-native-web",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "storybook",
        color: "pink-text-gradient",
      },
    ],
    image: rollApp,
    hosted_link:
      "https://play.google.com/store/apps/details?id=com.roll&hl=en_GB",
  },
];

const personalInfo = {
  name: "Saurav Kumar",
  fullName: "Saurav Kumar",
  email: "sauravkumar4862@gmail.com",
  role: "Software Developer",
  about: `I'm a Full Stack Developer and Team Lead  with extensive experience in the MERN stack, proficient in TypeScript, JavaScript, and frameworks like React.js, React Native, and Node.js. I also have a strong background in Artificial Intelligence and Blockchain technologies, including Web3 and smart contract integration. I’ve successfully led the development of scalable, efficient, and user-centric web applications, delivering innovative solutions for a variety of industries. I collaborate closely with clients to understand their vision and provide tailored solutions that enhance user experience and solve real-world challenges. Let’s work together to bring your ideas to life!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://bit.ly/3SiSd1o",
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
