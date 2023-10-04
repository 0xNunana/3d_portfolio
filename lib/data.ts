import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import nike from "@/public/nike.png";
import car from "@/public/car.png";
import jumia from "@/public/jumia.png";

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
    title: "Quality Assurance Specialist",
    location: "BlueSkies, Ghana",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
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
  },
  {
    title: "Nike",
    description:
      "Frontend clone of Nike ",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: nike,
  },
  {
    title: "Jumia Clone",
    description:
      "Frontend clone of Jumia homepage",
    tags: ["React", "Next.js",  "Tailwind"],
    imageUrl: jumia,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "React Native",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  
  "Framer Motion",
] as const;