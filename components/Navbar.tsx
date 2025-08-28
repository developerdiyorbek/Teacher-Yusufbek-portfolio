"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ModeToggle";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScrolled
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <Link href="#top" className="text-3xl font-ovo">
          Yusufbek
        </Link>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScrolled
              ? ""
              : "bg-white shadow-sm backdrop:opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <Link href="#top" className="font-ovo">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="font-ovo">
              About me
            </Link>
          </li>
          <li>
            <Link href="#services" className="font-ovo">
              Services
            </Link>
          </li>
          <li>
            <Link href="#work" className="font-ovo lightHover">
              My work
            </Link>
          </li>
          <li>
            <Link href="#contact" className="font-ovo">
              Contact me
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50"
          >
            Contact
            <ArrowRight className="ml-1 size-3" />
          </Link>
          <MobileMenu />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
