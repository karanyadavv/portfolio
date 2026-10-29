import React from "react";

export function LogTaskCheckbox() {
  return (
    <div className="flex flex-col items-center gap-1">
      <button className="group flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#ffd915] to-[#ffb915] px-4 py-2 shadow-[0px_0px_1px_1px_rgba(255,255,255,0.08)_inset,0px_1px_1.5px_0px_rgba(0,0,0,0.32),0px_0px_0px_0.5px_#ffb915] duration-[160ms] ease-[cubic-bezier(0.25,_0.46,_0.45,_0.96)] active:scale-[.97]">
        <div className="relative size-3 overflow-hidden">
          <div className="absolute inset-0 size-3 rounded-[0.125rem] bg-yellow-900 transition-[clip-path] duration-200 ease-out [clip-path:inset(100%_0_0_0)] group-active:duration-[1200ms] group-active:ease-linear group-active:[clip-path:inset(0_0_0_0)]"></div>
          <div className="absolute inset-0 size-3 rounded-[0.125rem] border border-yellow-900"></div>
        </div>
        <span className="font-semibold text-yellow-900">Log your task</span>
      </button>
    </div>
  );
}

export default LogTaskCheckbox;
