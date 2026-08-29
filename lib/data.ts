import React from "react";
import Image from "next/image";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaPython, FaBrain } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { BsCodeSlash } from "react-icons/bs";

// Images (Using existing ones as placeholders where appropriate, or we can use generic icons later if images are missing)
import nike from "@/public/nike.png";
import car from "@/public/car.png";
import jumia from "@/public/jumia.png";
import uber from '@/public/home.png';
import xing from '@/public/xing.png'
import DermaMnist from '@/public/dermamnist.png'
import Beulah from '@/public/beulah.png'
import Belskora from '@/public/belskora.png'
import Sabi from '@/public/Sabi.png'
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Research",
    hash: "#research",
  },
  {
    name: "Engineering",
    hash: "#engineering",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "BoxPower",
    description: "Building production software for energy infrastructure and related technical workflows, contributing to applications that combine modern web engineering with complex domain-specific systems.",
    icon: React.createElement(BsCodeSlash),
    date: "2024 - Present",
  },
  {
    title: "Frontend Developer",
    location: "Envisio Live",
    description: "Building and maintaining modern web applications and user experiences, with a focus on reusable frontend architecture, performance and product usability.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "Frontend Developer",
    location: "SmatPet Logistics",
    description: "Developed frontend applications and digital experiences for logistics-related workflows, working across application architecture, UI development and integration with backend services.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "QA Specialist",
    location: "Blue Skies",
    description: "Worked in quality assurance, developing an early foundation in software quality, testing, process discipline and defect identification.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2019",
  },
  {
    title: "Master's Degree in Computer Science",
    location: "University of East London, UK",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "On-going",
  },
] as const;

export const educationData = [
  {
    degree: "MSc Computer Science",
    school: "University of East London",
    description: "Artificial Intelligence · Machine Vision · Big Data Analytics · Advanced Software Engineering · Cloud Computing",
    results: [
      { subject: "Big Data Analytics", grade: "85%" },
      { subject: "Advanced Software Engineering", grade: "84%" },
      { subject: "Artificial Intelligence & Machine Vision", grade: "82%" },
    ],
    date: "2027",
    icon: React.createElement(Image, { src: "/uel.png", width: 40, height: 40, alt: "UEL logo", className: "rounded-full object-contain" }),
  },
  {
    degree: "International Summer School: Trustworthy AI",
    school: "OTH Regensburg",
    description: "Trustworthy AI · Machine Learning · Computer Vision · Blockchain · 6 ECTS",
    results: [],
    date: "2026",
    icon: React.createElement(Image, {
      src: "/oth.png",
      width: 40,
      height: 40,
      alt: "OTH Regensburg logo",
      className: "rounded-full object-contain"
    }),
  },
  {
    degree: "BSc Agricultural Biotechnology",
    school: "Kwame Nkrumah University of Science and Technology",
    description: "Foundation in science, transitioning into technology and software engineering.",
    results: [],
    date: "Graduated",
    icon: React.createElement(Image, { src: "/knust.png", width: 40, height: 40, alt: "KNUST logo", className: "rounded-full object-contain bg-white" }),
  }
] as const;


export const projectsData = [
  {
    title: "DermaMNIST",
    category: "Research",
    status: "Completed / Research Project",
    description: "Deep-learning-based skin-lesion classification exploring model behaviour, limitations and failure cases.",
    tags: ["Python", "PyTorch", "Computer Vision", "Trustworthy AI"],
    imageUrl: DermaMnist, // Placeholder
    githubUrl: 'https://github.com/0xnunana/DermaMNIST',
    href: 'https://dermafrontend-nine.vercel.app/'
  },
  {
    title: "Beulah Insure",
    category: "Web",
    status: "Completed",
    description: "Web front for a leading insurance brockerage.",
    tags: ["TypeScript", "React", "Next.js"],
    imageUrl: Beulah, // Placeholder
    githubUrl: 'https://github.com/0xnunana/beulah',
    href: 'https://www.beulahinsure.com/'
  },
  {
    title: "Sabi Coach",
    category: "Web",
    status: "Completed",
    description: "Production-oriented application involving coaching, communities and subscriptions.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Stripe"],
    imageUrl: Sabi, // Placeholder
    githubUrl: 'https://github.com/0xnunana/sabicoach',
    href: 'https://www.sabicoach.com/'
  },
  {
    title: "Belskóra Essentials",
    category: "Web",
    status: "Completed",
    description: "Application for skin-care brand with subscriptions and admin dashboard.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind", "Paystack"],
    imageUrl: Belskora, // Placeholder
    href: 'https://www.belskora.com',
    githubUrl: 'https://github.com/0xnunana/belskora'
  }

  // {
  //   title: "TeamCard",
  //   category: "Web",
  //   status: "Completed",
  //   description: "Modern full-stack web application with advanced user features.",
  //   tags: ["Next.js", "Tailwind", "Prisma"],
  //   imageUrl: car, // Placeholder
  //   href: 'https://github.com/0xnunana'
  // },
  // {
  //   title: "Kidi",
  //   category: "Mobile",
  //   status: "Completed",
  //   description: "Cross-platform mobile application for real-time interactions.",
  //   tags: ["React Native", "Expo"],
  //   imageUrl: xing, // Placeholder
  //   href: 'https://github.com/0xnunana'
  // },
  // {
  //   title: "StackUp",
  //   category: "Web",
  //   status: "Completed",
  //   description: "Fintech-oriented application for tracking and managing assets.",
  //   tags: ["React", "TypeScript", "Node.js"],
  //   imageUrl: car, // Placeholder
  //   href: 'https://github.com/0xnunana'
  // },
] as const;

export const legacyProjectsData = [
  {
    title: "Nike Clone",
    description: "Frontend clone of Nike",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: nike,
    href: 'https://nike-seven-gamma.vercel.app/'
  },
  {
    title: "Jumia Clone",
    description: "Frontend clone of Jumia homepage",
    tags: ["React", "Next.js", "Tailwind", "TypeScript"],
    imageUrl: jumia,
    href: 'https://jumia-sand.vercel.app/'
  },
  {
    title: "Uber Clone",
    description: "Uber prototype",
    tags: ["React Native", "Expo", "Tailwind", "Google Apis", "TypeScript"],
    imageUrl: uber,
    href: 'https://qr.expo.dev/eas-update?updateId=3348e070-d989-469a-8202-aaf0b707fa8f&appScheme=exp&host=u.expo.dev'
  }
] as const;

export const skillsData = {
  "AI & Machine Learning": [
    "Python", "PyTorch", "Computer Vision", "Deep Learning", "CNNs", "Machine Learning", "Model Evaluation", "Trustworthy AI"
  ],
  "Edge & Efficient AI": [
    "Edge AI", "Model Optimization", "Quantization", "Pruning", "Knowledge Distillation", "Hardware-Aware ML", "TinyML"
  ],
  "Software Engineering": [
    "TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Python", "REST APIs", "PostgreSQL", "Prisma"
  ],
  "Cloud & Infrastructure": [
    "Docker", "Linux", "Vercel", "DigitalOcean", "Nginx", "PM2", "CI/CD"
  ],
  "Mobile": [
    "React Native", "Expo"
  ],
  "Research & Data": [
    "Jupyter", "Pandas", "NumPy", "Matplotlib", "Experimentation", "Data Analysis"
  ]
};