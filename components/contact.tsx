"use client";

import React, { useRef, useState } from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane, FaRegSmileBeam, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { ref } = useSectionInView("Contact");

  const form = useRef<any>();

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        to_email: "samrattiwari156@gmail.com",
        user_email: form.current?.user_email?.value || "",
        message: form.current?.message?.value || "",
      };

      await emailjs.send(
        "service_ibdlwqm",
        "template_9iv73s7",
        templateParams,
        { publicKey: "NXgDpxJNkkfZbbcs8" }
      );

      form.current.reset();
      setIsSubmitted(true);
    } catch (err) {
      console.error("Email send failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="text-center mb-20 sm:mb-28 w-[min(100%,38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-4">
        Please reach out using the form below. I’ll get back to you soon.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6 mb-10 text-lg">
        <div className="flex items-center gap-2">
            <FaEnvelope />
            <a href="mailto:samrattiwari156@gmail.com" className="hover:underline">
                samrattiwari156@gmail.com
            </a>
        </div>
        <div className="flex items-center gap-2">
            <FaPhone />
            <a href="tel:+918670558757" className="hover:underline">8670558757</a>
        </div>
      </div>

      <form
        className="mt-10 flex flex-col items-center"
        ref={form}
        onSubmit={sendEmail}
      >
        <input type="hidden" name="to_email" value="samrattiwari156@gmail.com" />
        <input
          className="h-14 w-full rounded-lg border border-black/10 px-4"
          placeholder="Your email"
          name="user_email"
          type="email"
          disabled={isSubmitted || isLoading}
          required
          maxLength={500}
        />
        <textarea
          className="h-52 w-full my-3 rounded-lg border border-black/10 p-4"
          placeholder="Your message"
          name="message"
          disabled={isSubmitted || isLoading}
          required
          maxLength={1000}
        />
        <button
          type="submit"
          value="Send"
          disabled={isSubmitted || isLoading}
          className={`group flex items-center justify-center gap-2 h-[3rem] w-[8rem] text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 ${
            isSubmitted
              ? "bg-slate-400 hover:bg-slate-400"
              : "bg-gray-800 hover:bg-gray-950"
          }`}
        >
          {isLoading ? (
            <>
              Sending
              <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-white" />
            </>
          ) : isSubmitted ? (
            <>
              Sent{" "}
              <FaRegSmileBeam className="text-l opacity-70 transition-all group-hover:scale-100" />
            </>
          ) : (
            <>
              Submit{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </button>
      </form>
    </motion.section>
  );
}
