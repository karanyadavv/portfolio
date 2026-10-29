"use client";
import React from "react";
import { motion } from "framer-motion";

const buttonVariant = {
  rest: {},
  hover: { scale: 0.92 },
};

const firstText = {
  rest: {
    y: 0,
    opacity: 1,
    rotateX: 0,
  },
  hover: {
    y: "-100%",
    opacity: 0,
    rotateX: -90,
  },
};

const secondText = {
  rest: {
    y: "100%",
    opacity: 0,
  },
  hover: {
    y: 0,
    opacity: 1,
  },
};

export function TryProvenButton() {
  return (
    <div>
      <motion.button
        initial="rest"
        whileHover="hover"
        variants={buttonVariant}
        transition={{ type: "spring", duration: 0.3, bounce: 0 }}
        className="cursor-pointer overflow-hidden rounded-[2rem] bg-[#131515] px-6 py-2.5 text-white shadow-[0px_5px_20px_rgba(0,0,0,0.70)]"
      >
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
          <motion.span
            variants={firstText}
            transition={{ type: "spring", duration: 0.3, bounce: 0.1 }}
          >
            See how suggestions work
          </motion.span>
          <motion.span
            variants={secondText}
            transition={{ type: "spring", duration: 0.3, bounce: 0.1 }}
            className="absolute"
          >
            See how suggestions work
          </motion.span>
        </div>
      </motion.button>
    </div>
  );
}

export default TryProvenButton;
