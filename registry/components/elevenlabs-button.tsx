"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TOUCH_HOLD_MS = 1200;

export function ElevenLabsButton() {
  const [expanded, setExpanded] = useState(false);
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
    setExpanded(true);
  };

  const handlePointerLeave = (event: React.PointerEvent) => {
    if (event.pointerType === "touch") return;
    clearTimer();
    setExpanded(false);
  };

  const handlePointerDown = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse") return;
    clearTimer();
    setExpanded(true);
  };

  const handlePointerUp = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse") return;
    clearTimer();
    timer.current = setTimeout(() => setExpanded(false), TOUCH_HOLD_MS);
  };

  const handlePointerCancel = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse") return;
    clearTimer();
    setExpanded(false);
  };

  return (
    <div>
      <motion.button
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        initial={{ width: 48 }}
        animate={{ width: expanded ? 160 : 48 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex cursor-pointer touch-manipulation select-none items-center gap-2 rounded-[68px] bg-white px-2 py-2"
      >
        <div className="flex-shrink-0">
          <WaveFormSVG />
        </div>
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              exit={{ width: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden whitespace-nowrap"
            >
              <p className="text-base font-bold tracking-normal text-black">
                TRY A CALL
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

const WaveFormSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-8 rounded-[2rem] bg-black p-[8px] text-white"
    >
      <path d="M2 10v3" />
      <path d="M6 6v11" />
      <path d="M10 3v18" />
      <path d="M14 8v7" />
      <path d="M18 5v13" />
      <path d="M22 10v3" />
    </svg>
  );
};

export default ElevenLabsButton;
