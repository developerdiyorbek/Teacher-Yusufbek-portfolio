import { services } from "@/constants";
import Image from "next/image";

function Services() {
  return (
    <section id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I offer a range of services to help you achieve your goals, including
        web development, design, and consulting.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-300"
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={40}
              height={40}
            />
            <h3 className="text-lg text-gray-700 my-4">{service.title}</h3>
            <p className="text-gray-600 leading-5 text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
