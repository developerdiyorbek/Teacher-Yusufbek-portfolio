import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="mt-20">
      <div className="text-center">
        <Image
          src={"/logo.png"}
          alt="logo"
          className="mx-auto mb-2 block dark:hidden"
          width={144}
          height={144}
        />
        <Image
          src={"/logo_dark.png"}
          alt="logo"
          className="mx-auto mb-2 hidden dark:block"
          width={144}
          height={144}
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={"/mail_icon.png"}
            alt="mail-icon"
            width={24}
            height={24}
            className="block dark:hidden"
          />
          <Image
            src={"/mail_icon_dark.png"}
            alt="mail-icon"
            width={24}
            height={24}
            className="hidden dark:block"
          />
          diyorbek@example.com
        </div>
      </div>

      <div className="text-center sm:flex justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© {new Date().getFullYear()} Yusufbek. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <Link
              href="https://github.com/Yusufbek"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/Yusufbek"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/Yusufbek"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
