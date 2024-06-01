"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";


export default function Contact(){
  const { ref } = useSectionInView("Contact");

  return(
    <motion.section
      ref={ref}
      id="contact" 
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at <a href="mailto:karanyadav729@gmail.com" className="underline">karanyadav729@gmail.com</a> or through this form.
      </p>

      <form 
        className="mt-10 flex flex-col" 
        action={async formData => {
          const { data, error } = await sendEmail(formData);

          if(error){
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input 
          type="email" 
          placeholder="Your email"
          name="senderEmail"
          required
          maxLength={500}
          className="px-4 h-14 rounded-lg borderBlack"
        />
        <textarea 
          placeholder="Your message"
          name="message"
          required
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack p-4" 
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}