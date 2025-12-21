import React from "react";
import { components } from "@/lib/components";
import Link from "next/link";
import Image from "next/image";

const Components = () => {
  return (
    <div className="px-6">
      <div className="">
        <h1 className="text-4xl font-medium tracking-tight">Components</h1>
        <div className="mt-4 text-sm font-light text-opacity-40">
          A collection of reusable components.
        </div>
      </div>
      <div className="mt-10">
        {components.map((component, id) => {
          return (
            <div
              className="relative z-40 grid grid-cols-1 items-start gap-20 pb-40 pt-0 md:grid-cols-2 md:pt-10 lg:gap-10 xl:grid-cols-2"
              key={id}
            >
              <Link
                key={id}
                href={`/components/${component.slug}`}
                className=""
              >
                <div className="flex flex-col gap-4">
                  <Image
                    width={1024}
                    height={600}
                    alt={component.title}
                    src={component.image}
                    className="overflow-hidden rounded-xl"
                  />
                  <p className="text-xl font-bold text-neutral-700 dark:text-neutral-100">
                    {component.title}
                  </p>
                  <p className="text-sm font-normal text-neutral-500 dark:text-neutral-300">
                    {component.description}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Components;
