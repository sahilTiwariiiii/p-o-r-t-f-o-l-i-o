"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I&apos;m Sahil, a full-stack developer and SDE Intern at Gounicrew (Full
        Stack & DevOps). Previously, I worked as a Web Developer Intern at
        Bambhari (Mumbai) and Tonny LLC (Remote, New York).
      </p>
      <p className="mb-3">
        I&apos;ve solved 670+ DSA problems across GeeksforGeeks, LeetCode, and
        Coding Ninjas. I&apos;m a B.Tech (2026) candidate from Gyan Ganga Institute,
        Madhya Pradesh.
      </p>
      <p>
        I&apos;m skilled in MERN Stack and full-stack architectures with React.js and
        Next.js, and have hands-on experience with ML, DL, and neural networks.
        I&apos;m passionate about building scalable, high-performance web
        applications and enjoy working on Low-Level and High-Level Design.
      </p>
    </motion.section>
  );
}
