import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type TextEnterAnimationProps = {
  text: string;
};

export const TextEnterAnimation = ({ text }: TextEnterAnimationProps) => {
  return (
    <>
      {text.split("").map((char, index) => {
        return (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ y: "100%" }}
            animate={{ y: "0" }}
            transition={{
              ease: [0.19, 1, 0.22, 1],
              duration: 1.3,
              delay: 0.03 * index,
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </>
  );
};
