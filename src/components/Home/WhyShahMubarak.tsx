import React from "react";
import { RiSecurePaymentLine, RiBankLine } from "react-icons/ri";
import { TbLicense } from "react-icons/tb";
import SectionContainer from "../ui/SectionContainer";

const features = [
  {
    id: 1,
    icon: <RiSecurePaymentLine className="text-5xl text-yellow-400" />,
    title: "Secure & Compliant",
    description:
      "We ensure top-tier security and full compliance with international financial standards, protecting your data and transactions.",
  },
  {
    id: 2,
    icon: <TbLicense className="text-5xl text-green-400" />,
    title: "Licensed & Regulated",
    description:
      "Shah Mubaruk operates under strict regulatory frameworks to offer transparent, trustworthy, and legal consulting services.",
  },
  {
    id: 3,
    icon: <RiBankLine className="text-5xl text-blue-400" />,
    title: "Client Funds Protected",
    description:
      "We maintain the highest standard of financial integrity by ensuring your funds remain secure and accessible at all times.",
  },
];

const WhyShahMubarak = () => {
  return (
    <SectionContainer
      id="why-shah-mubaruk"
      className="relative bg-[url('/background/building.png')] bg-local md:bg-fixed bg-center bg-cover h-auto min-h-[800px] flex items-center justify-center px-4"
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative w-full max-w-7xl mx-auto text-white text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Why Choose Shah Mubaruk Business Consulting?
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          Empowering businesses through innovation, expertise, and global
          vision. At Shah Mubaruk, we prioritize your growth, security, and
          success with integrity and insight.
        </p>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-12 md:mt-16 w-full">
          {features.map(({ id, icon, title, description }) => (
            <div key={id} className="flex flex-col items-center text-center">
              {icon}
              <h2 className="text-xl sm:text-2xl font-semibold mt-4">
                {title}
              </h2>
              <p className="mt-3 text-gray-200 text-sm sm:text-base px-4">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default WhyShahMubarak;
