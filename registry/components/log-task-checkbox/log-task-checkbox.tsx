"use client";
import React from "react";
import { useLogTaskCheckbox } from "./use-log-task-checkbox";

export function LogTaskCheckbox() {
  const { pressed, completed, canvasRef, handleDown, handleUp } = useLogTaskCheckbox();

  return (
    <div className="relative flex flex-col items-center gap-1">
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-60 w-80 -translate-x-1/2 -translate-y-1/2"
      />
      <button
        onPointerDown={handleDown}
        onPointerUp={handleUp}
        onPointerLeave={handleUp}
        onPointerCancel={handleUp}
        className={`group flex cursor-pointer touch-manipulation select-none items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#ffd915] to-[#ffb915] px-4 py-2 shadow-[0px_0px_1px_1px_rgba(255,255,255,0.08)_inset,0px_1px_1.5px_0px_rgba(0,0,0,0.32),0px_0px_0px_0.5px_#ffb915] transition-transform duration-[160ms] ease-[cubic-bezier(0.25,_0.46,_0.45,_0.96)] ${
          pressed ? "scale-[.97]" : ""
        }`}
      >
        <div className="relative size-3 overflow-hidden">
          <div
            className={`absolute inset-0 size-3 rounded-[0.125rem] bg-yellow-900 transition-[clip-path] ${
              completed || pressed
                ? "duration-[1200ms] ease-linear [clip-path:inset(0_0_0_0)]"
                : "duration-200 ease-out [clip-path:inset(100%_0_0_0)]"
            }`}
          ></div>
          <div className="absolute inset-0 size-3 rounded-[0.125rem] border border-yellow-900"></div>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className={`absolute inset-0 m-auto size-2.5 text-yellow-50 transition-transform duration-150 ease-out ${
              completed ? "scale-100" : "scale-0"
            }`}
          >
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="font-semibold text-yellow-900">Log your task</span>
      </button>
    </div>
  );
}

export default LogTaskCheckbox;
