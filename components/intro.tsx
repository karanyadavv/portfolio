"use client";

import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";

import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.2);
  return (
    <section
      ref={ref}
      id="home"
      className="mb-20 mt-44 flex w-full flex-col border-y-2 border-dashed border-border py-6 md:mb-52"
    >
      <div className="pl-6">
        <Image
          src="/karan.jpg"
          alt="Karan's portrait"
          width={"192"}
          height={"192"}
          priority={true}
          className="h-24 w-24 rounded-xl object-cover duration-300 hover:brightness-90"
        />
      </div>
      <div className="px-6 md:flex md:justify-between">
        <div className="">
          <h1 className="mt-4 flex flex-col text-balance text-left text-xl font-semibold leading-[1.2] tracking-tight sm:text-3xl">
            Karan Yadav
          </h1>
          <div className="text-pretty text-base font-medium leading-relaxed text-gray-500">
            Software Engineer
          </div>
          <div className="mt-2 text-sm text-gray-500">
            <a href="https://maps.app.goo.gl/jWiXdv9LzqnXRuwj9" target="_blank">
              📍
            </a>{" "}
            Mumbai
          </div>
        </div>
        <div className="text-md mt-4 flex flex-row items-center justify-start gap-4 font-medium md:flex">
          <Link
            className="hover:opacity-80"
            href="mailto:karanyadav729@gmail.com"
            target="_blank"
            aria-label="Send email"
          >
            <MdEmail className="size-5 md:size-7" />
          </Link>

          <Link
            className="hover:opacity-80"
            href="https://drive.google.com/file/d/1KVH9EVvEFm_0CzBK1VsBKgqG1O-jLJjb/view?usp=sharing"
            target="_blank"
            download
            aria-label="Download resume"
          >
            <ImAttachment className="size-4 md:size-6" />
          </Link>

          <Link
            className="hover:opacity-80"
            href="https://linkedin.com/in/karankumar-yadav"
            target="_blank"
            aria-label="View my linkedin profile"
          >
            <BsLinkedin className="size-4 md:size-6" />
          </Link>

          <Link
            className="hover:opacity-80"
            href="https://github.com/karanyadavv"
            target="_blank"
            aria-label="View my github profile"
          >
            <FaGithubSquare className="size-4 md:size-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
