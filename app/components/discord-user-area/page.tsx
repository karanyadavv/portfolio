"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoArrowBack } from "react-icons/io5";

const DiscordUserArea = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div className="px-6">
      <div
        onClick={handleBack}
        className="mb-8 flex cursor-pointer items-center gap-2 hover:underline hover:underline-offset-8"
      >
        <IoArrowBack /> Components
      </div>
      <div>DiscordUserArea</div>
    </div>
  );
};

export default DiscordUserArea;
