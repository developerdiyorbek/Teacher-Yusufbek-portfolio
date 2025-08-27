import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div className="relative size-56">
        <Image
          src="/user-image.jpg"
          alt="Profile Image"
          fill
          className="rounded-full object-cover"
        />
      </div>
      <h3 className="flex items-end gap-2 tex-xl md:text-2xl mb-3 font-ovo">
        Hi! I&apos;m Yusufbek
        <Image src="/hand-icon.png" alt="Hand Icon" width={24} height={24} />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        Web Developer based in Tashkent
      </h1>
      <p className="max-w-2xl mx-auto font-ovo">
        I&apos;m a frontend developer from Tashkent, Uzbekistan with 5 years of
        experience.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <Link
          href="#contact"
          className="px-10 py-3 border rounded-full border-white bg-black flex items-center gap-2 text-white"
        >
          Contact me
          <Image
            src="/right-arrow-dark.png"
            width={20}
            height={20}
            alt="arrow-icon"
          />
        </Link>

        <Link
          href="#resume"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
          download
        >
          My resume
          <Image
            src="/download-icon.png"
            width={20}
            height={20}
            alt="download-icon"
          />
        </Link>
      </div>
    </section>
  );
}

export default Hero;
