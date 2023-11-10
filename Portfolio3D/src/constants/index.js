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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  plataforma5,
  bitech,
  shopify,
  adventure,
  pipe,
  tpm,
  hotel,
  homeland,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
    name: "React JS",
    icon: reactjs,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Introductory programming course",
    company_name: "Plataforma 5",
    icon: plataforma5,
    iconBg: "#E6DEDD",
    date: "May 2020 - July 2020",
    points: [
      "I designed my first Full Stack website and studied for the coding Bootcamp entrance exam.",
      "This course is designed to learn the basics of programming from scratch.",
      "There were 63 hours of theoretical-practical content where I learned HTML, CSS and JavaScript with videos, guides, tests, exercises and projects.",
      "At the end of the course I was able to Understand the theoretical bases of Web programming, Solve exercises and challenges of medium complexity with JavaScript and Create a Full Stack web page with a CRUD project.",
    ],
    source_code_link:"https://www.plataforma5.la/intro",
  },
  {
    title: "Coding Bootcamp",
    company_name: "Plataforma 5",
    icon: plataforma5,
    iconBg: "#383E56",
    date: "September 2021 - December 2021",
    points: [
      "In this course they accompanied me in a personalized way in the different stages of training and at different levels (technical, professional and personal).",
      "At a technical level I had more than 1000 hours of training in the latest technologies and projects proposed by real companies",
      "I learned technologies like JavaScript, Node.js, Express, Sequelize, MongoDB, React, Redux, SQL, GitHub, JWT, Scrum.",
    ],
    source_code_link:"https://www.plataforma5.la/bootcamp/javascript",
  },
  {
    title: "Freelancer",
    company_name: "[BITECH]",
    icon: bitech,
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "[BITECH] is a small business that I created with my partner, where we develop websites as a freelancer.",
      "We develop frontend and backend of websites.",
    ],
    source_code_link:"https://www.instagram.com/bitech01/",
  },
];

const projects = [
  {
    name: "Adventure | FullStack",
    description: [
      "Group (6 people) | Scrum",
      "Development of an E-commerce of tourist experiences and services.",
    ],
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Passpport",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: adventure,
    source_code_link: "https://github.com/ThomasBrets/ecommerce-1",
  },
  {
    name: "Pipe | Backend",
    description: [
      "Individual.",
      "Development of an E-commerce for the sale of clothing and accessories.",
    ],
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Passpport",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: pipe,
    source_code_link: "https://github.com/ThomasBrets/Pipe.git",
  },
  {
    name: "TPM | Backend",
    description: [
      "The Perfect Mentor",
      "Pair programming.",
      "API to find a private teacher for a specific topic.",
    ],
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "JWT",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tpm,
    source_code_link: "https://github.com/ThomasBrets/ThePerfectMentor.git",
  },
  {
    name: "Aldina Hotel | Frontend",
    description: [
      "The Perfect Mentor",
      "Individual.",
      "Development of a Hotel page to reserve rooms.",
    ],
    tags: [
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
    ],
    image: hotel,
    source_code_link: "https://github.com/ThomasBrets/Hotel.git",
  },
  {
    name: "Homeland | Frontend",
    description: [
      "Individual.",
      "Development of a real estate page to find and buy your ideal property.",
    ],
    tags: [
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
    ],
    image: homeland,
    source_code_link: "https://github.com/ThomasBrets/Real-State.git",
  },
];

export { services, technologies, experiences, projects };
