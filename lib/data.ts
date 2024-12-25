import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import lotionImg from "@/public/lotion.png";
import rpsImg from "@/public/rps.png";
import quizupImg from "@/public/quiz-up.png";
import goalImg from "@/public/goal-count-down.png"

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
      "Lotion is a Notion clone, collaborative workspace for note-taking, and document organization.",
    tags: ["React", "Next.js", "Convex", "Edgestore", "BlockNote", "Zustand", "Tailwind", "Shadcn"],
    imageUrl: lotionImg,
  },
  {
    title: "Quiz Web app",
    description:
      "A dynamic quiz app styled with Tailwind CSS that fetches questions from the Open Trivia Database.",
    tags: ["React", "Tailwind"],
    imageUrl: quizupImg,
  },
  {
    title: "Goal Count down timer",
    description:
      "Users are able to enter their specific goal date and a count down timer runs.",
    tags: ["React JS", "Tailwind"],
    imageUrl: goalImg,
  },
  {
    title: "Rock Paper Scissors Game",
    description:
      "Play the classic game of Rock, Paper, Scissors right in your browser. Test your luck and strategy against the computer, and track your scores.",
    tags: ["HTML", "CSS", "Vanilla js"],
    imageUrl: rpsImg,
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