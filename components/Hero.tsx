"use client";

import Image from "next/image";
import { motion } from "motion/react";

function Hero() {
  return (
    <section className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-10">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="relative size-56"
      >
        <Image
          src="/user-image.jpg"
          alt="Profile Image"
          fill
          className="rounded-full object-cover"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center gap-2 tex-xl md:text-3xl mb-3 font-ovo"
      >
        Hi! I&apos;m Yusufbek
        <Image src="/hand-icon.png" alt="Hand Icon" width={24} height={24} />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-ovo"
      >
        Web Developer based in Tashkent
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-ovo"
      >
        I&apos;m a frontend developer from Tashkent, Uzbekistan with 5 years of
        experience.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border rounded-full border-white bg-black flex items-center gap-2 text-white dark:bg-transparent"
        >
          Contact me
          <Image
            src="/right-arrow-dark.png"
            width={20}
            height={20}
            alt="arrow-icon"
          />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/YUSUFJON KHOLMUMINOV.pdf"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:text-black dark:bg-white"
          download
        >
          My resume
          <Image
            src="/download-icon.png"
            width={20}
            height={20}
            alt="download-icon"
          />
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
