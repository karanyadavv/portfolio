"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TOUCH_HOLD_MS = 1200;

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
  const [active, setActive] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  useEffect(() => clearTimer, []);

  const handlePointerEnter = (event: React.PointerEvent) => {
    if (event.pointerType === "touch") return;
    clearTimer();
    setActive(true);
  };

  const handlePointerLeave = (event: React.PointerEvent) => {
    if (event.pointerType === "touch") return;
    clearTimer();
    setActive(false);
  };

  const handlePointerDown = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse") return;
    clearTimer();
    setActive(true);
  };

  const handlePointerUp = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse") return;
    clearTimer();
    timer.current = setTimeout(() => setActive(false), TOUCH_HOLD_MS);
  };

  const handlePointerCancel = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse") return;
    clearTimer();
    setActive(false);
  };

  return (
    <div>
      <motion.button
        initial="rest"
        animate={active ? "hover" : "rest"}
        variants={buttonVariant}
        transition={{ type: "spring", duration: 0.3, bounce: 0 }}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        className="cursor-pointer touch-manipulation select-none overflow-hidden rounded-[2rem] bg-[#131515] px-6 py-2.5 text-white shadow-[0px_5px_20px_rgba(0,0,0,0.70)]"
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
