"use client";

import { services } from "@/constants";
import Image from "next/image";
import { motion } from "motion/react";

function Services() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        What I offer
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        I offer a range of services to help you achieve your goals, including
        web development, design, and consulting.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10"
      >
        {services.map((service, index) => (
          <motion.div
            whileInView={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-300 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={40}
              height={40}
            />
            <h3 className="text-lg text-gray-700 my-4 dark:text-white">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-5 text-sm dark:text-white/80">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Services;
