import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import lotionImg from "@/public/lotion.png";
import rpsImg from "@/public/rps.png";
import todoImg from "@/public/todo.png";

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
    title: "Web Specialist",
    location: "Airoli, Navi mumbai",
    description:
      "Spearheaded web development projects with a focus on mobile-first design, SEO, and web accessibility, utilizing AEM and JIRA for optimal project management and execution.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2022 - present",
  },
  {
    title: "Web developer",
    location: "Vikhroli, Navi mumbai",
    description:
      "Managed web content publishing and project coordination across automotive and pharmaceutical sectors using AEM and Workfront, enhancing decision-making and industry knowledge",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2021 - Aug 2022",
  },
  
] as const;

export const projectsData = [
  {
    title: "Note taking app",
    description:
      "Lotion is a Notion clone, designed to provide users with a collaborative workspace for note-taking, task management, and document organization.",
    tags: ["React", "Next.js", "Convex", "Edgestore", "BlockNote", "Zustand", "Tailwind", "Shadcn"],
    imageUrl: lotionImg,
  },
  {
    title: "Rock Paper Scissors Game",
    description:
      "Play the classic game of Rock, Paper, Scissors right in your browser. Test your luck and strategy against the computer, and track your scores.",
    tags: ["HTML", "CSS", "Vanilla js"],
    imageUrl: rpsImg,
  },
  {
    title: "Todo App",
    description:
      "A simple and responsive Todo app built with HTML, CSS, and JavaScript",
    tags: ["HTML", "CSS", "Vanilla js"],
    imageUrl: todoImg,
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
  "Github",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Prisma ORM",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Docker",
] as const;