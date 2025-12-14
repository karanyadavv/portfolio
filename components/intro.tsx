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
      className="mb-20 mt-44 flex w-full flex-col md:mb-52 md:max-w-[50rem] md:items-center"
    >
      <div className="flex items-start">
        <Image
          src="/karan.jpg"
          alt="Karan's portrait"
          width={"192"}
          height={"192"}
          priority={true}
          className="h-24 w-24 rounded-full object-cover shadow-xl"
        />
      </div>
      <div className="md:flex md:w-[80%] md:justify-between">
        <h1 className="mt-4 flex flex-col text-left">
          <span className="text-4xl font-semibold tracking-tight">
            Karan Yadav
          </span>
          <span className="text-md text-gray-400">Software Engineer</span>
          <span className="mt-2 text-sm text-gray-500">📍 Mumbai</span>
        </h1>
        <div className="text-md mt-4 flex flex-row items-center justify-start gap-4 font-medium md:flex">
          <Link
            className="hover:opacity-80"
            href="mailto:karanyadav729@gmail.com"
            target="_blank"
          >
            <MdEmail className="size-7" />
          </Link>

          <Link
            className="hover:opacity-80"
            href="https://drive.google.com/file/d/1KVH9EVvEFm_0CzBK1VsBKgqG1O-jLJjb/view?usp=sharing"
            target="_blank"
            download
          >
            <ImAttachment className="size-6" />
          </Link>

          <Link
            className="hover:opacity-80"
            href="https://linkedin.com/in/karankumar-yadav"
            target="_blank"
          >
            <BsLinkedin className="size-6" />
          </Link>

          <Link
            className="hover:opacity-80"
            href="https://github.com/karanyadavv"
            target="_blank"
          >
            <FaGithubSquare className="size-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
