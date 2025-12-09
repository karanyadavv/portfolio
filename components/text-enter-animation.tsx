import React, { ReactNode } from "react";

type TextEnterAnimationProps = {
  children: string;
};

export const TextEnterAnimation = ({ children }: TextEnterAnimationProps) => {
  return (
    <>
      {children.split("").map((char, index) => {
        return (
          <span key={index} className="animation-reveal">
            {char}
          </span>
        );
      })}
    </>
  );
};
