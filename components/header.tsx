"use client";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-10">
      <nav className="pointer-events-auto fixed left-1/2 top-4 z-[999] flex -translate-x-1/2 items-center justify-between rounded-lg border border-neutral-200 bg-white/70 p-1 shadow-md backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 sm:top-4">
        <ul className="flex items-center justify-center gap-y-1 text-xs font-medium text-gray-500 sm:flex-nowrap sm:gap-5 sm:text-sm">
          {links.map((link) => (
            <motion.li
              className="relative flex items-center justify-center"
              key={link.hash}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-800 dark:text-gray-100":
                      activeSection === link.name,
                  },
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-x-1 inset-y-1 -z-10 rounded-[4px] bg-neutral-200 dark:bg-neutral-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 35,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
