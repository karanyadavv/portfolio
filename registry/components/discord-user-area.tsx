import Image, { type StaticImageData } from "next/image";
import karan from "@/public/karan.jpg";
import { IoIosMicOff } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { TbHeadphonesOff } from "react-icons/tb";
import { RiSettings5Fill } from "react-icons/ri";

// Restored from your original app/components/discord-user-area/page.tsx:9eb66bc
// — exact visual (px, colors, pr-28, 0.93rem/0.70rem) preserved.
// Updated: props for reuse, <button> semantics + a11y, fixed invalid
// `h-100vh` / `size={2}` chevron hack, now properly centered.

type Props = {
  name?: string;
  status?: string;
  avatar?: string | StaticImageData;
};

export function DiscordUserArea({
  name = "Karan",
  status = "Online",
  avatar = karan,
}: Props) {
  return (
    <div className="flex h-[60px] w-[360px] items-center gap-2 rounded-md bg-[#202024] px-2 py-4">
      {/* user button — your original pr-28 / hover:bg-[#333338] kept */}
      <button
        type="button"
        className="flex cursor-pointer items-center gap-2 py-[2px] pl-[4px] pr-28 hover:rounded-md hover:bg-[#333338]"
      >
        <Image
          src={avatar}
          height={32}
          width={32}
          alt={`${name} profile photo`}
          className="rounded-full"
        />
        <span className="flex flex-col gap-[0.5px] text-left">
          <span className="text-[0.930rem] font-semibold leading-none text-zinc-300">
            {name}
          </span>
          <span className="text-[0.70rem] font-semibold leading-none text-[#7f7f86]">
            {status}
          </span>
        </span>
      </button>

      {/* Mic — muted state (red #352027 / #a92f3d) as you had it */}
      <div className="flex h-[28px] w-10 justify-between">
        <button
          type="button"
          aria-label="Mute microphone"
          title="Mute"
          className="cursor-pointer rounded-s-md bg-[#352027] p-[2px] text-[#a92f3d]"
        >
          <IoIosMicOff size={24} className="block" />
        </button>
        <button
          type="button"
          aria-label="Microphone options"
          className="flex w-[25%] cursor-pointer items-center justify-center rounded-r-md bg-[#352027] text-[#a92f3d]"
        >
          <FaChevronDown size={8} className="block" />
        </button>
      </div>

      {/* Deafen */}
      <div className="flex h-[28px] w-10 justify-between">
        <button
          type="button"
          aria-label="Deafen audio"
          title="Deafen"
          className="cursor-pointer rounded-s-md bg-[#352027] p-[2px] text-[#a92f3d]"
        >
          <TbHeadphonesOff size={24} className="block" />
        </button>
        <button
          type="button"
          aria-label="Headphone options"
          className="flex w-[25%] cursor-pointer items-center justify-center rounded-r-md bg-[#352027] text-[#a92f3d]"
        >
          <FaChevronDown size={8} className="block" />
        </button>
      </div>

      <button
        type="button"
        aria-label="User settings"
        title="Settings"
        className="flex h-full w-8 cursor-pointer items-center justify-center rounded-md px-[2px] py-[2px] text-[#aaaab1] hover:bg-[#333338] hover:text-[#f4f4f4]"
      >
        <RiSettings5Fill size={20} className="block" />
      </button>
    </div>
  );
}

export default DiscordUserArea;
