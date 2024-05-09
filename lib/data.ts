import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import nike from "@/public/nike.png";
import car from "@/public/car.png";
import jumia from "@/public/jumia.png";
import uber from '@/public/home.png';
import xing from '@/public/xing.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "University Graduate",
    location: "KNUST, Ghana",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2014 -2018",
  },
  {
    title: "Quality Assurance Specialist",
    location: "BlueSkies, Ghana",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
      icon: React.createElement(CgWorkAlt),
    date: "2018 -2019",
  },
  {
    title: "Front-End Developer",
    location: "SmatPet Logistic, Russia",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Software Developer",
    location: "Envisio Live, Ghana",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CarDwom",
    description:
      "Frontend for a Car sales and rental startup",
    tags: ["React", "Next.js", "Tailwind", ],
    imageUrl: car,
    href:'https://car-dwom.vercel.app/'
  },
  {
    title: "Xing",
    description:
      "Frontend of a delivery app ",
    tags: ["React Native", "TypeScript", "Expo", "Tailwind"],
    imageUrl: xing,
    href:'https://qr.expo.dev/eas-update?updateId=b91688f2-e56e-4af0-b48c-0021e36fbf82&appScheme=exp&host=u.expo.dev'
  },
  {
    title: "Nike",
    description:
      "Frontend clone of Nike ",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: nike,
    href:'https://nike-seven-gamma.vercel.app/'
  },
  {
    title: "Jumia Clone",
    description:
      "Frontend clone of Jumia homepage",
    tags: ["React", "Next.js",  "Tailwind","TypeScript"],
    imageUrl: jumia,
    href:'https://jumia-sand.vercel.app/'
  },
  {
    title: "Uber Clone",
    description:
      "Uber prototype",
    tags: ["React Native", "Expo",  "Tailwind","Google Apis","TypeScript"],
    imageUrl: uber,
    href:'https://qr.expo.dev/eas-update?updateId=3348e070-d989-469a-8202-aaf0b707fa8f&appScheme=exp&host=u.expo.dev'
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "C",
  "C++",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "React Native",
  "Prisma",
 "Git",
 "Linux",
  "Redux",
 "Jest",
 "Firebase",
 "Superbase",
"Strapi",
"Payload",
  "Express",
  "PostgreSQL",
  
  "Framer Motion",
] as const;