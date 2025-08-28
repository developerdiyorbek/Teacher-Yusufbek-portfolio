"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <Image
        src={theme === "dark" ? "/sun_icon.png" : "/moon_icon.png"}
        alt="theme-icon"
        width={20}
        height={20}
      />
    </button>
  );
}
