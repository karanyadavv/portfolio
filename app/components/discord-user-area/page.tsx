"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { IoArrowBack } from "react-icons/io5";
import karan from "@/public/karan.jpg";
import { IoIosMicOff } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { TbHeadphonesOff } from "react-icons/tb";
import { RiSettings5Fill } from "react-icons/ri";

const DiscordUserArea = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div className="px-6">
      <div
        onClick={handleBack}
        className="mb-8 flex cursor-pointer items-center gap-2 text-zinc-500 hover:underline hover:underline-offset-8"
      >
        <IoArrowBack size={16} color="currentColor" /> Components
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-semibold tracking-tighter text-gray-800 dark:text-gray-300">
          Discord User Area
        </h1>
        <div className="relative mb-20 h-96 w-full rounded-md border border-border">
          <div className="text-shadow-md absolute inset-0 flex items-center justify-center rounded-md bg-black/30 text-9xl font-bold text-black/90 dark:bg-white/30 dark:text-white/90">
            WIP
          </div>
          <div className="flex h-full items-center justify-center">
            <div className="flex h-[60px] w-[360px] items-center gap-0.5 rounded-md bg-[#202024] px-2 py-4">
              <div className="flex cursor-pointer items-center gap-2 py-[2px] pl-[4px] pr-32 hover:rounded-md hover:bg-[#333338]">
                <div>
                  <Image
                    src={karan}
                    height={32}
                    width={32}
                    alt="Profile photo"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-[0.5px]">
                  <div className="text-[0.930rem] font-semibold text-zinc-300">
                    Karan
                  </div>
                  <div className="text-[0.70rem] font-semibold text-[#7f7f86]">
                    Online
                  </div>
                </div>
              </div>
              {/* Mic */}
              <div className="flex h-[28px] gap-0.5">
                <IoIosMicOff
                  size={28}
                  className="cursor-pointer rounded-s-md bg-[#352027] px-[2px] py-[2px] text-[#a92f3d]"
                />
                <FaChevronDown
                  size={2}
                  className="h-100vh h-full w-[25%] cursor-pointer rounded-r-md bg-[#352027] text-[#a92f3d]"
                />
              </div>
              {/* Deafen */}
              <div className="flex h-[28px] gap-0.5">
                <TbHeadphonesOff
                  size={28}
                  className="cursor-pointer rounded-s-md bg-[#352027] px-[2px] py-[2px] text-[#a92f3d]"
                />
                <FaChevronDown
                  size={2}
                  className="h-100vh h-full w-[25%] cursor-pointer rounded-r-md bg-[#352027] text-[#a92f3d]"
                />
              </div>
              <RiSettings5Fill
                size={24}
                className="cursor-pointer text-[#aaaab1] hover:bg-[#333338] hover:text-[#f4f4f4]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscordUserArea;
