// import images
import Hero_person from "./assets/images/Hero/person1.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "../src/assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Senior Backend Engineer",
    firstName: "Usama",
    LastName: "Tariq",
    btnText: "Get In Touch",
    image: Hero_person,
    hero_content: [
      {
        count: "5+",
        text: "Years of Expert Backend Development",
      },
      {
        count: "15+",
        text: "Production Systems Engineered",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "BACKEND EXPERTISE",
    skills_content: [
      {
        name: "Laravel & PHP",
        para: "Enterprise-grade backend systems built with clean architecture principles and OOP design patterns",
        logo: figma,
      },
      {
        name: "Database Design",
        para: "MySQL optimization, Redis caching strategies, and high-performance query design",
        logo: nodejs,
      },
      {
        name: "System Architecture",
        para: "Scalable API design, microservices, and domain-driven architecture for complex business logic",
        logo: ps,
      },
      {
        name: "Fintech Solutions",
        para: "Payment systems, financial workflows, transaction processing, and compliance-driven development",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I DELIVER",
    service_content: [
      {
        title: "Backend Engineering",
        para: "Architecting scalable, maintainable backend systems that drive your business forward with clean code and proven patterns",
        logo: services_logo1,
      },
      {
        title: "API Design & Optimization",
        para: "Building robust REST APIs and optimizing existing systems for performance, security, and reliability",
        logo: services_logo2,
      },
      {
        title: "System Architecture",
        para: "Designing distributed systems, database optimization, and infrastructure decisions that scale with your business",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "FINTECH & BACKEND SYSTEMS I'VE BUILT",
    image: person_project,
    project_content: [
      {
        title: "Manafa – SME Financing Platform",
        image: project1,
      },
      {
        title: "MyCareerDreams - Career Development Platform",
        image: project2,
      },
      {
        title: "AI-Driven Employee Assessment Chatbot",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "WHAT OTHERS SAY",
    testimonials_content: [
      {
        review:
          ""I had the pleasure working with Usama for over 1.5 years at Botnostic. I highly admire his technical skills in Backend Development especially in Node, PHP Laravel and Blockchain. Apart from technical skills, he has exceptional communicational skills and he is good team player. I highly recommend him because I know he will be an invaluable asset to any organization."",
        img: avatar1,
        name: "IDREES AHMED",
      },
      {
        review:
          ""Exceptional backend engineer who delivered scalable systems that became core to our infrastructure."",
        img: avatar2,
        name: "TECH LEAD",
      },
      {
        review:
          ""Usama's system design and performance optimization skills transformed our platform's reliability."",
        img: avatar3,
        name: "CTO",
      },
      {
        review:
          ""Deep understanding of backend principles and ability to make architectural decisions that stick."",
        img: avatar4,
        name: "ENGINEERING MANAGER",
      },
    ],
  },
  Hireme: {
    title: "Let's Collaborate",
    subtitle: "BUILD SCALABLE BACKEND SYSTEMS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Whether you're building fintech systems, scaling APIs, or optimizing infrastructure, let's create backend systems that are reliable, maintainable, and built to last.",
    btnText: "Get In Touch",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "LET'S TALK BACKEND ENGINEERING",
    social_media: [
      {
        text: "usamatariq747@gmail.com",
        icon: GrMail,
        link: "mailto:usamatariq747@gmail.com",
      },
      {
        text: "+923450888225",
        icon: MdCall,
        link: "https://wa.me/923450888225",
      },
      {
        text: "LinkedIn",
        icon: BsInstagram,
        link: "https://linkedin.com/in/usama-tariq",
      },
    ],
  },
  Footer: {
    text: "Senior Backend Engineer | Building scalable fintech systems | © 2026",
  },
};
