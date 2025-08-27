"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="block md:hidden ml-3" onClick={() => setIsOpen(true)}>
        <Image src={"/menu-black.png"} alt="menu-icon" width={24} height={24} />
      </button>

      <ul
        className={`fixed top-0 right-0 h-screen w-64 bg-rose-50 z-50 transform transition-transform duration-500 ease-in-out flex flex-col gap-6 pt-28 px-8 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute right-6 top-6"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={"/close-black.png"}
            alt="close-sidebar-icon"
            width={20}
            height={20}
          />
        </button>
        <li>
          <Link
            href="#top"
            className="font-ovo"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="font-ovo"
            onClick={() => setIsOpen(false)}
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            href="#services"
            className="font-ovo"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="#work"
            className="font-ovo lightHover"
            onClick={() => setIsOpen(false)}
          >
            My work
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="font-ovo"
            onClick={() => setIsOpen(false)}
          >
            Contact me
          </Link>
        </li>
      </ul>
    </>
  );
}

export default MobileMenu;
