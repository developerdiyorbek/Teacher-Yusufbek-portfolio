import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yusufbek.uz"),
  title: "Yusufbek Xolmuminov",
  description: "Yusufbek's portfolio",
  authors: [{ name: "Yusufbek Xolmuminov", url: "https://www.yusufbek.uz" }],
  icons: { icon: "/favicon.png" },
  keywords:
    "yusufbek, yusufbek.uz, yusufbek xolmuminov, developer yusufbek, yusufbek developer",
  openGraph: {
    title: "Yusufbek Xolmuminov",
    description: "Yusufbek's portfolio",
    type: "website",
    url: "https://www.yusufbek.uz",
    locale: "uz_UZ",
    images: "/user-image.jpg",
    countryName: "Uzbekistan",
    siteName: "yusufbek.uz",
    emails: "yusufbek.xolmuminov@gmail.com",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${ovo.variable} scroll-smooth`}
    >
      <body
        className={`antialiased font-outfit leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
