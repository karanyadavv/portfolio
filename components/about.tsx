"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } =  useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        {/* After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>,starting out with a curiosity that quickly grew into a full-fledged passion. My initial foray was into{" "}
        <span className="font-medium">frontend web development,</span>with React as my primary tool.
        is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. */}

        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>,starting out with a curiosity that quickly grew into a full-fledged passion. My initial foray was into frontend development, with <span className="font-medium">React</span> as my primary tool. Over time, I crafted a variety of dynamic and engaging applications, steadily refining my skills and deepening my{" "}
        <span className="underline">love</span> for coding.
      </p>
      <p>
      As my expertise expanded, I transitioned from being a frontend developer to embracing full-stack development, immersing myself in the <span className="font-medium">MERN stack</span>(MongoDB, Express.js, React, Node.js). Nowadays, I predominantly work with <span className="font-medium">Next.js</span>, leveraging its powerful features to build robust and scalable web applications.
      </p>
    </motion.section>
  );
}