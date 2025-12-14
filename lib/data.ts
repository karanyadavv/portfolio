import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import lotionImg from "@/public/lotion.png";
import rpsImg from "@/public/rps.png";
import quizupImg from "@/public/quiz-up.png";
import goalImg from "@/public/goal-count-down.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
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
    name: "Components",
    hash: "#components",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Kharadi, Pune",
    description:
      "Spearheaded web development projects leveraging React, Redux, Django, and Postgres, while streamlining deployments with Docker, Kubernetes, Terraform, and GitLab CI/CD for scalable, reliable delivery.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2022 - present",
  },
  {
    title: "Web developer",
    location: "Vikhroli, Mumbai",
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
    tags: [
      "React",
      "Next.js",
      "Convex",
      "Edgestore",
      "BlockNote",
      "Zustand",
      "Tailwind",
      "Shadcn",
    ],
    imageUrl: lotionImg,
    liveUrl: "https://lotion-note.vercel.app/",
    githubUrl: "https://github.com/karanyadavv/lotion",
  },
  {
    title: "Quiz Web app",
    description:
      "A dynamic quiz app styled with Tailwind CSS that fetches questions from the Open Trivia Database.",
    tags: ["React", "Tailwind"],
    imageUrl: quizupImg,
    liveUrl: "https://quizup-sh.vercel.app/",
    githubUrl: "https://github.com/karanyadavv/quizup",
  },
  {
    title: "Goal Count down timer",
    description:
      "Users are able to enter their specific goal date and a count down timer runs.",
    tags: ["React JS", "Tailwind"],
    imageUrl: goalImg,
    liveUrl: "https://goal-count-down.vercel.app/",
    githubUrl: "https://github.com/karanyadavv/goal-count-down",
  },
  {
    title: "Rock Paper Scissors Game",
    description:
      "Play the classic game of Rock, Paper, Scissors right in your browser. Test your luck and strategy against the computer, and track your scores.",
    tags: ["HTML", "CSS", "Vanilla js"],
    imageUrl: rpsImg,
    liveUrl: "https://rps-self.vercel.app/",
    githubUrl: "https://github.com/karanyadavv/Rock-paper-scissors",
  },
] as const;

export const skillsData = [
  "React JS",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Prisma ORM",
  "Express",
  "PostgreSQL",
  "Motion for React (Framer Motion)",
  "Docker",
] as const;
